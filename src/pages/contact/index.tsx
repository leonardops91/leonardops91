import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Text } from "../../components/textComponent";
import { GetUserInfoQuery} from "../../graphql/generated";

type ContactProps = {
  pageColor: string;
  themeClass: string
  data?: GetUserInfoQuery;
  id: string;
};

type contactType = {
  socialNetworks?: { 
    name: string
    url: string
  }[];
  objective?: string
};

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

export default function Contact(props: ContactProps){
  const colorClass = colorsStyles[props.pageColor];
  
  const contactInfo: contactType = {
    socialNetworks: props.data?.socialNetworks,
    objective: props.data?.userProfile?.objective
  };
  return (
    <section
      id={props.id}
      className={`bg-nature bg-no-repeat bg-cover h-[93vh] before:absolute before:w-full before:h-[93vh] ${colorClass} ${props.themeClass} `}
    >
      <div
        className={`flex flex-col justify-evenly items-center py-6 relative text-center m-auto max-w-screen-xl w-full h-[90vh] border-b-1 `}
      >
        <div className="flex flex-col ">
          <header className="flex items-center justify-center mb-14">
            <Text variant="title" content="Future" />
          </header>
          <main className="flex justify-center h-full w-full">
            <Text content={contactInfo.objective} />
          </main>
        </div>
        <Text variant="title" content="Contact" className="" />
        <div className="flex justify-center gap-7  items-start ">
          {contactInfo.socialNetworks && (
            <>
              <a
                href={contactInfo.socialNetworks[0].url}
                className="flex items-center justify-center gap-3 hover:scale-110 transition-all"
              >
                <LinkedinLogo size={32} />
                <Text variant="subtitle" content="LinkedIn" />
              </a>
              <a
                href={contactInfo.socialNetworks[1].url}
                className="flex items-center justify-center gap-3 hover:scale-110 transition-all"
              >
                <GithubLogo size={32} />
                <Text variant="subtitle" content="Github" />
              </a>
              <a
                href={contactInfo.socialNetworks[2].url}
                className="flex items-center justify-center gap-3 hover:scale-110 transition-all"
              >
                <InstagramLogo size={32} />
                <Text variant="subtitle" content="Instagram" />
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
