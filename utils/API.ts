import { Rick_ALL, Rick_ID } from "./types.ts";

export const getCharacter = async(page:number): Promise<Rick_ALL[]> => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const result = await data.json()
    const characters: Rick_ALL[] = result.results;
    return characters;
}

export const getCharacterID = async(id:string):Promise<Rick_ID> => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const result: Rick_ID = await data.json()
    return result
} 

export const searchCharacter = async(name:string): Promise<Rick_ALL[]> => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    const result = await data.json()

    if(result.error) return [];

    return result.results
}