import { useState } from 'react'
import { TextField, MenuItem, Switch, Button, Slider } from '@material-ui/core'
import { Input, InputAdornment, InputLabel, FormControl } from '@material-ui/core'
import { Grid, Typography } from '@material-ui/core'

const UserForm = ({ setData }) => {
  const [province, setProvince] = useState('')
  const [priceRange, setPriceRange] = useState([10000,50000])
  const [kmPerYear, setKmPerYear] = useState(0)
  const [prefNumberOfSeats, setPrefNumberOfSeats] = useState(5)
  const [checked, setChecked] = useState(true)


  const provinces = [
    {
      value: 'AB',
      label: 'Alberta'
    },
    {
      value: 'BC',
      label: 'British Columbia',
    },
    {
      value: 'MB',
      label: 'Manitoba',
    },
    {
      value: 'NB',
      label: 'New Brunswick',
    },
    {
      value: 'NL',
      label: 'Newfoundland and Labrador',
    },
    {
      value: 'NS',
      label: 'Nova Scotia',
    },
    {
      value: 'NT',
      label: 'Northwest Territories',
    },
    {
      value: 'NU',
      label: 'Nunavut',
    },
    {
      value: 'ON',
      label: 'Ontario',
    },
    {
      value: 'PE',
      label: 'Prince Edward Island',
    },
    {
      value: 'QC',
      label: 'Quebec',
    },
    {
      value: 'SK',
      label: 'Saskatchewan',
    },
    {
      value: 'YT',
      label: 'Yukon',
    },
  ];

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  function valuetext(value) {
    return `$${Math.floor(value / 1000)}k`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formMap = new Map()
    formMap['province'] = province
    formMap['priceRange'] = priceRange
    formMap['kmPerYear'] = kmPerYear
    formMap['prefNumberOfSeats'] = prefNumberOfSeats
    formMap['climate'] = (checked ? 'warm' : 'cold')

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formMap)
    }

    // fetch('https://localhost:5000/outputs', requestOptions)
    //   .then(response => response.json())
    //   .then(data => this.setState({ postId: data.id }));

    const res = await fetch('http://localhost:5000/output', requestOptions)
    const data = res.json()

    setData(data)
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <form style={{width: 400}}>
        <FormControl fullWidth={true}>
          <TextField label='Province' select value={province} onChange={(e) => (setProvince(e.target.value))} >
            {provinces.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>

        <FormControl fullWidth={true}>
          <Typography id="range-slider" gutterBottom>
            Price Range
          </Typography>
          <Slider
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            valueLabelFormat={valuetext}
            min={10000}
            max={60000}
          />
        </FormControl>
        
        <FormControl fullWidth={true}>
          <InputLabel>How much do you drive?</InputLabel>
          <Input
            value={kmPerYear}
            onChange={(e) => (setKmPerYear(e.target.value))}
            endAdornment={<InputAdornment position="end">km/year</InputAdornment>}
            inputProps={{
              'aria-label': 'KM per Year',
            }}
            type="number"
          />
        </FormControl>
        
        <FormControl fullWidth={true}>
          <InputLabel>Preferred number of seats</InputLabel>
          <Input
            value={prefNumberOfSeats}
            onChange={(e) => (setPrefNumberOfSeats(e.target.value))}
            endAdornment={<InputAdornment position="end">seats</InputAdornment>}
            type="number"
          />
        </FormControl>
        
        <FormControl>
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Climate: </Grid>
            <Grid item>Cold</Grid>
            <Grid item>
              <Switch
                checked={checked}
                onChange={(e) => (setChecked(e.target.checked))}
              />
            </Grid>
            <Grid item>Warm</Grid>
          </Grid>
        </FormControl>

        <Button fullWidth={true} variant='outlined' color='primary' onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default UserForm;
