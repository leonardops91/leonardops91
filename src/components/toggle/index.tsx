import { MoonStars, Sun } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react';

type toggleProps = {
    setPageTheme: Dispatch<SetStateAction<string>>
    pageColor: string
}

type colorStylesType = {
  [key: string]: string
}

const colorsStyles: colorStylesType = {
  purple: "bg-purple-400 text-purple-100",
  blue: "bg-blue-400 text-blue-100",
  green: "bg-green-400 text-green-100",
  red: "bg-red-400 text-red-100",
};

export function Toggle(props: toggleProps){
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
    const colorClass = colorsStyles[props.pageColor]

    function handleTheme(theme: string) {
        setTheme(theme)
        localStorage.setItem('theme', theme)
        props.setPageTheme(theme)
    }
    return (
      <div
        className={`
      flex 
      items-center 
      justify-between 
      border-2
      border-purple-100 
      rounded-full
      h-11
      `}
      >
        <div
          onClick={() => handleTheme("dark")}
          className={`flex items-center  h-full w-full rounded-l-full px-3 py-1  ${
            theme === "dark" ? colorClass : "cursor-pointer hover:brightness-75"
          }`}
        >
          <MoonStars size={34} className="text-purple-100" />
        </div>
        <div
          onClick={() => handleTheme("light")}
          className={`flex items-center  h-full w-full rounded-r-full px-3 py-1 ${
            theme === "light" ? colorClass : "cursor-pointer hover:brightness-75"
          }`}
        >
          <Sun size={34} className="text-purple-100" />
        </div>
      </div>
    );
}