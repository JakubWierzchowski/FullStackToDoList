#!/bin/bash
set -e

# Start the Docker daemon in the background
dockerd-entrypoint.sh &

# Wait for Docker to start
until docker info; do
  sleep 1
done

# Start Jenkins
exec /usr/local/bin/jenkins.sh "$@"
