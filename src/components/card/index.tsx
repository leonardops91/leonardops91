import { Text } from "../textComponent";

type CardProps = {
    title: string
    previewURL?: string
    repositoryURL: string
    snapURL?: string
    type: string
    description: string
    technologies?: string[]
}

export default function Card(props: CardProps) {
    return (
      <a
      href={props.previewURL}
        id="card"
        className={`flex items-center  h-[480px] w-full justify-center ${props.previewURL && "cursor-pointer"} transition-all duration-[.25s] ease-linear overflow-hidden relative rounded-3xl 
        group-hover:scale-100 group-hover:after:h-full after:w-full after:left-0 after:right-0 after:absolute after:bg-gradient-to-b after:from-transparent after:to-gray-800 after:z-20 after:transition-all after:duration-[.25s] after:ease-linear`}
      >
        <img
          src={
            props.snapURL ||
            "https://geekflare.com/wp-content/uploads/2022/03/WhydoyouneedmockAPI.jpeg"
          }
          alt="image example"
          className="h-full w-full z-10 transition-all duration-[.25s] scale-[1.2] ease-linear group-hover:scale-[1.5]"
        />
        <div
          id="context"
          className="flex flex-col items-center justify-center gap-7 w-full z-30 absolute text-white py-[10px] bg-black bg-opacity-40"
        >
          <header className=" flex gap-3 items-center justify-center w-full text-center">
            <Text variant="outlined" content={props.title} className="w-max" />{" "}
            -
            <Text variant="outlined" content={props.type} className="w-min" />
          </header>
          <main className="text-center flex gap-1 flex-col items-center w-full opacity-0 mb-[-140px] transition-all duration-[.25s] ease-linear group-hover:mb-0 group-hover:opacity-100">
            <Text
              variant="bold"
              content={props.description}
              className="text-center mb-3"
            />
            <a
              href={props.repositoryURL}
              className="py-3 px-6 rounded-xl bg-transparent border-2 mt-3 group-hover:mb-3 cursor-pointer transition-all duration-[.25s] ease-linear text-sm outline-none hover:bg-white hover:text-black"
            >
              Acessar o repositório do projeto
            </a>
          </main>
          {props.previewURL && <Text variant="small" content="*Acesse o preview clickando no card"/>}
        </div>
      </a>
    );
}