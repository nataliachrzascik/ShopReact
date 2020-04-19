import React from "react";
import { Component } from "react";
import slider from "./Slider.css";

import bag from '../../images/bag.jpg';
import glasses3 from '../../images/glasses3.jpg';
import winter3 from '../../images/winter3.jpg';
import accessories from '../../images/accessories.jpg';

class Sliders extends Component {
    state = {
        id: 0,
        object: {
            id: 0,
            img: "url('" + bag + "')",
            descryption: 'Przeceny do -70%',
            active: true,
        },
        sliders: [
            {
                id: 0,
                img: "url('" + bag + "')",
                descryption: 'Przeceny do -70%',
                active: false,
            },
            {
                id: 1,
                img: "url('" + glasses3 + "')",
                descryption: 'Nowości w ofercie',
                active: false,
            },
            {
                id: 2,
                img: "url('" + winter3 + "')",
                descryption: 'Kolekcja jesień 2021',
                active: false,
            },
            {
                id: 3,
                img: "url('" + accessories + "')",
                descryption: 'Akcesoria pasujące do każdego',
                active: false,
            }
        ],

    };

    interval = 0;
    clearTimer() {
        clearInterval(this.interval);
        setTimeout(this.animate(), 4000);
    }

    constructor(pros) {
        super(pros);
        this.clearTimer = this.clearTimer.bind(this);
    }
    componentDidMount() {
        this.animate();
    }

    animate() {

        this.interval = setInterval(() => {
            if (this.state.id < 3) {
                this.setState({
                    id: this.state.id + 1
                })
            }
            else if (this.state.id === 3) {
                this.setState({
                    id: 0
                })
            }

            switch (this.state.id) {
                case 0:
                    return (
                        this.setState({
                            object: this.state.sliders[0]
                        })
                    )
                case 1:
                    return (
                        this.setState({
                            object: this.state.sliders[1]
                        })
                    )
                case 2:
                    return (
                        this.setState({
                            object: this.state.sliders[2]
                        })
                    )
                case 3:
                    return (
                        this.setState({
                            object: this.state.sliders[3]
                        })
                    )
                default:
                    return (
                        this.setState({
                            object: this.state.sliders[3]
                        })
                    )

            }
        }, 4000);
    }
    componentWillUnmount() {
        return (
            clearInterval(this.interval)
        )
    }

    render() {
        const styles = {
            on: {
                backgroundColor: "maroon"
            },
            off: {
                backgroundColor: "white"
            }
        }

        let backImage = this.state.object.img;




        return (
            <>
                <div id="sliderLeft"></div>
                <div id="slider" style={{ backgroundImage: backImage }} >
                    <div id="sliderText" className="sliderTextStyle">{this.state.object.descryption}</div>
                    <div id="sliderPages">
                        <div className="sliderPage" id="0" style={this.state.object.id === 0 ? styles.on : styles.off} onClick={() => {
                            this.clearTimer();
                            this.setState({
                                id: 0,
                                object: this.state.sliders[0]
                            })
                        }}></div>
                        <div className="sliderPage" id="1" style={this.state.object.id === 1 ? styles.on : styles.off} onClick={() => {
                            this.clearTimer();
                            this.setState({
                                id: 1,
                                object: this.state.sliders[1]
                            })


                        }}></div>
                        <div className="sliderPage" id="2" style={this.state.object.id === 2 ? styles.on : styles.off} onClick={() => {
                            this.clearTimer();
                            this.setState({
                                id: 2,
                                object: this.state.sliders[2]
                            });
                        }}></div>
                        <div className="sliderPage" id="3" style={this.state.object.id === 3 ? styles.on : styles.off} onClick={() => {
                            this.clearTimer();
                            this.setState({
                                id: 3,
                                object: this.state.sliders[3]
                            });
                        }}></div>
                    </div>
                </div>
                <div id="sliderRight"></div>
            </>
        )
    }
}
export default Sliders;