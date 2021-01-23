import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    width: 300,
  },
});

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([10000, 50000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `$${Math.floor(value / 1000)}k`;
  }

  return (
    <div className={classes.root}>
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
