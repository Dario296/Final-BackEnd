# Dario-Rodriguez-BackEnd-Coderhouse

Curso BackEnd Coderhouse

Proyecto diseñar y desarrollar una api de un e-commerce con Node.js, express, MongoDB, Passport, Websocket, motor de plantilla (Handlebars, Pug, Ejs) y Nodemailer.

Librerías y frameworks utilizados.

bcrypt, connect-mongo, cookie-parser, dotenv, express, express-session, mongoose, multer, nodemailer, passport, passport-local, pino, pug, socket.io.

# bcrypt:

    Se utilizo para encriptar y desencriptar las contraseñas de los usuarios al registrarse eh iniciar sesion.

# connect-mongo:

    Se utilizo para crear y almacenar y administrar en la base de datos las cookies y sesiones.

# cookie-parser:

    Se utilizo para crear y almacenar y administrar las cookies y sesiones.

# dotenv:

    Se utilizo para administrar las variables de entorno tales como keys de base de datos correos y datos sensibles e importantes.

# express:

    Se utilizo para el diseño y creacion de la api genaral.

# express-session:

    Se utilizo para crear y almacenar y administrar las cookies y sesiones.

# mongoose:

    Se utilizo de connecion para manejo y administracion de base de datos.

# multer:

    Se utilizo para el manejo y carga de archivos al servidor tale como fotos de productos o avatar de usuarios.

# nodemailer:

    Se utilizo para el manejo y notificaciones mediante correos de compras registros de usuarios.

# passport & passport-local:

    Se utilizo para el manejo y administracion de los registros de usuarios e inicio de sesion con una estrategia local.

# pino:

    Se utilizo para administrar los mensajes que salen por consola.

# Pug:

    El motor de plantillaas pino se utilizo para crear y administrar las vistas del usuario.

# socket.io:

    Se utilizo para crear una aplicacion de mensajes y notificaciones.

Para poder usar esta api hay que descargarla crear un archivo .env con las las variables:
MONGO= key de maongo.
USER= correo del admin donde se notificara los nuevos registros de usuarios.
PASS= contraseña del correo.

Una vez echo levantar el servidor con comando: node server.js PORT
PORT= puerto deseado.

# Rutas de usuario no autenticado

GET     /:                          inicio muestra la pagina principal de la app.

GET     /productos:                 muestra el listado de productos.

GET     /productos/busqueda:        muestra el producto buscado.

GET     /ingresar:                  muestra el formulario de logueo (para el formulario requiere el username(correo) y el password).

GET     /registrarse:               muestra el formulario de registro (para el formulario requiere el name, lastName, address, age, phoneNumber, photo(imagen), username(correo) y el password).

GET     /ingresar/errorIngresar:    muestra una pagina en caso de error al ingresar ya sea por usuario inesistente o error de inicio de sesion.

GET     /ingresar/errorRegistro:    muestra una pagina en caso de error al registrarse ya sea por que exixte un usuario o error de registro.

POST    /ingresar:                  envia y verifiaca los datos del formulario ingresar y en caso correcto redirige a la pagina de inicio con la session iniciada caso contrario redirige a la pagina de error.

POST    /registrarse:               envia y verifiaca los datos del formulario registrarse y en caso correcto redirige a la pagina de inicio con la session iniciada caso contrario redirige a la pagina de error.

# Rutas de usuario autenticado

Estas rutas requieren que el usuario inicie sesion.

GET     /:                          inicio muestra la pagina principal de la app.

GET     /productos:                 muestra el listado de productos.

GET     /productos/busqueda:        muestra el producto buscado.

GET     /carrito:                   muestra el carrito con sus productos.

GET     /chat:                      muestra el chat con sus mensajes y permite enviar nuevos.

GET     /salir:                     permite al usuario cerrar la sesion.

POST    /carrito:                   permite al asuario cargar productos al carrito con el id del producto.

POST    /carrito/producto:          permite al asuario borrar productos del carrito con el id del producto.

POST    /compras:                   permite al usuario finalizar la compra de los productos que tiene en el carrito.

DELETE  /carrito:                   permite al asuario borrar el carrito.

# Rutas de usuario autenticado admin

Estas rutas requieren que el administrador inicie sesion.

GET     /:                          inicio muestra la pagina principal de la app.

GET     /productos:                 muestra el listado de productos y un formulario de carga de nuevos productos que requieren (name, description, code, price, photo).

GET     /productos/busqueda:        muestra el producto buscado.

GET     /chat:                      muestra el chat con sus mensajes y permite enviar nuevos.

GET     /salir:                     permite al usuario cerrar la sesion.

POST    /productos:                 Permite publicar nuevos productos con los datos del formulario.

PUT     /productos/id:              Permite publicar actualizar productos con los datos del formulario.

DELETE  /productos/id:              permite eliminar productos con el numero de id.