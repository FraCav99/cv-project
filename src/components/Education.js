import React, { Component } from 'react';
import EducationImg from '../images/undraw_road_to_knowledge_m8s0.svg';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            education: [],
            eduItemId: '',
            tempEduItem: {},
            isEdited: false,
            errors: {}
        }
    }

    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        sideMenu.classList.toggle('side-menu-active');
    }

    toggleModal = () => {
        const closeBtn = document.querySelector('.close-button-education');
        const EducationModal = document.querySelector('.education-modal');
        const EducationBody = document.querySelector('.education-body');
        const secondaryAddEducationBtn = document.querySelector('.add-education-btn');

        // Reset input fields
        const inputFields = document.querySelectorAll('.input-field');
        inputFields.forEach(input => input.value = '');

        //Reset State
        this.setState({errors: {}});

        closeBtn.classList.toggle('not-visible');
        EducationModal.classList.toggle('not-visible');
        EducationBody.classList.toggle('not-visible');

        // Conditionally render the secondary "add" button
        if (this.state.education.length > 0) {
            secondaryAddEducationBtn.classList.toggle('not-visible');
        }
    }

    validate = () => {
        let isError = false;
        const errors = {};
        const regExp = /[a-zA-Z]/g; // check for characters in a string

        const school = document.getElementById('school').value;
        const city = document.getElementById('city').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const degree = document.getElementById('degree').value;

        if (!school) {
            isError = true;
            errors.school = 'Cannot be empty';
        }
        if (!city) {
            isError = true;
            errors.city = 'Cannot be empty';
        }
        if (!startDate || regExp.test(startDate) || startDate.length < 4) {
            isError = true;
            errors.startDate = 'Cannot be empty and must be at least 4 digits long';
        }
        if (regExp.test(endDate)) {
            isError = true;
            errors.endDate = 'Must be at least 4 digits long and must contains digits';
        }
        if (!degree) {
            isError = true;
            errors.degree = 'Cannot be empty';
        }

        // Add errors object to state if is not empty
        if (Object.keys(errors).length > 0 && errors.constructor === Object) {
            this.setState({errors});
        }

        return isError;
    }

    /* Add */
    addItem = (ev) => {
        ev.preventDefault();
        const eduItem = {};
        const err = this.validate();

        if (!err) {
            eduItem.school = document.getElementById('school').value;
            eduItem.city = document.getElementById('city').value;
            eduItem.startDate = document.getElementById('startDate').value;
            eduItem.endDate = document.getElementById('endDate').value;
            eduItem.degree = document.getElementById('degree').value;
            eduItem.description = document.getElementById('description').value;
    
            this.setState({
                education: [...this.state.education, eduItem],
            });

            this.toggleModal();
        } else return;
    }

    /* Edit */
    toggleEditModal = (ev) => {
        const {education, isEdited} = this.state;
        const itemId = ev.currentTarget.parentNode.parentNode.parentNode.getAttribute('id');

        if (isEdited) {
            this.setState({
                tempEduItem: {},
                isEdited: false,
                eduItemId: ''
            });
        } else {
            this.setState({
                tempEduItem: education[itemId],
                isEdited: true,
                eduItemId: itemId
            });
        }

        this.toggleModal();
    }

    handleEditChange = ev => {
        this.setState({
            tempEduItem: {
                ...this.state.tempEduItem,
                [ev.target.id]: ev.target.value
            }
        });
    }

    editArray = (arr, id, editedObj) => {
        arr[id] = editedObj;
        return arr;
    }

    editItem = (ev) => {
        ev.preventDefault();
        const err = this.validate();

        if (!err) {
            const {education, tempEduItem, eduItemId} = this.state;
            this.setState({
                isEdited: false,
                education: this.editArray(education, eduItemId, tempEduItem)
            });
            this.toggleModal();
        } else return;
    }

    /* Delete */
    filterArray(arr, index) {
        index > -1 && arr.splice(index, 1);
        return arr;
    }

    deleteItem = (ev) => {
        const {education} = this.state;
        const itemId = ev.currentTarget.parentNode.parentNode.parentNode.getAttribute('id');
        this.setState({
            education: this.filterArray(education, itemId)
        });
    }

    render() {
        const {
            toggleMenu,
            toggleModal,
            toggleEditModal,
            addItem,
            handleEditChange,
            editItem,
            deleteItem
        } = this;
        const {errors, education, tempEduItem, isEdited} = this.state;
        return (
            <div className="Education not-visible">
                <div className="education-header">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                    <h2>Education</h2>
                    {
                        isEdited ?
                        <div className="close-button-education not-visible" onClick={toggleEditModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                        </div> :
                        <div className="close-button-education not-visible" onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                        </div>
                    }
                </div>

            
                {education.length > 0 ? (
                    <div className="education-body">
                        {education.map((item, index) => {
                            return (
                                <div key={index} id={index} className="education-item">
                                <div className="item-header">
                                    <span>{item.startDate}-{item.endDate || 'Present'}</span>
                                    <div className="action-buttons">
                                        <svg onClick={toggleEditModal} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/></svg>
                                        <svg onClick={deleteItem} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                    </div>
                                </div>
                                <div className="item-main">
                                    <p className="degree-title">{item.degree}</p>
                                    <p className="location">{item.city}, {item.school}</p>
                                </div>
                                <div className="item-description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="education-body">
                        <div className="image-container">
                            <img src={EducationImg} alt="education-experience" />
                        </div>
                        <div className="button-container">
                            <button onClick={toggleModal}>Add Education</button>
                        </div>
                    </div>
                )}

                <div className="education-modal not-visible">
                    <form>
                        <div>
                            <label>School</label>
                            {errors.school && <small className="error-pop-up">{errors.school}</small>}
                            {
                                isEdited ? 
                                <input type="text" id="school" onChange={handleEditChange} value={tempEduItem.school} className="input-field"/> :
                                <input type="text" id="school" className="input-field"/>
                            }                            
                        </div>

                        <div>
                            <label>City</label>
                            {errors.city && <small className="error-pop-up">{errors.city}</small>}
                            {
                                isEdited ?
                                <input type="text" id="city" onChange={handleEditChange} value={tempEduItem.city} className="input-field"/> :
                                <input type="text" id="city" className="input-field"/>
                            }
                        </div>

                        <div className="period">
                            <div>
                                <label>From</label>
                                {errors.startDate && <small className="error-pop-up">{errors.startDate}</small>}
                                {
                                    isEdited ?
                                    <input type="text" id="startDate" onChange={handleEditChange} value={tempEduItem.startDate} className="input-field"/> :
                                    <input type="text" id="startDate" className="input-field"/>
                                }
                            </div>
                            <div>
                                <label>
                                    To
                                    <small> ("Present" if empty)</small>
                                </label>
                                {errors.endDate && <small className="error-pop-up">{errors.endDate}</small>}
                                {
                                    isEdited ?
                                    <input 
                                        type="text" 
                                        id="endDate"
                                        onChange={handleEditChange}
                                        value={tempEduItem.endDate !== 'Present' ? tempEduItem.endDate : null} 
                                        className="input-field"
                                    /> :
                                    <input type="text" id="endDate" className="input-field"/>
                                }
                            </div>
                        </div>

                        <div>
                            <label>Degree</label>
                            {errors.degree && <small className="error-pop-up">{errors.degree}</small>}
                            {
                                isEdited ?
                                <input type="text" id="degree" onChange={handleEditChange} value={tempEduItem.degree} className="input-field"/> :
                                <input type="text" id="degree" className="input-field"/>
                            }         
                        </div>

                        <div className="description">
                            <label>
                                Description
                                <small>(optional)</small>
                            </label>
                            {
                                isEdited ?
                                <textarea rows="7" id="description" onChange={handleEditChange} value={tempEduItem.description} className="input-field"></textarea> :
                                <textarea rows="7" id="description" className="input-field"></textarea>
                            }
                        </div>
                        {
                            isEdited ?
                            <button type="submit" onClick={editItem}>Edit Education</button> :
                            <button type="submit" onClick={addItem}>Add Education</button>
                        }
                    </form>
                </div>

                {
                    education.length > 0 && 
                    <button className="add-education-btn" onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                    </button>
                }
            </div>
        )
    }
}

export default Education
