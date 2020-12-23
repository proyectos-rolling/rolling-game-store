# RollinGame

Aplicación de venta de juegos digitales

## Comenzando

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._ Este es el repositorio del frontent. El backend se encuentra en el siguiente repositorio: [rolling-game-store-backend](https://github.com/proyectos-rolling/rolling-game-store-backend)

Mira **Deployment FRONT** para conocer como desplegar el proyecto de la parte del front.

### Pre-requisitos

_Descargar tanto este repositorio como el del [backend](https://github.com/proyectos-rolling/rolling-game-store-backend) y completar los pasos de instalacion FrontEnd y Backend_

nodejs
consola para comandos

## Instalación FrontEnd

_Clonar el repositorio o descargarlo_

```bash
$ git clone https://github.com/proyectos-rolling/rolling-game-store
```

_Abrir la carpeta rolling-game-store con la consola_

```bash
$ cd rolling-game-store
```

_Ejecutar NPM Install para instalar las dependencias necesesarias_

```bash
$ npm i
```

_Crear un archivo `.env`_

```bash
$ touch .env
```

_Editar el archivo `.env` con la variable `REACT_APP_API_ROOT_URL`_

_Por ejemplo si el backend se ejecuta en http://localhost:4000/api, el archivo `.env` quedaría de la siguiente manera:_

```
REACT_APP_API_ROOT_URL=http://localhost:4000/api
```

_Ejecutar el servidor del front_

```bash
$ npm start
```

_Finalizada la preparacion_
Hay 2 usuarios creados para inciar sesion puedes elegir uno de estos para ingresar

```json
{
  "usuario": "usuario",
  "password": "123123"
},{
  "usuario": "admin",
  "password": "123123"
}
```

## Demo

Se puede ver una demo funcional del server en https://rolling-game-store.herokuapp.com/

## Deploymet Front

La demo se encuentra deployada usando la funcionalidad de Heroku de integración con un repositorio de github, con deploys automáticos cuando se hace un push a la rama main.

## Construido con

_Front_

* [NodeJs](https://nodejs.org/es/)
* [React](https://es.reactjs.org/)
* [React Router](https://reactrouter.com/)
* [React Boostrap](https://react-bootstrap.github.io/)
* [react-credit-cards](https://www.npmjs.com/package/react-credit-cards)
* [react-phone-input-2](
