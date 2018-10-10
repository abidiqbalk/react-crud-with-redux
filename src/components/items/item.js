import React, { Component } from 'react';
import EditItem from "./EditItem"
class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            editable:false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleEdit=()=>{
        this.setState({editable: !this.state.editable})
    }
    
    render(){
        if(this.state.editable){
            return(
                <EditItem item={this.props.item} toggleEdit={this.toggleEdit}/>          
            )
        }
        else
        {
            return(
                <div key={this.props.item.id}>
                    <div className="actions float-right">
                        <button className="btn btn-danger" onClick={(e) => this.props.handleDelete(this.props.item.id)} >Delete</button>
                        <button className="btn btn-info ml-1" onClick={(e)=>this.toggleEdit(e)} >Edit</button>
                    </div>
                    <div className="d-flex  justify-content-between"><h5 className="mb-1">{this.props.item.name}</h5></div>
                    <p className="mb-1">{this.props.item.description} </p>
                    <span className={`badge badge-${this.props.item.status==='available'? "success" : 'danger'} badge-pill`}>{this.props.item.status.replace(/_/g, ' ')}</span>
                </div>
            )
        }
        
    }
}


export default Item
  