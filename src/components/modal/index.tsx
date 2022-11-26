import { X } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Text } from "../textComponent";


type ModalProps = {
    isModalOpen: boolean
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function Modal(props: ModalProps){
    return (
      <>
        <div className="flex items-center justify-center " >
          <div
            className={`flex gap-2 justify-center items-center flex-col p-6 fixed z-50 rounded-lg bottom-20 backdrop-blur bg-gray-300 h-[40%] w-[40%] transition-all duration-[.1s] ease-linear opacity-0 -mb-96 ${
              props.isModalOpen && "mb-0 bg-opacity-50 opacity-100 "
            }`}
          >
            <div className="absolute top-4 right-4 hover:brightness-75 cursor-pointer" onClick={() => props.setIsModalOpen(false)}><X size={20} className=" hover:animate-[spin_.9s_ease]"/></div>
            <Text variant="title" content="Congratulations!" className="text-center" />
            <Text variant="subtitle" content="You found an easter egg" />
            <Text variant="medium" content="Now you can look the code of this page" className="text-center"/>
            <Text variant="bold" content="Have fun!"/>
            <a className="rounded-md py-1 px-2 bg-gray-200 hover:bg-gray-300 text-gray-900 transition-all" target="_blanck" rel="noopener noreferrer" href="https://gitlab.com/leonardops91/personalPage">Go to repository</a>
          </div>
        </div>
      </>
    );
}