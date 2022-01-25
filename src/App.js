import React, { useState, useEffect } from 'react'
import { Wrapper } from './AppStyle'
import Button from '@mui/material/Button'
import { Container, Paper } from '@mui/material'
import { MediaCard } from './Card'
import { uuid } from 'uuidv4'
const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [notes, setNotes] = useState([])

  const createNote = (e) => {
    e.preventDefault()
    let newId = uuid()
    setNotes((prev) => [
      ...prev,
      { id: newId, title: inputValue, body: textAreaValue, img: imgUrl },
    ])
  }

  useEffect(() => {
    localStorage.getItem('notes')
      ? setNotes(JSON.parse(localStorage.getItem('notes')))
      : setNotes([
          {
            id: 1,
            title: `Ali's first Note!`,
            body: `This msg is from ali!`,
            img: 'https://imengine.gota.infomaker.io/?uuid=9c405fec-615b-5fe9-8085-c9e465a94c9e&width=960&height=640&type=preview&source=false&q=90&z=100&x=0.000&y=0.000&crop_w=1.000&crop_h=1.000&function=cropresize',
          },
          {
            id: 2,
            title: `Fadil's first Note!`,
            body: `This msg is from Fadil!`,
            img: 'https://avatars.githubusercontent.com/u/18538595?v=4',
          },
          {
            id: 3,
            title: `Fadil's first Note!`,
            body: `This msg is from Fadil!`,
          },
        ])
  }, [])
  useEffect(() => {
    let isLoading = true
    if (isLoading) {
      localStorage.setItem('notes', JSON.stringify(notes))
    }
    return () => (isLoading = false)
  }, [notes])

  return (
    <Wrapper>
      <Container maxWidth='lg'>
        <div className='wrapper-container'>
          <h1>Alis Note App React!</h1>
          <form>
            <label>Title</label>
            <input
              type='text'
              placeholder='Please insert a title...'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <label>Image-url</label>
            <input
              type='text'
              placeholder='Please insert a title...'
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <label>Body text</label>
            <textarea
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.target.value)}
              rows='5'
              placeholder='Type your message here....'
            />
            <Button variant='contained' onClick={(e) => createNote(e)}>
              Add
            </Button>
          </form>
          <div className='search'>
            <label>Search</label>
            <input
              type='text'
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>
          <div className='notes-container'>
            {notes &&
              notes
                .filter(
                  ({ title, body }) =>
                    title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                    body.toLowerCase().includes(searchFilter.toLowerCase())
                )
                .map(({ id, title, body, img }, i) => {
                  return (
                    <MediaCard
                      key={id}
                      id={id}
                      title={title}
                      body={body}
                      img={img ? img : 'https://picsum.photos/200/300'}
                      setNotes={setNotes}
                      notes={notes}
                    />
                  )
                })}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default App
