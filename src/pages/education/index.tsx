import { canUseLayoutEffect, stringifyForDisplay } from "@apollo/client/utilities";
import { useEffect } from "react";
import { GetUserInfoQuery } from "../../graphql/generated";


type EducationProps = {
  pageColor: string;
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
    technologies: props.data?.technologies
  }
    return (
      <div id={props.id} className={`text-center m-auto max-w-screen-xl w-full h-screen border-b-2 flex align-center justify-center ${colorClass}`}>
          {stringifyForDisplay(educationInfo)}
      </div>
    );
}
