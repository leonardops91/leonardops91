import { Tag2Cloud } from "./tag2Cloud";
import MASK from "./cloud.png";

type WordCloudProps = {
  data?: {
    name: string
    knowledgeLevel: number
  }[]
}

type CloudDataType = {
  text: string,
  weight: number
}[]

export default function WordCloud(props: WordCloudProps) {
  const cloud = document.getElementById("cloud");


  if(cloud && props.data){
    const tag2Cloud = new Tag2Cloud(cloud, {
      width: 2000,
      height: 1000,
      maskImage: MASK,
      minFontSize: 14,
      maxFontSize: 72,
      angleCount: 3,
      angleFrom: 0,
      angleTo: 0,
      padding: 2,
      canvas: false,
    });
    const cloudData: CloudDataType = props.data.map(item => {
      return{text: item.name, weight: item.knowledgeLevel}
    })

    tag2Cloud.draw(cloudData);

  }

  return (
    <div id="cloud"></div>
    )
  }