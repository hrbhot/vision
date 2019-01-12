pipeline {
  agent any
    stages {
      stage('Prepare') {
        steps {
        sh '''echo "1. Prepare  Stage Starting"
        
        echo "Build Stage Finsihed"
'''
      }
    }

    stage('Build') {
      steps {
        sh '''echo "Build Stage Starting"
sh ./ops/sh/build.sh 
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
docker cp ./ops/sh/unittest.sh flask:/app/
docker exec -d flask bash -c \'chmod +x unittest.sh\'
docker exec -i flask bash -c \'/app/unittest.sh\'
echo "Unit Tests Finished"'''
      }
    }
    stage('Terminal') {
      parallel {
        stage('Terminal') {
          steps {
            sh '''echo "Terminal Starting"
docker stop flask 
docker rm flask
echo "THE END"'''
          }
        }
        stage('Send Mail') {
          steps {
            emailext(subject: '$DEFAULT_SUBJECT', body: '$DEFAULT_CONTENT', attachLog: true, compressLog: true, postsendScript: '$DEFAULT_POSTSEND_SCRIPT', presendScript: '$DEFAULT_PRESEND_SCRIPT', to: 'hrbhot@gmail.com')
          }
        }
      }
    }
  }
}
