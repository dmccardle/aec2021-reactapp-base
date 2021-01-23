import Paper from '@material-ui/core/Paper';

import { ArgumentAxis, ValueAxis, Chart, LineSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale } from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';


const PriceGraph = ({ props }) => {
  // [ { car 1 }, { car 2} ] 
  const car1 = props[0]
  const car2 = props[1]

  const calculateSumOfYears = (years, car) => {
    let sum = 0
    let i = 0
    console.log('years input: ' + years)
    while (i < years) {
      sum += car.costOver5Years[i]
      console.log('running sum: ' + sum)
      i++
    }
    console.log(sum)
    return sum
  }

  const graphData = [
    { argument: 0, car1: car1.basePrice, car2: car2.basePrice },
    { argument: 1, car1: car1.basePrice + calculateSumOfYears(1, car1), car2: car2.basePrice + calculateSumOfYears(1, car2) },
    { argument: 2, car1: car1.basePrice + calculateSumOfYears(2, car1), car2: car2.basePrice + calculateSumOfYears(2, car2) },
    { argument: 3, car1: car1.basePrice + calculateSumOfYears(3, car1), car2: car2.basePrice + calculateSumOfYears(3, car2) },
    { argument: 4, car1: car1.basePrice + calculateSumOfYears(4, car1), car2: car2.basePrice + calculateSumOfYears(4, car2) },
    { argument: 5, car1: car1.basePrice + calculateSumOfYears(5, car1), car2: car2.basePrice + calculateSumOfYears(5, car2) }



    // { argument: 2, value: props.basePrice + props.costOver5Years[0] 
    //   + props.costOver5Years[1] },
    // { argument: 3, value: props.basePrice + props.costOver5Years[0] 
    //   + props.costOver5Years[1] + props.costOver5Years[2] },
    // { argument: 4, value: props.basePrice + props.costOver5Years[0] 
    //   + props.costOver5Years[1] + props.costOver5Years[2] 
    //   + props.costOver5Years[3] },
    // { argument: 5, value: props.basePrice + props.costOver5Years[0] 
    //   + props.costOver5Years[1] + props.costOver5Years[2] 
    //   + props.costOver5Years[3]+ props.costOver5Years[4] },
  ]

  return (
    <Paper>
      <Chart data={graphData} >
        <Title text="Price over 5 years" />
        <Legend />
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="car1" argumentField="argument" name={car1.name} />
        <LineSeries valueField="car2" argumentField="argument" name={car2.name} />
      </Chart>
    </Paper>
  )
}

export default PriceGraph
