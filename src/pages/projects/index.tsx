import { stringifyForDisplay } from "@apollo/client/utilities";
import { MutableRefObject } from "react";
import { GetUserInfoQuery } from "../../graphql/generated";

type ProjectsProps = {
  data?: GetUserInfoQuery;
  id: string;
};

type projectsType = {
  projects?: {
    name: string;
    projectRepositoryURL: string;
    projectpreviewURL?: string | null;
    snapURL?: string | null;
    type: string;
    description: string;
  }[];
};

export default function Projects(props: ProjectsProps){
  const projectsInfo: projectsType = {
    projects: props.data?.projects
  }
    return (
      <div id={props.id} className="w-screen h-screen overflow-hidden border-b-2 border-black flex align-center justify-center">
        <h1 className="">

        {stringifyForDisplay(projectsInfo)}
        </h1>
      </div>
    );
}
