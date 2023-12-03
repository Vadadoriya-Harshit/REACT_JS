import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Empdetailst() {
  const [empData, setEmpdata] = useState([]);
  const go = useNavigate("");

  useEffect(() => {
    fetch("http://localhost:8000/Employe")
      .then((res) => res.json())
      .then((data) => setEmpdata(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleView = (id) => {
    go("/View/" + id);
  };

  const handleEdit = (id) => {
      go("/Edit/" + id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure...?")) {
      fetch(`http://localhost:8000/Employe/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // Fixed typo in "Content-Type"
        },
      })
        .then((res) => {
          if (res.ok) {
            alert("Employee Deleted ....!");
            // Filter out the deleted employee from the current state
            setEmpdata(empData.filter((emp) => emp.id !== id));
          } else {
            throw new Error('Failed to delete employee');
          }
        })
        .catch((error) => {
          console.error('Error deleting employee:', error);
          // Handle error appropriately, show an alert, log, or perform any necessary action
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h1>Employee List</h1>
            <Link to="/create" className="btn btn-warning m-3">
              Add New (+)
            </Link>
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr className='text-center'>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {empData.map((el) => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <button className="btn btn-success me-2" onClick={() => handleEdit(el.id)}>Edit</button>
                        <button className="btn btn-danger me-2" onClick={() => handleDelete(el.id)}>Delete</button>
                        <button className="btn btn-primary me-2" onClick={() => handleView(el.id)}>View</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empdetailst;
