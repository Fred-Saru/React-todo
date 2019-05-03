import React from 'react';

export class Accordion extends React.Component {
  state = {
    active: -1
  };

  onShow = (i) => {
    this.setState({
      active: i
    });
  };

  render() {
    const children = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        active: this.state.active === i ? 'true' : undefined,
        onShow: () => this.onShow(i)
      });
    });

    return (
      <div className="accordion collection">
        {children}
      </div>
    );
  }
};