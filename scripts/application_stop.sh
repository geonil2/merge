#!/bin/bash

REPOSITORY=/home/ubuntu/merge

cd $REPOSITORY

export HOME="/home/ubuntu/"
sudo PM2_HOME=/home/ubuntu/.pm2 pm2 list

sudo pm2 kill
