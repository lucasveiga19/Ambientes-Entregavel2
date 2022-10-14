import Layout from '../components/Layout'
import { useState } from 'react'
import {Main,Title,InputContainer,Input,Button} from '../styles/StylePageV1'
import { isPrime } from '../functions/algorithmFunc'

export default function Prime() {
  const [number,setNumber] = useState(null)

  function renderResult(){
    if(isNaN(number) || number===null)
      return null
    
    const prime = isPrime(number)
    const color = prime ? "var(--green-ligth)":"var(--red)"

    return(
      <h1 style={{color:color}}>{prime ? `${number} é primo`:`${number} NÃO é primo`}</h1>
    )
  }

  return (
    <Layout 
        title="Número Primo" 
        description="Desafio para verificar se o número é primo"
    >
      <Main>
        <Title>Digite o número que deseja verificar</Title>
        <InputContainer>
          <Input type="number" min={0} onChange={({target})=>setNumber(target.valueAsNumber)}/>
        </InputContainer>
        {renderResult()}
      </Main>
    </Layout>
  )
}
