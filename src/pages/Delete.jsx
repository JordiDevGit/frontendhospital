import { useState } from "react";
import { deletePerson } from "../services/api";

const Delete = () => {
    const [index, setIndex] = useState();

    return(
            <>
                <h1>Delete</h1>
                <div>
                    <p>Introduce el id de la persona que quieres eliminar:</p>
                    <input type="text" onChange={e => setIndex(e.target.value)}/>
                    <button onClick={() => deletePerson(index)}>Enviar</button>
                </div>
            </>
    )
}

export default Delete;