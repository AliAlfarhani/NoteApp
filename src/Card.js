import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
export const MediaCard = ({ id, title, body, img, setNotes, notes }) => {
  const deleteNote = (e, noteId) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id).map((note) => note)
    )

    if (notes.length === 1) {
      console.log('wa7ashtini!')
      setTimeout(() => {
        localStorage.clear()
      }, 0)
    }
  }

  return (
    <Card sx={{ minWidth: 375 }}>
      <CardMedia component='img' height='250' image={img} alt='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {body}
        </Typography>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <i
            className='fas fa-trash-alt'
            id={id}
            onClick={(e) => deleteNote(e, id)}
          />
        </CardActions>
      </CardContent>
    </Card>
  )
}
