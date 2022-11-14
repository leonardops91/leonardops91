import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import ReloadButton from '../reloadButton';

type WordCloudPros={
    pageColor: string
    data: {
      name: string
      knowledgeLevel: number
    }[] | undefined
  }

  type colorsStylesType = {
    [key: string]: string;
  };
  
  const colorsStyles: colorsStylesType = {
   purple:
     "text-purple-900",
   blue: "text-blue-900",
   green:
     "text-green-900",
   red: "text-red-900",
  };
  
  export function WordCloud(props: WordCloudPros) {
  const colorClass = colorsStyles[props.pageColor];

    const sizeClasses = (value: number) => {
        if(value < 20) {
            return "text-base text "
        }
        if(value < 40) {
            return "text-lg text "
        }
        if(value < 60) {
            return "text-2xl text "
        }
        if(value < 80) {
            return "text-5xl text " 
        }
        return "text-9xl text "
    }

    const textBase = document.getElementsByClassName('text ')

    function animateText() {
        anime({
            targets: textBase,
            translateX: () => {return anime.random(-400, 400)},
            translateY: () => {return anime.random(-180, 180)},
            easing: 'linear',
            duration: 3000,
            delay: anime.stagger(100),
        })
    }
    useEffect(() =>{
        animateText()
    },[])
    return (
      <>
        <div className="relative flex items-center justify-center h-full w-full ">
          {props.data &&
            props.data.map((word) => {
              return (
                <p className={`${sizeClasses(word.knowledgeLevel)}} ${colorClass} absolute`}>
                  {word.name}{" "}
                </p>
              );
            })}
        </div>
            <ReloadButton pageColor={props.pageColor} onClick={animateText}/>
      </>
    );
  }
  
