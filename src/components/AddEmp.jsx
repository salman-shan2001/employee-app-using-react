import React from 'react'
import Navebar from './Navebar'

const AddEmp = () => {
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
                                    <label for="" className="form-label">Employee code</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" className="form-label">Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" className="form-label">Designation</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" className="form-label">DOB</label>
                                    <input type="date" name="" id="" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" className="form-label">Salary</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" className="form-label">Company Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" className="form-label">Email Id</label>
                                    <input type="email" name="" id="" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" className="form-label">Year Of Experiance</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary">submit</button>
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
