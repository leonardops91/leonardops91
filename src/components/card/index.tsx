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
      <div
        id="card"
        className={`flex group items-center  h-[95%] w-full justify-center transition-all duration-[.25s] ease-linear overflow-hidden relative rounded-3xl 
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
          className="flex flex-col items-center justify-center gap-7 w-full h-20 hover:h-full transition-all z-30 absolute text-white py-[10px] bg-black bg-opacity-70"
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
              className="text-center h-9"
            />
            <div className="flex gap-2">
              <a
              target="_blanck"
              rel="noopener noreferrer"
                href={props.repositoryURL}
                className="w-52 py-3 px-6 rounded-xl bg-transparent border-2 mt-3 group-hover:mb-3 cursor-pointer transition-all duration-[.25s] ease-linear text-sm outline-none hover:bg-white hover:text-black"
              >
                Acessar o repositório
              </a>
              {props.previewURL && (
                <a
                target="_blanck"
                rel="noopener noreferrer"
                  href={props.previewURL}
                  className="w-52 py-3 px-6 rounded-xl bg-transparent border-2 mt-3 group-hover:mb-3 cursor-pointer transition-all duration-[.25s] ease-linear text-sm outline-none hover:bg-white hover:text-black"
                >
                  Acessar o preview
                </a>
              )}
            </div>
          </main>
        </div>
      </div>
    );
}