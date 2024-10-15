# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

### Steps to follow

1. npm install
2. npm run start

# Docker commands

# list docker images

1. docker images

# docker build image

2. docker build -t upbox-web .

# docker container create with port from image

# -d - detach

# --name - container name

3. docker run -d --name upbox-container -p 4201:4201 upbox-web

# docker container running

4. docker ps
5. docker stop {docker_container_id}
6. docker start {docker_container_name}
