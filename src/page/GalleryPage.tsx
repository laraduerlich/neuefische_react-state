import CharacterGallery from "../components/CharacterGallery.tsx";
import {useState} from "react";
import {characters} from "../Characters.ts";


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
        </>
)
}