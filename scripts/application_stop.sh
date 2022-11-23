#!/bin/bash

REPOSITORY=/home/ubuntu/merge

cd $REPOSITORY

export HOME="/home/ubuntu/"

sudo pm2 stop ecosystem.config.js
