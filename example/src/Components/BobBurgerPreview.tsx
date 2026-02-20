import styled from "styled-components";
import type { Character } from "../type";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 32px;
    color: black;
    padding: 32px;
`;

const SingleCharDiv=styled.div`
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;  
    padding: 16px;
    text-align: center;
    min-height: 520px;
    border: 5px darkolivegreen solid;
    font-family: sans-serif; 
    
    p{
        font-size: calc(2px + 2vmin);
    }
`;

export default function BobBurgerPreview(props: { data: Character[] }) {
    return (
        <AllCharsDiv>
            {props.data.map((char) => (
                <SingleCharDiv key={char.id}>
                    <h1>{char.name}</h1>
                    <p>{char.age ?? "Unknown age"}</p>
                    <p>{char.occupation ?? "Unknown occupation"}</p>
                    <img src={char.image} alt={`image of ${char.name}`} />
                </SingleCharDiv>
            ))}
        </AllCharsDiv>
    );
}