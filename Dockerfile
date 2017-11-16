FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY /package.json .

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]