import { useState } from "react";
import { savePerson } from "../services/api";

const Create = () => {
    const [persona, setPersona] = useState({
        name: "",
        apellidos: "",
        fechaAlta: new Date()
    });

    const updateName = (name) =>{
        setPersona(previousState => {
            return{...previousState, name: name}
        })
    }

    const updateApellidos = (apellidos) =>{
        setPersona(previousState => {
            return{...previousState, apellidos: apellidos}
        })
    }

    const updateFechaalta = (fechaAlta) =>{
        setPersona(previousState => {
            return{...previousState, fechaAlta: fechaAlta}
        })
    }

    return(
            <>
                <h1>Ingreso</h1>
                <ul className="form">
                    <li className="form-element">
                        <p>Introduzca el nombre: </p>
                        <input type="text" onChange={e => updateName(e.target.value)}/>
                    </li>
                    <li className="form-element">
                        <p>Introduzca el apellido: </p>
                        <input type="text" onChange={e => updateApellidos(e.target.value)}/>
                    </li>
                    <li className="form-element">
                        <p>Introduzca la fecha de alta: </p>
                        <input type="date" onChange={e => updateFechaalta(e.target.value)}/>
                    </li>
                    <li>
                        <button onClick={() => savePerson(persona)}>Enviar</button>
                    </li>
                </ul>
            </>
    )
}

export default Create;