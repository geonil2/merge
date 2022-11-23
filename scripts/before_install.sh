#!/bin/bash

REPOSITORY=/home/ubuntu/merge

if [ -d $REPOSITORY ]; then
  sudo rm -rf $REPOSITORY
fi
