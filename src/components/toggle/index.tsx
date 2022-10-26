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
  purple: "bg-purple-400",
  blue: "bg-blue-400",
  green: "bg-green-400",
  red: "bg-red-400",
};

export function Toggle(props: toggleProps){
    const [theme, setTheme] = useState('Dark')
    const colorClass = colorsStyles[props.pageColor]

    function handleTheme(theme: string) {
        setTheme(theme)
        props.setPageTheme(theme)
    }
    return (
      <div
        className="
      flex 
      items-center 
      justify-between 
      border-2
      border-purple-100 
      rounded-full
      h-11
      "
      >
        <div
          onClick={() => handleTheme("Dark")}
          className={`flex items-center  h-full w-full rounded-full px-3 py-1  ${
            theme === "Dark" ? colorClass : "cursor-pointer hover:brightness-75"
          }`}
        >
          <MoonStars size={34} className="text-purple-100" />
        </div>
        <div
          onClick={() => handleTheme("Light")}
          className={`flex items-center  h-full w-full rounded-full px-3 py-1 ${
            theme === "Light" ? colorClass : "cursor-pointer hover:brightness-75"
          }`}
        >
          <Sun size={34} className="text-purple-100" />
        </div>
      </div>
    );
}