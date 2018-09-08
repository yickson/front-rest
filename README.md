## Sistema de usuarios mediante servicios

Cliente que realiza peticiones mediante REST a https://github.com/yickson/backendcts2 realizar la clonación para poder realizar las pruebas, se recomienda servidor Xampp

Basado en tecnología de JWT (Json Web Token) mediante Ajax con Jquery.

Tiene un sistema de login el cual debes ingresar con las credenciales:

**correo**: admin@admin.com
**contraseña**: admin

Una vez ingresado podrás ver una web de bienvenida, listado de usuarios mediante un sistema de paginación con DataTable el cual te da la opción de buscar, crear, editar y eliminar a cualquier usuario, donde podrás delegar el rol que le quieres dar al usuario.

La duración del login en este caso del token tiene un tiempo máximo de 20 minutos, una vez agotado el tiempo, se saldrá del sistema donde deberás volver a ingresar las credenciales.
