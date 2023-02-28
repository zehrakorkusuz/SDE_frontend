FROM node:18

WORKDIR /usr/src/app

EXPOSE 8080

COPY package*.json ./

RUN npm install --only-production

COPY . .

RUN npm run build
CMD ["npm", "run", "deploy"]
