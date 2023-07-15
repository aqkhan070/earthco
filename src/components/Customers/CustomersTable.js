import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/AppData'
import CustomerTR from './CustomerTR';
import AddCutomer from './AddCutomer';

const CustomersTable = () => {
    const { customers } = useContext(DataContext);

    const renderedCustomers = customers.map((customer) => {
        return <CustomerTR customer={customer} />
    })
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Customers</h4>
                                    <div>
                                        <a className="btn btn-primary btn-sm" style={{ marginRight: '20px' }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">+ Add Customer</a>
                                        <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                            + Invite Customer
                                        </button>
                                    </div>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="form-check custom-checkbox ms-2">
                                                    <input type="checkbox" className="form-check-input" id="customCheckBox2" required="" />
                                                    <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                </div>
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Full Adress</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderedCustomers}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddCutomer />
        </div>
    )
}

export default CustomersTable
