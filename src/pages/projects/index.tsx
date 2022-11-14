import { Text } from "../../components/textComponent";
import { GetUserInfoQuery } from "../../graphql/generated";
import Slider from '../../components/slider/index.js'

type ProjectsProps = {
  data: GetUserInfoQuery;
  id: string;
};

type projectsType = {
  projects:{
    name: string;
    projectRepositoryURL: string;
    projectpreviewURL?: string | null;
    snapURL?: string | null;
    type: string;
    description: string;
  }[]
};

export default function Projects(props: ProjectsProps){
  const projectsInfo: projectsType = {
    projects: props.data.projects
  }
    return (
      <section
        id={props.id}
        className="w-screen h-[110vh] py-6 overflow-hidden flex flex-col items-center "
      >
        <div className="flex flex-col items-center max-w-screen-xl w-full h-[80%]">
          <header>
            <Text variant="title" content="Projects" />
          </header>
          <main className="h-full w-full"><Slider cardsInfo={projectsInfo.projects} /></main>
          
        </div>
      </section>
    );
}

