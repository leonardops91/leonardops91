import { animateScroll as scroll } from "react-scroll";
import { CaretUp } from 'phosphor-react'

type ToTopButtonProps = {
    pageColor: string
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

export default function ToTopButton(props: ToTopButtonProps) {
    const colorClass = colorsStyles[props.pageColor]

    function handleClick(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div onClick={handleClick} className={` cursor-pointer  border-2 border-blue-900 p-3 bottom-3 right-3 fixed group rounded-xl  transition-all ${colorClass}`}>
            <CaretUp className="w-full" size={25}/>
        </div>
    )
}