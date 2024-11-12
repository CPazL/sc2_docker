Este repositorio contiene el desarrollo de una aplicación con un sitema CRUD , montada en docker y unificada con docker compose
Docker

Back-End	1
MongoDB	1
Visual Studio	4
Front-End	6
Visual Studio	6
Imágenes y contenedores en Docker	7
Docker Desktop	8
De IP Local a IP pública	10
Ngrok	10

Back-End
MongoDB
Creamos una cuenta en Mongodb, nos logueamos con las credenciales y creamos un cluster para almacenar los datos de la aplicación

MONGODB USER: carlalorenapaz
MONGODB PASSWORD: y1YkAJ06CyIPvyCB




Visual Studio
En la terminal de visual studio, apuntamos a la carpeta donde se encuentra ubicado el desarrollo de back-end
2 - Instalar node js
3- instalar express en el proyecto : npm i express
4: instalar mongodb: npm install mongodb
5- instalar cors: npm i cors
6- Utilizamos la URL y contraseña de usuario de mongodb para conectarnos desde el Back.
Copiamos la url que nos devuelve mongodb y la guardamos en una variable dentro .env del Back-end:

mongodb+srv://carlalorenapaz:<db_password>@clustersc2-1.93tv4.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSC2-1

7- Prueba de conexión
En la terminal del proyecto, ejecutamos:
npm i	
npm start
En el buscador escribimos http://localhost:4000

8- Agregamos la URL Local que apunta al front-end para correr todo el proyecto desde el Front-end






Front-End
Visual Studio
1  - Install node JS: npm install vite --save-dev
2 -Correr en desarrollo: npm run dev

3- En el buscador vamos a escribir la url local del Front : http://localhost:3000


Imágenes y contenedores en Docker
Para unir las imágenes de  frontend y backend utilizamos Docker Compose, por lo cual se agregó el archivo docker-compose.yml que defina ambos servicios y cómo deben comunicarse.:
Estructura del proyecto:
project-root/
├── docker-compose.yml
├── frontend/
│   └── Dockerfile
└── backend/
    └── Dockerfile
Configura los Dockerfiles: Cabe destacar que tanto el back como el front tienen su Dockerfile en cada directorio los cuales construyen las imágenes correctamente. 
El Dockerfile del frontend debería exponer el puerto donde se ejecuta (ej. 3000), y el Dockerfile del backend debería exponer el puerto de su API (ej. 4000).
Archivo docker-compose.yml: En la raíz del proyecto, se creó el archivo  con el siguiente código

Explicación del archivo docker-compose.yml:
version: Especifica la versión de Docker Compose.
services: Define cada servicio (en este caso, frontend y backend).
build.context: Define el directorio donde se encuentra cada Dockerfile.
ports: Expone los puertos de cada servicio en tu máquina local.
depends_on: Define la dependencia del frontend en el backend, asegurando que el backend se inicie primero.
networks: Crea una red compartida llamada app-network para que los servicios puedan comunicarse entre sí por sus nombres de servicio (frontend y backend).
Conexión entre frontend y backend:
En el código del frontend, cuando necesites hacer una solicitud a la API del backend, usa http://backend:4000 en lugar de localhost:4000. Esto funciona porque Docker Compose conecta los servicios en la misma red y permite que se comuniquen usando sus nombres de servicio.
Construir y ejecutar los servicios:
Docker Desktop
1 En la terminal de desktop , vamos a la carpeta donde están las dos partes (back-end y front-end) y ejecutamos la siguiente línea:
 docker-compose up --build


2 - Testamos la conexión, corriendo el buscador http://localhost:3000/



De IP Local a IP pública
NGROK
En los requisitos del tp, el acceso debe estar en IP Pública ,osea el front debe estar con ip público en ngrok

1- Nos logueamos en ngrok con un usairo y contraseña
2- Desde el Dashboard descargamos el ejecutable comprimido 

3- Descomprimimos el archivo en una carpeta deseada.

4- En windows, vamos a las variables de entorno y buscamos la variable PATH. Una vez que hacemos click dentro, agregamos la ruta donde se encuentra el ejecutable ngrok.exe

5  - En la terminal de Powershell apuntamos a esa carpeta y vemos la versión instalada de dicho archivo para verificar que se haya instalado correctamente



4- Una vez comprobada la instalación, nos autenticamos con el siguiente comando:

.\ngrok config add-authtoken 2oiCOY0TfJNWdX4x1fsTAZioakc_7WrM8r12J5zdRtJoGGbjE

5 - Le indicamos que IP Local queremos convertir a pública con el comando:

.\ngrok http http://localhost:3000


6 - Probamos la conexión con la URL generada:
https://f5b9-2800-810-54c-189a-591-843f-9e9a-cf2c.ngrok-free.app

