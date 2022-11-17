

import React, { useState } from 'react'
import Axios from 'axios'

function Modal() {
  const [first_name,setfirst_name]=useState("")
  const [email,setemail]=useState("")

  function postData (){
  const postdata = {
    first_name,
    email
  }
 Axios.post("https://reqres.in/api/users?page=2/posts",
  postdata
  ).then(res => console.log("Posting Data",res)).catch((err)=>{
  console.log(err);
  })

  }



  return (
    <>
  
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Create New User
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body text-center my-3  ">
            <form id="form">
          <label htmlFor="text">Name</label><input className='m-3' type="text" id='text' placeholder='First Name' value={first_name} onChange={(e)=>{setfirst_name(e.target.value)}} /><br />
           <label htmlFor="Email">Email</label><input className='m-3' type="Email" id='Email' placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
           </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" htmlFor="form" onClick={postData} className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  

  )
}

export default Modal
