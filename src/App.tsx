
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // useEffect(() => {
  
  //   axios.get('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos/CotacaoDolarDia')
  //     .then((response) => {
  //       const brewerieChegando = response.data;
  //       console.log(brewerieChegando)
  //       setArray(brewerieChegando);
  //     });
  // }, [solicitar_cotacao()]);

  // const  solicitar_cotacao( = ( chave : any, valor: any ) => {
  //   localStorage.setItem(chave, valor);
  //   window.location.replace("/breweriesHome")
  // }
  // )
  const [ date, setDate ] = useState("");
  const [ UltimaDataConsultada, setUltimaDataConsultada ] = useState("");

  useEffect(() => {
    setUltimaDataConsultada(date)
  }, []);

  function solicitar_cotacao(chave:any, date: any) {
    console.log(date)
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        <nav className="barra-navegacao">
          <span> Dolar Price Every Day </span>   
        </nav> 
      </header>
      <body className="App-header">
        <div>
          <span>
            Qual data gostaria de consultar a cotacao de hoje?
          </span> <br/>
        </div>
        <form>
          <div className="dataCotacao">
            <input id="date" value={date} type="date" name="data-inserida" onChange={(e) => setDate(e.target.value)}/>
          </div>
          <div className="btn">
            <input id="btn-submit" onClick={() => solicitar_cotacao('ultimaData', date)} name="btn" type="submit" value="Consultar"></input>
          </div>
        </form>
        {/* // <div>
        //   <input type="text" value={UltimaDataConsultada}/>
        // </div> */}
      </body>

    </div>
  );
}

export default App;

// https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos/CotacaoDolarDia]

