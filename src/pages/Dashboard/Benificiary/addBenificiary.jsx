const AddBeneficiary = () => {
    return (
    
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Add Beneficiary</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-validation">
                                    <form className="needs-validation" noValidate="">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="mb-3 row">
                                                    <label
                                                        className="col-lg-4 col-form-label"
                                                        htmlFor="validationCustom05"
                                                    >
                                                        Beneficiary Type
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select
                                                            className="default-select wide form-control"
                                                            id="validationCustom05"
                                                        >
                                                            <option data-display="Select">Please select</option>
                                                            <option value="html">Individual</option>
                                                            <option value="css">CSS</option>
                                                            <option value="javascript">JavaScript</option>
                                                            <option value="angular">Angular</option>
                                                            <option value="angular">React</option>
                                                            <option value="vuejs">Vue.js</option>
                                                            <option value="ruby">Ruby</option>
                                                            <option value="php">PHP</option>
                                                            <option value="asp">ASP.NET</option>
                                                            <option value="python">Python</option>
                                                            <option value="mysql">MySQL</option>
                                                        </select>
                                                        <div className="invalid-feedback">Please select a one.</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label
                                                        className="col-lg-4 col-form-label"
                                                        htmlFor="validationCustom05"
                                                    >
                                                        IBAN Country
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select
                                                            className="default-select wide form-control"
                                                            id="validationCustom05"
                                                        >
                                                            <option data-display="Select">Please select</option>
                                                            <option value="html">HTML</option>
                                                            <option value="css">CSS</option>
                                                            <option value="javascript">JavaScript</option>
                                                            <option value="angular">Angular</option>
                                                            <option value="angular">React</option>
                                                            <option value="vuejs">Vue.js</option>
                                                            <option value="ruby">Ruby</option>
                                                            <option value="php">PHP</option>
                                                            <option value="asp">ASP.NET</option>
                                                            <option value="python">Python</option>
                                                            <option value="mysql">MySQL</option>
                                                        </select>
                                                        <div className="invalid-feedback">Please select a one.</div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label
                                                        className="col-lg-4 col-form-label"
                                                        htmlFor="validationCustom09"
                                                    >
                                                        IBAN Account <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="validationCustom09"
                                                            placeholder={"IBAN Account number"}
                                                            required=""
                                                        />
                                                        <div className="invalid-feedback">
                                                            Please enter IBAN Account number.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label" for="validationCustom01">Beneficiary Name
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="validationCustom01" placeholder="Enter beneficiary name.." required />
                                                        <div class="invalid-feedback">
                                                            Please enter beneficiary name.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label" for="validationCustom01">Beneficiary City
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="validationCustom01" placeholder="Enter beneficiary city.." required />
                                                        <div class="invalid-feedback">
                                                            Please enter beneficiary city.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label" for="validationCustom04">Beneficiary Address <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <textarea class="form-control" id="validationCustom04" rows="5" placeholder="Address" required></textarea>
                                                        <div class="invalid-feedback">
                                                            Please enter beneficiary address.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="mb-3 row">
                                                    <label
                                                        className="col-lg-4 col-form-label"
                                                        htmlFor="validationCustom05"
                                                    >
                                                        Beneficiary Address Country
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <select
                                                            className="default-select wide form-control"
                                                            id="validationCustom05"
                                                        >
                                                            <option data-display="Select">Please select</option>
                                                            <option value="html">Individual</option>
                                                            <option value="css">CSS</option>
                                                            <option value="javascript">JavaScript</option>
                                                            <option value="angular">Angular</option>
                                                            <option value="angular">React</option>
                                                            <option value="vuejs">Vue.js</option>
                                                            <option value="ruby">Ruby</option>
                                                            <option value="php">PHP</option>
                                                            <option value="asp">ASP.NET</option>
                                                            <option value="python">Python</option>
                                                            <option value="mysql">MySQL</option>
                                                        </select>
                                                        <div className="invalid-feedback">Please select a one.</div>
                                                    </div>
                                                </div>

                                                <div className="mb-3 row">
                                                    <label
                                                        className="col-lg-4 col-form-label"
                                                        htmlFor="validationCustom11"
                                                    >
                                                        Profile Image
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-6">
                                                        <input class="form-control" type="file" id="formFile" />

                                                        <div className="invalid-feedback">
                                                            Please upload profile image.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-3 row">
                                                    <label className="col-lg-4 col-form-label">
                                                        <a href="javascript:void()">Terms &amp; Conditions</a>{" "}
                                                        <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="col-lg-8">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="validationCustom12"
                                                                required=""
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="validationCustom12"
                                                            >
                                                                Agree to terms and conditions
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3 row">

                                            </div>
                                            <div className="d-flex justify-content-end float-right">
                                                <button type="submit" className="btn btn-default">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>



                </div>
               

    )
}
export default AddBeneficiary