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
        this.initialPersonalInfoState = this.state.personalInfo;
    }

    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        sideMenu.classList.toggle('side-menu-active');
    }

    toggleModal = () => {
        const closeBtn = document.querySelector('.close-button-container');
        const InfoModal = document.querySelector('.personal-info-modal');
        const infoBody = document.querySelector('.info-body');

        // Reset State
        this.setState({
            personalInfo: this.initialPersonalInfoState,
            errors: this.initialErrorsState
        });

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
            this.setState({personalInfo, isSubmitted: true});   // Update personaliInfo state
            this.initialPersonalInfoState = personalInfo;   // Update reset personalInfo data
            this.toggleModal();
        }
    }

    render() {
        const {toggleMenu, toggleModal, handleChange, handleSubmit} = this;
        const {errors, personalInfo, isSubmitted} = this.state;
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

                {
                    isSubmitted ? 
                    (
                        <div className="info-body">
                            <div className="info-container">
                                <div className="left-panel">
                                    <div className="first-row">
                                        <label>First Name</label>
                                        <p>{personalInfo.firstName}</p>
                                    </div>
                                    <div className="second-row">
                                        <label>Last Name</label>
                                        <p>{personalInfo.lastName}</p>
                                    </div>
                                    <div className="third-row">
                                        <label>Role</label>
                                        <p>{personalInfo.role}</p>
                                    </div>
                                </div>
                                <div className="right-panel">
                                    <div className="first-row">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                                            Address
                                        </label>
                                        <p>{personalInfo.address}</p>
                                    </div>
                                    <div className="second-row">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z"/></svg>
                                            Phone Number
                                        </label>
                                        <p>{personalInfo.phoneNumber}</p>
                                    </div>
                                    <div className="third-row">
                                        <label>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                                            Email
                                        </label>
                                        <p>{personalInfo.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="add-info-btn" onClick={toggleModal}>Edit info</button>
                            </div>
                        </div>
                    ) : 
                    (
                        <div className="info-body">
                            <div className="image-container">
                                <img src={InfoImage} alt="Personal-info-img" />
                            </div>
                            <div className="button-container">
                                <button className="add-info-btn" onClick={toggleModal}>Add info</button>
                            </div>
                        </div>
                    )
                }

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
                        
                        {
                            isSubmitted ? 
                            <button type="submit" onClick={handleSubmit}>Edit info</button> :
                            <button type="submit" onClick={handleSubmit}>Add info</button>
                        }
                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;
