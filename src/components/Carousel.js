import React, { useState } from 'react';

import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import foto1 from '../img/tecnologia.jpg';
import foto2 from '../img/muebles.jpg';
import foto3 from '../img/juegos.jpg';



const items = [
  {
    src: foto1,
    altText:"Imagen 1",
    caption: "tecnologia"
  },
  {
    src: foto2,
    altText:"Imagen 2",
    caption: "muebles"
  },
 {
    src: foto3,
    altText: 'Imagen 3',
    caption: 'juegos'
  }
];

const App= (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
       onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>

        <img src={item.src} alt={item.altText} width="100%" height="750px"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
      <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </div>

  );
}

export default App;