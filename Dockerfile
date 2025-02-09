FROM node:20-alpine

WORKDIR /gameon-frontend

COPY package*.json ./

RUN npm install

COPY . /gameon-frontend

RUN npm run build

EXPOSE 3100

ENV PORT=3100

CMD ["node", ".output/server/index.mjs"]