import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function View() {
    const{empId} = useParams();
    
      const go =useNavigate();
    const[viewData,setviewData]=useState("");
 console.log(View);
    useEffect(()=>{
        fetch("http://localhost:8000/Employe/"+empId).then((res)=>res.json()).then((data)=>setviewData(data));
       
    },[])
  return (
    <> 
    <div className='text-center'>
      <h1>View Profile:</h1>
      {viewData ? (
        <table className="table border border-3">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{viewData.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{viewData.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{viewData.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{viewData.phone}</td>
            </tr>
          </tbody>
        
        </table>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <button onClick={()=>go('/')} className='text-center m-auto d-block btn btn-lg -p-2 btn-primary'>
          Go Back
         </button>
     </>
  )
}

export default View