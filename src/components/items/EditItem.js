import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateItem} from './../../store/actions/itemActions'
import { bindActionCreators } from 'redux'
class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {status:"available",editable:false};
        
        // this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
      }
    
    //   handleChange(event) {
    //     this.setState({[event.target.name] : event.target.value});
    //   }
    handleUpdate=(e)=>{
        e.preventDefault()
        const data = {
            id:this.props.item.id,
            name : this.name.value,
            description : this.description.value,
            status : this.state.status
        }
        this.props.updateItem(data)
        this.props.toggleEdit()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleUpdate} className='form-horizontal'>
                <div className='row'>
                    <div className='col-md-3'>
                        <input required type="text" placeholder="Name" name='name' className='form-control'  ref={input => this.name = input} defaultValue={this.props.item.name}/>
                    </div>
                    <div className='col-md-3'>
                    <input required type="text" placeholder="Description" name='description' className="form-control"  ref={input => this.description = input} defaultValue={this.props.item.description}/>
                    </div>
                    <div className='col-md-3'>
                        <select onChange={(e) => this.setState({ status: e.target.value })}  className="form-control">
                            <option value = "available">Available</option>
                            <option value = "not_available">Not Available</option>
                        </select>
                    </div>    
                </div>    
                <div className='row mt-1'>
                <div className='col-md-2'>
                    <button className="btn btn-primary">Update</button>
                </div>    
                </div>    
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


  