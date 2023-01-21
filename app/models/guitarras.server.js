export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=Imagen`);
    return await respuesta.json();
}