import './card.css';
import { productInterface } from '../../types/item.ts';
import { Link } from 'react-router-dom';


const Card = ({precio,img,nombre,id}:productInterface) => {
    return (
        <div className='card__container'>
            <div className='card__container-image'>
                <img src={img} alt="imagen del producto"/>
            </div>
            <div className='card__container-text'>
                <h3 className='card__container-title'>{nombre}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis totam quasi, numquam alias adipisci </p>
                <h4>Precio $ {precio}</h4>
                <Link className='card__detail-button' to={`/details/${id}`}>ver detalle</Link>
            </div>
        </div>
    );
}

export default Card;
