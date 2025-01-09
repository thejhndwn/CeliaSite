#!/bin/bash

set -e

SERVER_HOST=$1
SERVER_USER=$2
SERVER_PRIVATE_KEY=$3

echo "Received arguments"
echo SERVER_HOST

ssh -o StrictHostKeyChecking=no -i <(echo "$SERVER_PRIVATE_KEY") "$SERVER_USER"@"$SERVER_HOST"

cd /root/Celia/CeliaSite
mkdir RANDOMTESTDIRECTORY

exit 0