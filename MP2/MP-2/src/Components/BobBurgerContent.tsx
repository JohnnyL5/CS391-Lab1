import { useEffect, useState } from "react";
import BobBurgerPreview from "./BobBurgerPreview.tsx";

export default function BobBurgerContent() {
    const [numBob, setBob] = useState(5);

    return (
        <div>
            <input type="number" placeholder="NBA games" value={numBob}
                   onChange={(e) => setBob(Number(e.target.value))}/>
            <div>
                <p>numBob: {numBob}</p>
            </div>
        </div>
    )
}