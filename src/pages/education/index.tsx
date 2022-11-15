import { DesktopTower, NotePencil } from "phosphor-react";
import { Text } from "../../components/textComponent";
import WordCloud from "../../components/wordCloud";
import { GetUserInfoQuery } from "../../graphql/generated";

type EducationProps = {
  pageColor: string;
  themeClass: string
  data?: GetUserInfoQuery;
  id: string;

};

type EducationType = {
  courses?: {
    name: string,
    institute: string
    startDate: Date
    endDate?: Date
    workload?: number | null
  }[]
  technologies?: {
    name:string
    knowledgeLevel: number
  }[]
}

type colorsStylesType = {
  [key: string]: string;
};

const colorsStyles: colorsStylesType = {
 purple:
   "before:bg-purple-900 bg-purple-900 text-purple-100",
 blue: "before:bg-blue-900 bg-blue-900 text-blue-100",
 green:
   "before:bg-green-900 bg-green-900 text-green-100",
 red: "before:bg-red-900 bg-red-900 text-red-100",
};

export default function Education(props: EducationProps){
  const colorClass = colorsStyles[props.pageColor];

  const educationInfo: EducationType = {
    courses: props.data?.courses,
    technologies: props.data?.technologies,
  };
    return (
      <section
        id={props.id}
        className={`bg-space bg-no-repeat bg-cover  before:absolute before:w-full before:h-[110vh] ${colorClass} ${props.themeClass} `}
      >
        <div
          className={`flex gap-4 flex-col py-6 relative m-auto max-w-screen-xl w-full h-[110vh] border-b-2 `}
        >
          <Text variant="title" content="IT Education" className="mb-1" />
          <div className="flex flex-col items-start border-2 border-black">
            <header className="flex items-center justify-center gap-3 ">
              <NotePencil size={32} />
              <Text variant="subtitle" content="Main IT courses" />
            </header>
            <main>
              <ul className="flex flex-col gap-4">
                {educationInfo.courses?.map((course) => {
                  return (
                    <li className="flex gap-2">
                      ▪
                      <Text variant="bold" content={course.name} />
                      -
                      <Text variant="small" content={course.institute} />
                      (
                      <Text
                        variant="small"
                        content={course.startDate.toString()}
                      />
                      -
                      <Text
                        variant="small"
                        content={course.endDate?.toString()}
                      />
                      )
                      <Text
                        variant="small"
                        content={`${course.workload?.toString()}h`}
                      />
                    </li>
                  );
                })}
              </ul>
            </main>
          </div>
          <div className="flex flex-col items-start h-[60%]">
            <header className="flex items-center justify-center gap-3 ">
              <DesktopTower size={32} />
              <Text variant="subtitle" content="Knowledge Cloud" />
            </header>
            <main className="relative flex items-center justify-center h-full w-full">
              <div className="absolute opacity-90 w-full h-full">
                <div className="absolute w-full h-[280px] bg-white rounded-full top-24 left-0 "></div>
                <div className="absolute w-2/3 h-[280px] bg-white rounded-full top-12 left-72 "></div>
                <div className="absolute w-2/3 h-[280px] bg-white rounded-full top-32 left-40 "></div>
                <div className="absolute w-3/5 h-[280px] bg-white rounded-full top-0 left-44 "></div>
              </div>
               
              <WordCloud data={educationInfo.technologies}/>
            </main>
          </div>
        </div>
      </section>
    );
}
