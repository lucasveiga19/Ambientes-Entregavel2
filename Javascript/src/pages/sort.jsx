import { useState } from 'react'
import Layout from '../components/Layout'
import { quickSort } from '../functions/algorithmFunc'
import { Main, Header, Title, SubTitle, InputContainer, Input, Button, Result } from '../styles/StylePageV2'

export default function Sort() {
    const [text, setText] = useState(null)
    const [lst,setLst] = useState(null)

    function handleClick(){
        if(text === null || getListNumber().length<=0){
            setLst(null)
            return
        }
        const sortList = quickSort(getListNumber())
        setLst(sortList)  
    }

    function getListNumber(){
        const lstTxt = text.split(' ')
        const lstNumber = lstTxt
                            .filter(x=>!isNaN(x) && x!=='')
                            .map(x=>{return parseFloat(x)})
        return lstNumber
      }

    function renderResult(){
        return <Result><b>{lst.join(', ')}</b></Result>
    }

    return (
        <Layout
            title="Quick Sort"
            description="O algoritmo vai ordernar uma lista passada utilizando metodo de quick sort"
        >
            <Main>
                <Header>
                    <Title>Digite a Lista que deseja ordenar</Title>
                    <SubTitle>Use espaço para dividir os itens exemplo: <strong>{`"3 8 2.2 42"`}</strong> que vai ser igual a <strong>{`"3, 8, 2.2, 42"`}</strong></SubTitle>
                </Header>
                <InputContainer>
                    <Input onChange={({target})=>setText(target.value)}/>
                    <Button onClick={()=>handleClick()}>Ordenar</Button>
                </InputContainer>
                {lst&&renderResult()}
            </Main>
        </Layout>
    )
}
