import { Rocket, Translate } from "phosphor-react";
import { useState } from "react";
import Modal from "../modal";
import { Text } from "../textComponent";

type footerProps = {
    pageColor: string
}

export default function Footer(props: footerProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleClick() {
        setIsModalOpen(!isModalOpen)
        
    }
    return (
      <section className="h-[10vh]">
        <div className="flex justify-between items-center max-w-screen-xl w-full h-full m-auto border-t-2 border-purple-100">
          <Text
            variant="subtitle"
            content="Wanna know how this was built?"
          />
          <div className={`transition-all duration-[.3s] ease-linear ${isModalOpen && " -translate-y-16 opacity-0"}`}>
            <Rocket
              size={32}
              onClick={handleClick}
              className={`animate-bounce cursor-pointer`}
            />
          </div>
          <Text variant="subtitle" content="Developed by | Leonardo Souza" />
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </section>
    );
}