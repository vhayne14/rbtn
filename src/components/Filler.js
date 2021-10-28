import React, { Component } from 'react';
import { Parallax } from 'react-parallax'

export class Filler extends Component {
    render() {
        return (
            <div>
                <Parallax bgImage={ 'images/parallax1.jpg'} strength={500}>
                    <div style={{ height: 1000 }}></div>
                </Parallax>
            </div>
        )
    }
}

export default Filler
