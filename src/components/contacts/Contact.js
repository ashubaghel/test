import React from 'react'
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom';
import {deleteContact} from '../../redux/ContactAction';
import {useDispatch} from "react-redux";

function Contact({contact,SelectAll}) {
let dispatch =useDispatch()
    const {id,email,phone,name} = contact

    const  deleteconatct = (e) =>{
    e.preventDefault();
    console.log(id);
    }
    return (
        
             <tr key={id}>
    <td><input checked={SelectAll} type="checkbox"   /></td>
   
      <td><Avatar className="mr-2" name={name} size="45" round={true}></Avatar>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className="actions">
      <Link to={`/contact/edit/${id}`}>
      <span className="material-icons mr-2 ">edit</span>
      </Link>
      
      <span  onClick={(e)=>dispatch(deleteContact(id))} className="material-icons mr-2 text-danger">remove_circle</span>
      </td>
      </tr>
    )
}

export default Contact
