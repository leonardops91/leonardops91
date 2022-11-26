import React from 'react';
import { CarouselProvider, Slider as SlidePlace, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from '../card';
import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react';

type SliderProps ={
    cardsInfo: {
        name: string;
        projectRepositoryURL: string;
        projectpreviewURL?: string | null;
        snapURL?: string | null;
        type: string;
        description: string;
      }[];
}


export default function Slider(props: SliderProps) {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={props.cardsInfo.length}
        infinite
        isPlaying
        className="relative flex items-center justify-center gap-4 w-screen h-screen"
      >
        <ButtonBack>
          <CaretCircleLeft
            size={35}
            className="hover:brightness-75 absolute bottom-1/2 left-3 z-10 transition-all"
          />
        </ButtonBack>
        <SlidePlace className="w-full h-full">
          {props.cardsInfo.map((cardInfo) => {
            return (
              <Slide
                index={0}
                className="group flex items-center justify-center
                "
              >
                <Card key={cardInfo.name} snapURL={cardInfo.snapURL || ""} title={cardInfo.name} type={cardInfo.type} description={cardInfo.description} repositoryURL={cardInfo.projectRepositoryURL} previewURL={cardInfo.projectpreviewURL || ""}  />
              </Slide>
            );
          })}
        </SlidePlace>

        <ButtonNext>
          <CaretCircleRight
            size={35}
            className="hover:brightness-75 absolute bottom-1/2 right-3 z-10 transition-all"
          />
        </ButtonNext>
      </CarouselProvider>
    );
  }