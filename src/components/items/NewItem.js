import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createItem,searchItems} from '../../store/actions/itemActions';
class NewItem extends Component {
    constructor (props){
        super(props)
        this.state={
            name:'',
            description:'',
            status:"available"
        }
        this.triggerSeach=this.triggerSeach.bind(this)
    
    }
    handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const description =  this.state.description;
    const status = this.state.status
    const data = {
        name,
        description,
        status
    }     
    this.props.createItem(data);
    this.setState({name:"",description:"",status:"available"})
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    triggerSeach = (e) =>{
        let query = e.target.value
        this.props.searchItems(query)
    }
    render() {  
        return (
        <div className='card'>
        <div className='card-header'>
                <h1>New Item</h1>
        </div>  
        <div className='card-body'>  
        <form onSubmit={this.handleSubmit} className='form-horizontal'>
        <div className='row'>  
            <div className='col-md-3'>
                <input type="text" placeholder="Name" name='name' className='form-control' onChange={this.changeHandler}/><br /><br />
            </div>
            <div className='col-md-3'>
                <input  type="text" placeholder="Description" name='description' className="form-control" onChange={this.changeHandler}/><br /><br />
            </div>    
            <div className='col-md-3'>
                <select onChange={(e) => this.setState({ status: e.target.value })}  className="form-control">
                    <option value = "available">Available</option>
                    <option value = "not_available">Not Available</option>
                </select>
            </div>    
            <div className='col-md-3'>
            <button className="btn btn-primary">Add</button>
            </div>
        </div>      
            </form>
          <hr></hr>
          <div className='row'>
            <div className='col-md-6'>
                <input required type="text" placeholder="Search Items" name='query' className='form-control' onChange={this.triggerSeach}/>
            </div>    
           </div>
        </div>  
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps,{createItem,searchItems})(NewItem);
