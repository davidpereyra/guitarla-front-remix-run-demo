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

dentro routes se puede crear una carpeta,
en la url el nombre de la carpeta sera una parte de la misma.
Ejemplo
Carpeta llamada guitarra
la url puede ser http://192.168.100.31:3000/guitarras/
Si se coloca un $ en el principio del nombre del archivo
El framework interpreta que es una url dinamica
Para el ejemplo, si se visita cualquier cosa que tenga 
/guitarras en la url, se renderizara $guitarraURL.jsx

forma que strapi filtra por url
http://localhost:1337/api/guitarras?filters[url]=beck&populate=Imagen

en $guitarraUrl existe un data definido de remix
que se pasa en automatico una vez que el loader tiene
informacion

export function meta({data}){
    console.log(data)
}
imprime los datos del objeto instanciado en la 
url actual


en root
 const error = useCatch()
 toma el error

dentro de  function CatchBoundary() y retorna un formato de documento que toma 

function ErrorBoundary({error})


como en el loader de la url dinamica
esta leyendo de desde la api se modifica loader y meta para que no de un error de lectura a un objeto vacio o undefined
en loader
  if (guitarra.data.length === 0) {
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra no encontrada'
        })        
    }

    en meta
 if (!data) {
        return{
            title: 'Guitarra no encontrada',
            description: `Guitarras, venta de guitarras, guitarra no encontrada}`
        }
    }

Nested Routes
Al renombrar el archivo tienda.jsx dentro de routes
como guitarras, el framework entiende que el archivo $guitarrasUrl.jsx es hijo del primer archivo.
Tener en cuenta que la navegacion apuntaba a uri tienda
y hay que reemplazarla por uri guitarras



en javascript
array.some( () => condicion) // itera sobre los elementos del carrito
some devuelve true si existe un elemento que cumpla con la condicion especificada


error
ror: Hydration failed because the initial UI does not match what was rendered on the server.
 
 El cliente y el servidor tienen distintos datos.

 npm i remix-utils

 en el carrito, donde tiene el problema
 import { ClientOnly } from 'remix-utils
 con este componente se puede especificar que ciertas partes se ejecuten
 solo en el cliente de la siguiente forma

<ClientOnly fallback={'Cargando...'}>
    {() => (
        #codigo a ejecutar
    )}
</ClientOnly>