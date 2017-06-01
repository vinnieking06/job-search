import React from 'react';
import axios from 'axios';
import Job from './Job';

class JobContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showLogActivity: false, currentJob: "", jobs: [], jobId: ""};
    }

    getJob(id, jobs) {
        let finalJob;
        jobs.forEach((item) => {
            if (item.id == id){
                finalJob = item;
            }
        })
        return finalJob;
    }
   
   componentDidMount() {
    axios.get('http://localhost:3000/jobs').then(res => {
      const jobId = this.props.match.params.id;
      const newJob = this.getJob(jobId, res.data)
      this.setState({jobs: res.data, currentJob: newJob})
      })
   }

    render(){
       return (<Job currentJob={this.state.currentJob} />)
    }

}
export default JobContainer