# Aether-react-3d

## Description<br>

Aether is a fullstack web application that uses 3D web technologies and advanced animations to visualise our solar system. It's backend
consist of a postgreSQL database and a NestJS API. ReactJS and some other libraries like three.js take care of the 3D frontend. Specifically, it applies react-spring animations to canvas 3D objects and **NOT** DOM elements. It also visualises some data with the help of recharts library.

## Frontend<br>

## Technologies Used<br>

* React JS
* react-spring
* react-three-fiber
* react-router V6
* axios
* drei
* SASS
* Recharts

## Instalation<br>

```
npm install react-three-fiber @react-three/drei react-spring @react-spring/parallax react-icons react-router-dom@6 axios recharts

```


## Backend<br>

A simple NestJS API that delivers data from a postgreSQL database to the ReactJS frontend.

## Technologies Used<br>

* Nest JS
* TypeORM
* PostgreSQL

## Instalation<br>
The NestJS backend was created using the NestJS cli. For the PostgreSQL interaction i used typeORM.

```
npm install --save @nestjs/typeorm typeorm pg

```


# Actions and Usage<br>

### Photos management
* Create a folder and name it **textures** in the **public** directory.<br>
* Find some photos that are suitable for planet and moon textures and put them into public/textures folder, you just created.<br>




