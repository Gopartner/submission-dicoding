import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const openModal = (index) => {
    setSelectedSlide(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedSlide(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto mb-8"> {/* Container untuk slider */}
      <Slider {...settings} className="mx-auto w-full">
        <div onClick={() => openModal(0)} className="bg-gray-200 p-6 rounded-lg shadow-md cursor-pointer mx-2">
          <h3 className="text-xl font-semibold mb-2">Slide 1</h3>
          <p>Content 1</p>
        </div>
        <div onClick={() => openModal(1)} className="bg-gray-200 p-6 rounded-lg shadow-md cursor-pointer mx-2">
          <h3 className="text-xl font-semibold mb-2">Slide 2</h3>
          <p>Content 2</p>
        </div>
        <div onClick={() => openModal(2)} className="bg-gray-200 p-6 rounded-lg shadow-md cursor-pointer mx-2">
          <h3 className="text-xl font-semibold mb-2">Slide 3</h3>
          <p>Content 3</p>
        </div>
        {/* Tambahkan slide sesuai kebutuhan */}
      </Slider>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Modal Box - Slide {selectedSlide + 1}</h2>
            <p>Content of slide {selectedSlide + 1}</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
