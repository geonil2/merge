#!/bin/bash

REPOSITORY=/home/ubuntu/merge-frontend

sudo chmod -R 777 REPOSITORY

cd $REPOSITORY

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

cp ../env/merge/.env .env
npm run start
