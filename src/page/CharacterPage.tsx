import CharacterCard from "../components/CharacterCard.tsx";
import {characters} from "../Characters.ts";
import {Character} from "../types/RickAndMortyCharacter.ts";
import {useParams} from "react-router-dom";


export default function CharacterPage() {
    const params = useParams();
    if(params.id === undefined) {
        return <p>"Invalid ID parameter. Please provide a valid number." </p>
    }
    const filteredCharacter: Character | undefined = characters.find(
        (char: Character) => char.id === parseInt(params.id!))

    if (filteredCharacter === undefined) {
        return <p>"No character found with the provided ID." </p>
    }
    return (
        <>
            <CharacterCard character={filteredCharacter} />
        </>
    )
}