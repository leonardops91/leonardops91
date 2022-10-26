import { useState, useRef } from "react";
import Header from "./components/header";
import { useGetUserInfoQuery } from "./graphql/generated";
import About from "./pages/about";
import Cover from "./pages/cover";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import ToTopButton from "./components/toTopButton";

type colorsStylesType = {
  [key: string]: string;
};

const colorsStyles: colorsStylesType = {
  purple:
    "before:bg-purple-900 bg-purple-900 after:shadow-[inset_0_-200px_80px_0_rgb(54_19_82_/_0.75)]",
  blue: "before:bg-blue-900 bg-blue-900 after:shadow-[inset_0_-200px_80px_0_rgb(15_23_42_/_0.75)]",
  green:
    "before:bg-green-900 bg-green-900 after:shadow-[inset_0_-200px_80px_0_rgb(6_78_59_/_0.75)]",
  red: "before:bg-red-900 bg-red-900 after:shadow-[inset_0_-200px_80px_0_rgb(136_19_55_/_0.75)]",
};

function App() {
  const { data } = useGetUserInfoQuery();
  const [pageColor, setPageColor] = useState(
    localStorage.getItem("pageColor") || "purple"
  );
  const colorClass = colorsStyles[pageColor];
  const [generalTheme, setGeneralTheme] = useState("dark");
  const themeClass =
    generalTheme === "dark" ? `before:opacity-80` : `before:opacity-10`;

  const userProfile = {
    avatarURL: data?.userProfile?.avatarURL,
    name: data?.userProfile?.name,
  };
  const famousPhrase = {
    phrase: data?.famousPhrases[0].phrase,
    author: data?.famousPhrases[0].author,
  };


  return (
    <>
      <div
        className={`scrollbar-hide flex flex-col items-center bg-code bg-cover bg-no-repeat before:absolute after:absolute after:w-full after:h-[100vh] before:w-full before:h-[100vh] ${colorClass} ${themeClass}`}
      >
        <Header setGeneralTheme={setGeneralTheme} pageColor={pageColor} />
        <Cover
          userProfile={userProfile}
          famousPhrase={famousPhrase}
          setPageColor={setPageColor}
          pageColor={pageColor}
        />
      </div>
      <About id="about"/>
      <Education id="education"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
      <ToTopButton pageColor={pageColor}/>
    </>
  );
}

export default App;
