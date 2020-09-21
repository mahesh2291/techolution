
import React,{Component} from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import axios from 'axios'
import './results.css'


class Results extends Component {
    constructor(props) {
        super(props)

        this.state={
            results:[]
        }
    }
   
    componentDidMount()
    {
    axios.get("http://hidden-lake-34973.herokuapp.com/results")
    .then(res=>{console.log(res.data)
      this.setState({results:res.data})
    }
    )
    .catch(error=>{
        console.log(error)
    })
}
     

    render() 
    {
        const {results}=this.state
        
    
        return  <ReactBootStrap.Table>
        <thead className="heading" colspan="4">Student Result Board</thead>
         <thead>
    <tr>
      
      <th className="heading_table">Student Name</th>
      <th className="heading_table">Roll Name</th>
      <th className="heading_table">Total marks</th>
      <th className="heading_table">Status</th>
    </tr>
  </thead>
  
  <tbody>
  <tr>
      {
       results.map(results=><tr key={results.name}>{results.name}</tr>)
       
    }

    <td>
    {
results.map(results=><tr key={results.rollNumber}>{results.rollNumber}</tr>)
    }
    </td>
    <td>
    <tr>110</tr>
    <tr className="failure">84</tr>
    <tr className="topper">123</tr>
    </td>

    <td>
       <tr>pass</tr>
       
     <tr className="failure">fail</tr>
     
       <tr className="topper">topper</tr>
    </td>
    </tr>
  
    </tbody>


  
 

        </ReactBootStrap.Table>
    
}
}

export default Results