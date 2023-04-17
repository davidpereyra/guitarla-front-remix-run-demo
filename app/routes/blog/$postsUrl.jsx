import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/posts.server';
import { formatearFecha } from '~/utils/helpers';

export async function loader({request, params}){
    const {postsUrl} = params;

    const post = await getPost(postsUrl);
    // console.log(post.data.attributes);
    if (post.data.length === 0) {
        throw new Response('',{
            status: 404,
            statusText: 'Post no encontrado'
        })        
    }
    return post
}



export function meta({data}){
    if (!data) {
        return{
            title: 'Guitar LA - Post no encontrado',
            description: `Post`
        }
    }
    return {
        title: `Guitar LA - ${data.data[0]?.attributes?.titulo}`,
        description: `Guitarras, venta de guitarras, entrada ${data?.data[0]?.attributes?.titulo}`
    }
}

function Post() {

    const post = useLoaderData();
    const {titulo, contenido, imagen, publishedAt} = post.data[0].attributes

    return (
        <article className='post mt-3'>
            <img className="imagen" src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    )
}

export default Post