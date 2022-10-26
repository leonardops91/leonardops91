import { MutableRefObject } from "react";

type ProjectsProps = {
    id: string
}

export default function Projects(props: ProjectsProps){
    return (
      <div id={props.id} className="bg-black flex align-center justify-center">
        <h1 className="max-w-screen-xl w-full h-screen text-center m-auto bg-slate-400">Projects</h1>
      </div>
    );
}
