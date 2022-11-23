#!/bin/bash

REPOSITORY=/home/ubuntu/merge

sudo chmod -R 777 REPOSITORY

cd $REPOSITORY

sudo cp ../env/merge/.env .env
npm run start
