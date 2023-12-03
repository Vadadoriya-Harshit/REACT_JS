import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Create() {
   const[id,idChange]=useState("");
   const[name,nameChange]=useState("");
   const[phone,phoneChange]=useState("");
   const[email,emailChange]=useState("");
  const employedata ={id,name,email,phone};

     const go = useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
       
        fetch("http://localhost:8000/Employe",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(employedata)
        })
        .then((res) => alert("Add Employe Successfully...!",go('/')))


    }
  return (
    <div>
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-title">
            <h1>Add Employee</h1>
          </div>

          <div className="card-body">
            <form className="container text-start" onSubmit={handleClick}>

              <div className="col-lg-12">
                <label className="form-label">ID</label>
                <input disabled="disabled" type="text" className="form-control" value={id} onChange={(e)=>idChange(e.target.value)}></input>
              </div>

              <div className="col-lg-12">
                <label className="form-label">Name</label>
                <input  type="text" className="form-control" value={name} onChange={(e)=>nameChange(e.target.value)}></input>
              </div>

              <div className="col-lg-12">
                <label className="form-label" >Email</label>
                <input  type="email" className="form-control" value={email} onChange={(e)=>emailChange(e.target.value)}></input>
              </div>

              <div className="col-lg-12">
                <label className="form-label">Phone</label>
                <input  type="tel" className="form-control" value={phone} onChange={(e)=>phoneChange(e.target.value)}></input>
              </div>


              <div className="col-lg-12">
               
                <input  type="checkbox" className="form-check-input"></input>
                {" "} <label className="form-check-label">Is Active</label>
              </div>

              <div className="col-lg-12 mt-2">
               
              <button className="btn btn-success me-2">Submit</button>
              <Link to="/" className="btn btn-primary me-2">Back</Link>
             </div>





            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Create