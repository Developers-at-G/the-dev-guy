import React from 'react';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Skills = () => {
  const images1 = [
    '/Logos/nextdotjs-color.svg',
    '/Logos/react-color.svg',
    '/Logos/contentful-color.svg',
    '/Logos/css-color.svg',
    '/Logos/figma-color.svg',
    '/Logos/git-color.svg',
    '/logos/amazonwebservices-color.svg'
  ];

  const images2 = [
    '/Logos/graphql-color.svg',
    '/Logos/html5-color.svg',
    '/Logos/javascript-color.svg',
    '/Logos/jquery-color.svg',
    '/Logos/materialdesign-color.svg',
    '/Logos/shopify-color.svg',
    '/logos/typescript-color.svg'
  ];

  

  return (
    <section className="h-fit w-full coder-background" id='skills'>
      <div className="py-10">
        <p className="text-white text-center font-bold text-6xl">SKILLS</p>
      </div>
      <div className='py-28'>
        <Splide
          options={{
            type: "loop",
            gap: "2rem",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 5,
            breakpoints: {
              640: { 
                perPage: 2,
                gap: "1.5rem"
              },
              768: { perPage: 3 },
              1024: { perPage: 4 },
            },
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: 0.7,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {images1.map((image, index) => (
            <SplideSlide key={index}>
              <img
                className="w-full h-auto max-w-[100px] sm:max-w-[120px] mx-auto object-contain 
                          hover:scale-110 transition-transform duration-300"
                src={image}
                alt={`Technology ${index + 1}`}
              />
            </SplideSlide>
          ))}
        </Splide>
        <div style={{ height: "80px" }}></div>
        <Splide
          options={{
            type: "loop",
            gap: "2rem",
            drag: "free",
            arrows: false,
            pagination: true,
            perPage: 5,
            breakpoints: {
              640: { perPage: 2 },
              768: { perPage: 3 },
              1024: { perPage: 4 },
            },
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: -0.7,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {images2.map((image, index) => (
            <SplideSlide key={index}>
              <img
                src={image}
                className="w-full h-auto max-w-[100px] sm:max-w-[120px] mx-auto object-contain 
                          hover:scale-110 transition-transform duration-300"
                alt={`Slide ${index + 1}`}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Skills;
