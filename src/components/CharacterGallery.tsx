import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import {useEffect, useState} from "react";
import axios from "axios"

export function addCharacter(character: Character) {
    return <CharacterCard character={character}/>
}

export default function CharacterGallery() {

    const [data, setData] = useState<Character[]>([]);
    const [searchText, setSearchText] = useState("");
    const filteredCharacters: Character[] = data.filter((character: Character) => character.name.toLowerCase().includes(searchText.toLowerCase()))
    const characters = filteredCharacters.map((char: Character) => <CharacterCard key={char.name} character={char}/>);

    function fetchData() {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {setData(response.data.results)})
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
            filteredCharacters.length > 0
                ? <div className="character-gallery">
                    {characters}
                </div>
                : <p>No characters found</p>
            }
        </>
    );
}


