import React from "react";

export default function Invoice(props) {
  return (
    <div className="content-body">
      {/* row */}
      <div className="container-fluid">
        <div className="d-flex align-items-center mb-4 flex-wrap">
          <h4 className="fs-20 font-w600  me-auto mb-0 downlod-pdf">
            <button className="btn btn-primary btn-sm ">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity={1}
                  d="M2 13C2 12.5 2.5 12 3 12C3.5 12 4 12.5 4 13C4 13.3333 4 15 4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18C2 15 2 13.3333 2 13Z"
                  fill="white"
                />
                <path
                  opacity={1}
                  d="M11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14L13 2C13 1.44771 12.5523 1 12 1C11.4477 1 11 1.44771 11 2L11 14Z"
                  fill="white"
                />
                <path
                  d="M16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68341 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.331 16.0832 11.7264 16.0991 11.331 15.7433L6.33104 11.2433C5.92053 10.8738 5.88725 10.2415 6.25671 9.83103C6.62617 9.42052 7.25845 9.38724 7.66896 9.7567L11.9638 13.622L16.2929 9.29289Z"
                  fill="white"
                />
              </svg>{" "}
              Download PDF
            </button>
          </h4>
          <a href="javascript:void(0);">
            <div className="card p-3 me-2 mb-0 filter">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.16669 3.33331H15.8334C16.0635 3.33331 16.25 3.51986 16.25 3.74998C16.25 3.84013 16.2208 3.92786 16.1667 3.99998L11.6667 9.99998V16.8258C11.6667 17.0559 11.4801 17.2425 11.25 17.2425C11.1853 17.2425 11.1215 17.2274 11.0637 17.1985L8.33336 15.8333V9.99998L3.83336 3.99998C3.69529 3.81588 3.7326 3.55472 3.91669 3.41665C3.98881 3.36255 4.07654 3.33331 4.16669 3.33331Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
          <select className="default-select dashboard-select dark py-3 lh-sm">
            <option data-display="newest">newest</option>
            <option value={1}>newest</option>
            <option value={2}>oldest</option>
          </select>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="table-responsive ">
              <table
                className="table-responsive-lg table display mb-4 dataTablesCard order-table card-table text-black dataTable no-footer student-tbl"
                id="example5"
              >
                <thead>
                  <tr>
                    <th>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkAll"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="checkAll"
                          />
                        </div>
                      </div>
                    </th>
                    <th>ID Invoice</th>
                    <th>Date</th>
                    <th>Recipient</th>
                    <th>Email</th>
                    <th>Service Type</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check8"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check8"
                          />
                        </div>
                      </div>
                    </td>
                    <td>#123412451</td>
                    <td className="whitesp-no">June 1, 2020, 08:22 AM</td>
                    <td className="whitesp-no p-0">
                      <div className="d-flex py-sm-3 py-1 align-items-center">
                        <span className=" me-3">
                          <img
                            src="./images/profile/small/pic11.jpg"
                            alt=""
                            width={50}
                            className="rounded-3 img-history"
                          />
                        </span>
                        <div>
                          <h6 className="font-w500 fs-16 mb-0">
                            Marilyn Workman
                          </h6>
                          <span className="fs-14 font-w400">
                            <a href="app-profile.html">@thomaskhuncoro</a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitesp-no">
                      <a href="ecom-invoice.html">melanie@mail.com</a>
                    </td>
                    <td>Server Maintenance </td>
                    <td>
                      <span className="btn btn-outline-warning btn-sm w-100">
                        Pending
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn-link btn sharp tp-btn-light btn-primary pill"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check81"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check81"
                          />
                        </div>
                      </div>
                    </td>
                    <td>Mr. Johnson</td>
                    <td className="whitesp-no">June 1, 2020, 08:22 AM</td>
                    <td className="whitesp-no p-0">
                      <div className="d-flex py-sm-3 py-1 align-items-center">
                        <span className=" me-3">
                          <img
                            src="./images/profile/small/pic12.jpg"
                            alt=""
                            width={50}
                            className="rounded-3 img-history"
                          />
                        </span>
                        <div>
                          <h6 className="font-w500 fs-16 mb-0">
                            Talan Siphron
                          </h6>
                          <span className="fs-14 font-w400">
                            <a href="app-profile.html">@thomaskhuncoro</a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitesp-no">
                      <a href="ecom-invoice.html">hawkins@mail.com</a>
                    </td>
                    <td>Clean Up</td>
                    <td>
                      <span className=" btn btn-outline-success btn-sm w-100">
                        Success
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn-link btn sharp tp-btn-light btn-primary pill"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check811"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check811"
                          />
                        </div>
                      </div>
                    </td>
                    <td>#123412451</td>
                    <td className="whitesp-no">June 1, 2020, 08:22 AM</td>
                    <td className="whitesp-no p-0">
                      <div className="d-flex py-sm-3 py-1 align-items-center">
                        <span className=" me-3">
                          <img
                            src="./images/avatar/LB.png"
                            alt=""
                            width={50}
                            className="rounded-3 img-history"
                          />
                        </span>
                        <div>
                          <h6 className="font-w500 fs-16 mb-0">Thomas Khun</h6>
                          <span className="fs-14 font-w400">
                            {" "}
                            <a href="app-profile.html">@thomaskhuncoro</a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitesp-no">
                      <a href="ecom-invoice.html">kevin@mail.com</a>
                    </td>
                    <td>Upgrade Component</td>
                    <td>
                      <span className=" btn btn-outline-success btn-sm w-100">
                        Success
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn-link btn sharp tp-btn-light btn-primary pill"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check82"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check82"
                          />
                        </div>
                      </div>
                    </td>
                    <td>#123412451</td>
                    <td className="whitesp-no">June 1, 2020, 08:22 AM</td>
                    <td className="whitesp-no p-0">
                      <div className="d-flex py-sm-3 py-1 align-items-center">
                        <span className=" me-3">
                          <img
                            src="./images/profile/small/pic14.jpg"
                            alt=""
                            width={50}
                            className="rounded-3 img-history"
                          />
                        </span>
                        <div>
                          <h6 className="font-w500 fs-16 mb-0">Thomas Khun</h6>
                          <span className="fs-14 font-w400">
                            <a href="app-profile.html">@thomaskhuncoro</a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitesp-no">
                      <a href="ecom-invoice.html">jons@mail.com</a>
                    </td>
                    <td>Server Maintenance </td>
                    <td>
                      <span className="btn btn-outline-warning btn-sm w-100 ">
                        Pending
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn-link btn sharp tp-btn-light btn-primary pill"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check83"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check83"
                          />
                        </div>
                      </div>
                    </td>
                    <td>#123412451</td>
                    <td className="whitesp-no">June 1, 2020, 08:22 AM</td>
                    <td className="whitesp-no p-0">
                      <div className="d-flex py-sm-3 py-1 align-items-center">
                        <span className=" me-3">
                          <img
                            src="./images/profile/small/pic15.jpg"
                            alt=""
                            width={50}
                            className="rounded-3 img-history"
                          />
                        </span>
                        <div>
                          <h6 className="font-w500 fs-16 mb-0">Thomas Khun</h6>
                          <span className="fs-14 font-w400">
                            <a href="app-profile.html">@thomaskhuncoro</a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitesp-no">
                      <a href="ecom-invoice.html">brian@mail.com</a>
                    </td>
                    <td>Clean Up</td>
                    <td>
                      <span className="btn btn-outline-success btn-sm w-100">
                        Success
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn-link btn sharp tp-btn-light btn-primary pill"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check84"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check84"
                          />
                        </div>
                      </div>
                    </td>
                    <td>#123412451</td>
                    <td className="whitesp-no">June 1, 2020, 08:22 AM</td>
                    <td className="whitesp-no p-0">
                      <div className="d-flex py-sm-3 py-1 align-items-center">
                        <span className=" me-3">
                          <img
                            src="./images/profile/small/pic11.jpg"
                            alt=""
                            width={50}
                            className="rounded-3 img-history"
                          />
                        </span>
                        <div>
                          <h6 className="font-w500 fs-16 mb-0">Thomas Khun</h6>
                          <span className="fs-14 font-w400">
                            <a href="app-profile.html">@thomaskhuncoro</a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitesp-no">
                      <a href="ecom-invoice.html">davidhere@mail.com</a>
                    </td>
                    <td>Upgrade Component</td>
                    <td>
                      <span className=" btn btn-outline-success btn-sm w-100">
                        Success
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn-link btn sharp tp-btn-light btn-primary pill"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check85"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check85"
                          />
                        </div>
                      </div>
                    </td>
                    <td>#123412451</td>
                    <td className="whitesp-no">June 1, 2020, 08:22 AM</td>
                    <td className="whitesp-no p-0">
                      <div className="d-flex py-sm-3 py-1 align-items-center">
                        <span className=" me-3 rounded-3">
                          <img
                            src="./images/profile/small/pic11.jpg"
                            alt=""
                            width={50}
                            className="rounded-3 img-history"
                          />
                        </span>
                        <div>
                          <h6 className="font-w500 fs-16 mb-0">Thomas Khun</h6>
                          <span className="fs-14 font-w400">
                            <a href="app-profile.html">@thomaskhuncoro</a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitesp-no">
                      <a href="ecom-invoice.html">fannystevan@mail.com</a>
                    </td>
                    <td>Clean Up</td>
                    <td>
                      <span className="btn btn-outline-warning btn-sm w-100">
                        Pending
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn-link btn sharp tp-btn-light btn-primary pill"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check86"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check86"
                          />
                        </div>
                      </div>
                    </td>
                    <td>#123412451</td>
                    <td className="whitesp-no">June 1, 2020, 08:22 AM</td>
                    <td className="whitesp-no p-0">
                      <div className="d-flex py-sm-3 py-1 align-items-center">
                        <span className=" me-3">
                          <img
                            src="./images/profile/small/pic11.jpg"
                            alt=""
                            width={50}
                            className="rounded-3 img-history"
                          />
                        </span>
                        <div>
                          <h6 className="font-w500 fs-16 mb-0">Thomas Khun</h6>
                          <span className="fs-14 font-w400">
                            <a href="app-profile.html">@thomaskhuncoro</a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="whitesp-no">
                      <a href="ecom-invoice.html">angelamoss@mail.com</a>
                    </td>
                    <td>Upgrade Component</td>
                    <td>
                      <span className=" btn btn-outline-success btn-sm w-100">
                        Success
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn-link btn sharp tp-btn-light btn-primary pill"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="checkbox mr-0 align-self-center">
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check87"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check87"
                          />
                        </div>
                      </div>
                    </td>
                    <td>#123412451</td>
                    <td className="whitesp-no">June 1, 2020, 08:22 AM</td>
                    <td className="whitesp-no p-0">
                      <div className="d-flex py-sm-3 py-1 align-items-center ">
                        <span className=" me-3">
                          <img
                            src="./images/profile/small/pic11.jpg"
                            alt=""
                            width={50}
                            className="rounded-3 img-history"
                          />
                        </span>
                        <div>
                          <h6 className="font-w500 fs-16 mb-0">Thomas Khun</h6>
                          <span className="fs-14 font-w400">
                            <a href="app-profile.html">@thomaskhuncoro</a>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="ecom-invoice.html">angelamoss@mail.com</a>
                    </td>
                    <td>Upgrade Component</td>
                    <td>
                      <span className="btn btn-outline-success btn-sm w-100">
                        Success
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn-link btn sharp tp-btn-light btn-primary pill"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33319 9.99985C8.33319 10.9203 9.07938 11.6665 9.99986 11.6665C10.9203 11.6665 11.6665 10.9203 11.6665 9.99986C11.6665 9.07938 10.9203 8.33319 9.99986 8.33319C9.07938 8.33319 8.33319 9.07938 8.33319 9.99985Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 3.33329C8.33319 4.25376 9.07938 4.99995 9.99986 4.99995C10.9203 4.99995 11.6665 4.25376 11.6665 3.33329C11.6665 2.41282 10.9203 1.66663 9.99986 1.66663C9.07938 1.66663 8.33319 2.41282 8.33319 3.33329Z"
                              fill="#ffffff"
                            />
                            <path
                              d="M8.33319 16.6667C8.33319 17.5871 9.07938 18.3333 9.99986 18.3333C10.9203 18.3333 11.6665 17.5871 11.6665 16.6667C11.6665 15.7462 10.9203 15 9.99986 15C9.07938 15 8.33319 15.7462 8.33319 16.6667Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/***********************************
					Footer start
				************************************/}
        <div className="footer">
          <div className="copyright">
            <p>
              Copyright © Designed &amp; Developed by{" "}
              <a href="https:// DexignZone.com/" target="_blank">
                {" "}
                DexignZone
              </a>{" "}
              2022
            </p>
          </div>
        </div>
        {/***********************************
					Footer end
				************************************/}
      </div>
      {/***********************************	
			Modal
		************************************/}
      {/* Button trigger modal */}
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Person
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <label htmlFor="PersonName" className="form-label d-block">
                Enter Name
              </label>
              <input
                type="text"
                id="PersonName"
                className="form-control w-100 mb-3"
                placeholder="Username"
              />
              <label htmlFor="PersonPosition" className="form-label d-block">
                Enter Position
              </label>
              <input
                type="text"
                id="PersonPosition"
                className="form-control w-100"
                placeholder="Position"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary btn-sm">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
