import Typography from '@material-ui/core/Typography';
import { CheckCircle } from '@material-ui/icons';


const CarDetail = ({ props }) => {
  const isPEV = props.type === 'PEV'

  return (
    <div>
      <Typography variant="h4">
        {isPEV ? 'PEV' : 'Gas'} {props.selected && <CheckCircle/>}
      </Typography>
      <img alt="car" style={{width: 200}} src={props.image}/>
      <Typography variant="h6">
        Base Price: ${props.basePrice}
      </Typography>
      <Typography variant="h6">
        Number of seats: {props.numberOfSeats}
      </Typography>
    </div>
  )
}

export default CarDetail
