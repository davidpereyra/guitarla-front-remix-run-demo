import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return{
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de musica'
  }
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
          <img src={imagen} alt="sobre nosotros" />

          <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem pariatur optio quis porro, corporis dolorum animi, quod explicabo aliquam est recusandae alias quibusdam at accusamus perspiciatis molestiae enim nesciunt minima.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem pariatur optio quis porro, corporis dolorum animi, quod explicabo aliquam est recusandae alias quibusdam at accusamus perspiciatis molestiae enim nesciunt minima.</p>
          </div>

        </div>
    </main>
  )
}

export default Nosotros