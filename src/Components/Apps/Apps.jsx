import React, { use } from 'react';
import AllApps from './AllApps';
import App from './App';

const Apps = ({ appsPromise }) => {
    const appsData = use(appsPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {appsData.map(app => <App key={app.id} app={app} />)}
        </div>
    );
};

export default Apps;