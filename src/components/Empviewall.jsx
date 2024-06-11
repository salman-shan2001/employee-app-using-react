import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'
import axios from 'axios'

const Empviewall = () => {

  const [employee,changeemp]=useState([])
  const fetchData=()=>{
    axios.get("http://localhost:8080/view").then(
      (response)=>{changeemp(response.data)}
    ).catch().finally()
  }
useEffect(()=>{fetchData()},[])
  return (
    <div>
      <Navebar/>
      <table className="table">
        <thead>
          <tr>
          
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">slary</th>
            
          </tr>
        </thead>
        <tbody>
          {employee.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.salary}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Empviewall;