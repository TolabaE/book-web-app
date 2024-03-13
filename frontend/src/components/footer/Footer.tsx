import './footer.css';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className='footer-content'>
                <div className="indice__footer">
                    <h4 className='title-footer'>Indice</h4>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/nosotros'>Nosotros</Link></li>
                        <li><Link to='/productos'>Productos</Link></li>
                        <li><Link to='/contacto'>Contacto</Link></li>
                        <li><Link to='/faq'>Faq</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className='title-footer'>Seguinos</h4>
                    <span className='comunity__footer'>
                        <i><FaFacebook /></i>
                        <i> <FaInstagram /></i>
                        <i><FaTiktok /></i>
                        <i><FaWhatsapp /></i>
                    </span>
                </div>
                <div className='category__footer'>
                    <h4 className='title-footer'>Categoria</h4>
                    <div>
                        <Link to='/productos'>Histologia</Link>
                        <Link to='/productos'>Genetica</Link>
                        <Link to='/productos'>Anatomia</Link>
                        <Link to='/productos'>Biologia celular</Link>
                    </div>
                </div>
            </div>
            <small><i>Al navegar por este sitio aceptas los terminos y condiciones</i></small>
        </footer>
    );
}

export default Footer;
