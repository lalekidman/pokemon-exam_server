# Pokemon Trainer
a basic pokemon trainer app that can add trainer, add pokemon, add league, and join as participants in a league.

## Project Directory
 - **common**: all of the common/global files.
 - **configs**: all of the configs related like initiation of database, configuration of cache app(redis.)
 - **domain**: all of the business domain related.
 - **persistent**: all of the persistent 3rd pt library is here, like database related, 3rd party API, etc...
 - **controllers**: here where the business usecases are most likely use.
 - **routes**: here are all of the routes that needed to expose using the framework we use like express JS.

## Prerequisite
- docker.
- docker compose

## Run the Docker Compose
first is we need to run the docker compose using `docker-compose up` on the root directory of the project.

It should run the mysql server for the database of our app.

## Create Database
In the root directory of the project run `docker-compose exec mysql-db mysql -u root -p` in your command line interface and type "admin" as the password of the database to access the virtual container for the mysql. run `CREATE DATABASE pokemon_exam;` to create the database that used in the app.

## Run the server project

Use `npm run start` to run the project.
Use `npm run start:dev` to compile the project.
Use `npm run dev` to run the project using "nodemon" as the node process manager.

## Clone the Client Project
use this [repository](https://github.com/lalekidman/pokemon-exam_client) to clone the frontend project. please take note that you should clone the client project outside the server project root directory.

the project directory should look something like thing.
<br />
~ pokemon-exam<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ client<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ server
## Run the client project
use `npm run start` to run the project.
