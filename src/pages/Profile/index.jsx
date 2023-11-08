import AddressDetails from "./addressDetails"
import CompanyDetails from "./companyDetails"

const Profile = () => {
    return (
        <>
            <div class="d-flex align-items-center mb-4 flex-wrap">
                <div class="card-tabs mt-3 mt-sm-0 me-auto">
                    <ul class="nav nav-tabs trans-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link underline active" data-bs-toggle="tab" href="#company-details" role="tab">Company Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link underline" data-bs-toggle="tab" href="#address-details" role="tab">Address Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link underline" data-bs-toggle="tab" href="#pending" role="tab">Director Details</a>
                        </li>

                    </ul>
                </div>




            </div>
            <div class="row">
                <div class="tab-content">
                    <div class="tab-pane fade active show" id="company-details" role="tabpanel">
                    <CompanyDetails />
                    </div>
                    <div class="tab-pane fade  show" id="address-details" role="tabpanel">
                    <AddressDetails />
                    </div>
                </div>
            </div>

        </>
    )
}
export default Profile