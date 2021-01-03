import React, { Component } from 'react';
import MainImage from '../images/undraw_files_6b3d.svg';

class Main extends Component {
    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        sideMenu.classList.toggle('side-menu-active');
    }

    render() {
        const {toggleMenu} = this;
        return (
            <div className="Main">
                <div className="main-header">
                    <div className="burger-menu" onClick={toggleMenu}>
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                </div>
                <div className="main-body">
                    <div className="image-container">
                        <img src={MainImage} alt="main-img"/>
                    </div>
                    <div className="text-content">
                        <p>Start building your CV!</p>
                        <p>Select one index from the side menu.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
