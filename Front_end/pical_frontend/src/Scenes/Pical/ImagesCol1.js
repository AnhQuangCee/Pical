import React, { Component } from 'react';

class ImagesCol1 extends Component {
    render() {
        return (
            <div>
                <img src={this.props.link} style={{ width: '100%' }} alt="true" />
            </div>
        );
    }
}

export default ImagesCol1;