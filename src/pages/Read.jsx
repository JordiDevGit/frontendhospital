import { useEffect, useState } from "react";
import { getPersonas } from "../services/api";

const Read = () => {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        getPersonas(personas).then((personas) => {
            setPersonas(personas.data)
        })
    },[])
    
    return(
            <>
                <h1>Read</h1>
                <ul className="read-list">
                    {personas?.map((persona) =>{
                        return(
                            <li className="read" key={persona.personaId}>
                                    <p className="read-element">{persona.personaId}</p>
                                    <p className="read-element">{persona.name}</p>
                                    <p className="read-element">{persona.apellidos}</p>
                                    <p className="read-element">{persona.fechaAlta}</p>
                            </li>
                        )
                    })}
                </ul>
            </>
    )
}

export default Read;