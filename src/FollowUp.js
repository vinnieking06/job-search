import React from 'react';

const FollowUp = (props) => {
    
    if (props.followups) {
    let followups = props.followups;
    const followupsList = followups.map((item, index) => {
       return <li key={index}>{item.content}{" "}{item.duedate} </li>
    })
    return (
        <div>
Follow Up:
        <ul>
            {followupsList}
        </ul>
        </div>
    );
}
else return null
}

export default FollowUp