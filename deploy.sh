#!/bin/bash

set -e

SERVER_HOST="$1"
SERVER_USER="$2"
SERVER_PRIVATE_KEY_FILE="$3"

echo "Received arguments"

# Check that the private key file exists and is readable.
if [[ ! -r "$SERVER_PRIVATE_KEY_FILE" ]]; then
    echo "Error: Private key file '$SERVER_PRIVATE_KEY_FILE' is not readable or does not exist." >&2
    exit 1
fi

ssh -o StrictHostKeyChecking=no -i "$SERVER_PRIVATE_KEY_FILE" "$SERVER_USER"@"$SERVER_HOST"

# Capture exit code from ssh
ssh_exit_code=$?
if [ $ssh_exit_code -ne 0 ]; then
    echo "Error: ssh command failed with exit code $ssh_exit_code" >&2
    exit "$ssh_exit_code"
fi

echo "we're in"
echo "current directory is: $(pwd)"
touch testfile.txt

exit 0