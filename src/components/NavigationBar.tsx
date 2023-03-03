import { FC, useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Stack,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import {
  Article as ArticleIcon,
  GitHub as GitHubIcon,
  Menu as MenuIcon,
  Note as NoteIcon,
} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

const NavigationBar: FC = () => {
  const navigate = useNavigate()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleClose = () => {
    setIsDrawerOpen(false)
  }

  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction='row' spacing={2} alignItems='center'>
          <IconButton color='inherit' onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <Typography variant='h5' fontWeight={500}>
              TSX App
            </Typography>
          </Link>
        </Stack>
        <Button color='inherit' startIcon={<GitHubIcon />}>
          View on GitHub
        </Button>
        <Drawer anchor='left' open={isDrawerOpen} onClose={handleClose}>
          <Box sx={{ width: 250 }}>
            <List>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    navigate('/notes')
                    handleClose()
                  }}
                >
                  <ListItemIcon>
                    <NoteIcon />
                  </ListItemIcon>
                  <ListItemText>Notes</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    navigate('/doc')
                    handleClose()
                  }}
                >
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText>Documentation</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar
