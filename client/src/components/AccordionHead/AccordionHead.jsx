import React from 'react';

export class AccordionHead extends React.Component {
    render() {
        const { onShow } = this.props;
        
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}