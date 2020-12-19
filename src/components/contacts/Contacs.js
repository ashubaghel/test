import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import Contact from './Contact';

function Contacs() {

    const contacts = useSelector(state => state.contacts.contacts);
   const [selectAll,setSelectAll] = useState(false)
    return (
        <div>
           <table className="table table-shadow">
  <thead>
    <tr>
      <th><input id="selectAll" type="checkbox" onClick={()=>{setSelectAll(!selectAll)}} value={selectAll}  /></th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

  {
    contacts.map((contact ) =>(
        
      <Contact contact = {contact} SelectAll = {selectAll} />

    ))
  }
    
   
    
  </tbody>
</table>
        </div>
    )
}

export default Contacs
