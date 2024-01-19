import './carrusel.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carrusel = () =>{


    return (
        <Swiper
            modules={[Navigation,Pagination,Autoplay]}
            navigation={true}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                type: 'bullets',
            }}
            autoplay={{
                delay:5000,
                disableOnInteraction:false
            }}
            className='container-carrusel'
        >
            <SwiperSlide><img src="src/assets/Facultad_medicina_uba.jpg" alt="fachada principal facultad de medicina UBA" className='img-carrusel' /></SwiperSlide>
            <SwiperSlide><img src="src/assets/bibliotecaUba.jpg" alt="biblioteca de la facultad de medicina" className='img-carrusel' /></SwiperSlide>
            <SwiperSlide><img src="src/assets/todos.jpg" alt="libros de medicina de anatomia" className='img-carrusel' /></SwiperSlide>
        </Swiper>
    );
}   


export default Carrusel;