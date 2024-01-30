# Api County
Es es una api que Realiza las operaciones CRUD usando MongoDB acerca de países.

## Inicializar el Api
En caso de inicializar por primera vez debes instalar sus dependencias:

````
npm -i
`````

Ya teniendo las dependencias instaladas Puede ejecutar los siguientes comandos:

````
npm run start
`````

En caso de usar Nodemon

````
npm run dev
`````

### Dependencias utilizadas
- **express:** Para crear el servidor.
- **mongoose:** Para realizar la conexión con mongoDB.
- **cors:** Para permití la petición de los navegadores.
- **morgan:** Para mostrar detalladamente los mensajes https.

## Funcionamiento
### Guardar Países
La función que realiza la operación de guardar se llama **saveCountry** que se ejecuta mediante una petición **POST** que se ejecuta en el siguiente endpoint:

````
/country
`````

### Ver Países
La función que realiza la operación de consultar se llama **viewCountry** que se ejecuta mediante una petición **GET** que se ejecuta en el siguiente endpoint:

````
/country
`````

### Editar país
La función que realiza la operación de editar se llama **editCountry** que se ejecuta mediante una petición **PUT** que se ejecuta en el siguiente endpoint:

````
/country/id
`````

Donde **id** es el id del país en la base de datos

### Eliminar país
La función que realiza la operación de editar se llama **deleteCountry** que se ejecuta mediante una petición **DELETE** que se ejecuta en el siguiente endpoint:

````
/country/id
`````

# Base de datos
La base de datos utiliza de motor a MongoDB cuya estructura de los campos es el siguiente:

![](graphic/base_de_datos.jpg)

- code: Guarda el código del país; por ejemplo CO (Colombia), PE (Peru).

- name: Nombre del país.

- continent: Continente en donde el país se encuentra ubicado.

- capital: Capital del país

- currency: Moneda del país

- flag: Bandera del país (este debe se la ubicación del archivo del imagen).

- photos: Las fotografías del país (este es un arreglo  de strings en donde cada uno almacena la ruta a esa imagen y se acede a una de esas imágenes mediante la posición).

## Ejemplo de Body
En caso de ejecutarse en un clientes como Postman este seria un body de ejemplo:

````
{
  "code":"CO",
  "name": "Colombia",
  "continent": "Sudamerica",
  "capital":"Bogotá",
  "language": "Español",
  "currency": "COP",
  "flag": "images/flags/co.svg",
  "photos":[
    "images/photos/co/cartagena.jpg",
    "images/photos/co/medellin.jpg"
    ]
}
`````