import CharacterCard from "../components/CharacterCard.tsx";
import {Character} from "../types/RickAndMortyCharacter.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export default function CharacterPage() {
    const params = useParams();
    const [data, setData] = useState()

    function fetchData() {
        axios.get("https://rickandmortyapi.com/api/character/" + params.id)
            .then((response) => {setData(response.data)})
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!data) {
        return <div>Character not found!</div>
    }

    return (
        <>
            <CharacterCard character={data as Character} />
        </>
    )
}