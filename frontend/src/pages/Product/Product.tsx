import './product.css';
import Card from '../../components/cardProduct/Card';
import { Link } from 'react-router-dom';


const Product = () => {
    return (
        <section>
            <div className='buttons_filter'>
                <li><Link to="/" className='router-link-p'>Todos</Link></li>
                <li><Link to="/" className='router-link-p'>Anatomia</Link></li>
                <li><Link to="/" className='router-link-p'>Biologia Celular</Link></li>
                <li><Link to="/" className='router-link-p'>Genetica</Link></li>
                <li><Link to="/" className='router-link-p'>Embriologia</Link></li>
            </div>
            <Card 
                precio={2}
                img='./images.com'
                nombre='eduardo'
                id={2}
            />
        </section>
    );
}

export default Product;