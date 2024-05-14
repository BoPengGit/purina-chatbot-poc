#!/bin/sh
# This script could be used to configure environment variables, run checks, or compile assets before the main process starts.

echo "Preparing the React application..."


echo "Starting the React application..."
# Then, execute the CMD from the Dockerfile, typically something like `npm start`
exec "$@"
