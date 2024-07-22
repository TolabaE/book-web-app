import './contact.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";



const Contact = () =>{


    return (
        <section className='contact__section'>
            <p>¡Dejanos tu consulta y seras respondido a la brevedad en horarios de atención al cliente!</p>
            <h2 className='title__contact-section'>Contactos</h2>
            <div className='card__contact-section'>
                <div className='info__contact-section'>
                    <p><span><MdEmail /></span> ejemplo@gmail.com</p>
                    <p><span><IoLogoWhatsapp /></span> +54 9 111111111</p>
                    <p><span><FaMapMarkerAlt /></span> caba- buenos aires, argentina</p>
                </div>
                <form className='contact-form'>
                    <div className='box-input'>
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" name='Nombre'/>
                    </div>
                    <div className='box-input'>
                        <label htmlFor="Correo">Correo</label>
                        <input type="text" name='Correo'/>
                    </div>
                    <div className='box-input'>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="tel" name="telefono"/>
                    </div>
                    <div className='box-input container-date'>
                        <label htmlFor="consulta">Consulta</label>
                        <textarea name="consulta" id="consulta" cols={30} rows={10}></textarea>
                    </div>
                    <input type="button" value="Enviar" className='submit-form'/>
                </form>
            </div>
        </section>
    )
}

export default Contact;