import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Toggle } from "../toggle";

type headerProps ={
    setGeneralTheme: Dispatch<SetStateAction<string>>
}

export default function Header(props: headerProps) {
    const [theme, setPageTheme] = useState('Dark')

    useEffect(() => {props.setGeneralTheme(theme)},[theme])
    return (
      <section className="flex items-center justify-between border-b-2 border-purple-100 h-[10vh] max-w-screen-xl w-full z-10">
        <h1 className="font-normal text-md text-purple-100">About</h1>
        <h1 className="text-md text-purple-100">Education</h1>
        <Toggle setPageTheme={setPageTheme} />
        <h1 className="text-md text-purple-100">Projects</h1>
        <h1 className="text-md text-purple-100">Contact</h1>
      </section>
    );
}