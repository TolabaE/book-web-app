import './product.css';
import Card from '../../components/cardProduct/Card';
import { Link } from 'react-router-dom';


const Product = () => {
    const list_books = [
        {
            price:2500,
            image:"https://media.istockphoto.com/id/157482029/es/foto/pila-de-libros.jpg?s=612x612&w=0&k=20&c=KYCi5g_Y3D6chjEYCFm7EP3NUKHExrO3jXHrs9ZtV04=",
            idnumber:4,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem rerum earum sed repudiandae mollitia fuga, illum"
        },
        {
            price:2500,
            image:"https://img.freepik.com/foto-gratis/abierto-volando-libros-antiguos_1232-2096.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721347200&semt=sph",
            idnumber:4,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem "
        },
        {
            price:2500,
            image:"https://img.freepik.com/fotos-premium/libro-abierto-aislado-sobre-fondo_488220-20235.jpg",
            idnumber:4,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem rerum earum sed repudiandae mollitia fuga,"
        },
        {
            price:2500,
            image:"https://i.pinimg.com/550x/40/d5/3e/40d53e76898c8615dd8121a662702415.jpg",
            idnumber:4,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem?"
        },
        {
            price:2500,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQahbGTBx_M9s9EEQsAXplIqeT8ve61TfeaA&s",
            idnumber:4,
            name:"libros de medicina",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis exercitationem"
        }
    ]
    return (
        <section>
            <div className='buttons_filter'>
                <li><Link to="/categoria" className='router-link-p'>Todos</Link></li>
                <li><Link to="/categoria/1" className='router-link-p'>Anatomia</Link></li>
                <li><Link to="/categoria/2" className='router-link-p'>Biologia Celular</Link></li>
                <li><Link to="/categoria/3" className='router-link-p'>Genetica</Link></li>
                <li><Link to="/categoria/4" className='router-link-p'>Embriologia</Link></li>
            </div>
            <div className='container__list-cards'>
                {
                    list_books.map(item =>(
                            <Card 
                        precio={item.price}
                        img={item.image}
                        nombre={item.name}
                        id={item.idnumber}
                        detalle={item.description}
                    />
                    ))
                }
            </div>
        </section>
    );
}

export default Product;