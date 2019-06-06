import React, { Component } from 'react';

const TITLES = [
    'an engineer', 'a music lover', 'an enthusiastic learner', 'a fantastic worker', 'a better person'
]

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout)
    }

    render() {
        const { fadeIn, titleIndex } = this.state;

        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true });
            setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);


    }


}

export default Title;