const TransactionDetails = () => {
    return (
        <>
        <div className="text-start mb-5">
            <h2>Transactions Details</h2>
        </div>
            <div class="basic-list-group">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div className="row">
                            <span className="col-6 text-center">Transaction Mode</span>
                            <span className="col-6 text-center">Debit</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <span className="col-6 text-center">Transaction ID</span>
                            <span className="col-6 text-center">291234</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <span className="col-6 text-center">Date</span>
                            <span className="col-6 text-center">07 November 2023 00:00:00</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <span className="col-6 text-center">Amount</span>
                            <span className="col-6 text-center">$ 53</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <span className="col-6 text-center">Fee</span>
                            <span className="col-6 text-center">$ 0</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <span className="col-6 text-center">Description</span>
                            <span className="col-6 text-center">Send 23 Dollar to beneficiary Zain Hussain</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <span className="col-6 text-center">Reason Payment</span>
                            <span className="col-6 text-center">Salary Nov month</span>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="row">
                            <span className="col-6 text-center">Beneficiary Name</span>
                            <span className="col-6 text-center">Zain Hussain</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default TransactionDetails