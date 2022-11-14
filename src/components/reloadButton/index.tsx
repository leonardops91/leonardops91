import { ArrowsClockwise } from 'phosphor-react'
import anime from 'animejs/lib/anime.es.js';


type ReloadButtonProps = {
    pageColor: string
    onClick: () => void
}

type colorStylesType = {
    [key: string]: string
}

const colorsStyles: colorStylesType = {
    purple: 'border-purple-100 hover:brightness-[80%] bg-purple-100',
    blue: 'border-blue-100 hover:brightness-[80%] bg-blue-100',
    green: 'border-green-100 hover:brightness-[80%] bg-green-100',
    red: 'border-red-100 hover:brightness-[80%] bg-red-100'
}

export default function ReloadButton(props:ReloadButtonProps) {
    const colorClass = colorsStyles[props.pageColor]

    const icon = document.getElementsByClassName('reloadButton')
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
        <div onClick={handleClick} className={`absolute  cursor-pointer  border-2 p-3 bottom-3 right-3 group rounded-xl border-blue-900  transition-all ${colorClass}`}>
            <ArrowsClockwise className="text-purple-900 w-full group-hover:text-blue-900 reloadButton" size={25}/>
        </div>
    )
}