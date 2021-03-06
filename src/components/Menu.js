import React, { Component } from 'react';

class Menu extends Component {
    toggleMenu = () => {
        const sideMenu = document.querySelector('.Menu');
        if (window.innerWidth <= 966) {
            sideMenu.classList.toggle('side-menu-active');
        } else return;
    }

    applyListItemEffect = (ev) => {
        if (ev.target.tagName.toLowerCase() === 'li') {
            const listItems = document.querySelectorAll('.menu-body ul li');
            listItems.forEach(listItem => {
                listItem.classList.remove('focus-list-element');
            })
            ev.target.classList.add('focus-list-element');
        }
    }

    showPersonalInfo = (ev) => {
        const MainComponent = document.querySelector('.Main');
        const PersonalInfoComponent = document.querySelector('.PersonalInfo');
        const EducationComponent = document.querySelector('.Education');
        const WorkComponent = document.querySelector('.WorkExp');

        if (ev.target.textContent === 'Personal Info') {
            PersonalInfoComponent.classList.remove('not-visible');
            EducationComponent.classList.add('not-visible');
            WorkComponent.classList.add('not-visible');
        } else if (ev.target.textContent === 'Education') {
            PersonalInfoComponent.classList.add('not-visible');
            EducationComponent.classList.remove('not-visible');
            WorkComponent.classList.add('not-visible');
        } else if (ev.target.textContent === 'Work Experiences') {
            PersonalInfoComponent.classList.add('not-visible');
            EducationComponent.classList.add('not-visible');
            WorkComponent.classList.remove('not-visible');
        }
        MainComponent.classList.add('not-visible');
    }

    render() {
        const {
            toggleMenu,
            applyListItemEffect,
            showPersonalInfo
        } = this;
        return (
            <div className="Menu">
                <div className="menu-header">
                    <h1>CV-Builder</h1>
                    <a href="https://github.com/FraCav99/cv-project">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
                <div className="menu-body" onClick={(ev) => {applyListItemEffect(ev); showPersonalInfo(ev)}}>
                    <ul>
                        <li onClick={toggleMenu}>Personal Info</li>
                        <li onClick={toggleMenu}>Education</li>
                        <li onClick={toggleMenu}>Work Experiences</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;
