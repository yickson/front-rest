## Sistema de usuarios mediante servicios

El sistema realiza busqueda, creación, edición de usuarios mediante la API que esta localizada en
https://github.com/yickson/backend-api

REST-API

Obtener todos los usuarios - Método **GET**:
http://localhost/backendfull/api/usuario

Obtener un usuario por el ID - Método **GET**:
http://localhost/backendfull/api/usuario/$id

Donde **$id** es el Id en la base de datos

Obtener un usuario por nombre, apellido o correo - Método **GET**
http://localhost/backendfull/api/usuario/buscarUsuario/$dato

Donde **$dato** puede ser el nombre, apellido o el correo.

Realizar la creación de un usuario - Método **POST**:
http://localhost/backendfull/api/usuario/crearUsuario

El formato para hacer la creación del usuario debe ser como el siguiente para hacer pruebas en PostMan

```json
// Estructura JSON
{
	"login": "condorito",
	"nombre": "Condorito",
	"apellido": "Condorin",
	"correo": "condorito@gmail.com"
}
```

Realizar la edición de un usuario - Método **PUT**:
http://localhost/backendfull/api/usuario/editarUsuario

```json
// Estructura JSON
{
	"id": "3",
	"nombre": "Condorito",
	"apellido": "Condorin",
	"correo": "condorito@gmail.com"
}
```
Eliminar un usuario - Método **DELETE**
http://localhost/backendfull/api/usuario/$id

Siendo **$id** el ID del usuario en la base de datos

Recuerda que este es un sistema básico REST para funcionalidades más avanzadas como delegación de Roles a los usuarios es mejor que utilices directamente el sistema de Backend para hacer los cambios.

Cabe mencionar que todos los usuarios creados en esta plataforma tendrán la clave por defecto casa1357
