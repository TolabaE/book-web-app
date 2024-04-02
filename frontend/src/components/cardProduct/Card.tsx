import './card.css';
import { productInterface } from '../../types/item.ts';
import { Link } from 'react-router-dom';


const Card = ({precio,img,nombre,id}:productInterface) => {
    return (
        <div className='card__container'>
            <figure className='card__container-image'>
                <img src={img} alt="imagen del producto"/>
            </figure>
            <div className='card__container-text'>
                <h3>$ {precio}</h3>
                <Link to={`/details/${id}`}>
                    <p>{nombre}</p>
                </Link>
            </div>
        </div>
    );
}

export default Card;
