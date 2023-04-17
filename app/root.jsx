import { useState, useEffect } from 'react'
// para usar meta
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: "width=device-width, initial-scale=1"
        }
    )
}

export function links(){
    return[
        {
            rel:'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel:'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel:'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel:'stylesheet',
            href: styles
        }
    ]
}


export default function App(){
    
    const carritoLS = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('carrito')) || []
    
    const [carrito, setCarrito] = useState(carritoLS);
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('carrito', JSON.stringify(carrito))
        }
      }, [carrito])
      

    const agregarCarrito = guitarraSeleccionada => {
        if(carrito.some(guitarraState => guitarraState.id === guitarraSeleccionada.id)){
            // iterar sobre el arreglo e identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarraSeleccionada.id){
                // reescribir la cantidad
                guitarraState.cantidad = guitarraSeleccionada.cantidad;
                // en caso de que cada vez que se presione  el boton agregar al carrito se necesite sumar ese producto
                // guitarraState.cantidad += guitarraSeleccionada.cantidad;
            }
            return guitarraState;
            })
            setCarrito(carritoActualizado);
        } else{
            // Registro nuevo, se agrega al carrito
            setCarrito([...carrito, guitarraSeleccionada]);
        }
    }
    
    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState;
        })
        setCarrito(carritoActualizado);
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado)
    }

    return(
        <Document>
            <Outlet 
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    )
}


function Document({children}){
    return(
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}



/* Manejo de errores */

export function CatchBoundary(){
    const error = useCatch()
    return (
        <Document>
            <p className='error'>
                {error.status} {error.statusText}
            </p>
            <Link to="/" className='error-enlace'>Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    return (
        <Document>
            <p className='error'>
                {error.status} {error.statusText}
            </p>
            <Link to="/" className='error-enlace'>Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )
}

