## TRABAJO PRACTICO INTEGRADOR - PROGRAMACION WEB - 3K4
### Cabaleiro Nicolas - 53136
### Ochoa Alejandro Ivan - 57479

# MODULOS AGREGADOS

## CAPA DE PERSISTENCIA

Aprovechamos el patron **[REPOSITORIO](back/src/repository/)** en una capa especifica para aplicar la logica que interactua con la base de datos a través del ORM
, y asi bajar el acomplamiento y respetar una correcta separacion de responsabilidades para delegar el trabajo relacionado con la logica unicamente
a la **[CAPA DE SERVICIOS](back/src/services/)**.

## LOGIN Y REGISTRO - JWT

Implementamos una logica de registro e inicio de sesion para acceder a la pagina utilizando un sistema de autenticacion basado en tokens
, mas especificamente utilizando **[JWT (JSON Web Token)](https://jwt.io/)**, utilizando un **[MIDDLEWARE](back/src/middleware/usersMiddleware.js)** para interceptar las solicitudes y podes validar el token antes de llegar al endpoint.
Al registrarse la contraseña en encriptada utilizando un algoritmo de una sola via llamado HS256 implementada por BCrypt y almacenada en la base de datos,
cuando se quiere iniciar sesion, la contraseña es nuevamente encriptada y comparada con la que esta almacenada en la DB para validar la
autenticidad del usuario.

En el FrontEnd realizamos una **[validacion](front/src/pages/Login/components/AuthProvider.jsx)** de que el token existe en el SessionStorage para poder realizar la solicitud a las rutas protegidas
, si el mismo existe, se lo agrega en la cabecera Authorization: Bearer: {token} de la peticion HTTP para que sea recibido por el BackEnd.
