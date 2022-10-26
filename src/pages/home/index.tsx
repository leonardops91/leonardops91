import { Text } from "../../components/textComponent";
import userAvatar from '../../assets/userAvatar.png'
import { PageColorMenu } from "../../components/pageColorMenu";
import { Dispatch, SetStateAction } from "react";

type HomeProps = {
  userProfile: {
    name?: string;
    avatarURL?: string | null;
  },
  famousPhrase: {
    phrase?: string
    author?: string
  },
  setPageColor: Dispatch<SetStateAction<string>>
  pageColor: string
};

export default function Home(props: HomeProps) {

  return (
    <section className="relative flex flex-col items-center justify-around h-[90vh] z-10">
      <PageColorMenu setPageColor={props.setPageColor}/>
      <div className="flex items-center flex-col">
        <img
          src={props.userProfile.avatarURL || userAvatar}
          alt="user avatar"
          className="rounded-full w-44"
        />
        <Text variant="subtitle" content={props.userProfile?.name} pageColor={props.pageColor}/>
      </div>
      <div className="italic flex flex-col items-center">
        <Text variant="outlined" content={props.famousPhrase?.phrase} pageColor={props.pageColor}/>
        <Text content={props.famousPhrase?.author} pageColor={props.pageColor}/>
      </div>
    </section>
  );
}