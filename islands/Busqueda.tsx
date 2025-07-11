import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import { searchCharacter } from "../utils/API.ts";
import { Rick_ALL } from "../utils/types.ts";
import Characters from "../components/Characters.tsx";

const Busqueda: FunctionalComponent = () => {
  const [name, setName] = useState<string>("");
  const [characters, setCharacters] = useState<Rick_ALL[]>([]);

  const handleInput = async (e: Event) => {
    const searchText = (e.target as HTMLInputElement).value;
    setName(searchText);

    if (searchText.trim() === "") {
      setCharacters([]);
      return;
    }

    const results = await searchCharacter(searchText);
    setCharacters(results || []);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onInput={handleInput}  
        placeholder="nombre de personaje"
        class="search-input"
      />
      {characters.length > 0 ? (
        <div class="character-grid">
          {characters.map((character) => (
            <Characters key={character.id} {...character} />
          ))}
        </div>
      ) : name && (
        <p>No se encontraron personajes con ese nombre</p>
      )}
    </div>
  );
};

export default Busqueda;