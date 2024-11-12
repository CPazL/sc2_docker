# Proyecto CRUD en Docker

Este proyecto implementa un sistema CRUD usando Docker y Docker Compose, con la posibilidad de exponer la aplicación a una IP pública usando ngrok.

## Características

- **CRUD Completo**: Soporte para Crear, Leer, Actualizar y Eliminar datos.
- **Docker Compose**: Simplifica la administración de contenedores.
- **Exposición Pública**: Acceso remoto gracias a [ngrok](https://ngrok.com/). 
Accede a la URL proporcionada por ngrok en tu navegador para interactuar con la aplicación y probar las funcionalidades CRUD.}
*https://f5b9-2800-810-54c-189a-591-843f-9e9a-cf2c.ngrok-free.app*

## Requisitos

1. **Docker** y **Docker Compose** instalados.
2. **ngrok** para redirigir el tráfico desde localhost.

## Instalación

```bash
git clone <URL-del-repositorio>
cd <nombre-del-repositorio>
docker-compose up -d
ngrok http 3000 
```

## Uso
Accede a la URL proporcionada por ngrok en tu navegador para interactuar con la aplicación y probar las funcionalidades CRUD.

