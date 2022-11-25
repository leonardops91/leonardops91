import { useState } from "react";
import { useGetUserInfoQuery } from "./graphql/generated";
import About from "./pages/about";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import ToTopButton from "./components/toTopButton";
import Home from "./pages/home";
import Footer from "./components/footer";

type colorsStylesType = {
  [key: string]: { [key: string]: string };
};

const colorsStyles: colorsStylesType = {
  dark: {
    purple: `bg-purple-900 text-purple-100 shadow-purple-400 shadow-xl`,
    blue: `bg-blue-900 text-blue-100 shadow-blue-400 shadow-xl`,
    green: `bg-green-900 text-green-100 shadow-green-400 shadow-xl`,
    red: `bg-red-900 text-red-100 shadow-red-400 shadow-xl`,
  },
  light: {
    purple: `bg-purple-100 text-purple-900 shadow-purple-400 shadow-xl`,
    blue: `bg-blue-100 text-blue-900 shadow-blue-400 shadow-xl`,
    green: `bg-green-100 text-green-900 shadow-green-400 shadow-xl`,
    red: `bg-red-100 text-red-900 shadow-red-400 shadow-xl`,
  },
};

function App() {
  const { data } = useGetUserInfoQuery();
  const [pageColor, setPageColor] = useState(
    localStorage.getItem("pageColor") || "purple"
  );
  const [generalTheme, setGeneralTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );
  const colorClass = colorsStyles[generalTheme][pageColor];
  const themeClass =
    generalTheme === "dark" ? "before:opacity-80" : "before:opacity-10";



  return (
    <>
      {!data ? (
        <div
          className={`flex items-center justify-center w-screen h-screen ${colorClass}`}
        >
          <div className="bg-white border-black border-2 border-t-0 rounded-full animate-ping w-8 h-8"></div>
        </div>
      ) : (
        <div className={`${colorClass} overflow-hidden`}>
          <Home
            data={data}
            pageColor={pageColor}
            setGeneralTheme={setGeneralTheme}
            themeClass={themeClass}
            setPageColor={setPageColor}
          />
          <About data={data} id="about" colorClass={colorClass}/>
          <Education data={data} id="education" pageColor={pageColor} themeClass={themeClass}/>
          <Projects data={data} id="projects" />
          <Contact data={data} id="contact" pageColor={pageColor} themeClass={themeClass}/>
          <Footer pageColor={pageColor} />
          <ToTopButton pageColor={pageColor} />
        </div>
      )}
    </>
  );
}

export default App;
