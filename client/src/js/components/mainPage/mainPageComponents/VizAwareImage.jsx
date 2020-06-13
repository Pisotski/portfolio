/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import VizSensor from 'react-visibility-sensor';

class VizAwareImg extends React.Component {
  state = {
    imgViz: false,
  }

  render() {
    const { src, side } = this.props;

    return (
      <VizSensor
        // partialVisibility
        offset={{ bottom: -150 }}
        onChange={(isVisible) => {
          this.setState({ imgViz: isVisible });
        }}
      >
        <img
          src={src}
          style={{
            zIndex: 1,
            width: 300,
            height: 300,
            float: side,
            opacity: this.state.imgViz ? 1 : 0.25,
            transition: 'opacity 500ms linear',
          }}
        />
      </VizSensor>
    );
  }
}

export default VizAwareImg;
