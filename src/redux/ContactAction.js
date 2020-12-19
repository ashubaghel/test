import {add_contact,get_contact,update_contact,Delete_contact} from './ContactType';
export const  addContacts = (contact) =>{
   
    return {
      type :add_contact,
      payload : contact
  
    }
  }

export const getContact = (id) => ({
  type: get_contact,
  payload : id
});

export const updateContact = (contact) => ({
  type:update_contact,
  payload : contact
});

export const deleteContact = (id) =>({

type:Delete_contact,
payload :id
})
