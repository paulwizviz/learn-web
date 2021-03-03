FROM node:13.10.1

WORKDIR /opt

COPY ./ui/package.json ./package.json
COPY ./ui/package-lock.json ./package-lock.json
COPY ./ui/node_modules ./node_modules
 