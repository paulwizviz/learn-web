ARG NODE_VER

FROM node:${NODE_VER}

WORKDIR /opt


COPY ./reactjs ./

RUN npm install

CMD ["npm","start"]
 