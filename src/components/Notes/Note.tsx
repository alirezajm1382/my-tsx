import { INote } from '../../interfaces/interfaces'
import {
  Card as MuiCard,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Stack,
} from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'

const Note = ({ title, description, id }: INote) => {
  return (
    <MuiCard variant='outlined' sx={{ padding: '1rem' }}>
      <CardContent sx={{ textAlign: 'left' }}>
        <Stack direction='column'>
          <Typography variant='h4' fontWeight={700}>
            {title + ' '}
            <Typography variant='caption' color='text.secondary'>
              #{id.toString()}
            </Typography>
          </Typography>
          <Typography variant='body1'>{description}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack direction='row' justifyContent='flex-end' width='100%'>
          <IconButton id='edit'>
            <EditIcon />
          </IconButton>
          <IconButton color='error' id='delete'>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </MuiCard>
  )
}

export default Note
