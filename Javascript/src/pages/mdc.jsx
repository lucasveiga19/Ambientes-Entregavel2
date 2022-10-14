import {useState} from 'react'
import Layout from '../components/Layout'
import { mdc } from '../functions/algorithmFunc'
import {Main,Title,RowInputContainer,Input} from '../styles/StylePageV1'
import {Button, Result} from '../styles/StylePageV2'

export default function Mdc() {
  const [numbers,setNumbers] = useState({
    valueA:null,
    valueB:null
  })

  const [mdcResult,setMdcResult] = useState(null)

  function handleValueA(value){
    if(isNaN(value)){
      setNumbers({valueA:null,valueB:numbers.valueB})
      setMdcResult(null)
      return 
    }

    setNumbers({valueA:value,valueB:numbers.valueB})
  }

  function handleValueB(value){
    console.log('value: '+value)
    if(isNaN(value)){
      setNumbers({valueA:numbers.valueA,valueB:null})
      setMdcResult(null)
      return 
    }

    setNumbers({valueA:numbers.valueA,valueB:value})
  }

  function isValid(){
    return numbers.valueA !== null && numbers.valueB !== null && numbers.valueA>0 && numbers.valueB>0;
  }

  function updateMdc(){
    if(!isValid()){
      setMdcResult(null)
      return
    }
       
    
    const value = mdc(numbers.valueA,numbers.valueB)
    setMdcResult(value);
  }


  return (
    <Layout 
        title="Máximo Divisor Comum" 
        description="O algoritmo vai receber dois inteiros A e B e retornar o maior divisor entre eles"
    >
        <Main>
            <Title>Digite os numeros que deseja calcular o MDC</Title>
            <RowInputContainer>
                <Input type="number" onChange={({target})=>handleValueA(target.valueAsNumber)} min={1}/>
                <Input type="number" onChange={({target})=>handleValueB(target.valueAsNumber)} min={1}/>
            </RowInputContainer>
            <Button onClick={()=>updateMdc()}>Calcular</Button>
            {mdcResult&&<Result>O MDC é igual a <b>{mdcResult}</b></Result>}
        </Main>
    </Layout>
  )
}
