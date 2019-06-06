import React, { Component } from 'react';

class Tracks extends Component {

    state = { playing: false, audio: null, playingPreviewUrl: null };

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);
        audio.volume = 0.25;
        if (!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
        } else {
            this.state.audio.pause();
            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({ playing: false });
            } else {
                audio.volume = 0.25;
                audio.play();
                this.setState({ audio, playingPreviewUrl: previewUrl });
            }


        }
    }

    trackIcon = track => {
        if (!track.preview_url) {
            return "glyphicon glyphicon-ban-circle"
        }

        if (this.state.playingPreviewUrl === track.preview_url && this.state.playing) {
            return "glyphicon glyphicon-pause";
        } else {
            return "glyphicon glyphicon-play";
        }


    }

    componentWillUnmount() {
        if (this.state.playing) {
            this.state.audio.pause();
        }
    }

    render() {
        const { tracks } = this.props;
        return (
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;

                        return (
                            <div
                                key={id}
                                onClick={this.playAudio(preview_url)}
                                className='track'
                            >
                                <img
                                    src={album.images[0].url}
                                    alt='track-image'
                                    className='track-image'
                                />
                                <p className='track-text'>{name}</p>
                                <p className='track-icon'><span className={this.trackIcon(track)} aria-hidden="true"></span></p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default Tracks;