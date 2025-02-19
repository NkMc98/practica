import { useState } from "react";

function From () {
    const [name, setName] = useState("");

    return (
        <main>
            <h2>Formulario</h2>
            <input
            type="text"
            placeholder="Ingresa tu Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <p>Nombre ingresado: {name}</p>
        </main>
    )
}

export default From;