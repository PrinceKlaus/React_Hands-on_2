import React from 'react';
import { Component } from 'react';
class FormCLass extends Component{
    state={
        name : '',
        dept :'',
        Rating:'',
        EmpData :[ ]
    }
    changeHandle= (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
  clickHandle = (e) =>{
    e.preventDefault();
     let newObj={
        name :this.state.name,
        dept : this.state.dept,
        Rating:this.state.Rating
     }
     this.state.EmpData.push(newObj);
     this.setState({
        EmpData : this.state.EmpData,
        name : "",
        dept : "",
        Rating : ""
    })
     console.log(this.state.EmpData)
    }
    render(){
        return(
            <div className='all'>
                <form>
        <label htmlFor ="name" >Name :  </label>
        <input id="name" type="text" placeholder='Enter Name'name='name' value={this.state.name} onChange={this.changeHandle} required/>
        <br/>
        <br/>
        <label htmlFor ="dept">Department :  </label>
        <input id="dept" type="text" placeholder='Enter Dept'name='dept' value={this.state.dept} onChange={this.changeHandle} required/>
        <br/>
        <br/>
        <label htmlFor ="Rating">Rating :  </label>
        <input id="Rating" type="number" placeholder='Enter Rating'name='Rating' value={this.state.Rating} onChange={this.changeHandle} required/>
        <br/>
        <br/>
        <button onClick={this.clickHandle}>Submit</button>
        </form>
        <div className='parent'>
        {this.state.EmpData.map((item,index) =>{
            return(
                <div className='box'>
                Name : {item.name} | Dept :  {item.dept}  | Rating : {item.Rating}
                </div>
            )
        } )}
        </div>
    </div>
        )
    }
}
export default FormCLass