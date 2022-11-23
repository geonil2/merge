#!/bin/bash

REPOSITORY=/home/ubuntu/merge

cd $REPOSITORY

sudo cp ../env/merge/.env .env
npm run start
