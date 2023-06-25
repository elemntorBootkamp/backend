FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
#איך מריצים:
#docker run -p 8080:8080 mynode-app
#docker build -t mynode-app .

