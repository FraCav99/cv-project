import React, { Component } from 'react';
import EducationImg from '../images/undraw_road_to_knowledge_m8s0.svg';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            education: [],
            tempEduItem: {},
            isEdited: false
        }
    }

    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        sideMenu.classList.toggle('side-menu-active');
    }

    addItem = (ev) => {
        ev.preventDefault();
        const eduItem = {};
        
        eduItem.id = this.state.education.length;
        eduItem.school = document.getElementById('school').value;
        eduItem.city = document.getElementById('city').value;
        eduItem.startDate = document.getElementById('startDate').value;
        eduItem.endDate = document.getElementById('endDate').value || "Present";
        eduItem.degree = document.getElementById('degree').value;
        eduItem.description = document.getElementById('description').value;

        this.setState({
            education: [...this.state.education, eduItem],
        });
    }

    render() {
        const {toggleMenu} = this;
        return (
            <div className="Education">
                <div className="education-header">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                    <h2>Education</h2>
                    <div className="close-button-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                    </div>
                </div>
                <div className="education-body not-visible">
                    <div className="image-container">
                        <img src={EducationImg} alt="education-experience" />
                    </div>
                    <div className="button-container">
                        <button>Add Education</button>
                    </div>
                </div>

                <div className="education-modal">
                    <form>
                        <div>
                            <label>School</label>
                            <input type="text" id="school"/>
                        </div>

                        <div>
                            <label>City</label>
                            <input type="text" id="city"/>
                        </div>

                        <div className="period">
                            <div>
                                <label>From</label>
                                <input type="text" id="startDate"/>
                            </div>
                            <div>
                                <label>
                                    To
                                    <small> ("Present" if empty)</small>
                                </label>
                                <input type="text" id="endDate"/>
                            </div>
                        </div>

                        <div>
                            <label>Degree</label>
                            <input type="text" id="degree"/>
                        </div>

                        <div className="description">
                            <label>Description</label>
                            <textarea rows="7" id="description"></textarea>
                        </div>

                        <button type="submit" onClick={this.addItem}>Add Education</button>
                    </form>
                </div>

                <button className="add-education-btn not-visible">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </button>
            </div>
        )
    }
}

export default Education
