import { FC, useState } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import Note from './Note'
import FormModal from './FormModal'
import { INote } from '../../interfaces/interfaces'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const Notes: FC = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [notes, setNotes] = useState<INote[]>([])
  return (
    <>
      <FormModal
        hooks={[isFormModalOpen, setIsFormModalOpen, notes, setNotes]}
      />
      <Stack direction='row' spacing={2} mb='3rem'>
        <Typography variant='h4' fontWeight={800}>
          Notes
        </Typography>
        <Button
          variant='outlined'
          color='secondary'
          onClick={() => setIsFormModalOpen(true)}
        >
          Add new note
        </Button>
      </Stack>
      <Box>
        {notes.length !== 0 ? (
          <Grid2 container spacing={2}>
            {notes.map((i: INote) => {
              return (
                <Grid2 xs={12} md={6} key={i.id}>
                  <Note title={i.title} description={i.description} id={i.id} />
                </Grid2>
              )
            })}
          </Grid2>
        ) : (
          <Typography variant='body1'>No notes!</Typography>
        )}
      </Box>
    </>
  )
}

export default Notes
