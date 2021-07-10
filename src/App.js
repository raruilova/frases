import React, {useState,useEffect} from "react";
import styled from "@emotion/styled";
import Frase from './components/Frase';

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor: pointer;
  transition: background-size .8s ease;
  :hover{
    background-size: 400px;
  }
`;
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  //state de frase 
  const [frase,guardarFrase]=useState({});

  //datos con asyc y await, accediendo a una api
  const consultarApi=async ()=>{

      const frase= await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      const data= await frase.json();
      guardarFrase(data[0]); 
    
  }

  //cargar una frase automaticamente
  useEffect(()=>{
    consultarApi();
  },[]);//siempre el segundo parametro en []

  return (
    <Contenedor>
      <Frase
      frase={frase}/>
      <Boton onClick={consultarApi}>{/**otra manera es en le onclick={()=>nombreFuncion()}, otra es solo la funcion(), pero esa se ejecuta sin que de click */}
        Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
