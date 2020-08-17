FROM node:13.10.1 as npminstall

WORKDIR /opt

COPY ./ui/package.json /opt/package.json

# Dev dependencies
RUN npm install --save-dev @babel/core
RUN npm install --save-dev @babel/plugin-proposal-class-properties
RUN npm install --save-dev @babel/plugin-proposal-export-default-from
RUN npm install --save-dev @babel/polyfill
RUN npm install --save-dev @babel/preset-env
RUN npm install --save-dev @babel/preset-react
RUN npm install --save-dev babel-eslint
RUN npm install --save-dev babel-loader
RUN npm install --save-dev chai
RUN npm install --save-dev copy-webpack-plugin
RUN npm install --save-dev error-overlay-webpack-plugin
RUN npm install --save-dev eslint
RUN npm install --save-dev eslint-loader
RUN npm install --save-dev eslint-plugin-react
RUN npm install --save-dev html-webpack-plugin
RUN npm install --save-dev http-server
RUN npm install --save-dev mocha
RUN npm install --save-dev webpack
RUN npm install --save-dev webpack-cli
RUN npm install --save-dev webpack-dev-server
RUN npm install --save-dev webpack-merge

# # Depedencies
RUN npm install --save @material-ui/core
RUN npm install --save @material-ui/icons
RUN npm install --save axios
RUN npm install --save classnames
RUN npm install --save clsx
RUN npm install --save history
RUN npm install --save prop-types
RUN npm install --save react
RUN npm install --save react-dom
RUN npm install --save react-redux
RUN npm install --save react-router-dom
RUN npm install --save redux
RUN npm install --save redux-logger
RUN npm install --save redux-promise-middleware
RUN npm install --save redux-thunk

RUN npm audit fix
RUN npm audit

FROM node:13.10.1

WORKDIR /opt

COPY --from=npminstall /opt/node_modules ./node_modules
COPY --from=npminstall /opt/package-lock.json ./package-lock.json
COPY --from=npminstall /opt/package.json /opt/package.json
COPY ./ui/webpack /opt/webpack
COPY ./ui/.babelrc /opt/.babelrc
COPY ./ui/images /opt/images
COPY ./ui/.eslintrc.json /opt/.eslintrc.json

RUN npm install
RUN npm audit fix

CMD ["npm","run","dev:run"]