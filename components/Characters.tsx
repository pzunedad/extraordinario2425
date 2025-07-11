import { FunctionalComponent } from "preact/src/index.d.ts";
import { Rick_ALL } from "../utils/types.ts";

const Characters: FunctionalComponent<Rick_ALL> = (props) => {
    const {id,name ,image} = props
    return (
        <div class="character-card">
            <a href={`character/${id}`}>
                <img src={image} alt={name} width="100px"></img>
            </a>
            <div class="character-info">
                <p>{name}</p>
            </div>
        </div>
    ) 
}

export default Characters