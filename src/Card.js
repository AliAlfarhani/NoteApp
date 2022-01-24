import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export const MediaCard = ({ title, body, img }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='200' image={img} alt='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  )
}
