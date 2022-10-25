import { MoonStars, Sun } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react';

type toggleProps = {
    setPageTheme: Dispatch<SetStateAction<string>>
}

export function Toggle(props: toggleProps){
    const [theme, setTheme] = useState('Dark')


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
            theme === "Dark" ? "bg-purple-400" : "cursor-pointer"
          }`}
        >
          <MoonStars size={34} className="text-purple-100" />
        </div>
        <div
          onClick={() => handleTheme("Light")}
          className={`flex items-center  h-full w-full rounded-full px-3 py-1 ${
            theme === "Light" ? "bg-purple-400" : "cursor-pointer"
          }`}
        >
          <Sun size={34} className="text-purple-100" />
        </div>
      </div>
    );
}