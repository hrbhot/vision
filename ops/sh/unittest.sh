#!/bin/bash
export GOOGLE_APPLICATION_CREDENTIALS=/app/j1.json
cd test
python3 -m unittest -v

