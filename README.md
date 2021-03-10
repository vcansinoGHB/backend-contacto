# backend-contacto
api restful

Al descargar el proyecto se ejecuta primero
npm install

Para ejecutarlo
npm run dev

El proyecto se inicia con el archivo app.js en el puerto http://localhost:4000.

el cors esta configurado al puerto http://localhost:3000, donde se ejecuta el front end.

El proyecto tiene las carpetas:

Controller.-
Es donde se realizan las consultas a la base usando el ORM.

Middleware.-
Reside el archivo que comprueba el JWT en las peticiones.

Database.- 
Es donde se guardan los modelos.

Rotes.- 
Para la configuracion de las rutas.
