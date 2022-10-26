import { MutableRefObject } from "react";

type ContactProps = {
    id: string
}

export default function Contact(props: ContactProps){
    return (
      <div id={props.id} className="bg-black flex align-center justify-center">
        <h1 className="max-w-screen-xl w-full h-screen text-center m-auto bg-slate-400">Contact</h1>
      </div>
    );
}
