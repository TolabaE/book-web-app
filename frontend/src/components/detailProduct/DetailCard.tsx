import './detail.css';
import { useParams } from 'react-router-dom';
import { objectInterface,actualizarImagen, botonActivo,eliminarCantidad,sumarCantidad } from '../../types/detail';
import {useState } from 'react';    
import { IoRemove } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";

const DetailCard = () => {

    const { idBook } = useParams<{ idBook: string }>();
    const [imagen, setImagen] = useState<string | undefined>(undefined);
    const [btnSelect, setbtnSelect] = useState<number>(1);//por defecto la imagen que estar activa es la primera,que seria la foto principal
    const [count,setCount] = useState<number>(1);





    const handleClickSelect:botonActivo ={
        activar(nivel) {
            setbtnSelect(nivel)
        },
    }

    const list_books:objectInterface[] = [
        {
            price:2500,
            mainImage:"https://media.istockphoto.com/id/157482029/es/foto/pila-de-libros.jpg?s=612x612&w=0&k=20&c=KYCi5g_Y3D6chjEYCFm7EP3NUKHExrO3jXHrs9ZtV04=",
            idnumber:1,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem rerum earum sed repudiandae mollitia fuga, illum",
            stock:3,
            date:"marzo 2002",
            condition:"usado",
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados",
                    position:1
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados",
                    position:2
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados",
                    position:3
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados",
                    position:4
                },
                {
                    link:"https://cdn5.dibujos.net/dibujos/pintados/202009/pila-de-libros-colegio-11713953.jpg",
                    alt:"imagen de libros apilados",
                    position:5
                }
            ],
        },
        {
            price:2500,
            mainImage:"https://img.freepik.com/foto-gratis/abierto-volando-libros-antiguos_1232-2096.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721347200&semt=sph",
            idnumber:2,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem ",
            stock:7,
            date:"marzo 2002",
            condition:"usado",
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados",
                    position:1
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados",
                    position:2
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados",
                    position:3
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados",
                    position:4
                }
            ],
        },
        {
            price:2500,
            mainImage:"https://img.freepik.com/fotos-premium/libro-abierto-aislado-sobre-fondo_488220-20235.jpg",
            idnumber:3,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem rerum earum sed repudiandae mollitia fuga,",
            stock:2,
            date:"marzo 2002",
            condition:"usado",
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados",
                    position:1
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados",
                    position:2
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados",
                    position:3
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados",
                    position:4
                },
                {
                    link:"https://cdn5.dibujos.net/dibujos/pintados/202009/pila-de-libros-colegio-11713953.jpg",
                    alt:"imagen de libros apilados",
                    position:5
                }
            ]
        },
        {
            price:2500,
            mainImage:"https://i.pinimg.com/550x/40/d5/3e/40d53e76898c8615dd8121a662702415.jpg",
            idnumber:4,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem?",
            stock:1,
            date:"marzo 2002",
            condition:"usado",
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados",
                    position:1
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados",
                    position:2
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados",
                    position:3
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados",
                    position:4
                },
                {
                    link:"https://cdn5.dibujos.net/dibujos/pintados/202009/pila-de-libros-colegio-11713953.jpg",
                    alt:"imagen de libros apilados",
                    position:5
                }
            ],
        },
        {
            price:2500,
            mainImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQahbGTBx_M9s9EEQsAXplIqeT8ve61TfeaA&s",
            idnumber:5,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem",
            stock:2,
            date:"marzo 2002",
            condition:"usado",
            list_image:[
                {
                    link:"https://illustoon.com/photo/2393.png",
                    alt:"imagen de libros apilados",
                    position:1
                },
                {
                    link:"https://img.freepik.com/vector-gratis/dia-libro-libros-texto_24911-115208.jpg?size=626&ext=jpg",
                    alt:"imagen de libros apilados",
                    position:2
                },
                {
                    link:"https://static.vecteezy.com/system/resources/previews/001/838/798/non_2x/piled-books-education-supplies-icon-free-vector.jpg",
                    alt:"imagen de libros apilados",
                    position:3
                },
                {
                    link:"https://img.freepik.com/vector-premium/dibujos-animados-libro_22350-95.jpg",
                    alt:"imagen de libros apilados",
                    position:4
                }
            ],
        }
    ];

    if (!idBook) return <div>no se encuentro nunguna imagen</div>;
    const idBookNumber = parseInt(idBook);

    if (isNaN(idBookNumber)) {
        console.error('id no encontrado');
        return <div>fallo al buscar el id del producto</div>;
    }
    const book = list_books.find(item => item.idnumber === idBookNumber)
    
    if (!book) return <div>No se encuentra el producto</div>;
    
    const updateImage:actualizarImagen = {
        actualizar(posicion) {
            list_books.map(product =>{
                if (product.idnumber === idBookNumber) {
                    const bookSelect = product.list_image.find(img => img.position === posicion)
                    if (!bookSelect) {
                        return <div> imagen no encontrada</div>
                    }
                    setImagen(bookSelect.link)
                }
            })
        },
    }

    const addBook:sumarCantidad = {
        agregar() {
            if (book.stock > count) {
                setCount(count + 1)
            }
        }
    }

    const deleteBook:eliminarCantidad = {
        eliminar() {
            if (count > 1) {
                setCount(count - 1)
            }
        },
    }

    // useEffect(() => {
        
        
    // }, []);

    return (
        <section className='card__detail-container'>
            <div className='card__detail-images'>
                {
                    book.list_image.map(object => (
                        <div className={`btn__children-image ${object.position === btnSelect ? 'btn_activo': ''}`} 
                            onClick={() => {updateImage.actualizar(object.position),handleClickSelect.activar(object.position)}} 
                            key={object.position}>
                            <img src={object.link} alt={object.alt} className='children__image' />
                        </div>
                    ))
                }
            </div>
            <div className='card__detail-img'>
                <img src={!imagen ? book.mainImage : imagen} alt="foto del libro" />
            </div>
            <div className='card__detail'>
                {
                    <div className='card__detail-info'>
                        <h2>{book.name}</h2>
                        <h3>{book.description}</h3>
                        <p className='p-author'>Autor: {book.condition}</p>
                        <p className='p-price'>Precio: ${book.price}</p>
                        <p className='p-stock'>Stock disponibles</p>
                        {book.stock == 1 ? <p>Ultima unidad</p>: <p>Cantidad: {book.stock}</p>}
                        <h5>Publicado: {book.date}</h5>
                    </div>
                }
                <div className='card__detail-add'>            
                    {
                        book.stock > 1 
                        ?
                        <span className='cart__buttons-box'>
                            <button className='add-btn' onClick={deleteBook.eliminar}><IoRemove /></button>
                            <b className='number-count'>{count}</b>
                            <button className='remove-btn' onClick={addBook.agregar}><IoAdd /></button>
                        </span>: <> </>
                    }
                    <div className='add__cart-btn'>
                        Agregar al carrito 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailCard;
