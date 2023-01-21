Remix run
es una alternativa a Next.js para crear sitios y aplicaciones en React que se ejecuten en el cliente y en el servidor.
Es un compilador, administrador de peticiones HTTP, un framework para el servidor y para el cliente.
Realizado por los creadores de React Router DOM.

Ventajas.
Casi sin configuracion
Buen performance
Router incluido
Manejo de peticiones HTTP.

Web: https://remix.run/

Instalar Remix
npx create-remix@latest
nombre de la app

Correr el proyecto
npm run dev


REMIX
Archivo root es el principal
export function meta() se utiliza para colocar las etiquetas meta.
Se necesita import { Meta } from '@remix-run/react'



Para los estilos se necesita crear la funcion
export function links() para ello hay que importar Links de remix-run react
GIST CSS
https://gist.github.com/codigoconjuan/1cdb42839f30b20b5d8cbf64a367bf53

Hoja de estilos externa
https://necolas.github.io/normalize.css/8.0.1/normalize.css

Fonts
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">


env 
API_URL=http://127.0.0.1:1337/api
funciona pero con localhost no.