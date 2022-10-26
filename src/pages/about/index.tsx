import { MutableRefObject } from "react";

type AboutProps = {
    id: string
}

export default function About(props: AboutProps){
    return (
      <div id={props.id} className="bg-black flex align-center justify-center">
        <h1 className="max-w-screen-xl w-full h-screen text-center m-auto bg-slate-400">About</h1>
      </div>
    );
}
