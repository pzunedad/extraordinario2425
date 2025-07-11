import { FunctionalComponent } from "preact/src/index.d.ts";
import { Rick_ID } from "../utils/types.ts";

const DetailsCharacter: FunctionalComponent<Rick_ID> = (props) => {
    const { name, status,species, gender, image, origin, location} = props
    return (
        <div class="character_data">
            <div class="character_header">
                <img src={image} alt={name} width="100px"></img>
                <div>
                    <ul>
                        <li><h3>Informacion de personaje</h3></li>
                        <li><strong>Status: </strong>{status}</li>
                        <li><strong>Species: </strong>{species}</li>
                        <li><strong>Gender: </strong>{gender}</li>
                        <li><strong>Origen: </strong>{origin}</li>
                        <li><strong>Localizacion: </strong>{location}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailsCharacter