import React from 'react'
import HomeLink from '../HomeLink'
import {Main,Header,Title,Subtitle,Content} from './styles'

export default function Layout(props) {
  return (
    <Main>
        <Header>
            <Title>{props.title}</Title>
            <Subtitle>{props.description}</Subtitle>
        </Header>
        <Content>
            {props.children}
        </Content>
        <HomeLink/>
    </Main>
  )
}
