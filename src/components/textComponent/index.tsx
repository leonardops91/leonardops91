type TextProps = {
    content?: string
    variant?: "title" | "subtitle" | "textOutlined" | "textSmall"
}


export function Text(props: TextProps) {
    switch (props.variant) {
        case "title":
            return <h1 className="font-bold text-lg text-purple-100">{props.content}</h1>
        case "subtitle":
            return <h2 className="font-bold text-md text-purple-100">{props.content}</h2>
        case "textOutlined":
            return <p className="border-1 border-purple-900 text-lg text-purple-100">{props.content}</p>
        case "textSmall":
            return <p className="font-thin text-sm text-purple-100">{props.content}</p>
        default:
            return <p className="font-extralight text-md text-purple-100">{props.content}</p>
    }

}