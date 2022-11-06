import { stringifyForDisplay } from "@apollo/client/utilities";
import { GetUserInfoQuery} from "../../graphql/generated";

type ContactProps = {
  pageColor: string;
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
      <div id={props.id} className={`h-[88vh] flex align-center justify-center ${colorClass}`}>
        {stringifyForDisplay(contactInfo)}
      </div>
    );
}
