import React from 'react';
import Info from './Info';
import Activity from './Activity';
import FollowUp from './FollowUp';

const Job = () => {
    return (
        <div className="job">
            <Info />
            <Activity />
            <FollowUp />
        </div>
    )
}
export default Job