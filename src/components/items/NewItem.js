import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createItem} from '../../store/actions/itemActions';
class NewItem extends Component {
    constructor (props){
        super(props)
        this.state={
            name:'',
            description:''
        }
    
    }
    handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const description =  this.state.description;
    const data = {
        name,
        description
    }


    // this.props.dispatch({
    //     type:'ADD_ITEM',
    //     data});      
    this.props.createItem(data);
    this.setState({name:"",description:""})
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {  
        return (
        <div className='card'>
        <div className='card-header'>
                <h1>New Item</h1>
        </div>  
        <div className='card-body'>
            <form onSubmit={this.handleSubmit} className='form-horizontal'>
            <input required type="text" placeholder="Name" name='name' className='form-control' onChange={this.changeHandler}/><br /><br />
            <input required type="text" placeholder="Description" name='description' className="form-control" onChange={this.changeHandler}/><br /><br />
            <button className="btn btn-primary">Add</button>
            </form>
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

export default connect(mapStateToProps,{createItem})(NewItem);
