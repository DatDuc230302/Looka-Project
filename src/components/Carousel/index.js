import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselComp() {
    const slides = [
        {
            img: 'https://cdn.logojoy.com/wp-content/uploads/20201117163112/birdland_banner-2048x1024.jpg',
        },
        {
            img: 'https://cdn.logojoy.com/wp-content/uploads/20201117163031/mississppi_ricks_banner-1-2048x1024.jpg',
        },
        {
            img: 'https://cdn.logojoy.com/wp-content/uploads/20201117162958/glo_banner-1-2048x1024.jpg',
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        accessibility: false,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} tabIndex="-1">
                    <img src={slide.img} alt="" />
                </div>
            ))}
        </Slider>
    );
}

export default CarouselComp;
