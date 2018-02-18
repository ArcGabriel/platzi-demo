
# especifica la version de Node.js requerida
FROM node:6.11

# puerto donde escucha nuestra aplicacion
EXPOSE 4000

# declara el directorio que alojara la app y se mueve a el
WORKDIR /app

# define los archivos que serán copiados en el container y el destino
ADD package.json /app/

# ejecutar comandos en la terminar dentro del container
RUN npm install

# copia todos los archivos al destino, 
# se omitiran las rutas declaradas en .dockerignore
ADD . /app

CMD ["node", "server"]