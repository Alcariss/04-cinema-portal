import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Item, Label } from 'semantic-ui-react';
import BuyTicketsButton from './buttons/BuyTicketsButton';

const MovieItem = (props) => {
  const handleBuyClick = () => {
    props.history.push(`/movie/${props.movie.id}/buy`);
  };

  return (
    <Item>
      <Item.Image src='http://www.hans-zimmer.com/~hybrid/zimmer/12YEARSASLAVE.jpg' />

      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>Shortened movie description, try to use just css...</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
          <BuyTicketsButton onClick={handleBuyClick} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

MovieItem.propTypes = {
  history: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};

export default withRouter(MovieItem);