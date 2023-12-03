import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EmpEdit() {
  const { empId } = useParams();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

 useEffect(()=>{
  fetch(`http://localhost:8000/Employe/${empId}`).then((res)=>res.json()).then((data)=>{
    setId(data.id);
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
  })
 },[empId])




 const handleSubmit= (e)=>{
 e.preventDefault();
 const Empdata = {id,name,email,phone};
 fetch(`http://localhost:8000/Employe/${empId}`,{
  method:"PUT",
  headers:{
    "Content-Type":"application/json"
  },body:JSON.stringify(Empdata)
 }).then((res)=>alert("Updated Successfully ...!",navigate('/')))
 }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-title">
              <h1>Edit Employee</h1>
            </div>
            <div className="card-body">
              <form className="container text-start" onSubmit={handleSubmit}>
                <div className="col-lg-12">
                  <label className="form-label">ID</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div className="col-lg-12">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-lg-12">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-lg-12">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
               
                <div className="col-lg-12 mt-2">
                  <button className="btn btn-success me-2">Submit</button>
                  <Link to="/" className="btn btn-primary me-2">
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpEdit;
