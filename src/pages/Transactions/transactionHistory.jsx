const TransactionsHistory = () => {
    return (
        <>
            <div className="d-flex justify-content-start mb-4">
                <h3>Transactions History</h3>

            </div>
            <div className="col-lg-12">
                <div className="card">
                    <div class="mt-5 mx-5">
                        <div class="row">
                            <div class="col-xl-2 col-md-4 col-lg-4 mb-md-0 mb-lg-0 mb-1">
                                <div class="example">
                                    <input class="form-control input-daterange-datepicker" type="text" name="daterange" value="01/01/2015 - 01/31/2015" />
                                </div>
                            </div>
                            <div class="col-xl-2 col-md-4 col-lg-4 mb-md-0">
                                <div class="example">
                                    <input class="form-control input-daterange-datepicker" type="text" name="daterange" value="01/01/2015 - 01/31/2015" />
                                </div>
                            </div>
                            <div class="col-md-4 col-lg-4 mt-3 mt-md-0 d-flex">
                                <button type="button" class="btn btn-success me-2">Search</button>
                                <button type="button" class="btn btn-dark">Cancel</button>
                            </div>


                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-responsive-md">
                                <thead>
                                    <tr>


                                        <th>
                                            <strong>WALLET</strong>
                                        </th>
                                        <th>
                                            <strong>TYPE</strong>
                                        </th>
                                        <th>
                                            <strong>TOTAL</strong>
                                        </th>
                                        <th>
                                            <strong>DESCRIPTION</strong>
                                        </th>
                                        <th>
                                            <strong>STATUS</strong>
                                        </th>
                                        <th>
                                            <strong>DATE</strong>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 20 }).map(() => {
                                        return <tr>



                                            <td>Main</td>
                                            <td>
                                               
                                                <button type="button" class="btn light btn-light btn-xxs d-flex align-items-center">
                                                <i class="bi bi-arrow-up-circle me-2 text-danger" style={{ fontSize: '16px' }}></i>
                                                        Debit</button>
                                            </td>
                                            <td>$23</td>
                                            <td>

                                                send $23 to beneficiary Zain Hussain
                                            </td>
                                            <td>
                                                <i class="bi bi-check2-circle me-1 text-success"></i>
                                                Reserved
                                            </td>
                                            <td>
                                                21 Oct 2023 14:15
                                            </td>
                                            <td>
                                                
                                                    <button type="button" class="btn  btn-info btn-xxs d-flex align-items-center">
                                                        <i class="bi bi-eye me-2" style={{ fontSize: '16px' }}></i>
                                                        View</button>
                                                
                                            </td>
                                        </tr>
                                    })}



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TransactionsHistory