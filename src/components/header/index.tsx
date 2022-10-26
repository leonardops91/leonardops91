import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "../link";
import { Toggle } from "../toggle";

type headerProps ={
    setGeneralTheme: Dispatch<SetStateAction<string>>
    pageColor: string
}

export default function Header(props: headerProps) {
    const [theme, setPageTheme] = useState(localStorage.getItem('theme') || 'dark')

    useEffect(() => {props.setGeneralTheme(theme)},[theme])
    return (
      <section className="flex items-center justify-between border-b-2 border-purple-100 h-[10vh] max-w-screen-xl w-full z-10">
        <Link content="About" href={"about"} pageColor={props.pageColor} />
        <Link content="Education" href="education" pageColor={props.pageColor} />
        <Toggle setPageTheme={setPageTheme} pageColor={props.pageColor} />
        <Link content="Projects" href="projects" pageColor={props.pageColor} />
        <Link content="Contact" href="contact" pageColor={props.pageColor} />
      </section>
    );
}