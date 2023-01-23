import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server"
import Guitarra from "~/components/guitarra";

export async function loader() {
  const guitarras = await getGuitarras();
  
  
  return guitarras
}

function Tienda() {

  const guitarras = useLoaderData()
  console.log(guitarras);
  return (
    <main className="contenedor">
      <h2 className="heading">
        Nuestra Coleccion
        {guitarras.length && (
          <div className="guitarras-grid">
            {guitarras.map(
              guitarra => (
                <Guitarra 

                />
              )
            )}
          </div>
        )}
      </h2>
    </main>
  )
}

export default Tienda