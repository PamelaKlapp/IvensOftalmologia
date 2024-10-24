import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { bannerMainHeader } from '../../data';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import './MainBanner.css';

const DisplayBanners = () => {
  const [responsiveImages, setResponsiveImages] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 600) {
        setResponsiveImages(
          bannerMainHeader.map((item) => ({ ...item, img: item.imgSmall }))
        );
      } else if (windowWidth <= 1024) {
        setResponsiveImages(
          bannerMainHeader.map((item) => ({ ...item, img: item.imgMedium }))
        );
      } else {
        setResponsiveImages(bannerMainHeader);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className="main_banner">
      <Slider className='slider-space' {...settings}>
        {responsiveImages.map(({ id, name, img, path }) => (
          <Link to={path} className="" key={id}>
            <img className="img-banner" src={img} alt={name} loading="lazy" />
          </Link>
        ))}
      </Slider>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const {  style, onClick } = props;
  return (
    <div
      className={`custom-arrow custom-arrow-next`}
      style={{ ...style }}
      onClick={onClick}
    >
      <SlArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const {  style, onClick } = props;
  return (
    <div
      className={`custom-arrow custom-arrow-prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      <SlArrowLeft />
    </div>
  );
};

export default DisplayBanners;
