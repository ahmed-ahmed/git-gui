# Node v7 as the base image to support ES6
FROM node:7.2.0

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY ./package.json /tmp/package.json

RUN cd /tmp && npm install --quiet

COPY nodemon.json /usr/src/nodemon.json

COPY package.json /usr/src/package.json

COPY .git-gui  /root/.git-gui

COPY ./bin /usr/src/bin

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/node_modules/.bin:$PATH

RUN cp -a /tmp/node_modules /usr/src/node_modules

WORKDIR /usr/src

CMD ["npm", "start"]
