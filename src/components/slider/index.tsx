import React from 'react';
import { CarouselProvider, Slider as SlidePlace, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from '../card';
import { CaretCircleDoubleLeft, CaretCircleLeft, CaretCircleRight } from 'phosphor-react';

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
        className="flex items-center justify-center gap-4 w-full h-full"
      >
        <ButtonBack>
          <CaretCircleLeft
            size={35}
            className="hover:brightness-75 transition-all"
          />
        </ButtonBack>
        <SlidePlace className="w-4/5 h-[70vh]">
          {props.cardsInfo.map((cardInfo) => {
            return (
              <Slide
                index={0}
                className="group flex items-center justify-center
                "
              >
                <Card snapURL={cardInfo.snapURL || ""} title={cardInfo.name} type={cardInfo.type} description={cardInfo.description} repositoryURL={cardInfo.projectRepositoryURL} previewURL={cardInfo.projectpreviewURL || ""}  />
              </Slide>
            );
          })}
        </SlidePlace>

        <ButtonNext>
          <CaretCircleRight
            size={35}
            className="hover:brightness-75 transition-all"
          />
        </ButtonNext>
      </CarouselProvider>
    );
  }