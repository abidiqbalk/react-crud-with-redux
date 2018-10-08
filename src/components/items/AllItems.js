import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllItems} from '../../store/actions/itemActions'
import {deleteItem} from '../../store/actions/itemActions'
import ItemList from './item'
class AllItems extends Component {
  componentDidMount(){
    this.props.getAllItems()
  }
 
  handleDelete=(id)=>{
    this.props.deleteItem(id)
  }
  
  
  render(){

    let allItems = this.props.items.map(item => {
        return (
            <div key={item.id}>
                <div className='list-group-item list-group-item-action flex-column align-items-start'>
                  <ItemList item={item} handleDelete={this.handleDelete}  />
                </div>    
            </div>    
        )
    })
    return(
        <div>
            { allItems }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
export default connect (mapStateToProps,{getAllItems,deleteItem})(AllItems)