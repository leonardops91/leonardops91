import { Text } from "../../components/textComponent";
import { GetUserInfoQuery } from "../../graphql/generated";
import Slider from '../../components/slider/index.js'
import Card from "../../components/card";

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
        className="w-screen h-[110vh] py-6 flex flex-col items-center"
      >
        <div className="flex gap-4 flex-col items-center max-w-screen-xl w-full h-[100%]">
          <header>
            <Text variant="title" content="Projects" />
          </header>
          <main className="grid gap-4 grid-cols-2 h-[85%] w-fit overflow-auto scrollbar-hide">
            {projectsInfo.projects.map(cardInfo => {
                return <Card snapURL={cardInfo.snapURL || ""} title={cardInfo.name} type={cardInfo.type} description={cardInfo.description} repositoryURL={cardInfo.projectRepositoryURL} previewURL={cardInfo.projectpreviewURL || ""}  />
            })}
            </main>
        </div>
      </section>
    );
}

