## Learning Docker

Docker caches the results of each instruction, speeding up the build process for subsequent builds. If you change a step in the Dockerfile and rebuild, the cache for that step is invalidated and the step is rebuilt from scratch.

Following lines are cached:
```
ROM node:12.18.3-alpine3.12
WORKDIR /app
COPY package.json /app
RUN npm install
```

So, if anything changes in `package.json` then it would run from `COPY package.json /app` line and move forward but mostly it doesn't change so everything remains cached and only these lines are executed everytime we make a change in our app:
```
COPY . /app
CMD ["npm", "start"]
```

## Useful Docker Commands

- `docker build -t <image-name> .` - Build docker image
- `docker run -p <port>:<port> <image-name>` - Run docker image

For now, if you are in same directory then you can run this command:
- `docker build .`
