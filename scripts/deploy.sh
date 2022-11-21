#!/bin/bash

REPOSITORY=/home/ubuntu/merge-frontend
PROJECT_NAME=merge-frontend

cd $REPOSITORY
sudo cp ../env/merge-frontend/.env.production .env.production
sudo npm run production:start
