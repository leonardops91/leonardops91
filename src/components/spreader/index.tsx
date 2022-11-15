import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import ReloadButton from '../reloadButton';

type SpreaderPros={
    pageColor: string
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
  
  export function Spreader(props: SpreaderPros) {
  const colorClass = colorsStyles[props.pageColor];

   const elements = document.getElementsByClassName("element");

    function animateText() {
        anime({
            targets: elements,
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
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
            <ReloadButton pageColor={props.pageColor} onClick={animateText}/>
      </>
    );
  }
  
