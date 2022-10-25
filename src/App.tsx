import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Header from "./components/header";
import { PageColorMenu } from "./components/pageColorMenu";
import { useGetUserInfoQuery } from "./graphql/generated";
import Home from "./pages/home";

const colors = {
  purple: 'before:bg-purple-900 bg-purple-900 ',
  blue: 'before:bg-blue-900 bg-blue-900',
  green: 'before:bg-green-900 bg-green-900',
  red: 'before:bg-red-900 bg-red-900',
}

function App() {
    const { data }= useGetUserInfoQuery()
    const [pageColor, setPageColor] = useState('purple')
    const colorClass = colors[pageColor]
    const [generalTheme, setGeneralTheme] = useState('Dark')
    const themeClass = generalTheme === 'Dark' ? `before:opacity-80` : `before:opacity-20`

    const userProfile = {
      avatarURL: data?.userProfile?.avatarURL,
      name: data?.userProfile?.name
    }
    const famousPhrase = {
      phrase: data?.famousPhrases[0].phrase,
      author: data?.famousPhrases[0].author
    }

  return (
    <div className={`flex flex-col items-center bg-code bg-cover bg-no-repeat before:absolute before:shadow-[inset_0_-150px_150px_0_rgb(0_0_0_/_1)] before:w-full before:h-[100vh] ${colorClass} ${themeClass}`}>
      <Header setGeneralTheme={setGeneralTheme}/>
      <Home userProfile={userProfile} famousPhrase={famousPhrase} setPageColor={setPageColor}/>
    </div>
  );
}

export default App
