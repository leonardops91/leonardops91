import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

type LinkProps = {
    content: string
    href: string
    pageColor: string
}

type colorStylesType = {
    [key: string]: string
}

const colorsStyles: colorStylesType = {
    purple: 'text-purple-100',
    blue: 'text-blue-100',
    green: 'text-green-100',
    red: 'text-red-100',
}
export function Link(props: LinkProps) {
    const colorClass = colorsStyles[props.pageColor]


    return (
        <LinkScroll smooth={true} spy={true} offset={0} duration={300} to={props.href} className={`cursor-pointer font-normal text-md hover:border-b-2 hover:border-b-white ${colorClass}`}>{props.content}</LinkScroll>
    )
}