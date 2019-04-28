import React from 'react';

export class ColorPicker extends React.Component {
  state = {
    colors: [
      'red',
      'pink',
      'purple',
      'deep-purple',
      'indigo',
      'blue',
      'light-blue',
      'cyan',
      'teal',
      'green',
      'light-green',
      'lime',
      'yellow',
      'amber',
      'orange',
      'deep-orange'
    ]
  };

  render() {
    const { colors } = this.state;

    return (
      <div>
        <div className="pointer color-display">
          <span className="red color-tile" />
        </div>
        <div className="color-list">
          <div className="arrow-up_outline" />
          <div className="arrow-up" />
          {colors &&
            colors.map((color) => {
              return (
                <span key={color} className={`${color} pointer color-tile`} />
              );
            })}
        </div>
      </div>
    );
  }
}
