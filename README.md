# APIWHEATER

Pasos para ejecutar el proyecto.

    1. Abrir el proyecto con visual studio code o con IDE preferido.
    2. Instalar dependencias con el comando ‘npm i’
    3. correr el proyecto con el comando ‘npm start’
    4. Desde postman se debe hacer las peticiones.
    5. La primera petición es del token se hace con la url: ‘localhost:5000/token/login’ tipo get
    6. Se debe enviar en el body formato raw-Json los datos: 

      {	
        "userName":"user1",
        "password":"password1"
      }

    7. la petición regresa un token que se debe enviar en la siguiente petición
    8. La segunda petición es a la url: ‘localhost:5000/weather/getWeather’ método get
    9. Se debe enviar en el Headers el parámetro ‘authorization’ con el token devuelto en la petición anterior.
    10. Se debe enviar en el body formato raw-Json los datos:

      {
        "cityName" : "bogota",
        "countryCode": "co"
      }

    11. los datos para obtener diferentes ciudades o países se debe cambiar el código del país y el nombre de la ciudad. 
