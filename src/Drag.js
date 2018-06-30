import React, { Component } from 'react';
import { Card } from 'Elements';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';

const AnimCard = Card.withComponent(animated.div);

class Drag extends Component {
  render () {
  return(
    <Gesture>
    {({ down, xDelta }) => (

      <Spring
        native
        to={{
          x: down ? xDelta : 0
        }}
        immediate={name => down && name === 'x'}
      >

      {({x}) => (
        <AnimCard
        style={{
          transform: x.interpolate(x => `translateX(${x}px)`)
        }}>
          <h1>Drag Me</h1>
        </AnimCard>
      )}

      </Spring>
      )}
      </Gesture>
    );
  }
}

export default Drag;
