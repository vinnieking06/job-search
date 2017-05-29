import React from 'react';
const Info = (props) => {
    return (
        <div>
            <h4>Company: {props.job.company} </h4>
            <h4>Job Title: {props.job.job}</h4>
            <p>Link to posting: {props.job.link}</p>
            <p>Notes: {props.job.notes}</p>
            <button>Log Activity</button>
            <button>Set Follow Up</button>
        </div>
    );
}

export default Info