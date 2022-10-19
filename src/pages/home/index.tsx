import { Text } from "../../components/textComponent";

type HomeProps = {
  userProfile?: {
    name: string;
    avatarURL: string;
    careerdescription: string;
    objective: string;
  }
  famousPhrase?: {
    phrase: string
    author: string
  }
};

export default function Home(props: HomeProps) {

  return (
    <section className="flex flex-col items-center justify-around h-[90vh] z-10">
      <div className="flex items-center flex-col">
        <img
          src={props.userProfile?.avatarURL}
          alt="user avatar"
          className="rounded-full w-44"
        />
        <Text variant="subtitle" content={props.userProfile?.name} />
      </div>
      <div className="italic flex flex-col items-center">
        <Text content={props.famousPhrase?.phrase}/>
        <Text content={props.famousPhrase?.author}/>
      </div>
    </section>
  );
}