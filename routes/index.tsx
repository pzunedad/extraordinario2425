import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";
import Busqueda from "../islands/Busqueda.tsx";
import { getCharacter } from "../utils/API.ts";
import { Rick_ALL } from "../utils/types.ts";

export const handler:Handlers = {
  GET: async(req: Request, ctx: FreshContext) => {
    const url = new URL(req.url)
    const page = url.searchParams.get("page") || "1"
    const numberPage = +page;
    const character: Rick_ALL[] = await getCharacter(numberPage)
    return ctx.render({character, numberPage})
  }
}


export default function Home(props:PageProps<{character: Rick_ALL[], numberPage:number}>) {
  const {character, numberPage} = props.data

  return(
    <div id="index">
      <h1> Personajes de Rick y Morty</h1>
      <Busqueda/>
      <div class="character-list">
          {character.map(e => <Characters key={e.id} {...e}/>)}
      </div>
      <div id="change">
          <div class="change_button">
            <a href={`/?page=${numberPage-1}`}> Anterior</a>
          </div>
          <div class="change_button">
              <a href={`/?page=${numberPage+1}`}>Siguiente</a>
          </div>
      </div>
    </div>
  )
}
