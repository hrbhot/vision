pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''echo "Build Stage Starting"
docker run -d --name=flask -p 5000:5000 flask:0.0.2 bash -c \'tail -f /dev/null\'
echo "Build Stage Finsihed"'''
      }
    }
    stage('CP SET') {
      parallel {
        stage('CP Backend Code') {
          steps {
            sh '''echo "Copy Backend Starting"
docker cp backend/. flask:/app/
docker cp ../j1.json flask:/app/
echo "Copy Backend Finsihed"
'''
          }
        }
        stage('SET Config ') {
          steps {
            sh '''echo "SET Configuration Starting"
docker exec -d flask cp /app/uwsgi.ini /etc/uwsgi/uwsgi.ini
docker exec -d flask cp /app/supervisord.conf /etc/supervisord.conf
echo "SET Configuration Finsihed"'''
          }
        }
      }
    }
    stage('SET Google ENV ') {
      steps {
        sh '''echo "Copy Backend Starting"
docker exec -d flask bash -c \'export GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS//app/j1.json && python3 app.py\'
echo "Copy Backend Finsihed"'''
      }
    }
    stage('Unit Test') {
      steps {
        sh '''echo "Unit Tests Starting"
docker exec -d flask bash -c \'export GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS//app/j1.json && python3 app.py\'
docker exec -i flask bash -c \'export GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS//app/j1.json && source venv/bin/activate && cd test && python3 -m unittest -v\'
echo "Unit Tests Finished"'''
      }
    }
    stage('Terminal') {
      steps {
        sh '''echo "Terminal Starting"
docker stop flask 
docker rm flask
echo "THE END"'''
      }
    }
  }
}