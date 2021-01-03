import React, { Component } from 'react';
import WorkImg from '../images/undraw_Work_time_re_hdyv.svg';

class WorkExperiences extends Component {
    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        sideMenu.classList.toggle('side-menu-active');
    }

    render() {
        const {toggleMenu} = this;
        return (
            <div className="WorkExp">
                <div className="work-header">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                    <h2>Work Experiences</h2>
                </div>
                <div className="work-body">
                    <div className="image-container">
                        <img src={WorkImg} alt="work-image" />
                    </div>
                    <div className="button-container">
                        <button>Add Work</button>
                    </div>
                </div>
                <button className="add-work-btn not-visible">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </button>
            </div>
        )
    }
}

export default WorkExperiences;
