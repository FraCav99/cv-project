import React, { Component } from 'react';
import InfoImage from '../images/undraw_personal_information_962o.svg';

class PersonalInfo extends Component {
    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        sideMenu.classList.toggle('side-menu-active');
    }

    render() {
        const {toggleMenu} = this;
        return (
            <div className="PersonalInfo">
                <div className="info-header">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                    <h2>Personal Info</h2>
                </div>
                <div className="info-body">
                    <div className="image-container">
                        <img src={InfoImage} alt="Personal-info-img" />
                    </div>
                    <div className="button-container">
                        <button>Add info</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;
