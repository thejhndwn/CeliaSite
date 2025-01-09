#!/bin/bash

set -e

SERVER_HOST=$1
SERVER_USER=$2
SERVER_PRIVATE_KEY=$3

echo "Received arguments"

ssh -o StrictHostKeyChecking=no -i <(echo "$SERVER_PRIVATE_KEY") "$SERVER_USER"@"$SERVER_HOST"

echo "we're in"
echo "current directory is: $(pwd)"
touch testfile.txt

exit 0