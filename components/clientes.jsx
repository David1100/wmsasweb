import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Importa los estilos para autoplay
import { Autoplay } from 'swiper/modules'; // Importa el módulo de autoplay
import Image from 'next/image';
import clientes_data from '../public/datos/clientes.json';

export default function ClientesSwiper() {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={5}
            loop={true} // Movimiento infinito
            autoplay={{
                delay: 1, // Movimiento continuo sin pausas
                disableOnInteraction: true, // Se detiene al interactuar (cuando el mouse está sobre el slider)
                pauseOnMouseEnter: true, // Pausar al poner el mouse encima
            }}
            speed={5000} // Velocidad constante (ajusta el valor según prefieras)
            modules={[Autoplay]} // Usa el módulo de autoplay
            breakpoints={{
                320: { // Para pantallas móviles
                    slidesPerView: 2,
                },
                1024: { // Para pantallas de escritorio
                    slidesPerView: 7,
                },
            }}
        >
            {
                clientes_data.map((item, index) => (
                    <SwiperSlide key={index} className="p-3">
                        <div className="lg:w-36 w-32 h-20 relative flex justify-center items-center">
                            <Image src={item} alt="img_clientes" layout="fill" objectFit="cover" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
