import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import DetailsCharacter from "../../components/DetailsCharacter.tsx";
import {getCharacterID } from "../../utils/API.ts";
import { Rick_ID } from "../../utils/types.ts";

export const handler:Handlers = {
    GET: async(_req: Request, ctx:FreshContext<unknown, Rick_ID>) => {
        const {id} = ctx.params
        const character:Rick_ID = await getCharacterID(id)
        return ctx.render(character)
    }
}

const Page = (props: PageProps<Rick_ID>) => {
    <DetailsCharacter {...props.data}/>
}

export default Page

