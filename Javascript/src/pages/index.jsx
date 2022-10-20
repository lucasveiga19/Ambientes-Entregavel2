
import Card from '../components/Card'
import {Main,Header,Title,SubTitle,CardContainer} from '../styles/Home'

export default function Home() {
  const list = [
    {number:1,name:"Número Primo",path:"prime"},
    {number:2,name:"Somatório",path:"sum"},
    {number:3,name:"Fibonacci",path:"fibo"},
    {number:4,name:"Máximo divisor comum",path:"mdc"},
    {number:5,name:"Quick Sort",path:"sort"},
    {number:6,name:"Contagem",path:"cont"},
  ]

  return (
    <Main>
      <Header>
        <Title>Javascript</Title>
        <SubTitle>Trabalho de Ambientes de Desenvolvimento de software</SubTitle>
        <SubTitle>Lucas Uchôa da Veiga</SubTitle>
      </Header>
      <CardContainer>
        {
          list.map(item=><Card number={item.number} name={item.name} path={item.path} key={item.number}/>)
        }
      </CardContainer>
    </Main>
  )
}
