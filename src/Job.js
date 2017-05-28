import React from 'react';
import Info from './Info';
import Activity from './Activity';
import FollowUp from './FollowUp';

class Job extends React.Component {
   
    render(){
        console.log(this.props.location.state.job);
        const job = this.props.location.state.job;
        return (  
            <div className="job">
                <Info job={job} />
                <Activity />
                <FollowUp />
            </div>
        )
    
    }

}
export default Job