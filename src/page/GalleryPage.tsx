import CharacterGallery from "../components/CharacterGallery.tsx";
import NewCharacter from "../components/NewCharacter.tsx";

export default function GalleryPage(){

    return (
        <>
        <h1>Rick and Morty Gallery</h1>
            <CharacterGallery />
            <NewCharacter />
        </>
)
}