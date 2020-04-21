FROM node
COPY package.json package.json
RUN npm install -g
COPY ./app ./app
EXPOSE 3000
CMD ["node", "app/server.js"]
