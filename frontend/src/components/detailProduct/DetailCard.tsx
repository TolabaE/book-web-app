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
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados"
                }
            ],
        },
        {
            price:2500,
            image:"https://img.freepik.com/foto-gratis/abierto-volando-libros-antiguos_1232-2096.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721347200&semt=sph",
            idnumber:2,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem ",
            stock:7,
            date:"marzo 2002",
            condition:"usado",
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados"
                }
            ],
        },
        {
            price:2500,
            image:"https://img.freepik.com/fotos-premium/libro-abierto-aislado-sobre-fondo_488220-20235.jpg",
            idnumber:3,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem rerum earum sed repudiandae mollitia fuga,",
            stock:2,
            date:"marzo 2002",
            condition:"usado",
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados"
                }
            ]
        },
        {
            price:2500,
            image:"https://i.pinimg.com/550x/40/d5/3e/40d53e76898c8615dd8121a662702415.jpg",
            idnumber:4,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem?",
            stock:1,
            date:"marzo 2002",
            condition:"usado",
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados"
                }
            ],
        },
        {
            price:2500,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQahbGTBx_M9s9EEQsAXplIqeT8ve61TfeaA&s",
            idnumber:5,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem",
            stock:2,
            date:"marzo 2002",
            condition:"usado",
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados"
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados"
                }
            ],
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
                {
                    book.list_image.map(object =>(
                        <img src={object.link} alt={object.alt} className='children__image' />
                    ))
                }
            </div>
            <div className='card__detail-img'>
                <img src={book.image} alt="foto del libro" />
            </div>
            <div className='card__detail'>
                {
                    <div className='card__detail-info'>
                    <h2>{book.name}</h2>
                    <h3>{book.description}</h3>
                    <p>Autor: {book.condition}</p>
                    <b>Precio: ${book.price}</b>
                    <p>Stock disponibles</p>
                    {book.stock == 1 ? <p>Ultima unidad</p>: <p>Cantidad:{book.stock}  </p>}
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


