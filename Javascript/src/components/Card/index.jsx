import Link from 'next/link'
import React from 'react'
import {CardMain,Title} from './styles'

export default function Card(props) {
  return (
    <Link href={props.path} passHref>
      <CardMain>
          <Title>
              {props.name}
          </Title>
      </CardMain>
    </Link>
  )
}
