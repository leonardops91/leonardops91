export function MenuItem(content: string, href: string) {
    return (
        <a className="font-normal text-lg text-purple-100" href={href}>{content}</a>
    )
}