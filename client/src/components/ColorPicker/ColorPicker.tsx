import * as React from 'react';

interface ColorPickerProps {
  color: string;
  colorChange: (color: string) => void;
} 

export class ColorPicker extends React.PureComponent<ColorPickerProps, {}> {
  private picker: HTMLDivElement;

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
  }

  handleToggleColorList = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  handleCloseColorList = () => {
    this.setState({
      isOpen: false
    });
  };

  handleOpenColorList = () => {   
    this.setState({
      isOpen: true
    });
  };

  handleColorSelection = (e: React.MouseEvent<HTMLElement>) => {
    const color = e.currentTarget.dataset.color;
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
        <div className="pointer color-display" onClick={this.handleToggleColorList}>
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
