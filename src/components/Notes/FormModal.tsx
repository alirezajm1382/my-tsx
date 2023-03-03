import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  TextField,
  Stack,
} from '@mui/material'
import { IFormModal } from '../../interfaces/interfaces'
import { useForm } from 'react-hook-form'
import { customAlphabet } from 'nanoid'

const FormModal = ({ hooks }: IFormModal) => {
  const nanoid = customAlphabet('0123456789', 8)
  const { handleSubmit, register } = useForm()
  const [isFormModalOpen, setIsFormModalOpen, notes, setNotes] = hooks
  const handleClose = () => setIsFormModalOpen(false)
  const onSubmit = handleSubmit((data) => {
    setNotes([...notes, { ...data, id: nanoid() }])
    handleClose()
  })
  return (
    <Dialog open={isFormModalOpen} onClose={handleClose} fullWidth>
      <form onSubmit={onSubmit}>
        <DialogTitle>Add a new note</DialogTitle>
        <DialogContent>
          <Stack direction='column' spacing={2} pt='.5rem' position='relative'>
            <TextField
              label='Title'
              variant='outlined'
              {...register('title')}
              required
            />

            <TextField
              rows={6}
              multiline
              label='Description'
              variant='outlined'
              {...register('description')}
              required
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Stack direction='row' justifyContent='flex-end' spacing={1}>
            <Button variant='outlined' color='error' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='contained' color='success' type='submit'>
              Save
            </Button>
          </Stack>
        </DialogActions>
      </form>
    </Dialog>
  )
}
export default FormModal
