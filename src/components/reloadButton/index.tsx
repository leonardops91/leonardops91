import { ArrowsClockwise } from 'phosphor-react'
import anime from 'animejs/lib/anime.es.js';


type ReloadButtonProps = {
    id: string
    pageColor: string
    onClick: () => void
}

type colorStylesType = {
    [key: string]: string
}

const colorsStyles: colorStylesType = {
    purple: 'hover:brightness-[80%] bg-purple-100 border-purple-900 text-purple-900',
    blue: 'hover:brightness-[80%] bg-blue-100 border-blue-900 text-blue-900',
    green: 'hover:brightness-[80%] bg-green-100 border-green-900 text-green-900',
    red: 'hover:brightness-[80%] bg-red-100 border-red-900 text-red-900'
}

export default function ReloadButton(props:ReloadButtonProps) {
    const colorClass = colorsStyles[props.pageColor]

    const icon = document.getElementsByClassName(props.id)
    function animate() {
        anime({
            targets: icon,
            rotate: '1turn',
            easing: 'linear',
            duration: 1500,
            direction: 'alternate'
        })
    }

    function handleClick(){
        animate()
        props.onClick()
    }
    return (
        <div onClick={handleClick} className={`absolute cursor-pointer  border-2 p-3 bottom-20 left-3 group rounded-xl transition-all ${colorClass}`}>
            <ArrowsClockwise id={props.id} className={`w-full ${props.id}`} size={25}/>
        </div>
    )
}