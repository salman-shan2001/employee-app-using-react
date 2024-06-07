import React from 'react'
import Navebar from './Navebar'

const Empviewall = () => {

  const data = [
    {
      
      "id": 1,
      "name": "amjath",
      "salary":25000
    },
    {
      
      "id": 2,
      "name": "amal",
      "salary":25000
    },
    {
      
      "id": 3,
      "name": "salman",
      "salary":55000
    },
    {
      
      "id": 4,
      "name": "ammu",
      "salary":29000
    },
    {
      
      "id": 5,
      "name": "hamzan",
      "salary":25000
    },
    {
      
      "id": 6,
      "name": "rizna",
      "salary":55000
    },
    {
      
      "id":7,
      "name": "kavya",
      "salary":55000
    },
    {
      
      "id": 8,
      "name": "sabeeha",
      "salary":55000
    }
    // Add more data objects as needed
  ];

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
          {data.map(item => (
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