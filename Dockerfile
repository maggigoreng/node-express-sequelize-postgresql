FROM node
COPY package.json package.json
RUN npm install
COPY ./app ./app
EXPOSE 8080
CMD ["node", "app/server.js"]
