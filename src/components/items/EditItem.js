import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateItem} from './../../store/actions/itemActions'
import { bindActionCreators } from 'redux'
class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',description:"",editable:false};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
      }
    handleUpdate=(e)=>{
        e.preventDefault()
        const data = {
            id:this.props.item.id,
            name :this.state.name,
            description :this.state.description
        }
        this.props.updateItem(data)
        this.props.toggleEdit()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleUpdate} className='form-horizontal'>
                <input required type="text" placeholder="Name" name='name' className='form-control'  defaultValue={this.props.item.name} onChange={this.handleChange}/><br /><br />
                <input required type="text" placeholder="Description" name='description' className="form-control"  defaultValue={this.props.item.description} onChange={this.handleChange}/><br /><br />
                <button className="btn btn-primary">Update</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
      updateItem : updateItem,
    }, dispatch )
  }
  

export default connect(null,mapDispatchToProps)(EditItem);


  