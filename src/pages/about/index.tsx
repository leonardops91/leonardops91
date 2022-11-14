import { Strategy, Student, Flask } from "phosphor-react";
import { Text } from "../../components/textComponent";
import { GetUserInfoQuery } from "../../graphql/generated";

type AboutProps = {
  data?: GetUserInfoQuery;
  id: string;
};

type AboutType = {
  careerDescription?: string;
  education?: {
    name: string;
    institute: string;
    initialDate: Date;
    endDate?: Date;
  }[];
  experiences?: {
    companyDescription: string;
    companyName: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    technologies: {
      name: string;
    }[];
  }[];
};

export default function About(props: AboutProps) {

  const userBackground: AboutType = {
    careerDescription: props.data?.userProfile?.careerdescription,
    education: props.data?.educationDegrees,
    experiences: props.data?.experiences,
  };

  return (
    <section id="about" className={`flex flex-col gap-4 items-start m-auto max-w-screen-xl w-full h-[110vh] py-6`}
    >
      <Text variant="title" content="About" className="" />
      <div className="flex flex-col w-full items-baseline">
        <header className="flex items-center justify-center gap-4">
          <Strategy size={32} />
          <Text variant="subtitle" content="Background" />
        </header>
        <main className="w-full ">
          <Text variant="small" content={userBackground.careerDescription} />
        </main>
      </div>
      <div className="flex flex-col w-full items-baseline">
        <header className="flex items-center justify-center gap-4">
          <Student size={32} />
          <Text variant="subtitle" content="General Education" />
        </header>
        <main className="flex flex-col-reverse gap-4 w-full ">
          {userBackground.education?.map((course) => {
            return (
              <ul>
                <li className="flex gap-1">
                  ▪
                  <Text variant="bold" content={course.name} />
                  -
                  <Text variant="small" content={course.institute} />
                  (
                  <Text
                    variant="small"
                    content={course.initialDate.toString()}
                  />{" "}
                  -{" "}
                  <Text variant="small" content={course.endDate?.toString()} />)
                </li>
              </ul>
            );
          })}
        </main>
      </div>
      <div className="flex flex-col w-full items-baseline">
        <header className="flex items-center justify-center gap-4">
          <Flask size={32} />
          <Text variant="subtitle" content="IT Experience" />
        </header>
        <main className="flex flex-col-reverse gap-4 w-full ">
          {userBackground.experiences?.map((experience) => {
            return (
              <ul>
                <li className="flex flex-col gap-1 ">
                  <header className="flex gap-1">
                    ▪
                    <Text variant="bold" content={experience.companyName} />
                    -
                    <Text
                      variant="small"
                      content={experience.companyDescription}
                    />
                  </header>
                  <main className="flex flex-col ml-12">
                    <div className="flex gap-1">
                      ▪ Position -
                      <Text variant="small" content={experience.position} />
                    </div>
                    <div className="flex gap-1">
                      ▪ Period -
                      <Text
                        variant="small"
                        content={experience.startDate.toString()}
                      />
                      -
                      <Text
                        variant="small"
                        content={
                          experience.endDate
                            ? experience.endDate?.toString()
                            : "Current"
                        }
                      />
                    </div>
                    <div className="flex gap-1">
                      ▪ Technologies
                      {experience.technologies.map((technology) => {
                        return (
                          <Text
                            variant="small"
                            content={`- ${technology.name}`}
                          />
                        );
                      })}
                    </div>
                  </main>
                </li>
              </ul>
            );
          })}
        </main>
      </div>
    </section>
  );
}
