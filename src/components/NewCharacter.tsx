import {useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";
import {characters} from "../Characters.ts";
import {addCharacter} from "../page/GalleryPage.tsx";

export default function NewCharacter() {

    const [name, setName] = useState("")
    const [species, setSpecies] = useState("")
    const [status, setStatus] = useState("")

    function onSubmit() {
        let newCharacter: Character = {
            id: 21,
            name: name,
            species: species,
            status: status,
            image: "https://www.contronix.com/files/img/mitarbeiter/foto-folgt.png"
        }
        addCharacter(newCharacter)
        console.log(characters)
        setName("")
        setSpecies("")
        setStatus("")
    }

    return (
        <>
            <div className="character-card">
            <h3>New Character:</h3>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type={"text"}
                        value={name}
                        onChange={(event) => setName(event.target.value)}/>
                </label>
                <label>Species:
                    <input
                        type={"text"}
                        value={species}
                        onChange={(event) => setSpecies(event.target.value)}/>
                </label>
                <label>Status:
                    <input
                        type={"text"}
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}/>
                </label>
                <button>Save</button>
            </form>
            </div>
        </>
    )
}