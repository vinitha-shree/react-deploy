import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Login.css'

function Login() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='login-bg'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Register</Tab>

                    <TabPanel>Panel 1 ------------------------------------------------------------</TabPanel>
                    <TabPanel>Panel 2</TabPanel>
                    {/* <TabPanel>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    jhkjhkjhkjhkjhk
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>

                    </TabPanel> */}
                </TabList>
            </Tabs>

        </div>
    )
}

export default Login;