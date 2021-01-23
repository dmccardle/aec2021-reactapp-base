import { Grid, GridItem }  from '@material-ui/core';
import CarDetail from './CarDetail';

const CarResult = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <CarDetail />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CarDetail />
      </Grid>
    </Grid>
  )
}

export default CarResult
