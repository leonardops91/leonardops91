export function MenuItem(content: string, href: string) {
    return (
        <a className="font-bold text-lg text-purple-100" href={href}>{content}</a>
    )
}