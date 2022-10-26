type TextProps = {
    content?: string
    variant?: "title" | "subtitle" | "outlined" | "small"
    pageColor: string
}

type colorStylesType = {
    [key: string]: string
}

const colorsStyles: colorStylesType = {
    purple: "text-purple-100",
    blue: "text-blue-100",
    green: "text-green-100",
    red: "text-red-100",
  };


export function Text(props: TextProps) {
    const colorClass = colorsStyles[props.pageColor]

    switch (props.variant) {
        case "title":
            return <h1 className={`font-bold text-lg ${colorClass}`}>{props.content}</h1>
        case "subtitle":
            return <h2 className={`font-bold text-md ${colorClass}`}>{props.content}</h2>
        case "outlined":
            return <p className={`text-lg ${colorClass}`}>{props.content}</p>
        case "small":
            return <p className={`font-thin text-sm  ${colorClass}`}>{props.content}</p>
        default:
            return <p className={`font-light text-md ${colorClass}`}>{props.content}</p>
    }

}