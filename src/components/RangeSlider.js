import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


export default function RangeSlider() {
  const [value, setValue] = React.useState([10000, 50000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `$${Math.floor(value / 1000)}k`;
  }

  return (
    <div>
      <Typography id="range-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={valuetext}
        min={10000}
        max={60000}
      />
    </div>
  );
}
