
import './App.css';
import dolar from './dolar.png'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [ date, setDate ] = useState("");
  const [ contacaoVenda, setContacaoVenda ] = useState("");
  const [ contacaoCompra, setContacaoCompra ] = useState("");
  const ultimaDataConsultada = localStorage.getItem("ultimaData");


  function solicitar_cotacao(chave:any, date: any) {
    localStorage.setItem(chave, date);
  }


  useEffect(() => {
    if (ultimaDataConsultada) {
      const arrayData = ultimaDataConsultada.split('-')
      const dataFormatada = arrayData[1] + "-" + arrayData[2] + "-" + arrayData[0]
      axios.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?%40dataCotacao='${dataFormatada}'&%24format=json`, {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET'
      }})
      .then((response) => {

        const cotacaoNestData = response.data
        setContacaoVenda(cotacaoNestData.value[0].cotacaoVenda)
        setContacaoCompra(cotacaoNestData.value[0].cotacaoCompra)
        
      });
    }
  }, [ultimaDataConsultada]);

  return (
    <div className="App">
      <header>
        <nav className="barra-navegacao">
          <span> Dolar Price Every Day </span>   
        </nav> 
      </header>
      <body className="App-header">
        <div>
          <span>
            Qual data gostaria de consultar a Cotação de hoje?
          </span> <br/>
        </div>
        <form>
          <span>
            <img className="imagemDolar" src={dolar}/></span>
          <div className="dataCotacao">
            <input id="date" type="date" name="data-inserida" onChange={(e) => setDate(e.target.value)}/>
          </div>
          <div className="btn">
            <input id="btn-submit" onClick={() => solicitar_cotacao('ultimaData', date)} name="btn" type="submit" value="Consultar"></input>
          </div>
        </form>
        <div className="resultados">
          <div className="consulta">
            <span>Data consultada</span>
            <div className="infoData"><label>ano-mes-dia</label></div>
            <div><label>{ultimaDataConsultada}</label></div>
          </div>
          <div className="consulta">
            <span>Cotação de Compra</span>
            <div><label>R$ {contacaoCompra}</label></div>
          </div>
          <div className="consulta">
            <span>Cotação de Venda</span>
            <div> <label>R$ {contacaoVenda}</label></div>
          </div>          
        </div>
      </body>

    </div>
  );
}

export default App;