const Beneficiaries = () => {
    return (
        <div >
            {/* row */}
           
                <div className="d-flex justify-content-between mb-4">
                    <h3>Beneficiaries List</h3>
                    <button type="button" class="btn btn-success btn-sm">Add Beneficiary</button>
                </div>
                <div className="col-lg-12">
                    <div className="card">

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-responsive-md">
                                    <thead>
                                        <tr>
                                            <th style={{ width: 50 }}>
                                                <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="checkAll"
                                                        required=""
                                                    />
                                                    <label className="form-check-label" htmlFor="checkAll" />
                                                </div>
                                            </th>
                                            <th>
                                                <strong>IMAGE</strong>
                                            </th>
                                            <th>
                                                <strong>BENEFICIARY TYPE</strong>
                                            </th>
                                            <th>
                                                <strong>ACCOUNT HOLDER</strong>
                                            </th>
                                            <th>
                                                <strong>ACCOUNT TYPE</strong>
                                            </th>
                                            <th>
                                                <strong>ACCOUNT</strong>
                                            </th>
                                            <th>
                                                <strong>BIC/SWIFT</strong>
                                            </th>
                                            <th>
                                                <strong>PAYMENT CURRENCY</strong>
                                            </th>
                                            <th>
                                                <strong>ACTION</strong>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: 20 }).map(() => {
                                            return <tr>
                                                <td>
                                                    <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="customCheckBox2"
                                                            required=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="customCheckBox2"
                                                        />
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src="images/avatar/1.jpg"
                                                            className="rounded-lg me-2"
                                                            width={24}
                                                            alt=""
                                                        />{" "}

                                                    </div>
                                                </td>
                                                <td>Individual </td>
                                                <td>Zain Hussain</td>
                                                <td>
                                                    Sepa
                                                </td>
                                                <td>
                                                    LT0123868917263781872
                                                </td>
                                                <td>
                                                    REVOLT21XXX
                                                </td>
                                                <td>
                                                    EUR
                                                </td>
                                                <td>

                                                    <div className="d-flex">
                                                        <a data-bs-toggle="modal" data-bs-target="#sendModal"
                                                            href="#"
                                                            className="btn btn-danger shadow btn-xs sharp me-1"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send mx-auto" viewBox="0 0 16 16">
                                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                            </svg>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn btn-primary shadow btn-xs sharp me-1"
                                                        >
                                                            <i className="fas fa-pencil-alt" />
                                                        </a>
                                                        <a href="#" className="btn btn-danger shadow btn-xs sharp">
                                                            <i className="fa fa-trash" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        })}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* send Modal */}
                <div class="modal fade" id="sendModal">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Send To Zain Hussain</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal">
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3 ">
                                    <label class="form-label">Payment Amount</label>
                                    <input type="text" class="form-control" placeholder="Enter Amount" />
                                </div>
                                <div class="row">
                                    <div class="mb-3 ">
                                        <label class="form-label">Select IBAN</label>
                                        <select id="inputState" class="default-select form-control wide">
                                            <option selected disabled>Choose...</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="mb-3 ">
                                        <label class="form-label">Payment Option</label>
                                        <select id="inputState" class="default-select form-control wide">
                                            <option selected disabled>Choose...</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="mb-3 ">
                                    <label class="form-label">Payment Reference</label>
                                    <input type="text" class="form-control" placeholder="Reference" />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="button" class="btn btn-success btn-sm">Send Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* send Modal */}
              
            
        </div>
    )

}
export default Beneficiaries