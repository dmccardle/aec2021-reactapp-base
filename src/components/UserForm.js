import { useState } from 'react'
import { TextField, MenuItem, Slider } from '@material-ui/core'
import { FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core'

import RangeSlider from './RangeSlider'

const UserForm = () => {
  const [province, setProvince] = useState('')
  const [priceRange, setPriceRange] = useState([10000,50000])
  const [kmPerYear, setKmPerYear] = useState(0)
  const [minNumberOfSeats, setMinNumberOfSeats] = useState(5)
  const [climate, setClimate] = useState('warm')


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

  return (
    <div>
      <form>
        <FormControl>
          <TextField label='Province' select value={province} onChange={(e) => (setProvince(e.target.value))} >
            {provinces.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl>
          <RangeSlider />
        </FormControl>
        <FormControl>
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

          
      </form>
    </div>
  )
}

export default UserForm;
