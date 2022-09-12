# API REST SIMPLE LINK VIDEO WITH NODE AND MONGO_DB
REST API to create record of video links per user

## Environment Variables
You must create the .env file for the environment variables, to be able to run it on your 
machine local

| VARIABLE | DESCRIPTION |
| ------ | ------ |
| API_PORT | the http server port |
| MONGO_URL | the mongodb database uri |
| ENVIRONMENT | development environment |
| JWT_SECRET | secret key for json web token configuration |

## Installation
```sh
git clone https://github.com/andhyralac/API-REST-SIMPLE-LINKS-VIDEO.git
npm install
npm run dev
npm run tsc
npm start
```

## Installation with docker compose for database (Recommended)
```sh
docker compose up -d mongo
```
