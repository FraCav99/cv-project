import React, { Component } from 'react';
import InfoImage from '../images/undraw_personal_information_962o.svg';

class PersonalInfo extends Component {
    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        sideMenu.classList.toggle('side-menu-active');
    }

    toggleModal = () => {
        const closeBtn = document.querySelector('.close-button-container');
        const InfoModal = document.querySelector('.personal-info-modal');
        const infoBody = document.querySelector('.info-body');

        closeBtn.classList.toggle('not-visible');
        InfoModal.classList.toggle('not-visible');
        infoBody.classList.toggle('not-visible');
    }

    render() {
        const {toggleMenu, toggleModal} = this;
        return (
            <div className="PersonalInfo not-visible">
                <div className="info-header">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                    <h2>Personal Info</h2>
                    <div className="close-button-container not-visible" onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                    </div>
                </div>

                <div className="info-body">
                    <div className="image-container">
                        <img src={InfoImage} alt="Personal-info-img" />
                    </div>
                    <div className="button-container">
                        <button className="add-info-btn" onClick={toggleModal}>Add info</button>
                    </div>
                </div>

                <div className="personal-info-modal not-visible">
                    <form>
                        <div>
                            <label>First Name</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Last Name</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Role</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Address</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Phone Number</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" />
                        </div>

                        <button type="submit">Add info</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;
