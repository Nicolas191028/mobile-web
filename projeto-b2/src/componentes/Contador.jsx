import { Fragment } from "react"

const Contador = () => {

    const aumentar = () => {
        alert("Olá Rodrigão");
    }

    const diminuir = () => {
        alert("Olá Rodriguinho");
    }

    return (
        <Fragment>
            <h1>Contador</h1>

            <section>
                <h2>resultado</h2>
                <button onClick={aumentar} style={{marginRight: '10px' }}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </section>
        </Fragment>
    )
}

export default Contador;