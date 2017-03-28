import React, {Component} from 'react';
import {
  Container,
  Header,
  Segment,
  Divider,
  Statistic,
  Icon,
  Item
} from 'semantic-ui-react';
import PayButton from './buttons/PayButton';
import Order from './Order';

class Checkout extends Component {
  handlePay () {
    console.log('TODO');
  }

  renderOrder (order) {
    return (
      <Order key={order.id} order={order} />
    );
  }

  render() {
    const orders = [{id: 1}, {id: 2}].map(this.renderOrder);

    return (
      <Container>
        <Header as='h2' attached='top'>
          Your orders
        </Header>
        <Segment attached>
          <Item.Group>
            {orders}
          </Item.Group>
          <Divider section/>
          <div style={{float: 'right'}}>
              <Statistic>
                <Statistic.Value>
                  <Icon name='dollar'/>
                  5
                </Statistic.Value>
                <Statistic.Label>Total amount</Statistic.Label>
              </Statistic>
            <PayButton onClick={this.handlePay} />
          </div>
          <div style={{clear: 'both'}}></div>
        </Segment>
      </Container>
    );
  }
}

export default Checkout;