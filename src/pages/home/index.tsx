import Header from "../../components/header";
import { GetUserInfoQuery } from "../../graphql/generated";
import Cover from "../cover";

 type HomeProps = {
  data?: GetUserInfoQuery
  setGeneralTheme: React.Dispatch<React.SetStateAction<string>>
  themeClass: string
  setPageColor: React.Dispatch<React.SetStateAction<string>>
  pageColor: string
 }

 type colorsStylesType = {
   [key: string]: string;
 };

const colorsStyles: colorsStylesType = {
  purple:
    "before:bg-purple-900 bg-purple-900 text-purple-100 after:shadow-[inset_0_-200px_80px_0_rgb(54_19_82_/_0.75)]",
  blue: "before:bg-blue-900 bg-blue-900 text-blue-100 after:shadow-[inset_0_-200px_80px_0_rgb(15_23_42_/_0.75)]",
  green:
    "before:bg-green-900 bg-green-900 text-green-100 after:shadow-[inset_0_-200px_80px_0_rgb(6_78_59_/_0.75)]",
  red: "before:bg-red-900 bg-red-900 text-red-100 after:shadow-[inset_0_-200px_80px_0_rgb(136_19_55_/_0.75)]",
};

 export default function Home(props: HomeProps) {
  const colorClass = colorsStyles[props.pageColor];
  const position = localStorage.getItem('scrollPosition')
  if(position) {
    const positionAsNumber = +position
    setTimeout(() => {
      window.scrollTo(0, positionAsNumber)
    }, 1);
    
  }

  window.onscroll = () => {
    let actualPosition = window.scrollY
    localStorage.setItem('scrollPosition', actualPosition.toString())
  }

  const userProfile = {
    avatarURL: props.data?.userProfile?.avatarURL,
    name: props.data?.userProfile?.name,
  };
  const famousPhrase = {
    phrase: props.data?.famousPhrases[0].phrase,
    author: props.data?.famousPhrases[0].author,
  };

   return (
     <div
       className={`flex flex-col items-center bg-code bg-cover bg-no-repeat before:absolute after:absolute after:w-full after:h-[110vh] before:w-full before:h-[110vh] ${colorClass} ${props.themeClass}`}
     >
       <Header
         setGeneralTheme={props.setGeneralTheme}
         pageColor={props.pageColor}
       />
       <Cover
         userProfile={userProfile}
         famousPhrase={famousPhrase}
         setPageColor={props.setPageColor}
         pageColor={props.pageColor}
       />
     </div>
   );
 }

function useState(): [any, any] {
  throw new Error("Function not implemented.");
}
