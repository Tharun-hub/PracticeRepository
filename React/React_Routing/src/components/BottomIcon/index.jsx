import { useEffect, useState } from "react"
import './index.css';

const BottomIcon = () =>
{
    const [pokemonImage, setPokemonImage] = useState("");
    
    async function getPokemonDetails() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
        const responseData = await response.json();
        const pokemonImageUrl = responseData.sprites.front_shiny;
        console.log(responseData.name);
        setPokemonImage(pokemonImageUrl);
    }
    useEffect(()=>{
        getPokemonDetails();
    },[])
    return (
        <img className="image" src={`${pokemonImage}`} aria-placeholder="Pokemon Image"/>
    )
}

export default BottomIcon