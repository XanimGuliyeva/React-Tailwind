import { useState, useEffect } from 'react';
import Slider from "react-slick"; 
import Banners from 'api/banners.json'
import Title from 'components/ui/Title'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useWindowWidth } from '@react-hook/window-size'



export default function Campaigns() {

    const [banners, setBanners] = useState([]);
    const windowWidth = useWindowWidth()

    useEffect(() => {
        setBanners(Banners);
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear",
        arrows: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="container overflow-hidden  mx-auto md:pt-8 px-6">
            <div className="hidden md:block">
                <Title>Kampanyalar</Title>
            </div>
            <Slider className="md:-mx-2" {...settings}>
                {banners.length && banners.map((banner, index) => (
                    <div key={banner.id}>
                        <picture className="block md:px-2">
                            <img src={banner.image} className="md:rounded-lg" />
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    )
}