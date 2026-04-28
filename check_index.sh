#!/bin/bash

# Check that file index.html is in repo
if [ -f index.html ]; then
  echo "index.html exists"
  if [ -n "$GITHUB_ENV" ]; then
    echo "FOUND=true" >> "$GITHUB_ENV"
  fi
  exit 0
else
  echo "index.html does not exist"
  if [ -n "$GITHUB_ENV" ]; then
    echo "FOUND=false" >> "$GITHUB_ENV"
  fi
  exit 1
fi