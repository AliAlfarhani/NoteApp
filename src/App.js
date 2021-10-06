import {useState} from 'react'

function App() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setNotes([...notes,{
      id:notes.length+1,
      title: title,
      body: body
    }])
    e.target[0].value = ''
    e.target[1].value = ''
  }

  const handleDelete = (e) => {
    notes.filter((note)=> {return note.id !== e.target.value} )

  }

  return (
    <>
      <h1>Note App</h1>
      <p>Ali mannen du lär dig snabbt mashaallah!</p>
      <form onSubmit={handleSubmit}>
        <lable>
        Titel:
          <input type='text' onChange={(e)=>setTitle(e.target.value)} />
        </lable>
        <br/>
        <lable>
        Anteckning:
          <input type='text' onChange={(e)=>setBody(e.target.value)} />
        </lable>
        <br />
        <button>Lägg till</button>
      </form>
    <ul>
    {
      notes.map(({id, title, body}) =>(
        <li key={id}>
          <h2> {title} </h2>
          <p> {body} </p>
          <button onClick={ (e) => handleDelete(id) } value={id}>Delete</button>
        </li>
      ))
    }
    </ul>
    </>
  );
}

export default App;