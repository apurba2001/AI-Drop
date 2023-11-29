import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Carousel.css'
import { useMemo } from 'react';

import Image from 'next/image';

const CarouselItem = ({ image }) => {
    return (
        <SwiperSlide >
            <div className='carasual-main'>
                <img
                    className='carasual-img'
                    src={'../../assets/item-1.jpg'}
                    alt="Next.js Logo"
                    style={{ width: '100%', height: '100%', objectFit: "cover" }}
                />
            </div>
        </SwiperSlide>
    )
}


const Carousel = () => {

    // const renderCrasualItems = useMemo(() => {
    //     return (
    //         images.map((img, idx) => <CarouselItem image={img} key={idx} />)
    //     )
    // }, [images])


    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            pagination={{
                clickable: true
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            loop={true}
            centeredSlides={true}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >

            <SwiperSlide>
                <div className='carasual-main'>
                    <Image
                        className='carasual-img'
                        src={'/assets/item-1.jpg'}
                        alt="Next.js Logo"
                        // style={{ width: '100%', height: '100%', objectFit: "cover" }}
                        width={1100}
                        height={1100}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='carasual-main'>
                    <Image
                        className='carasual-img'
                        src={'/assets/item-2.jpg'}
                        alt="Next.js Logo"
                        width={1100}
                        height={1100}
                        // style={{ width: '100%', height: '100%', objectFit: "cover" }}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='carasual-main'>
                    <Image
                        className='carasual-img'
                        src={'/assets/item-3.jpg'}
                        alt="Next.js Logo"
                        width={1100}
                        height={1100}
                        // style={{ width: '100%', height: '100%', objectFit: "cover" }}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='carasual-main'>
                    <Image
                        className='carasual-img'
                        src={'/assets/item-4.png'}
                        alt="Next.js Logo"
                        width={1100}
                        height={1100}
                        // style={{ width: '100%', height: '100%', objectFit: "cover" }}
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel