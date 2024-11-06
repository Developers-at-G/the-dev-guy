import React from 'react';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Skills = () => {
  const images1 = [
    '/Images/contentful.png',
    '/Images/nextJS.png',
    '/Images/figma.png',
    '/Images/builder.png',
    '/Images/html-css-js.png',
    '/Images/materialui.png',
  ];

  const images2 = [
    '/Images/react.png',
    '/Images/tailwind.png',
    '/Images/git.png',
    '/Images/graphql.png',
    '/Images/jquery.png',
   
  ];

  

  return (
    <div className="h-fit w-fit">
      <div className="py-10">
        <p className="text-black text-center font-bold text-3xl">SKILLS</p>
      </div>
      <div className='py-28'>
        <Splide
          options={{
            type: "loop",
            gap: "10px",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 5,
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
                className="h-fit w-fit"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </SplideSlide>
          ))}
        </Splide>
        <div style={{ height: "80px" }}></div>
        <Splide
          options={{
            type: "loop",
            gap: "10px",
            drag: "free",
            arrows: false,
            pagination: true,
            perPage: 5,
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
                className="h-fit w-fit"
                alt={`Slide ${index + 1}`}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Skills;
