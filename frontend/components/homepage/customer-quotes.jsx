import React, { Component } from 'react';

class CustomerQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currSlide: 1
        };
    }

    img(url) {
        return (
            <img src={url}></img>
        );
    }

    placeholdIt(slideNum) {
        return `http://placehold.it/400x300/?text=${slideNum}`;
    }

    createSlides(num) {
        let slides = [];

        for (let i = 1; i <= num; i++) {
            let imgUrl = this.placeholdIt(i);
            slides.push(imgUrl);
        }
        return slides;
    }

    render() {
        let slides = this.createSlides(5);

        return (
            <div className="customer-quotes">
                <button>
                    <svg width="60px" height="80px" viewBox="0 0 50 80">
                        <polyline fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                            45.63,75.8 0.375,38.087 45.63,0.375 "/>
                    </svg>
                </button>
                {this.img(slides[this.state.currSlide - 1])}
                <button>
                    <svg width="60px" height="80px" viewBox="0 0 50 80">
                        <polyline fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                            0.375,0.375 45.63,38.087 0.375,75.8 "/>
                    </svg>
                </button>
            </div>
        );
    }
}

export default CustomerQuotes;
