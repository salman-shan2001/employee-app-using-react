import React, { useState } from 'react'
import Navebar from './Navebar'
import axios from 'axios'

const AddEmp = () => {

    const[Employee,changeemp]=useState(
        {
            "id":"",
            "name":"",
            "salary":""
        }
    )

    const inputHandler=(event)=>{
changeemp({...Employee,[event.target.name]:event.target.value})
    }

const readValue=()=>{
    axios.post("http://localhost:8080/add",Employee).catch().then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("employee is successfuly added")
            } else {
                alert("error")
            }
        }
    ).finally()
    console.log(Employee)
}
    return (



        <div class="card">
            <div class="card-body">


                <div class="container">
                    <div class="row">
                        <Navebar />

                        <h1>COMPANY EMPLOYEE DETAILS</h1>



                        <div class="card" >
                            <div class="card-body">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="row g-3">

                                <div clasclassNames="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label for="" className="form-label">id</label>
                                    <input type="text" className="form-control" name='id' value={Employee.id} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" className="form-label">Name</label>
                                    <input type="text" className="form-control" name='name' value={Employee.name} onChange={inputHandler}/>
                                </div>
                                
                                
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" className="form-label">Salary</label>
                                    <input type="text" className="form-control" name='salary' value={Employee.salary} onChange={inputHandler}/>
                                </div>
                                
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary" onClick={readValue}>submit</button>
                                </div>
                            </div>

                        </div>
                            </div>
                        </div>



                        
                    </div>
                </div>

            </div>
        </div>




    )
}

export default AddEmp
