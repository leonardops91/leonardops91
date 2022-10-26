import { MutableRefObject } from "react";

type EducationProps = {
    id: string
}

export default function Education(props: EducationProps){
    return (
      <div id={props.id} className="bg-black flex align-center justify-center">
        <h1 className="max-w-screen-xl w-full h-screen text-center m-auto bg-slate-400">Education</h1>
      </div>
    );
}
