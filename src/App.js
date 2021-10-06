import React,{useState,useEffect} from 'react'

const App = () => {
  const [title,setTitle] = useState('')
  const [body, setBody] = useState('')
  const [notes, setNotes] = useState([])
  const deleteNote = (id) => {
     notes.filter((note)=> note.id !== id)


  }

  return (
    <div style={{margin:'0 auto',marginTop: '50px', width: '250px'}}>
    <form>
      <label forhtml='title'>Title:</label>
        <input type='text' onChange={(e) => setTitle(e.target.value)} />
      <label forhtml='title'>Body:</label>
        <input type='text'  onChange={(e) => setBody(e.target.value)} />
      <button onClick={ (e) => {
        e.preventDefault()
        setNotes([...notes, {id:  notes.length + 1 , title, body}])}}>Add</button>
    </form>
    <ul>
      {notes.map(({id,title,body})=>(
        <li key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
          <button onClick={(e) => deleteNote(id)}>Delete Note</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default App



 