import { Grid, GridItem }  from '@material-ui/core';
import CarDetail from './CarDetail';

const CarResult = () => {
  const data1 = {
    selected: true,
    type: "PEV",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg",
    name: "Honda Civic",
    basePrice: "20000",
    costOver5Years: [100, 200, 300, 100, 100],
    emissions: "100"
  }

  const data2 = {
    selected: false,
    image: "https://upload.https://images.honda.ca/models/H/Models/2021/civic_sedan/touring_10666_241modern_steel_metallic_front.png?width=1000.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg",
    name: "Not Honda Civic",
    basePrice: 22000,
    costOver5Years: [100, 200, 300, 100, 100],
    emissions: "200"
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <CarDetail props={data1} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CarDetail props={data2}/>
      </Grid>
    </Grid>
  )
}

export default CarResult
