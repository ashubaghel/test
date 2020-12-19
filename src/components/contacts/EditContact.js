import React, {useState, useEffect} from 'react'
import {getContact,updateContact} from '../../redux/ContactAction';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory,useParams} from 'react-router-dom'



function EditContact() {

    const  contact = useSelector(state => state.contacts.contact);
   // console.log(contact);
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
   const [phone,setphone] = useState('')
  let history = useHistory();
    let {id} = useParams();
    let dispatch = useDispatch();
useEffect(()=>{

    if(contact != null){
    
        setname(contact.name);
        setemail(contact.email);
        setphone(contact.phone);
        

    }

dispatch(getContact(id));
},[contact]);



const onupdateContact = (e) => {
    e.preventDefault();
    
    const update_contact = Object.assign(contact,{
        
        name:name,
        email:email,
        phone:phone
    })
    dispatch(updateContact(update_contact));
    history.push('/')
}
  
    return (
        <div>
             <div className="card border-0 shadow">
            <div className="card-header">
                Edit  Contact
            </div>

            <div className="card-body">
              <form  onSubmit ={(e)=>onupdateContact(e)} >
                  <div className="form-group">
                      <input type="text" 
                          className="form-control"
                          placeholder="Enter Your Name"
                          onChange={(e)=>setname(e.target.value)}
                         value={name}
                          name ="name"
                         
                      />
                  </div>
                  <div className="form-group">
                      <input type="text" 
                          className="form-control"
                          placeholder="Enter Your Phone"
                          name ="phone"
                          value={phone}
                          onChange={(e)=>setphone(e.target.value)}
                        
                         
                      />
                  </div>
                  <div className="form-group">
                      <input type="text" 
                          className="form-control"
                          placeholder="Enter Your Email"
                          name = "email"
                          value={email}
                          onChange={(e)=>setemail(e.target.value)}
                         
                         
                      />
                  </div>
                  <button className="btn btn-primary" >Update Contact</button>
              </form>
            </div>
        </div>
        </div>
    )
}

export default EditContact
