import { useEffect, useState } from "react";
import type { Character } from "../type";
import BobBurgerPreview from "./BobBurgerPreview";
import styled from "styled-components";


const Sizediv = styled.div`
    
    h2{
        font-size: calc(30px + 5vmin);
    }
    
    h3{
        font-size: calc(15px + 2vmin);
    }
    
    input{
        font-size: calc(6px + 2vmin);
    }
    
    p{
        font-size: calc(5px + 2vmin);
    }
`

export default function BobBurgerContent() {
    const [numBob, setBob] = useState(1);
    const [bobCharacters, setBobCharacters] = useState<Character[]>([]);
    useEffect(() => {
        fetch(`https://bobsburgers-api.herokuapp.com/characters/?sortBy=voicedBy&limit=${numBob}`)
            .then(res => res.json())
            .then (data => setBobCharacters(data));
    }, [numBob]);
    useEffect(() => {
        console.log(bobCharacters);
    })
    return (
        <div>
            <Sizediv>
                <h2>Bob's Burger Characters</h2>
                <h3>Input an between 1- 598</h3>
                <input type="number" placeholder="Bob's Burger" value={numBob} min={1} max={598}
                   onChange={(e) => setBob(Number(e.target.value))}/>
                <p>numBob: {numBob}</p>
            </Sizediv>
            <BobBurgerPreview data={bobCharacters} />
        </div>
    )
}