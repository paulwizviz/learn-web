FROM node:13.10.1

WORKDIR /opt

COPY ./ui/package-lock.json /opt/package-lock.json
COPY ./ui/package.json /opt/package.json
COPY ./ui/webpack /opt/webpack
COPY ./ui/.babelrc /opt/.babelrc
COPY ./ui/images /opt/images
COPY ./ui/.eslintrc.json /opt/.eslintrc.json

RUN npm install
RUN npm audit fix

CMD ["npm","run","dev:run"]