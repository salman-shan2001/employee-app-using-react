import React from 'react'
import Navebar from './Navebar'

const SearchEmp = () => {
    return (
        <div>
            <Navebar />


            <h1>SEARCH PANEL</h1>
            <div class="card">
                <div class="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">EMPLOYEE ID</label>
                                        <input type="text" className="form-conterol" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success">Search</button>
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

export default SearchEmp
