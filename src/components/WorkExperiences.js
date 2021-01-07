import React, { Component } from 'react';
import WorkImg from '../images/undraw_Work_time_re_hdyv.svg';

class WorkExperiences extends Component {
    constructor() {
        super();

        this.state = {
            works: [],
            workItemId: '',
            tempWorkItem: {},
            isEdited: false,
            errors: {}
        }
    }

    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        sideMenu.classList.toggle('side-menu-active');
    }

    toggleModal = () => {
        const closeBtn = document.querySelector('.close-button-work');
        const workModal = document.querySelector('.work-modal');
        const workBody = document.querySelector('.work-body');
        const secondaryAddWorkBtn = document.querySelector('.add-work-btn');

        // Reset input fields
        const inputFields = document.querySelectorAll('.work-input-field');
        inputFields.forEach(input => input.value = '');

        // Reset State
        this.setState({errors: {}});

        closeBtn.classList.toggle('not-visible');
        workModal.classList.toggle('not-visible');
        workBody.classList.toggle('not-visible');

        // Conditionally render the secondary "add" button
        if (this.state.works.length > 0) {
            secondaryAddWorkBtn.classList.toggle('not-visible');
        }
    }

    validate = () => {
        let isError = false;
        const errors = {};
        const regExp = /[a-zA-Z]/g; // check for characters in a string

        const companyName = document.getElementById('companyName').value;
        const workCity = document.getElementById('workCity').value;
        const workStartDate = document.getElementById('workStartDate').value;
        const workEndDate = document.getElementById('workEndDate').value;
        const role = document.getElementById('role').value;

        if (!companyName) {
            isError = true;
            errors.companyName = 'Cannot be empty';
        }
        if (!workCity) {
            isError = true;
            errors.workCity = 'Cannot be empty';
        }
        if (!workStartDate || regExp.test(workStartDate) || workStartDate.length < 4) {
            isError = true;
            errors.workStartDate = 'Cannot be empty and must be at least 4 digits long';
        }
        if (regExp.test(workEndDate)) {
            isError = true;
            errors.workEndDate = 'Must be at least 4 digits long and must contains digits';
        }
        if (!role) {
            isError = true;
            errors.role = 'Cannot be empty';
        }

        if (Object.keys(errors).length > 0 && errors.constructor === Object) {
            this.setState({errors});
        }

        return isError;
    }

    /* Add */
    addItem = ev => {
        ev.preventDefault();
        const workItem = {};
        const err = this.validate();

        if (!err) {
            workItem.companyName = document.getElementById('companyName').value;
            workItem.workCity = document.getElementById('workCity').value;
            workItem.workStartDate = document.getElementById('workStartDate').value;
            workItem.workEndDate = document.getElementById('workEndDate').value;
            workItem.role = document.getElementById('role').value;
            workItem.workDescr = document.getElementById('workDescr').value;

            this.setState({
                works: [...this.state.works, workItem]
            });

            this.toggleModal();
        } else {
            return;
        }
    }

    /* Edit */
    toggleEditModal = ev => {
        const {works, isEdited} = this.state;
        const itemId = ev.currentTarget.parentNode.parentNode.parentNode.getAttribute('id');

        if (isEdited) {
            this.setState({
                tempWorkItem: {},
                isEdited: false,
                workItemId: ''
            });
        } else {
            this.setState({
                tempWorkItem: works[itemId],
                isEdited: true,
                workItemId: itemId
            });
        }
        
        this.toggleModal();
    }

    handleEditChange = ev => {
        this.setState({
            tempWorkItem: {
                ...this.state.tempWorkItem,
                [ev.target.id]: ev.target.value,
            }
        });
    }

    editArray = (arr, id, editedObj) => {
        arr[id] = editedObj;
        return arr;
    }

    editItem = ev => {
        ev.preventDefault();
        const err = this.validate();

        if (!err) {
            const {works, tempWorkItem, workItemId} = this.state;
            this.setState({
                isEdited: false,
                works: this.editArray(works, workItemId, tempWorkItem),
            });
            this.toggleModal();
        } else {
            return;
        }
    }

    /* Delete */
    filterArray(arr, index) {
        index > -1 && arr.splice(index, 1);
        return arr;
    }

    deleteItem = ev => {
        const {works} = this.state;
        const itemId = ev.currentTarget.parentNode.parentNode.parentNode.getAttribute('id');
        this.setState({
            works: this.filterArray(works, itemId),
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
        const {
            errors,
            works,
            tempWorkItem,
            isEdited
        } = this.state;
        return (
            <div className="WorkExp not-visible">
                <div className="work-header">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                    <h2>Work Experiences</h2>
                    {
                        isEdited ?
                        <div className="close-button-work not-visible" onClick={toggleEditModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                        </div> :
                        <div className="close-button-work not-visible" onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                        </div>
                    }
                </div>
                
                {works.length > 0 ? (
                    <div className="work-body">
                        {works.map((item, index) => {
                            return (
                                <div key={index} id={index} className="work-item">
                                    <div className="item-header">
                                        <span>{item.workStartDate}-{item.workEndDate || 'Present'}</span>
                                        <div className="action-buttons">
                                            <svg onClick={toggleEditModal} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/></svg>
                                            <svg onClick={deleteItem} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                        </div>
                                    </div>
                                    <div className="item-main">
                                        <p className="role-title">{item.role}</p>
                                        <p className="location">{item.workCity}, {item.companyName}</p>
                                    </div>
                                    <div className="item-description">
                                        <p>{item.workDescr}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="work-body">
                        <div className="image-container">
                            <img src={WorkImg} alt="work-experiences" />
                        </div>
                        <div className="button-container">
                            <button onClick={toggleModal}>Add Work</button>
                        </div>
                    </div>                   
                )}

                <div className="work-modal not-visible">
                    <form>
                        <div>
                            <label>Company Name</label>
                            {errors.companyName && <small className="error-pop-up">{errors.companyName}</small>}
                            {
                                isEdited ?
                                <input 
                                    type="text"
                                    id="companyName"
                                    onChange={handleEditChange}
                                    value={tempWorkItem.companyName}
                                    className="work-input-field"
                                /> :
                                <input type="text" id="companyName" className="work-input-field" />
                            }
                        </div>

                        <div>
                            <label>City</label>
                            {errors.workCity && <small className="error-pop-up">{errors.workCity}</small>}
                            {
                                isEdited ?
                                <input
                                    type="text"
                                    id="workCity"
                                    onChange={handleEditChange}
                                    value={tempWorkItem.workCity}
                                    className="work-input-field"
                                /> :
                                <input type="text" id="workCity" className="work-input-field" />
                            }
                        </div>

                        <div className="period">
                            <div>
                                <label>From</label>
                                {errors.workStartDate && <small className="error-pop-up">{errors.workStartDate}</small>}
                                {
                                    isEdited ?
                                    <input
                                        type="text"
                                        id="workStartDate"
                                        onChange={handleEditChange}
                                        value={tempWorkItem.workStartDate}
                                        className="work-input-field"
                                    /> :
                                    <input type="text" id="workStartDate" className="work-input-field" />
                                }
                            </div>
                            <div>
                                <label>
                                    To
                                    <small> ("Present" if empty)</small>
                                </label>
                                {errors.workEndDate && <small className="error-pop-up">{errors.workEndDate}</small>}
                                {
                                    isEdited ?
                                    <input
                                        type="text"
                                        id="workEndDate"
                                        onChange={handleEditChange}
                                        value={tempWorkItem.workEndDate !== 'Present' ? tempWorkItem.workEndDate : null}
                                        className="work-input-field"
                                    /> :
                                    <input type="text" id="workEndDate" className="work-input-field" />
                                }
                            </div>
                        </div>

                        <div>
                            <label>Role</label>
                            {errors.role && <small className="error-pop-up">{errors.role}</small>}
                            {
                                isEdited ?
                                <input
                                    type="text"
                                    id="role"
                                    onChange={handleEditChange}
                                    value={tempWorkItem.role}
                                    className="work-input-field"
                                /> :
                                <input type="text" id="role" className="work-input-field" />
                            }
                        </div>

                        <div className="description">
                            <label>
                                Description
                                <small>(optional)</small>
                            </label>
                            {
                                isEdited ?
                                <textarea
                                    rows="7"
                                    id="workDescr"
                                    onChange={handleEditChange}
                                    value={tempWorkItem.workDescr}
                                    className="work-input-field"
                                ></textarea> :
                                <textarea rows="7" id="workDescr" className="work-input-field"></textarea>
                            }
                        </div>
                        {
                            isEdited ?
                            <button type="submit" onClick={editItem}>Edit Work</button> :
                            <button type="submit" onClick={addItem}>Add Work</button>
                        }
                    </form>
                </div>

                {
                    works.length > 0 &&
                    <button className="add-work-btn" onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                    </button>
                }
            </div>
        )
    }
}

export default WorkExperiences;
