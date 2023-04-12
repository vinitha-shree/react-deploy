import React from 'react';
import './LandingPage.css'
import Login from '../login/login';

function LandingPage() {
    return (
        <div className='content'>
            <div className='container'>
                <div className='row h-100 d-flex align-items-center justify-content-center top-pad'>
                    <div>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;