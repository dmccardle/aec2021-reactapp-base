import { Grid }  from '@material-ui/core';
import CarDetail from './CarDetail';
import PropTypes from 'prop-types';
import PriceGraph from './PriceGraph';


const CarResult = ({ data }) => {
  const testdata = [
    {
      selected: true,
      type: "PEV",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg",
      name: "Honda Civic",
      basePrice: 20000,
      costOver5Years: [100, 100, 100, 100, 100],
      emissions: "100",
      numberOfSeats: 5,
    },
    {
      selected: false,
      type: "GAS",
      image: "https://upload.https://images.honda.ca/models/H/Models/2021/civic_sedan/touring_10666_241modern_steel_metallic_front.png?width=1000.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg",
      name: "Not Honda Civic",
      basePrice: 22000,
      costOver5Years: [100, 200, 300, 400, 500],
      emissions: "200",
      numberOfSeats: 5,
    }
  ]

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <CarDetail props={testdata[0]} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CarDetail props={testdata[1]}/>
      </Grid>
      <Grid item sm={12}>
        <PriceGraph props={testdata} />
      </Grid>
    </Grid>
  )
}

CarResult.propTypes = {
  data: PropTypes.array,
}

export default CarResult
