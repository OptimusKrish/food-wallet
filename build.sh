#!/bin/bash

set -euo pipefail

image_tag=`git rev-parse --verify HEAD`
docker_repo='food-wallet-service'

docker build -t ${docker_repo}:${image_tag} .