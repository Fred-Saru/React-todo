import React from 'react';

export class ColorPicker extends React.PureComponent {
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
    ],
    isOpen: false,
    selectedColor: this.props.color || 'red'
  };

  componentDidMount() {
    this.props.colorChange(this.state.selectedColor);

    document.addEventListener('click', this.handleCloseColorList);
  }

  handleCloseColorList = (e) => {
    if(this.state.isOpen && !this.picker.contains(e.target)) {
      this.setState({
        isOpen: false
      });
    }
  };

  handleOpenColorList = (e) => {
    e.stopPropagation();
    const { isOpen } = this.state;
    
    this.setState({
      isOpen: !isOpen
    });
  };

  handleColorSelection = (e) => {
    const color = e.target.dataset.color;
    this.setState({
      selectedColor: color
    });

    this.setState({
      isOpen: false
    });
    this.props.colorChange(color);
  };

  setPicker = (node) => {
    this.picker = node;
  };

  render() {
    const { colors, isOpen, selectedColor } = this.state;

    return (
      <div className="color-picker" ref={this.setPicker}>
        <div className="pointer color-display" onClick={this.handleOpenColorList}>
          <span className={`color-tile ${selectedColor}`} />
        </div>
        <div className={`color-list ${isOpen ? '' : 'hidden'}`}>
          <div className="arrow-up_outline" />
          <div className="arrow-up" />
          {colors &&
            colors.map((color) => {
              return (
                <span key={color} data-color={color} className={`${color} pointer color-tile`} onClick={this.handleColorSelection} />
              );
            })}
        </div>
      </div>
    );
  }
}
