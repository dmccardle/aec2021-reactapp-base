import { useState } from 'react'
import { TextField, MenuItem, Slider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import RangeSlider from './RangeSlider'

const UserForm = () => {
  const [province, setProvince] = useState('')
  const [priceRange, setPriceRange] = useState([10000,50000])
  const [mileage, setMileage] = useState(false)
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
        <TextField label='Province' select value={province} onChange={(e) => (setProvince(e.target.value))} >
          {provinces.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <RangeSlider />

      </form>
    </div>
  )
}

export default UserForm;
