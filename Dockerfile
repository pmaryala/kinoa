FROM node:6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY config.js /usr/src/app
COPY tsconfig.json /usr/src/app
RUN npm cache clean
RUN npm install
RUN npm run build:cucumber
RUN npm run cucumber
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm","start"]