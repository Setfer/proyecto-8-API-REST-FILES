# Proyecto 7
## _API REST AUTH_


# Base de datos.
La base de datos estará compuesta de dos colecciones: **actor** y **movie**.
Cada **actor** tendrá los siguientes atributos: 
*Los elementos en negrita seran obligatorios*
- **nombre**: String 
- **edad** : Number
- **img**: String *url cloudinary*


Cada **movie** tendrá los siguientes atributos: 
*El valor actores debe de ir en un arrays a la hora de modificarlo*
- **nombre**: String
- **img** :String *url cloudinary*
- **publicacion**: Number
- actores: [ObjectId]


# Rutas y controladores
*El servidor está creado en el puerto 3000*

Dispondremos de 2 rutas principales, una para cada coleccion, las cuales seran:
- /api/v1/actors
- /api/v1/movies

En **/api/v1/actors** tendremos los siguientes controladores:
- get: obetener la lista de actores: */api/v1/actors*
- post: añadir actor: */api/v1/actors*
- put: actualizar actor: */api/v1/actors/**id***
- delete: Eliminar actor: */api/v1/actors/**id***

En **/api/v1/movies** tendremos los siguientes controladores:
- get: obetener la lista de peliculas: */api/v1/movies*
- get: obetener pelicula por id: */api/v1/movies/**id***
- post: añadir pelicula: */api/v1/movies*
- put: actualizar pelicula: */api/v1/movies/**id***
- delete: Eliminar pelicula: */api/v1/movies/**id***


A la hora de realizar el post tanto de movies como de actores, en el valor img podremos elegir un archivo local, y subirlo directamente cloudinary, a la hora de realizar el get se guardara el string de la url de dicha imagen.

# Librerias y utilidades
Las librerias necesarias para la ejecucion del codigo son: **dotenv, express, mongoose**



Hay dos semillas creadas, tanto para actores, como para movies, podremos ejecutarlas de forma individual con:
*Las imgs de las semillas se encuentran guardadas en local, es posible que tengas que modificar la ruta absoluna en src/data/*


```
npm run actorsSeed
npm run moviesSeed
```
o de forma conjunta con 
```
npm run AllSeed
```