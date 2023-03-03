import { Typography, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Card from './Card'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <>
      <Typography variant='h2' mb={2}>
        Welcome
      </Typography>
      <Typography variant='body1' color='text.secondary'>
        Just started learning TS
      </Typography>
      <br />
      <Typography variant='subtitle1' mt='3rem'>
        Libraries used:
      </Typography>
      <Grid
        container
        sx={{ mt: '1rem', width: 'fit-content', margin: 'auto' }}
        spacing={2}
      >
        <Grid xs={12} md={6} sx={{ margin: 'auto', height: 'auto' }}>
          <Card
            variant='outlined'
            action={
              <Link to='http://mui.com' target='_blank'>
                <Button size='small'>Learn More</Button>
              </Link>
            }
          >
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Components
            </Typography>
            <Typography variant='h5' component='div'>
              MUI
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              mui.com
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} md={6} sx={{ margin: 'auto', height: 'auto' }}>
          <Card
            variant='outlined'
            action={
              <Link to='http://axios-http.com' target='_blank'>
                <Button size='small'>Learn More</Button>
              </Link>
            }
          >
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              API related
            </Typography>
            <Typography variant='h5' component='div'>
              Axios
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              axios-http.com
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} md={6} sx={{ margin: 'auto', height: 'auto' }}>
          <Card
            variant='outlined'
            action={
              <Link to='http://react-hook-form.com' target='_blank'>
                <Button size='small'>Learn More</Button>
              </Link>
            }
          >
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Form-handling
            </Typography>
            <Typography variant='h5' component='div'>
              react-hook-form
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              react-hook-form.com
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} md={6} sx={{ margin: 'auto', height: 'auto' }}>
          <Card
            variant='outlined'
            action={
              <Link to='http://react-query-v3.tanstack.com' target='_blank'>
                <Button size='small'>Learn More</Button>
              </Link>
            }
          >
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              API related + state management
            </Typography>
            <Typography variant='h5' component='div'>
              react-query
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              react-query-v3.tanstack.com
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
export default Home
