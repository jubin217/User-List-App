import React from 'react'
import Navbar from './Navbar'

const Add = () => {
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div className="row" style={{marginTop:80}}>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-body">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Enter Name</b></label>
                                        <input type="text" className="form-control" placeholder='Enter Name' />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Enter UserName</b></label>
                                        <input type="text" className="form-control" placeholder='Username' />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label"><b>Enter EmailId</b></label>
                                        <input type="text" className="form-control" placeholder='Email' />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Enter Phone No</b></label>
                                        <input type="text" className="form-control" placeholder='Phone No' />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Enter Website</b></label>
                                        <input type="text" className="form-control" placeholder='Website' />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success"><b>Submit</b></button>
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

export default Add
