function App() {
    const titulo = <h1>Mi título</h1>
    const calculo = <h2>{calcular(2,3)}</h2>;
    return <div>{titulo}{calculo}</div>
}

function calcular(n1, n2) {
    return n1 + n2; 
}

export default App;