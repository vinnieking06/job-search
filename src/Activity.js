import React from 'react';
const Activity = (props) => {
    if (props.job) {
    console.log(props.job);
    let activities = props.job.activities;
    console.log("activities", activities)

    const activityList = activities.map((item, index) => {
       return <li key={index}>{item.content} </li>
    })
    

    return (
        <div>
            Past Activity:
            <ul>
            {activityList}
            </ul>
        </div>
    );
}
else return null
}

export default Activity