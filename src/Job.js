import React from 'react';
import Info from './Info';
import Activity from './Activity';
import FollowUp from './FollowUp';
import {Link} from 'react-router-dom'

class Job extends React.Component {
   
    render(){
        const job = this.props.location.state.job;
        return (  
            <div className="job">
               <Link to='/createjob'>
                <button>Create New Job</button>
               </Link> <h1>Job View</h1>
                <Info job={job} />
                <Activity />
                <FollowUp />
            </div>
        )
    
    }

}
export default Job