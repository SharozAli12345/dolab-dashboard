const AccountConfirmation = () => {
    return (
        <>
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Account Confirmation</a></li>
                </ol>
            </div>
            <div>
                <h2>Codego, Welcome</h2>
            </div>

            <div className="mb-4">
                <span>Please provide us with more information about your company to complete your account verification.</span>
            </div>
           
           <div className="row">
           <div class="alert alert-danger alert-dismissible fade show col-12 col-lg-8 col-md-12">
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                </button> */}
                <strong>Company Rejection!:</strong> You provided company information is not valid.
            </div>
           </div>

            <div className="row">
                
                <div className="col-12 col-lg-8 col-md-12">
                    <div className="card">
                        <div class="card-body">
                            <div class="nestable col-8 col-md-6 col-sm-8  " style={{ cursor: 'default' }}>
                                <div class="dd" id="nestable">
                                    <ol class="dd-list p-0">
                                        <li class="dd-item" data-id="1">
                                            <div class="dd-handle" style={{ pointerEvents: 'none' }}>VERIFY BUSINESS DOCUMENTS</div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <h3>Verification</h3>

                            <div className="mt-4 mx-3 mb-4">
                                <ul class="unorder-list">
                                    <li>Company Information- <strong className="text-danger">Reject</strong></li>
                                    <p class="fst-italic text-primary">Update Information.</p>
                                    <li>Company Information</li>
                                    <p class="fst-italic text-primary">Update Information.</p>
                                    <li>Director Details</li>
                                    <p class="fst-italic text-primary">Add Director Information.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default AccountConfirmation