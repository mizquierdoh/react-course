import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.jpeg';

class App extends Component {

    state = { displayBio: false };

    toogleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        let bio = this.state.displayBio ? (
            <div>
                <p>Thing 1</p>
                <p>Thing 2</p>
                <button onClick={this.toogleDisplayBio}>Show less</button>
            </div>
        ) : (
                <div>
                    <button onClick={this.toogleDisplayBio}>Read more</button>
                </div>


            );

        return (
            <div>
                <img src={profile} alt='Profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Miguel.</p>
                <Title />
                {bio}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />


            </div>
        )
    }

}


export default App;