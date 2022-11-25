import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import ReloadButton from '../reloadButton';
import './styles.css'

type SpreaderPros={
    colorClass: string
}
  
  export function Spreader(props: SpreaderPros) {
    const pageColor = localStorage.getItem("pageColor") || "purple";
    const numberOfElements = 50;
    const array = []
    for(let i = 0; i<numberOfElements; i++){
      array.push('')
    }

    const elements = document.getElementsByClassName("element");
    function animateComponent() {
      anime({
        targets: elements,
        translateX: () => {
          return anime.random(-650, 650);
        },
        translateY: () => {
          return anime.random(-400, 400);
        },
        easing: "linear",
        duration: 3000,
        delay: anime.stagger(100),
      });
    }

    useEffect(() => {
      animateComponent();
    }, []);

    return (
      <div
        id="elementFather"
        className="flex items-center justify-center w-full h-full absolute overflow-hidden"
      >
        {array.map(item => {
        return <div className={`element w-10 h-32 z-0 ${props.colorClass}`}></div>
        })}
        <ReloadButton id='reloadBackground' onClick={animateComponent} pageColor={pageColor} />
      </div>
    );
  }
  
