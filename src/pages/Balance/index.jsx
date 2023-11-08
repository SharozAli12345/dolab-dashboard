const Balance = () => {
  return (
    <div >
      {/* row */}
      
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              {/*--column-- */}
              <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 -mx-2">
                <div className="card  wallet">
                  <div className="boxs">
                    <span className="box one" />
                    <span className="box two" />
                    <span className="box three" />
                    <span className="box four" />
                  </div>
                  <div className="card-header border-0 pe-5">
                    <div className="wallet-icon">
                      <svg
                        width={62}
                        height={39}
                        viewBox="0 0 62 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="42.7722"
                          cy="19.2278"
                          r="19.2278"
                          fill="white"
                          fillOpacity="0.2"
                        />
                        <circle
                          cx="19.2278"
                          cy="19.2278"
                          r="19.2278"
                          fill="white"
                          fillOpacity="0.2"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="send m-auto">
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity={1}
                            d="M15.1667 4.66667C15.1667 4.02233 14.6444 3.5 14 3.5C13.3557 3.5 12.8334 4.02233 12.8334 4.66667V18.6667C12.8334 19.311 13.3557 19.8333 14 19.8333C14.6444 19.8333 15.1667 19.311 15.1667 18.6667V4.66667Z"
                            fill="white"
                          />
                          <path
                            d="M7.825 12.4916C7.36939 12.9472 6.63069 12.9472 6.17508 12.4916C5.71947 12.036 5.71947 11.2973 6.17508 10.8417L13.1751 3.84171C13.6168 3.40003 14.3279 3.38458 14.7884 3.80665L21.7884 10.2233C22.2634 10.6587 22.2954 11.3967 21.8601 11.8717C21.4247 12.3467 20.6867 12.3787 20.2117 11.9433L14.0351 6.2815L7.825 12.4916Z"
                            fill="white"
                          />
                          <path
                            opacity={1}
                            d="M23.3333 22.1667H4.66667C4.02233 22.1667 3.5 22.689 3.5 23.3334C3.5 23.9777 4.02233 24.5 4.66667 24.5H23.3333C23.9777 24.5 24.5 23.9777 24.5 23.3334C24.5 22.689 23.9777 22.1667 23.3333 22.1667Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <span>Transfer </span>
                    </div>
                  </div>
                  <div className="card-body py-3  d-flex align-items-center justify-content-between flex-wrap">
                    <div className="wallet-info">
                      <span className="fs-18 d-block">Wallet Balance</span>
                      <h4 className="font-w600 mb-0 d-inline-flex me-2 text-break">
                        $824,571.93
                      </h4>
                      <span>+0.8% than last week</span>
                    </div>
                    <div>
                      <div className="send m-auto">
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M6.83329 2.33331H16.0258C16.4396 2.33331 16.84 2.47994 17.1559 2.74718L22.7134 7.44791C23.1066 7.78042 23.3333 8.26917 23.3333 8.78405V23.4305C23.3333 25.5195 23.3094 25.6666 21.1666 25.6666H6.83329C4.69048 25.6666 4.66663 25.5195 4.66663 23.4305V4.56942C4.66663 2.48046 4.69048 2.33331 6.83329 2.33331Z"
                            fill="white"
                          />
                          <path
                            d="M16.3333 12.8333H8.16667C7.52233 12.8333 7 13.3557 7 14C7 14.6443 7.52233 15.1667 8.16667 15.1667H16.3333C16.9777 15.1667 17.5 14.6443 17.5 14C17.5 13.3557 16.9777 12.8333 16.3333 12.8333Z"
                            fill="white"
                          />
                          <path
                            d="M11.6667 17.5H8.16667C7.52233 17.5 7 18.0223 7 18.6667C7 19.311 7.52233 19.8333 8.16667 19.8333H11.6667C12.311 19.8333 12.8333 19.311 12.8333 18.6667C12.8333 18.0223 12.311 17.5 11.6667 17.5Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <span>Send Invoices</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* widget cards */}
              <div className="col-xl-8 ">
                <div className="card pt-2">
                  <div className="card-body py-3 py-md-2 px-4">
                    <div className="row">
                      <div class="col-xl-3 col-lg-6 col-xxl-3 col-sm-12 mt-4 ">
                        <div class="card " data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                          <div class="card-body text-center ai-icon  text-primary">
                            <svg id="rocket-icon" class="my-2" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                              <line x1="3" y1="6" x2="21" y2="6"></line>
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <div>
                              <span class="text-white">IBAN Details</span>

                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-3 col-lg-6 col-xxl-3 col-sm-12 mt-4 ">
                        <div class="card ">
                          <div class="card-body text-center ai-icon  text-primary">
                            <svg id="rocket-icon" class="my-2" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                              <line x1="3" y1="6" x2="21" y2="6"></line>
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <div>
                              <span class="text-white">IBAN Details</span>

                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-3 col-lg-6 col-xxl-3 col-sm-12 mt-4 ">
                        <div class="card ">
                          <div class="card-body text-center ai-icon  text-primary">
                            <svg id="rocket-icon" class="my-2" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                              <line x1="3" y1="6" x2="21" y2="6"></line>
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <div>
                              <span class="text-white">IBAN Details</span>

                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-3 col-lg-6 col-xxl-3 col-sm-12 mt-4 ">
                        <div class="card ">
                          <div class="card-body text-center ai-icon  text-primary">
                            <svg id="rocket-icon" class="my-2" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                              <line x1="3" y1="6" x2="21" y2="6"></line>
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <div>
                              <span class="text-white">IBAN Details</span>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>




              {/*--/Benificiary-- */}
              {/* <div className="col-xl-12 ">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Recent Benificiaries</h6>
                    <button type="button" class="btn btn-success btn-sm">Add Benificiary</button>
                  </div>
                  <div className="card-body py-3 py-md-2 px-4">
                    <div className="row">
                      <div class="col-xl-4 col-lg-6 col-xxl-3 col-sm-12 mt-4 ">
                        <div className="card overflow-hidden">
                          <div
                            className="text-center p-3 overlay-box "
                            style={{ backgroundImage: "url(images/big/img1.jpg)" }}
                          >
                            <div className="profile-photo">
                              <img
                                src="images/profile/profile.png"
                                width={100}
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-3 mb-1 text-white">Deangelo Sena</h3>
                            <p className="text-white mb-0">Senior Manager</p>
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Patient Gender</span>{" "}
                              <strong className="">Female </strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Years Old</span>{" "}
                              <strong className="">Age: 24 </strong>
                            </li>
                          </ul>
                          <div className="card-footer border-0 mt-0">
                            <button className="btn btn-primary btn-lg btn-block">
                              <i className="fa fa-bell-o" /> View Profile
                            </button>
                          </div>
                        </div>


                      </div>
                      <div class="col-xl-4 col-lg-6 col-xxl-3 col-sm-12 mt-4 ">
                        <div className="card overflow-hidden">
                          <div
                            className="text-center p-3 overlay-box "
                            style={{ backgroundImage: "url(images/big/img1.jpg)" }}
                          >
                            <div className="profile-photo">
                              <img
                                src="images/profile/profile.png"
                                width={100}
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-3 mb-1 text-white">Deangelo Sena</h3>
                            <p className="text-white mb-0">Senior Manager</p>
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Patient Gender</span>{" "}
                              <strong className="">Female </strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Years Old</span>{" "}
                              <strong className="">Age: 24 </strong>
                            </li>
                          </ul>
                          <div className="card-footer border-0 mt-0">
                            <button className="btn btn-primary btn-lg btn-block">
                              <i className="fa fa-bell-o" /> View Profile
                            </button>
                          </div>
                        </div>

                      </div>
                      <div class="col-xl-4 col-lg-6 col-xxl-3 col-sm-12 mt-4 ">
                        <div className="card overflow-hidden">
                          <div
                            className="text-center p-3 overlay-box "
                            style={{ backgroundImage: "url(images/big/img1.jpg)" }}
                          >
                            <div className="profile-photo">
                              <img
                                src="images/profile/profile.png"
                                width={100}
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-3 mb-1 text-white">Deangelo Sena</h3>
                            <p className="text-white mb-0">Senior Manager</p>
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Patient Gender</span>{" "}
                              <strong className="">Female </strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Years Old</span>{" "}
                              <strong className="">Age: 24 </strong>
                            </li>
                          </ul>
                          <div className="card-footer border-0 mt-0">
                            <button className="btn btn-primary btn-lg btn-block">
                              <i className="fa fa-bell-o" /> View Profile
                            </button>
                          </div>
                        </div>


                      </div>
                      <div class="col-xl-4 col-lg-6 col-xxl-3 col-sm-12 mt-4 ">
                        <div className="card overflow-hidden">
                          <div
                            className="text-center p-3 overlay-box "
                            style={{ backgroundImage: "url(images/big/img1.jpg)" }}
                          >
                            <div className="profile-photo">
                              <img
                                src="images/profile/profile.png"
                                width={100}
                                className="img-fluid rounded-circle"
                                alt=""
                              />
                            </div>
                            <h3 className="mt-3 mb-1 text-white">Deangelo Sena</h3>
                            <p className="text-white mb-0">Senior Manager</p>
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Patient Gender</span>{" "}
                              <strong className="">Female </strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Years Old</span>{" "}
                              <strong className="">Age: 24 </strong>
                            </li>
                          </ul>
                          <div className="card-footer border-0 mt-0">
                            <button className="btn btn-primary btn-lg btn-block">
                              <i className="fa fa-bell-o" /> View Profile
                            </button>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>

                </div>
              </div> */}
              {/*Benificiary*/}
              <div className="col-xl-12">
                <div className="card user-data-table">
                  <div className="card-header pb-0 d-block d-sm-flex border-0">
                    <div className="me-3">
                      <h4 className="card-title mb-2">Latest Transaction</h4>
                      <span className="fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </span>
                    </div>
                    <div className="card-tabs mt-3 mt-sm-0">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link underline active"
                            data-bs-toggle="tab"
                            href="#monthly"
                            role="tab"
                          >
                            Monthly
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link underline"
                            data-bs-toggle="tab"
                            href="#Weekly"
                            role="tab"
                          >
                            Weekly
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link underline"
                            data-bs-toggle="tab"
                            href="#Today"
                            role="tab"
                          >
                            Today
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body tab-content p-0">
                    {/* tab-pane */}
                    <div
                      className="tab-pane fade active show"
                      id="monthly"
                      role="tabpanel"
                    >
                      <div id="accordion-one" className="accordion style-1">
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne1"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/1.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                                <span className="fs-14">Online Shop</span>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne1"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className=" font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className=" font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne2"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/2.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-success "
                              href="javascript:void(0);"
                            >
                              Completed
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne2"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne3"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/pic2.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-danger"
                              href="javascript:void(0);"
                            >
                              Canceled
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne3"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne4"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/2.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-success "
                              href="javascript:void(0);"
                            >
                              Completed
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne4"
                            className="collapse accordion_body "
                            data-bs-parent="#accordion-one"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne5"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/4.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                                <span className="fs-14">Online Shop</span>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne5"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne7"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/5.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Peter Parkur</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne7"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne8"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/5.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Peter Parkur</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne8"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ tab-pane */}
                    {/* tab-pane */}
                    <div className="tab-pane fade " id="Weekly" role="tabpanel">
                      <div id="accordion-two" className="accordion style-1">
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne12"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/1.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                                <span className="fs-14">Online Shop</span>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne12"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-two"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className=" font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className=" font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne22"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/2.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-success "
                              href="javascript:void(0);"
                            >
                              Completed
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne22"
                            className="collapse accordion_body show"
                            data-bs-parent="#accordion-two"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne32"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/pic2.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-danger"
                              href="javascript:void(0);"
                            >
                              Canceled
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne32"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-two"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne42"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/2.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-success "
                              href="javascript:void(0);"
                            >
                              Completed
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne42"
                            className="collapse accordion_body "
                            data-bs-parent="#accordion-two"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne52"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/4.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                                <span className="fs-14">Online Shop</span>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne52"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-two"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne62"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/5.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Peter Parkur</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne62"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-two"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ tab-pane */}
                    {/* tab-pane */}
                    <div className="tab-pane fade " id="Today" role="tabpanel">
                      <div id="accordion-one1" className="accordion style-1">
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne11"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/1.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                                <span className="fs-14">Online Shop</span>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne11"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one1"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className=" font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className=" font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne21"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/2.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-success "
                              href="javascript:void(0);"
                            >
                              Completed
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne21"
                            className="collapse accordion_body show"
                            data-bs-parent="#accordion-one1"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne31"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/pic2.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-danger"
                              href="javascript:void(0);"
                            >
                              Canceled
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne31"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one1"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne41"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/2.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-success "
                              href="javascript:void(0);"
                            >
                              Completed
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne41"
                            className="collapse accordion_body "
                            data-bs-parent="#accordion-one1"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne51"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/4.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Livia Bator</a>
                                </h6>
                                <span className="fs-14">Online Shop</span>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne51"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one1"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item bg-transparent mb-0">
                          <div
                            className="accordion-header collapsed my-2"
                            data-bs-toggle="collapse"
                            data-bs-target="#default_collapseOne61"
                          >
                            <div className="d-flex align-items-center">
                              <div className="profile-image">
                                <img src="images/avatar/5.jpg" alt="" />
                              </div>
                              <div className="user-info">
                                <h6 className="fs-16 font-w500 mb-0">
                                  <a href="javascript:void(0)">Peter Parkur</a>
                                </h6>
                              </div>
                            </div>
                            <span>June 5, 2020, 08:22 AM</span>
                            <span>+$5,553</span>
                            <span>MasterCard 404</span>
                            <a
                              className="btn btn-warning"
                              href="javascript:void(0);"
                            >
                              Pending
                            </a>
                            <span className="accordion-header-indicator" />
                          </div>
                          <div
                            id="default_collapseOne61"
                            className="collapse accordion_body"
                            data-bs-parent="#accordion-one1"
                          >
                            <div className="payment-details accordion-body-text">
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">ID Payment</p>
                                <span className="font-w500">#00123521</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Payment Method</p>
                                <span className="font-w500">MasterCard 404</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Invoice Date</p>
                                <span className="font-w500">April 29, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Due Date</p>
                                <span className="font-w500">June 5, 2020</span>
                              </div>
                              <div className="me-3 mb-3">
                                <p className="fs-12 mb-2">Date Paid</p>
                                <span className="font-w500">June 4, 2020</span>
                              </div>
                              <div className="info">
                                <svg
                                  className="me-3"
                                  width={35}
                                  height={35}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85384C4.07979 4.06253 2.66989 5.7805 1.83733 7.79049C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C22.9966 9.08368 21.8365 6.28778 19.7744 4.22563C17.7122 2.16347 14.9163 1.00344 12 1ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3608C16.6736 20.048 14.3861 20.9971 12 21Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17V10C13 9.73478 12.8947 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z"
                                    fill="#FF9F00"
                                  />
                                  <path
                                    d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7C11 7.55228 11.4477 8 12 8Z"
                                    fill="#FF9F00"
                                  />
                                </svg>
                                <p className="mb-0 fs-14">
                                  Lorem ipsum dolor sit amet, <br />
                                  consectetur{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ tab-pane */}
                  </div>
                </div>
              </div>
              {/*/column*/}
            </div>
            {/* --/row-- */}
            {/*/column*/}
          </div>
          {/*column*/}
          <div className="col-xl-3">
            <div className="row">

            </div>
            {/* --/row-- */}
            <div className="col-xl-12 ">
              <div className="card Invoices mb-5">
                <div className="card-header border-0  pb-0">
                  <div>
                    <h4 className="fs-18 font-w600.">Beneficiaries</h4>
                    <span className="fs-14 font-w400">You have 245 eneficiaries</span>
                  </div>
                </div>
                <div
                  className="card-body loadmore-content recent-activity-wrapper-invoice dz-scroll px-3  py-2"
                  id="RecentActivityContent"
                >
                  <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                    <span className=" me-3">
                      <img src="images/profile/small/pic1.jpg" alt="" width={50} />
                    </span>
                    <div>
                      <h6 className="font-w500 fs-16 mb-0">
                        <a href="app-profile.html">Dedi Cahyadi</a>
                      </h6>
                      <span className="fs-14 font-w400">Head Manager</span>
                    </div>
                    <div className="price ms-auto">
                      <a href="#">$776</a>
                    </div>
                  </div>
                  <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                    <span className=" me-3">
                      <img
                        src="./images/profile/small/pic2.jpg"
                        alt=""
                        width={50}
                      />
                    </span>
                    <div>
                      <h6 className="font-w500 fs-16 mb-0">
                        <a href="app-profile.html">Evans John</a>
                      </h6>
                      <span className="fs-14 font-w400 text-wrap text-break">
                        Programmer
                      </span>
                    </div>
                    <div className="price ms-auto">
                      <a href="#">$776</a>
                    </div>
                  </div>
                  <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                    <span className=" me-3">
                      <img
                        src="./images/profile/small/pic3.jpg"
                        alt=""
                        width={50}
                      />
                    </span>
                    <div>
                      <h6 className="font-w500 fs-16 mb-0">
                        <a href="app-profile.html">Brian Brandon</a>
                      </h6>
                      <span className="fs-14 font-w400 text-wrap	">
                        Graphic Designer
                      </span>
                    </div>
                    <div className="price ms-auto">
                      <a href="#">$776</a>
                    </div>
                  </div>
                  <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                    <span className=" me-3">
                      <img
                        src="./images/profile/small/pic3.jpg"
                        alt=""
                        width={50}
                      />
                    </span>
                    <div>
                      <h6 className="font-w500 fs-16 mb-0">
                        <a href="app-profile.html">Brian Brandon</a>
                      </h6>
                      <span className="fs-14 font-w400 text-wrap	">
                        Graphic Designer
                      </span>
                    </div>
                    <div className="price ms-auto">
                      <a href="#">$776</a>
                    </div>
                  </div>
                  <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                    <span className=" me-3">
                      <img
                        src="./images/profile/small/pic4.jpg"
                        alt=""
                        width={50}
                      />
                    </span>
                    <div>
                      <h6 className="font-w500 fs-16 mb-0">
                        <a href="app-profile.html">Bella Brownlee</a>
                      </h6>
                      <span className="fs-14 font-w400 text-wrap	">
                        Software Engineer
                      </span>
                    </div>
                    <div className="price ms-auto">
                      <a href="#">$776</a>
                    </div>
                  </div>
                  <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                    <span className=" me-3">
                      <img
                        src="./images/profile/small/pic5.jpg"
                        alt=""
                        width={50}
                      />
                    </span>
                    <div>
                      <h6 className="font-w500 fs-16 mb-0">
                        <a href="app-profile.html">Chynthia Lawra</a>
                      </h6>
                      <span className="fs-14 font-w400 text-wrap">CEO</span>
                    </div>
                    <div className="price ms-auto">
                      <a href="#">$776</a>
                    </div>
                  </div>
                  <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                    <span className=" me-3">
                      <img
                        src="./images/profile/small/pic6.jpg"
                        alt=""
                        width={50}
                      />
                    </span>
                    <div>
                      <h6 className="font-w500 fs-16 mb-0">
                        <a href="app-profile.html">Dedi Cahyadi</a>
                      </h6>
                      <span className="fs-14 font-w400 text-wrap">
                        Head Manager
                      </span>
                    </div>
                    <div className="price ms-auto">
                      <a href="#">$776</a>
                    </div>
                  </div>
                  <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                    <span className=" me-3">
                      <img
                        src="./images/profile/small/pic7.jpg"
                        alt=""
                        width={50}
                      />
                    </span>
                    <div>
                      <h6 className="font-w500 fs-16 mb-0">
                        <a href="app-profile.html">Evans John</a>
                      </h6>
                      <span className="fs-14 font-w400 text-wrap text-break">
                        Programmer
                      </span>
                    </div>
                    <div className="price ms-auto">
                      <a href="#">$776</a>
                    </div>
                  </div>
                  <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                    <span className=" me-3">
                      <img src="images/profile/small/pic1.jpg" alt="" width={50} />
                    </span>
                    <div>
                      <h6 className="font-w500 fs-16 mb-0">
                        <a href="app-profile.html">Dedi Cahyadi</a>
                      </h6>
                      <span className="fs-14 font-w400">Head Manager</span>
                    </div>
                    <div className="price ms-auto">
                      <a href="#">$776</a>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center border-0 pt-0">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-block btn-primary py-2"
                    id="RecentActivity"
                    rel="ajax/recentactivity.html"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*--/column-- */}
          {/*/row*/}
        </div>
        {/*/column*/}
        {/***********************************
					Footer start
				************************************/}
    
      
      {/* Modal IBAN*/}
      <div class="modal fade" id="exampleModalCenter">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">IBAN Accounts</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal">
              </button>
            </div>
            <div class="modal-body">
              <div className="mb-2 d-flex justify-content-end">
                <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#createIBAN">+ NEW IBAN</button>
              </div>
              <div class="widget-stat card">
                <div class="card-body p-4">

                  <div class="media ai-icon">
                    <span class="me-3 bgl-success text-success">
                      <svg id="icon-database-widget" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>
                    </span>
                    <div class="media-body">
                      <div className="d-flex justify-content-between mb-1">
                        <h6 >Main</h6>
                        <h6 className="text-secondary">$705</h6>
                      </div>
                      <span class="mb-0">BE75977103092051</span> <br />
                      <span class="mb-0">PAYVBEB2XXX</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* /Modal IBAN*/}
      {/* Modal Create IBANE*/}
      <div class="modal fade" id="createIBAN">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Create new IBAN</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal">
              </button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <input type="text" class="form-control input-rounded" placeholder="IBAN Label" />
              </div>

              <div className="d-flex justify-content-end">
                <button type="button" class="btn btn-success btn-sm">Create New IBAN</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* /Modal Create IBAN*/}

      {/*row*/}
    </div>

  )
}
export default Balance