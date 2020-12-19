import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/ContactAction'
import {useHistory} from 'react-router-dom';
import uid  from 'shortid'

function AddContact() {
    let history = useHistory();
   let dispatch = useDispatch();
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
   const [phone,setphone] = useState('')





const submitval = (e) => {
 e.preventDefault();
 console.log(name);

dispatch(addContacts(
    {
        'id':uid.generate(),
        "name":name,
        "phone":phone,
        "email":email
    
    }

))
history.push("/");
}

    return (
        
        
        <div className="card border-0 shadow">
            <div className="card-header">
                Add a Contact
            </div>

            <div className="card-body">
              <form onSubmit = {submitval}>
                  <div className="form-group">
                      <input type="text" 
                          className="form-control"
                          placeholder="Enter Your Name"
                          value={name}
                          name ="name"
                          onChange = {(e)=>{setname(e.target.value)}}
                      />
                  </div>
                  <div className="form-group">
                      <input type="text" 
                          className="form-control"
                          placeholder="Enter Your Phone"
                          name ="phone"
                          value={phone}
                          onChange = {(e)=>{setphone(e.target.value)}}
                      />
                  </div>
                  <div className="form-group">
                      <input type="text" 
                          className="form-control"
                          placeholder="Enter Your Email"
                          name ="email"
                          value={email}
                          onChange = {(e)=>{setemail(e.target.value)}}
                      />
                  </div>
                  <button className="btn btn-primary" > Create Contact</button>
              </form>
            </div>
        </div>
    )
}

export default AddContact
