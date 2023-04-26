import React from 'react';
import './profilepage.css';
import { Topbar } from '../../component/navBar/topbar.js';
import Skillbox from '../../component/skillbox/skillbox';

function ProfilePage() {
    return (
        <div>
            <Topbar />
            <div className='allpageprofile'>
                <div className="profile-page">
                    <div className="profile-info">
                        <img src="https://via.placeholder.com/150" alt="Profile" />
                        <h2>John Doe</h2>
                        <p>Email: john.doe@example.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                </div>
                <div className='other-details'>
                <div classname='skills'>
                    <h1 id='aboutmeprofile'>About Me </h1>
                    <div className='skilllist'>
                    <br />
                    <br />
                        <p>John is a highly skilled software engineer with a passion for developing innovative
                         and user-friendly software solutions.
                         With years of experience in the industry, John has developed a deep understanding of
                          software development principles and 
                         techniques. He is a natural problem solver and is always eager to take on new challenges.
                          John's strong communication skills and ability to work collaboratively make him an 
                          invaluable asset to any development team.
                         When not coding, John enjoys spending time with his family and exploring the great outdoors.</p>
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <div classname='skills'>
                    <h1>Interest</h1>
                    <div className='skilllist'>
                        {Skillbox('Drawing')}
                        {Skillbox('Sports')}
                        {Skillbox('Books')}
                        {Skillbox('Movies')}
                        {Skillbox('Family time')}
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <div classname='skills'>
                    <h1>Skills</h1>
                    <div className='skilllist'>
                        {Skillbox('C++')}
                        {Skillbox('Python')}
                        {Skillbox('JavaScript')}
                        {Skillbox('React')}
                        {Skillbox('Design')}
                    </div>
                </div>
                </div>
            </div>
            <div className='projectprogress'>
                <h1>Project Progress</h1>
                
            </div>
        </div>
    );
}

export default ProfilePage;
