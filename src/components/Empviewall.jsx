import React from 'react'
import Navebar from './Navebar'

const Empviewall = () => {
  return (
    <div>
        <Navebar/>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Joined Year</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">C001</th>
      <td>Mark</td>
      <td>2012</td>
      <td>50000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>2018</td>
      <td>35000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Salman</td>
      <td>2015</td>
      <td>55000</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Empviewall
