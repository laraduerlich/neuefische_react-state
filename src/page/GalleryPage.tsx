import CharacterGallery from "../components/CharacterGallery.tsx";
import {useState} from "react";
import {characters} from "../Characters.ts";
import NewCharacter from "../components/NewCharacter.tsx";
import {Character} from "../types/RickAndMortyCharacter.ts";


export function addCharacter(newCharacter: Character){
    characters.push(newCharacter)
}

export default function GalleryPage(){
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    return(
        <>
        <h1>Rick and Morty Gallery</h1>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
            filteredCharacters.length > 0
                ? <CharacterGallery characters={filteredCharacters}/>
                : <p>No characters found</p>
            }
            <NewCharacter />
        </>
)
}