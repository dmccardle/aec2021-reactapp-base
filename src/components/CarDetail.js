import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import { CheckCircle } from '@material-ui/icons'
import { Card, CardMedia } from '@material-ui/core'
import { List, ListItem } from '@material-ui/core';

const CarDetail = ({props}) => {
  const isPEV = props.type === 'PEV'

  return (
    <div>
      <Typography variant="h3">
        {isPEV ? 'PEV' : 'Gas'} {props.selected && <CheckCircle/>}
      </Typography>
      <img src={props.image}/>
      <div>
        <List>
          <ListItem>Base Price: ${props.basePrice}</ListItem>
        </List>
      </div>
    </div>
  )
}

CarDetail.defaultProps = {
  selected: false,
}

CarDetail.propTypes = {
  selected: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  basePrice: PropTypes.number,
  costOver5Years: PropTypes.array,
  emissions: PropTypes.string,
}

export default CarDetail
