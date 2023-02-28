ARG NODE_VER

FROM node:${NODE_VER}

WORKDIR /opt

COPY ./express/src /opt/src
COPY ./express/package-lock.json /opt/package-lock.json
COPY ./express/package.json /opt/package.json

RUN npm install

CMD ["npm","start"]