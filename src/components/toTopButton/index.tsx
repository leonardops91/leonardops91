import { animateScroll as scroll } from "react-scroll";
import { CaretUp } from 'phosphor-react'

type ToTopButtonProps = {
    pageColor: string
}

type colorStylesType = {
    [key: string]: string
}

const colorsStyles: colorStylesType = {
    purple: 'border-purple-100 hover:bg-purple-100',
    blue: 'border-blue-100 hover:bg-blue-100',
    green: 'border-green-100 hover:bg-green-100',
    red: 'border-red-100 hover:bg-red-100'
}

export default function ToTopButton(props: ToTopButtonProps) {
    const colorClass = colorsStyles[props.pageColor]

    function handleClick(){
        scroll.scrollToTop()
    }
    return (
        <div onClick={handleClick} className={`cursor-pointer  border-2 p-3 bottom-3 right-3 fixed group rounded-xl hover:border-blue-900  transition-all ${colorClass}`}>
            <CaretUp className="text-purple-100 w-full group-hover:text-blue-900" size={25}/>
        </div>
    )
}