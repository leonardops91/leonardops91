import { Square, Circle, Star, Hexagon } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react'

type pageColorMenuProps ={
    setPageColor: Dispatch<SetStateAction<string>>
}

export function PageColorMenu(props: pageColorMenuProps) {
    const [pageColor, setPageColor] = useState(localStorage.getItem('pageColor') || 'purple')

    function handleClick(color: string){
        setPageColor(color)
        localStorage.setItem('pageColor', color)
        props.setPageColor(color)
    }
    return (
      <div className="absolute top-2 flex items-center justify-between w-40">
        <div onClick={() => handleClick("purple")}>
          <Circle
            size={25}
            weight="fill"
            className={`text-purple-400 ${
              pageColor === "purple" ? "cursor-auto" : "cursor-pointer hover:brightness-75"
            }`}
          />
        </div>
        <div onClick={() => handleClick("blue")}>
          <Star
            size={25}
            weight="fill"
            className={`text-blue-400 ${
              pageColor === "blue" ? "cursor-auto" : "cursor-pointer hover:brightness-75"
            }`}
          />
        </div>
        <div onClick={() => handleClick("green")}>
          <Square
            size={25}
            weight="fill"
            className={`text-green-400 ${
              pageColor === "green" ? "cursor-auto" : "cursor-pointer hover:brightness-75"
            }`}
          />
        </div>
        <div onClick={() => handleClick("red")}>
          <Hexagon
            size={25}
            weight="fill"
            className={`text-red-400 ${
              pageColor === "red" ? "cursor-auto" : "cursor-pointer hover:brightness-75"
            }`}
          />
        </div>
      </div>
    );
}