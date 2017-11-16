#!/bin/bash

set -euo pipefail

image_tag=`git rev-parse --verify HEAD`
docker_repo='food-wallet-service'

APP_NAME='food-wallet'
APP_IMAGE="${docker_repo}:${image_tag}"
APP_PORT='8000'

# K8s - Container Builder
cat << EOF > kube_foodwallet.yaml
apiVersion: v1
kind: Pod
metadata:
  name: $APP_NAME
  labels:
    lapp: $APP_NAME
spec:
  containers:
    - name: $APP_NAME
      image: ${APP_IMAGE}
      imagePullPolicy: IfNotPresent
      ports:
        - containerPort: $APP_PORT
---
kind: Ingress
apiVersion: extensions/v1beta1
metadata:
  name: ${APP_NAME}
spec:
  rules:
  - host: ${APP_NAME}
    http:
      paths:
      - backend:
          serviceName: ${APP_NAME}
          servicePort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: $APP_NAME
spec:
  selector:
    lapp: $APP_NAME
  ports:
  - port: 80
    targetPort: $APP_PORT
EOF

kubectl apply -f kube_foodwallet.yaml
echo "Deployed to K8s !!"
