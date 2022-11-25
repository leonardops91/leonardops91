import { Rocket } from "phosphor-react";
import { Text } from "../textComponent";

type footerProps = {
    pageColor: string
}

export default function Footer(props: footerProps) {
    return (
        <section className="h-[10vh]">
            <div className="flex justify-between items-center max-w-screen-xl w-full h-full m-auto border-t-2 border-purple-100">
                <Text variant="subtitle" content="Wanna know how this was built?"/>
                <Rocket size={32} />
                <Text variant="subtitle" content="Developed by | Leonardo Souza"/>
            </div>
        </section>
    )
}