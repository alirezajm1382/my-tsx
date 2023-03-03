import { FC } from 'react'
import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import './Root.css'
import theme from './theme/theme'
import Notes from './components/Notes/Notes'
import Doc from './components/Doc/Doc'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home/Home'

const Error404: FC = () => {
  return <Typography variant='h5'>Error</Typography>
}

const Root: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <NavigationBar />
        <Container
          maxWidth='md'
          sx={{ padding: '2rem 1rem', textAlign: 'center' }}
        >
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='notes' element={<Notes />} />
            <Route path='doc' element={<Doc />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default Root
