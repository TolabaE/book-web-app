import Carrusel from "../../components/Carrusel/Carrusel";
import './home.css';


const Home = () =>{


    return(
        <section>
            <div className="text-line">
                <span>¡Visita nuestro catalogo y encontrá los libros que necesitas para avanzar en tu carrera médica!</span>
            </div>
            <Carrusel/>
            <h1 className='title-home'>Bienvenido al sitio web de libros usados</h1>
            <hr/>
            <div className='home__container-card'>
                <div className='home__card one'>
                    <h2>Bajos precios</h2>
                    <p>Aquí encontrarás una amplia selección de libros de diversas materias relacionadas con la carrera de medicina en la UBA. Nuestros precios son sumamente accesibles  y valorados de acuerdo a la calidad y estado de uso, ya que la mayoría han sido previamente utilizados por estudiantes de dicha institución.</p>
                </div>
                <div className='home__card two'>
                    <h2>Facilidad de envios</h2>
                    <p>Todas las entregas se realizan en persona en la puerta de la Facultad de Medicina, en el horario acordado previamente. De esta manera, te evitamos los costos de envío y te aseguramos una entrega segura y confiable. Para que puedas obtener tus libros de forma rápida y sin complicaciones.</p>
                </div>
                <div className='home__card three'>
                    <h2>Medios de pagos</h2>
                    <p>Se aceptan Mercado Pago, transferencia bancaria y efectivo, según las preferencias del vendedor. El pago se realiza en el mismo momento de entrega. Al comprar el producto a través de nuestro sitio web, garantizas la reserva del mismo.
                    </p>
                    <b>¡No se aceptan pagos con tarjetas de creditos!</b>
                </div>
                <div className='home__card four'>
                    <h2>¿Quienes somos?</h2>
                    <p>Esta página ha sido creada por estudiantes de medicina que desean vender sus libros, los cuales ya no les son útiles en su carrera. De esta manera, evitamos recurrir a otros sitios donde las comisiones por publicación son muy altas y los envíos suelen demorar.</p>
                </div>
            </div>
        </section>
    )
}

export default Home;    