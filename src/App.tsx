import { gql, useQuery } from "@apollo/client";
import Header from "./components/header";
import Home from "./pages/home";

const USER_ID: string = import.meta.env.VITE_USER_ID

const GET_USER_QUERY = gql`
query MyQuery {
  userProfile(where: {id: "${USER_ID}"}) {
    avatarURL
    careerdescription
    name
    objective
  }
  educationDegrees{
    name
    institute
    initialDate
    endDate
  }
  famousPhrases {
    phrase
    author
  }
}
`
type Response = {
  userProfile: {
    name: string;
    avatarURL: string;
    careerdescription: string;
    objective: string;
  }
  educationDegrees: {
    name: string
    institute: string
    initialDate: Date
    endDate: Date
  }
  famousPhrases: [{
    phrase: string
    author: string
  }]
};

function App() {
    const { data }= useQuery<Response>(GET_USER_QUERY)

  return (
    <div className="flex flex-col items-center bg-purple-900 bg-code before:absolute before:w-full before:h-[100vh] before:bg-purple-900 before:opacity-80">
      <Header />
      <Home userProfile={data?.userProfile} famousPhrase={data?.famousPhrases[0]} />
    </div>
  );
}

export default App
