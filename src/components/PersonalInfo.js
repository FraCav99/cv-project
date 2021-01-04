import React, { Component } from 'react';
import InfoImage from '../images/undraw_personal_information_962o.svg';

class PersonalInfo extends Component {
    constructor() {
        super()

        this.state = {
            personalInfo: {
                firstName: '',
                lastName: '',
                role: '',
                address: '',
                phoneNumber: '',
                email: ''
            },
            errors: {},
            isSubmitted: false
        }

        this.initialErrorsState = this.state.errors;
    }

    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        sideMenu.classList.toggle('side-menu-active');
    }

    toggleModal = () => {
        const closeBtn = document.querySelector('.close-button-container');
        const InfoModal = document.querySelector('.personal-info-modal');
        const infoBody = document.querySelector('.info-body');

        this.setState({errors: this.initialErrorsState});

        closeBtn.classList.toggle('not-visible');
        InfoModal.classList.toggle('not-visible');
        infoBody.classList.toggle('not-visible');
    }

    handleChange = (ev) => {
        this.setState({
            personalInfo: {
                ...this.state.personalInfo,    // leave other value unchanged
                [ev.target.name]: ev.target.value,  // update the current value
            }
        });
    }

    validate = () => {
        let isError = false;
        const {personalInfo} = this.state;
        const errors = {};
        const regExp = /[a-zA-Z]/g; // check for characters in a string

        if (!personalInfo.firstName) {
            isError = true;
            errors.firstNameError = 'Cannot be empty';
        }
        if (!personalInfo.lastName) {
            isError = true;
            errors.lastNameError = 'Cannot be empty';
        }
        if (!personalInfo.role) {
            isError = true;
            errors.roleError = 'Cannot be empty';
        }
        if (!personalInfo.address) {
            isError = true;
            errors.addressError = 'Cannot be empty';
        }
        if (!personalInfo.phoneNumber || !personalInfo.phoneNumber.length === 10 || regExp.test(personalInfo.phoneNumber)) {
            isError = true;
            errors.phoneNumberError = 'Cannot be empty and must be 10 digits long';
        }
        if (!personalInfo.email || !personalInfo.email.includes('@')) {
            isError = true;
            errors.emailError = 'Cannot be empty and must contain "@"';
        }

        // Add errors object to state if is not empty
        if (Object.keys(errors).length > 0 && errors.constructor === Object) {
            this.setState({errors});
        }

        return isError;
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const {personalInfo} = this.state;
        const err = this.validate();

        if (!err) {
            this.setState({personalInfo, isSubmitted: true});
            this.toggleModal();
        }
    }

    render() {
        const {toggleMenu, toggleModal, handleChange, handleSubmit} = this;
        const {errors, personalInfo} = this.state;
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
                            {errors.firstNameError && <small className="error-pop-up">{errors.firstNameError}</small>}
                            <input type="text" className="input-field" value={personalInfo.firstName} onChange={handleChange} name="firstName" />
                        </div>

                        <div>
                            <label>Last Name</label>
                            {errors.lastNameError && <small className="error-pop-up">{errors.lastNameError}</small>}
                            <input type="text" className="input-field" value={personalInfo.lastName} onChange={handleChange} name="lastName" />
                        </div>

                        <div>
                            <label>Role</label>
                            {errors.roleError && <small className="error-pop-up">{errors.roleError}</small>}
                            <input type="text" className="input-field" value={personalInfo.role} onChange={handleChange} name="role" />
                        </div>

                        <div>
                            <label>Address</label>
                            {errors.addressError && <small className="error-pop-up">{errors.addressError}</small>}
                            <input type="text" className="input-field" value={personalInfo.address} onChange={handleChange} name="address" />
                        </div>

                        <div>
                            <label>Phone Number</label>
                            {errors.phoneNumberError && <small className="error-pop-up">{errors.phoneNumberError}</small>}
                            <input type="text" name="phoneNumber"  maxLength="10" value={personalInfo.phoneNumber} onChange={handleChange} className="input-field" />
                        </div>

                        <div>
                            <label>Email</label>
                            {errors.emailError && <small className="error-pop-up">{errors.emailError}</small>}
                            <input type="text" name="email" className="input-field" value={personalInfo.email} onChange={handleChange} />
                        </div>

                        <button type="submit" onClick={handleSubmit}>Add info</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;
