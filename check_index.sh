#!/bin/bash

if [ -f "index.html" ]; then
  echo "index.html exists"
  echo "FOUND=true" >> $GITHUB_ENV
  exit 0
else
  echo "index.html does not exist"
  echo "FOUND=false" >> $GITHUB_ENV
  exit 1
fi