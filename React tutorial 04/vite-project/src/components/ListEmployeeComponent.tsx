// src/components/ListEmployeeComponent.tsx

import React from 'react';
// 1. Prepare Dummy Data: Add an array of employee objects [cite: 50, 55]
const employees = [
  { id: 1, firstname: 'Sajani(ps_2021_121)', lastname: 'Diwyanjali', email: 'ssajani@gmail.com' }, 
  { id: 2, firstname: 'Navod', lastname: 'Gunasinghe', email: 'navod@example.com' }, 
  { id: 3, firstname: 'Amara', lastname: 'Senarath', email: 'amara@example.com' },
];

const ListEmployeeComponent: React.FC = () => { 
  return (
    <div className="container mt-3">
      <h3 className="text-primary">Employee List</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th> 
            <th>First Name</th> 
            <th>Last Name</th> 
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the employees array to render a table row for each employee [cite: 75] */}
          {employees.map((employee) => (
            <tr key={employee.id}> 
              <td>{employee.id}</td> 
              <td>{employee.firstname}</td> 
              <td>{employee.lastname}</td> 
              <td>{employee.email}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent; 