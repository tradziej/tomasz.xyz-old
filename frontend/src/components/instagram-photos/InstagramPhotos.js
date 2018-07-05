import React from 'react'
import styled from 'styled-components'
import { media } from '@styles'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Photo = styled.li`
  display: inline-block;
  padding-right: 10px;
  ${media.phone`
    display: block;
    margin: 0;
    padding: 0;
  `};
`

const Image = styled.img`
  height: 110px;
  ${media.phone`
    width: 100 %;
    height: auto;
    margin: 0;
  `};
`

const InstagramPhotos = ({ photos }) => {
  const items = photos.map((photo, index) => (
    <Photo key={index}>
      <a href={photo.url}>
        <Image src={photo.src} alt={photo.caption} />
      </a>
    </Photo>
  ))

  return <List>{items}</List>
}

export default InstagramPhotos
