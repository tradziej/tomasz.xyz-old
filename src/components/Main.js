import React from 'react'
import styled from 'styled-components'

import NavLink from '../components/NavLink'
import InstagramPhotos from '../components/InstagramPhotos'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`

const Details = styled.div`
  color: #2e294e;
`

const Skills = () => (
  <li>
    <div>
      <strong>Skills</strong>: Ruby, JavaScript, HTML, Git
    </div>
  </li>
)

const Resume = () => (
  <li>
    <div>
      <strong>Resume</strong>:{' '}
      <NavLink href="https://github.com/tradziej/resume/blob/master/tomasz_radziejewski.pdf">pdf</NavLink>
    </div>
  </li>
)

const Blog = () => (
  <li>
    <div>
      <strong>Blog</strong>: <NavLink href="https://tomasz.xyz">tomasz.xyz</NavLink>
    </div>
    <Details>1 post</Details>
  </li>
)

const LinkedIn = () => (
  <li>
    <div>
      <strong>LinkedIn</strong>: <NavLink href="#">radziejewski</NavLink>
    </div>
    <Details>665 connections</Details>
  </li>
)

const Github = () => (
  <li>
    <div>
      <strong>Github</strong>: <NavLink href="#">tradziej</NavLink>
    </div>
    <Details>54 repositories in 10 languages</Details>
  </li>
)

const Keybase = () => (
  <li>
    <div>
      <strong>Keybase</strong>: <NavLink href="#">tradziej</NavLink>
    </div>
  </li>
)

const Twitter = () => (
  <li>
    <div>
      <strong>Twitter</strong>: <NavLink href="#">tradziej</NavLink>
    </div>
    <Details>6 tweets</Details>
  </li>
)

const Spotify = () => (
  <li>
    <div>
      <strong>Spotify</strong>
    </div>
    <Details>
      recently played track: <NavLink href="">Black Hole Sun</NavLink> by <NavLink href="">Soundgarden</NavLink>
    </Details>
  </li>
)

const Endomondo = () => (
  <li>
    <div>
      <strong>Endomondo</strong>
    </div>
    <Details>I run 10km this week</Details>
  </li>
)

const Instagram = () => (
  <li>
    <div>
      <strong>Instagram</strong>: <NavLink href="#">tom3kr</NavLink>
    </div>
    <Details>11 photos, a few recent ones:</Details>
    <InstagramPhotos
      photos={[
        { src: 'https://picsum.photos/100/100?image=0', url: 'http://google.pl' },
        { src: 'https://picsum.photos/100/100?image=1', url: 'http://google.pl' },
        { src: 'https://picsum.photos/100/100?image=2', url: 'http://google.pl' },
        { src: 'https://picsum.photos/100/100?image=3', url: 'http://google.pl' },
        { src: 'https://picsum.photos/100/100?image=4', url: 'http://google.pl' },
      ]}
    />
  </li>
)

const Main = () => (
  <main>
    <List>
      <Skills />
      <Resume />
      <Blog />
      <LinkedIn />
      <Github />
      <Keybase />
      <Twitter />
      <Spotify />
      <Endomondo />
      <Instagram />
    </List>
  </main>
)

export default Main
