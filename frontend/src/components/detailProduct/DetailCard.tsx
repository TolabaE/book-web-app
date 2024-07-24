import './detail.css';
// import { useEffect } from 'react';
// import {sumarCantidad,eliminarCantidad,agregarCarrito, detailInterface, objectInterface } from '../../types/detail';
import { useParams } from 'react-router-dom';
import { objectInterface } from '../../types/detail';


const DetailCard = () => {

    const { idBook } = useParams<{ idBook: string }>();

    const list_books:objectInterface[] = [
        {
            price:2500,
            image:"https://media.istockphoto.com/id/157482029/es/foto/pila-de-libros.jpg?s=612x612&w=0&k=20&c=KYCi5g_Y3D6chjEYCFm7EP3NUKHExrO3jXHrs9ZtV04=",
            idnumber:1,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem rerum earum sed repudiandae mollitia fuga, illum",
            stock:3,
            date:"marzo 2002",
            condition:"usado",
        },
        {
            price:2500,
            image:"https://img.freepik.com/foto-gratis/abierto-volando-libros-antiguos_1232-2096.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721347200&semt=sph",
            idnumber:2,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem ",
            stock:3,
            date:"marzo 2002",
            condition:"usado",
        },
        {
            price:2500,
            image:"https://img.freepik.com/fotos-premium/libro-abierto-aislado-sobre-fondo_488220-20235.jpg",
            idnumber:3,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem rerum earum sed repudiandae mollitia fuga,",
            stock:3,
            date:"marzo 2002",
            condition:"usado",
        },
        {
            price:2500,
            image:"https://i.pinimg.com/550x/40/d5/3e/40d53e76898c8615dd8121a662702415.jpg",
            idnumber:4,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem?",
            stock:3,
            date:"marzo 2002",
            condition:"usado",
        },
        {
            price:2500,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQahbGTBx_M9s9EEQsAXplIqeT8ve61TfeaA&s",
            idnumber:5,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem",
            stock:3,
            date:"marzo 2002",
            condition:"usado",
        }
    ];

    // const addBook:sumarCantidad = {
    //     agregar() {
            
    //     }
    // }

    // const deleteBook:eliminarCantidad = {
    //     eliminar() {
            
    //     },
    // }

    // const saveBook:agregarCarrito = {
    //     guardar() {
            
    //     },
    // }
    console.log(idBook);
    // Asegúrate de que idBook está definido y es una cadena

    if (!idBook) {
        return <div>Invalid book ID</div>;
    }

    const idBookNumber = parseInt(idBook);

    if (isNaN(idBookNumber)) {
        console.error('Invalid idBook');
        // Maneja el caso de un idBook inválido
        return <div>Invalid book ID</div>;
    }
    const book = list_books.find(item => item.idnumber === idBookNumber)

    if (!book) {
        return <div>No se encuentra el producto</div>;
    }

    return (
        <section className='card__detail-container'>
            <div className='card__detail-images'>
                aqui van a ir las imagenes
            </div>
            <div className='card__detail-img'>
                aqui va a ir la imagen grande 
            </div>
            <div className='card__detail'>
                {
                    <div className='card__detail-info'>
                    <h3>{book.description}</h3>
                    <h4>{book.image}</h4>
                    <p>Autor: {book.condition}</p>
                    <b>Precio: ${book.price}</b>
                    <p>Stock disponibles</p>
                    <p>Cantidad: <b>{book.stock}</b></p>
                    <h6>Publicado: {book.date}</h6>
                </div>
                }
                <div className='card__detail-add'>            
                    {/* <button onClick={deleteBook}>Restar</button>
                    <b>cantidad: {unidad} </b>
                    <button onClick={addBook}>Sumar</button>
                    <div onClick={saveBook}>
                        Agregar al carrito
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default DetailCard;


