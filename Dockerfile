FROM node:6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY *.* /usr/src/app/
RUN npm cache clean
RUN npm install
RUN npm run build:cucumber
RUN npm run cucumber
EXPOSE 4200
CMD ["npm","start"]