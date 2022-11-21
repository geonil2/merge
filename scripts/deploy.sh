#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

REPOSITORY=/home/ubuntu/merge-frontend
PROJECT_NAME=merge-frontend

cd $REPOSITORY

sudo cp ../env/merge-frontend/.env.production .env.production
sudo /home/ubuntu/.nvm/versions/node/v16.14.2/bin/npm run production:start
