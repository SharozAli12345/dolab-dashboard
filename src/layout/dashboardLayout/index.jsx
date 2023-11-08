import React, { useEffect } from "react";

function DashboardLayout({ children }) {
  useEffect(() => {
    // Define the array of script URLs you want to load
    const scriptUrls = [
      // "vendor/apexchart/apexchart.js",
      "js/custom.min.js",
      "js/dlabnav-init.js",

      // "vendor/chart.js/Chart.bundle.min.js",
      // "js/dashboard/dashboard-1.js",
      // "js/dashboard/balance.js",

    ];

    scriptUrls.forEach((scriptUrl) => {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    });
    // Load each script asynchronously

    return () => {
      // Clean up: Remove the script elements when the component unmounts
      scriptUrls.forEach((scriptUrl) => {
        const script = document.querySelector(`[src="${scriptUrl}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);
  return (
    <>
      {/********************
    Preloader start
      *********************/}
      <div id="preloader">
        <div className="inner">
          <span>Loading </span>
          <div className="loading"></div>
        </div>
      </div>
      {/********************
    Preloader end
      *********************/}
      {/***********************************
    Main wrapper start
      ************************************/}
      <div id="main-wrapper">
        <div className="animation">
          <span className="circle one" />
          <span className="circle two" />
          <span className="circle three" />
          <span className="circle four" />
          <span className="line-1 ">
            <svg
              width={1920}
              height={450}
              viewBox="0 0 1920 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M0 155L95.4613 293.923C106.459 309.928 131.116 305.943 136.512 287.289L209.86 33.7127C215.892 12.8576 244.803 11.2033 253.175 31.2341L344.838 250.546C352.224 268.217 376.708 269.648 386.102 252.958L519.839 15.3693C529.061 -1.01332 552.975 -0.0134089 560.797 17.0818L716.503 357.389C724.454 374.766 748.899 375.43 757.782 358.51L902.518 82.8223C911.524 65.6685 936.406 66.653 944.028 84.4648L1093.06 432.731C1101.14 451.601 1128.01 451.247 1135.58 432.172L1291.33 39.9854C1298.27 22.5135 1322.1 20.2931 1332.14 36.1824L1473.74 260.126C1482.47 273.922 1502.38 274.494 1511.88 261.221L1667.88 43.3025C1678.17 28.9257 1700.16 31.0533 1707.5 47.1365L1844.91 348.06C1853.69 367.287 1881.58 365.486 1887.81 345.29L1970 79"
                stroke="url(#paint0_linear_332_3757)"
                strokeOpacity="0.4"
                strokeWidth={6}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_332_3757"
                  x1="1946.24"
                  y1="352.062"
                  x2="-1.52124"
                  y2="345.607"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#6E4AFF" />
                  <stop offset="0.479167" stopColor="#E43BFF" />
                  <stop offset={1} stopColor="#6E4AFF" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="line-2">
            <svg
              width={1920}
              height={459}
              viewBox="0 0 1920 459"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 89L103.191 296.201C112.034 313.958 137.703 312.941 145.114 294.54L224.847 96.5574C232.264 78.141 257.962 77.1423 266.786 94.9275L352.649 267.995C360.863 284.553 384.264 285.148 393.31 269.03L516.226 50.0159C525.164 34.0902 548.205 34.4325 556.666 50.6167L713.497 350.608C721.71 366.318 743.86 367.222 753.326 352.234L901.462 117.684C911.188 102.286 934.102 103.763 941.771 120.282L1091.14 442.062C1099.38 459.816 1124.62 459.817 1132.86 442.064L1303.17 75.2544C1310.64 59.1685 1332.73 57.2308 1342.89 71.7713L1469.94 253.703C1479.15 266.893 1498.71 266.794 1507.78 253.511L1671.82 13.4627C1681.74 -1.05968 1703.63 0.478486 1711.42 16.2459L1844.42 285.267C1853.64 303.905 1880.89 301.723 1887.02 281.857L1970 13"
                stroke="url(#paint0_linear_332_3758)"
                strokeOpacity="0.4"
                strokeWidth={6}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_332_3758"
                  x1="1946.24"
                  y1="286.062"
                  x2="-1.52105"
                  y2="279.607"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#6E4AFF" />
                  <stop offset="0.479167" stopColor="#E43BFF" />
                  <stop offset={1} stopColor="#6E4AFF" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        {/***********************************
        Nav header start
    ************************************/}
        <div className="nav-header">
          <a href="index.html" className="brand-logo">
            <div className="logo">
              <svg
                className="logo-abbr"
                width={43}
                height={34}
                viewBox="0 0 43 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="22.6154"
                  width="19.6154"
                  height="6.53846"
                  rx="3.26923"
                  fill="white"
                />
                <rect
                  x="22.6154"
                  y="9.15387"
                  width="19.6154"
                  height="6.53846"
                  rx="3.26923"
                  fill="white"
                />
                <rect
                  x="22.6154"
                  y="18.3077"
                  width="19.6154"
                  height="6.53846"
                  rx="3.26923"
                  fill="white"
                />
                <rect
                  x="0.384583"
                  y="18.3077"
                  width="19.6154"
                  height="6.53846"
                  rx="3.26923"
                  fill="white"
                />
                <rect
                  x="22.6154"
                  y="27.4615"
                  width="19.6154"
                  height="6.53846"
                  rx="3.26923"
                  fill="white"
                />
                <rect
                  x="0.384583"
                  y="27.4615"
                  width="19.6154"
                  height="6.53846"
                  rx="3.26923"
                  fill="white"
                />
              </svg>
              <svg
                className="brand-title"
                width={124}
                height={33}
                viewBox="0 0 132 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.65 2.516C14.758 2.516 17.474 3.132 19.798 4.364C22.122 5.596 23.914 7.332 25.174 9.572C26.462 11.784 27.106 14.346 27.106 17.258C27.106 20.142 26.462 22.704 25.174 24.944C23.914 27.184 22.108 28.92 19.756 30.152C17.432 31.384 14.73 32 11.65 32H0.604V2.516H11.65ZM11.188 25.784C13.904 25.784 16.018 25.042 17.53 23.558C19.042 22.074 19.798 19.974 19.798 17.258C19.798 14.542 19.042 12.428 17.53 10.916C16.018 9.404 13.904 8.648 11.188 8.648H7.786V25.784H11.188ZM41.7876 32.336C39.4916 32.336 37.4196 31.846 35.5716 30.866C33.7516 29.886 32.3096 28.486 31.2456 26.666C30.2096 24.846 29.6916 22.718 29.6916 20.282C29.6916 17.874 30.2236 15.76 31.2876 13.94C32.3516 12.092 33.8076 10.678 35.6556 9.698C37.5036 8.718 39.5756 8.228 41.8716 8.228C44.1676 8.228 46.2396 8.718 48.0876 9.698C49.9356 10.678 51.3916 12.092 52.4556 13.94C53.5196 15.76 54.0516 17.874 54.0516 20.282C54.0516 22.69 53.5056 24.818 52.4136 26.666C51.3496 28.486 49.8796 29.886 48.0036 30.866C46.1556 31.846 44.0836 32.336 41.7876 32.336ZM41.7876 26.12C43.1596 26.12 44.3216 25.616 45.2736 24.608C46.2536 23.6 46.7436 22.158 46.7436 20.282C46.7436 18.406 46.2676 16.964 45.3156 15.956C44.3916 14.948 43.2436 14.444 41.8716 14.444C40.4716 14.444 39.3096 14.948 38.3856 15.956C37.4616 16.936 36.9996 18.378 36.9996 20.282C36.9996 22.158 37.4476 23.6 38.3436 24.608C39.2676 25.616 40.4156 26.12 41.7876 26.12ZM65.0438 26.456H74.4518V32H57.8618V2.516H65.0438V26.456ZM76.4494 20.24C76.4494 17.832 76.8974 15.718 77.7934 13.898C78.7174 12.078 79.9634 10.678 81.5314 9.698C83.0994 8.718 84.8494 8.228 86.7814 8.228C88.4334 8.228 89.8754 8.564 91.1074 9.236C92.3674 9.908 93.3334 10.79 94.0054 11.882V8.564H101.187V32H94.0054V28.682C93.3054 29.774 92.3254 30.656 91.0654 31.328C89.8334 32 88.3914 32.336 86.7394 32.336C84.8354 32.336 83.0994 31.846 81.5314 30.866C79.9634 29.858 78.7174 28.444 77.7934 26.624C76.8974 24.776 76.4494 22.648 76.4494 20.24ZM94.0054 20.282C94.0054 18.49 93.5014 17.076 92.4934 16.04C91.5134 15.004 90.3094 14.486 88.8814 14.486C87.4534 14.486 86.2354 15.004 85.2274 16.04C84.2474 17.048 83.7574 18.448 83.7574 20.24C83.7574 22.032 84.2474 23.46 85.2274 24.524C86.2354 25.56 87.4534 26.078 88.8814 26.078C90.3094 26.078 91.5134 25.56 92.4934 24.524C93.5014 23.488 94.0054 22.074 94.0054 20.282ZM113.565 11.882C114.237 10.79 115.203 9.908 116.463 9.236C117.723 8.564 119.165 8.228 120.789 8.228C122.721 8.228 124.471 8.718 126.039 9.698C127.607 10.678 128.839 12.078 129.735 13.898C130.659 15.718 131.121 17.832 131.121 20.24C131.121 22.648 130.659 24.776 129.735 26.624C128.839 28.444 127.607 29.858 126.039 30.866C124.471 31.846 122.721 32.336 120.789 32.336C119.137 32.336 117.695 32.014 116.463 31.37C115.231 30.698 114.265 29.816 113.565 28.724V32H106.383V0.92H113.565V11.882ZM123.813 20.24C123.813 18.448 123.309 17.048 122.301 16.04C121.321 15.004 120.103 14.486 118.647 14.486C117.219 14.486 116.001 15.004 114.993 16.04C114.013 17.076 113.523 18.49 113.523 20.282C113.523 22.074 114.013 23.488 114.993 24.524C116.001 25.56 117.219 26.078 118.647 26.078C120.075 26.078 121.293 25.56 122.301 24.524C123.309 23.46 123.813 22.032 123.813 20.24Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
          <div className="nav-control">
            <div className="hamburger">
              <span className="line" />
              <span className="line" />
              <span className="line" />
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M16.7548 0.333313H20.7051C22.341 0.333313 23.6667 1.67014 23.6667 3.31994V7.30359C23.6667 8.95339 22.341 10.2902 20.7051 10.2902H16.7548C15.1188 10.2902 13.7932 8.95339 13.7932 7.30359V3.31994C13.7932 1.67014 15.1188 0.333313 16.7548 0.333313Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.29492 0.333313H7.24522C8.8812 0.333313 10.2068 1.67014 10.2068 3.31994V7.30359C10.2068 8.95339 8.8812 10.2902 7.24522 10.2902H3.29492C1.65894 10.2902 0.333313 8.95339 0.333313 7.30359V3.31994C0.333313 1.67014 1.65894 0.333313 3.29492 0.333313ZM3.29492 13.7097H7.24522C8.8812 13.7097 10.2068 15.0466 10.2068 16.6964V20.68C10.2068 22.3287 8.8812 23.6666 7.24522 23.6666H3.29492C1.65894 23.6666 0.333313 22.3287 0.333313 20.68V16.6964C0.333313 15.0466 1.65894 13.7097 3.29492 13.7097ZM20.705 13.7097H16.7547C15.1188 13.7097 13.7931 15.0466 13.7931 16.6964V20.68C13.7931 22.3287 15.1188 23.6666 16.7547 23.6666H20.705C22.341 23.6666 23.6666 22.3287 23.6666 20.68V16.6964C23.6666 15.0466 22.341 13.7097 20.705 13.7097Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        {/***********************************
        Nav header end
    ************************************/}
        {/***********************************
        Chat box start
    ************************************/}
        <div className="chatbox">
          <div className="chatbox-close" />
          <div className="custom-tab-1">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#notes">
                  Notes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#alerts">
                  Alerts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#chat"
                >
                  Chat
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="chat"
                role="tabpanel"
              >
                <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
                  <div className="card-header chat-list-header text-center">
                    <a
                      href="#"
                      className="add"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect
                            fill="#ffffff"
                            x={4}
                            y={11}
                            width={16}
                            height={2}
                            rx={1}
                          />
                          <rect
                            fill="#ffffff"
                            opacity="0.3"
                            transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                            x={4}
                            y={11}
                            width={16}
                            height={2}
                            rx={1}
                          />
                        </g>
                      </svg>
                    </a>
                    <div>
                      <h6 className="mb-1">Chat List</h6>
                      <p className="mb-0">Show All</p>
                    </div>
                    <a href="javascript:void(0);">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#ffffff" cx={5} cy={12} r={2} />
                          <circle fill="#ffffff" cx={12} cy={12} r={2} />
                          <circle fill="#ffffff" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div
                    className="card-body contacts_body p-0 dz-scroll  "
                    id="DLAB_W_Contacts_Body"
                  >
                    <ul className="contacts">
                      <li className="name-first-letter">A</li>
                      <li className="active dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/1.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <span>Archie Parker</span>
                            <p>Kalid is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/2.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Alfie Mason</span>
                            <p>Taherah left 7 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/3.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <span>AharlieKane</span>
                            <p>Sami is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/4.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Athan Jacoby</span>
                            <p>Nargis left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">B</li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/5.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Bashid Samim</span>
                            <p>Rashid left 50 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/1.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <span>Breddie Ronan</span>
                            <p>Kalid is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/2.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Ceorge Carson</span>
                            <p>Taherah left 7 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">D</li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/3.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <span>Darry Parker</span>
                            <p>Sami is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/4.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Denry Hunter</span>
                            <p>Nargis left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">J</li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/5.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Jack Ronan</span>
                            <p>Rashid left 50 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/1.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <span>Jacob Tucker</span>
                            <p>Kalid is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/2.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>James Logan</span>
                            <p>Taherah left 7 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/3.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon" />
                          </div>
                          <div className="user_info">
                            <span>Joshua Weston</span>
                            <p>Sami is online</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">O</li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/4.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Oliver Acker</span>
                            <p>Nargis left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                      <li className="dz-chat-user">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont">
                            <img
                              src="images/avatar/5.jpg"
                              className="rounded-circle user_img"
                              alt=""
                            />
                            <span className="online_icon offline" />
                          </div>
                          <div className="user_info">
                            <span>Oscar Weston</span>
                            <p>Rashid left 50 mins ago</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card chat dz-chat-history-box d-none">
                  <div className="card-header chat-list-header text-center">
                    <a
                      href="javascript:void(0);"
                      className="dz-chat-history-back"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <rect
                            fill="#ffffff"
                            opacity="0.3"
                            transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                            x={14}
                            y={7}
                            width={2}
                            height={10}
                            rx={1}
                          />
                          <path
                            d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                            fill="#ffffff"
                            fillRule="nonzero"
                            transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
                          />
                        </g>
                      </svg>
                    </a>
                    <div>
                      <h6 className="mb-1">Chat with Khelesh</h6>
                      <p className="mb-0 text-success">Online</p>
                    </div>
                    <div className="dropdown">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <circle fill="#ffffff" cx={5} cy={12} r={2} />
                            <circle fill="#ffffff" cx={12} cy={12} r={2} />
                            <circle fill="#ffffff" cx={19} cy={12} r={2} />
                          </g>
                        </svg>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li className="dropdown-item">
                          <i className="fa fa-user-circle text-primary me-2" />{" "}
                          View profile
                        </li>
                        <li className="dropdown-item">
                          <i className="fa fa-users text-primary me-2" /> Add to
                          btn-close friends
                        </li>
                        <li className="dropdown-item">
                          <i className="fa fa-plus text-primary me-2" /> Add to
                          group
                        </li>
                        <li className="dropdown-item">
                          <i className="fa fa-ban text-primary me-2" /> Block
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="card-body msg_card_body dz-scroll"
                    id="DLAB_W_Contacts_Body3"
                  >
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        Hi, how are you samim?
                        <span className="msg_time">8:40 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        Hi Khalid i am good tnx how about you?
                        <span className="msg_time_send">8:55 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        I am good too, thank you for your chat template
                        <span className="msg_time">9:00 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        You are welcome
                        <span className="msg_time_send">9:05 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        I am looking for your next templates
                        <span className="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        Ok, thank you have a good day
                        <span className="msg_time_send">9:10 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        Bye, see you
                        <span className="msg_time">9:12 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        Hi, how are you samim?
                        <span className="msg_time">8:40 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        Hi Khalid i am good tnx how about you?
                        <span className="msg_time_send">8:55 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        I am good too, thank you for your chat template
                        <span className="msg_time">9:00 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        You are welcome
                        <span className="msg_time_send">9:05 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        I am looking for your next templates
                        <span className="msg_time">9:07 AM, Today</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                      <div className="msg_cotainer_send">
                        Ok, thank you have a good day
                        <span className="msg_time_send">9:10 AM, Today</span>
                      </div>
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-start mb-4">
                      <div className="img_cont_msg">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img_msg"
                          alt=""
                        />
                      </div>
                      <div className="msg_cotainer">
                        Bye, see you
                        <span className="msg_time">9:12 AM, Today</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer type_msg">
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        placeholder="Type your message..."
                        defaultValue={""}
                      />
                      <div className="input-group-append">
                        <button type="button" className="btn btn-primary">
                          <i className="fa fa-location-arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="alerts" role="tabpanel">
                <div className="card mb-sm-3 mb-md-0 contacts_card">
                  <div className="card-header chat-list-header text-center">
                    <a href="javascript:void(0);">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </a>
                    <div>
                      <h6 className="mb-1">Notications</h6>
                      <p className="mb-0">Show All</p>
                    </div>
                    <a href="javascript:void(0);">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div
                    className="card-body contacts_body p-0 dz-scroll"
                    id="DLAB_W_Contacts_Body1"
                  >
                    <ul className="contacts">
                      <li className="name-first-letter">SEVER STATUS</li>
                      <li className="active">
                        <div className="d-flex bd-highlight">
                          <div className="img_cont primary">KK</div>
                          <div className="user_info">
                            <span>David Nester Birthday</span>
                            <p className="text-primary">Today</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">SOCIAL</li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont success">RU</div>
                          <div className="user_info">
                            <span>Perfection Simplified</span>
                            <p>Jame Smith commented on your status</p>
                          </div>
                        </div>
                      </li>
                      <li className="name-first-letter">SEVER STATUS</li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont primary">AU</div>
                          <div className="user_info">
                            <span>AharlieKane</span>
                            <p>Sami is online</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="img_cont info">MO</div>
                          <div className="user_info">
                            <span>Athan Jacoby</span>
                            <p>Nargis left 30 mins ago</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer" />
                </div>
              </div>
              <div className="tab-pane fade" id="notes">
                <div className="card mb-sm-3 mb-md-0 note_card">
                  <div className="card-header chat-list-header text-center">
                    <a
                      href="#"
                      className="add"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect
                            fill="#ffffff"
                            x={4}
                            y={11}
                            width={16}
                            height={2}
                            rx={1}
                          />
                          <rect
                            fill="#ffffff"
                            opacity="0.3"
                            transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                            x={4}
                            y={11}
                            width={16}
                            height={2}
                            rx={1}
                          />
                        </g>
                      </svg>
                    </a>
                    <div>
                      <h6 className="mb-1">Notes</h6>
                      <p className="mb-0">Add New Nots</p>
                    </div>
                    <a href="javascript:void(0);">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div
                    className="card-body contacts_body p-0 dz-scroll"
                    id="DLAB_W_Contacts_Body2"
                  >
                    <ul className="contacts">
                      <li className="active">
                        <div className="d-flex bd-highlight">
                          <div className="user_info">
                            <span>New order placed..</span>
                            <p>10 Aug 2020</p>
                          </div>
                          <div className="ms-auto">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-primary btn-xs sharp me-1"
                            >
                              <i className="fas fa-pencil-alt" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-danger btn-xs sharp"
                            >
                              <i className="fa fa-trash" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="user_info">
                            <span>Youtube, a video-sharing website..</span>
                            <p>10 Aug 2020</p>
                          </div>
                          <div className="ms-auto">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-primary btn-xs sharp me-1"
                            >
                              <i className="fas fa-pencil-alt" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-danger btn-xs sharp"
                            >
                              <i className="fa fa-trash" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="user_info">
                            <span>john just buy your product..</span>
                            <p>10 Aug 2020</p>
                          </div>
                          <div className="ms-auto">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-primary btn-xs sharp me-1"
                            >
                              <i className="fas fa-pencil-alt" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-danger btn-xs sharp"
                            >
                              <i className="fa fa-trash" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex bd-highlight">
                          <div className="user_info">
                            <span>Athan Jacoby</span>
                            <p>10 Aug 2020</p>
                          </div>
                          <div className="ms-auto">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-primary btn-xs sharp me-1"
                            >
                              <i className="fas fa-pencil-alt" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-danger btn-xs sharp"
                            >
                              <i className="fa fa-trash" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/***********************************
        Chat box End
    ************************************/}
        {/***********************************
        Header start
    ************************************/}
        <div className="header">
          <div className="header-content">
            <nav className="navbar navbar-expand">
              <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
                  <div className="dashboard_bar">Dashboard</div>
                </div>
                <ul className="navbar-nav header-right">
                  <li className="nav-item d-flex align-items-start">
                    <div className="input-group search-area">
                      <input
                        type="text"
                        className="form-control"
                        id="search"
                        placeholder="Search here..."
                      />
                      <span className="input-group-text">
                        <a href="javascript:void(0)">
                          <svg
                            width={28}
                            height={28}
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity={1}
                              d="M16.6751 19.4916C16.2194 19.036 16.2194 18.2973 16.6751 17.8417C17.1307 17.3861 17.8694 17.3861 18.325 17.8417L22.9916 22.5084C23.4473 22.964 23.4473 23.7027 22.9916 24.1583C22.536 24.6139 21.7973 24.6139 21.3417 24.1583L16.6751 19.4916Z"
                              fill="white"
                            />
                            <path
                              d="M12.8333 18.6667C16.055 18.6667 18.6667 16.055 18.6667 12.8334C18.6667 9.61169 16.055 7.00002 12.8333 7.00002C9.61166 7.00002 6.99999 9.61169 6.99999 12.8334C6.99999 16.055 9.61166 18.6667 12.8333 18.6667ZM12.8333 21C8.323 21 4.66666 17.3437 4.66666 12.8334C4.66666 8.32303 8.323 4.66669 12.8333 4.66669C17.3436 4.66669 21 8.32303 21 12.8334C21 17.3437 17.3436 21 12.8333 21Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="dropdown header-profile2 ">
                  <ul className="navbar-nav header-right me-sm-4">
                    <li className="nav-item dropdown notification_dropdown">
                      <a
                        className="nav-link"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        <svg
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8333 11H17.5833C18.5498 11 19.3333 11.7835 19.3333 12.75C19.3333 13.7165 18.5498 14.5 17.5833 14.5H2.41666C1.45016 14.5 0.666656 13.7165 0.666656 12.75C0.666656 11.7835 1.45016 11 2.41666 11H4.16666L4.81798 5.13812C5.11136 2.49763 7.34325 0.5 9.99999 0.5C12.6567 0.5 14.8886 2.49763 15.182 5.13812L15.8333 11Z"
                            fill="#B9A8FF"
                          />
                          <path
                            opacity="0.3"
                            d="M12.3333 18C12.3333 16.7114 11.2887 15.6667 9.99999 15.6667C8.71133 15.6667 7.66666 16.7114 7.66666 18C7.66666 19.2887 8.71133 20.3334 9.99999 20.3334C11.2887 20.3334 12.3333 19.2887 12.3333 18Z"
                            fill="#B9A8FF"
                          />
                        </svg>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div
                          id="DZ_W_Notification1"
                          className="widget-media dz-scroll p-3"
                          style={{ height: 380 }}
                        >
                          <ul className="timeline">
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2">
                                  <img
                                    alt="image"
                                    width={50}
                                    src="images/avatar/1.jpg"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    <a href="javascript:voiud(0)">
                                      {" "}
                                      Dr sultads Send you Photo
                                    </a>
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-info">KG</div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    <a href="javascript:voiud(0)">
                                      Resport created successfully
                                    </a>
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-success">
                                  <i className="fa fa-home" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    <a href="javascript:voiud(0)">
                                      Reminder : Treatment Time!
                                    </a>
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2">
                                  <img
                                    alt="image"
                                    width={50}
                                    src="images/avatar/1.jpg"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    <a href="javascript:voiud(0)">
                                      Dr sultads Send you Photo
                                    </a>
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-danger">
                                  KG
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    <a href="javascript:voiud(0)">
                                      {" "}
                                      Resport created successfully{" "}
                                    </a>
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-primary">
                                  <i className="fa fa-home" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    <a href="javascript:voiud(0)">
                                      {" "}
                                      Reminder : Treatment Time!{" "}
                                    </a>
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a
                          className="all-notification"
                          href="javascript:void(0);"
                        >
                          See all notifications <i className="ti-arrow-end" />
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown notification_dropdown">
                      <a
                        className="nav-link bell-link "
                        href="javascript:void(0);"
                      >
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.00001 2.33331H21C21.6443 2.33331 22.1667 2.85565 22.1667 3.49998V15.1666C22.1667 15.811 21.6443 16.3333 21 16.3333H7.00001C6.35568 16.3333 5.83334 15.811 5.83334 15.1666V3.49998C5.83334 2.85565 6.35568 2.33331 7.00001 2.33331ZM16.1 4.66665C15.3489 4.66665 14.4705 5.51814 14 6.06665C13.5295 5.51814 12.6511 4.66665 11.9 4.66665C10.5705 4.66665 9.80001 5.70366 9.80001 7.0235C9.80001 8.4856 11.2 10.0333 14 11.6666C16.8 10.0333 18.2 8.51665 18.2 7.11665C18.2 5.79681 17.4295 4.66665 16.1 4.66665Z"
                            fill="#B9A8FF"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.42487 7.66798L14 14.5833L23.5751 7.66798C23.8363 7.47935 24.2009 7.53816 24.3896 7.79933C24.4614 7.89874 24.5 8.01825 24.5 8.14087V19.8333C24.5 21.122 23.4553 22.1667 22.1667 22.1667H5.83333C4.54467 22.1667 3.5 21.122 3.5 19.8333V8.14087C3.5 7.81871 3.76117 7.55754 4.08333 7.55754C4.20596 7.55754 4.32546 7.59618 4.42487 7.66798Z"
                            fill="#B9A8FF"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="nav-item dropdown notification_dropdown">
                      <a
                        className="nav-link "
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                      >
                        <svg
                          width={28}
                          height={29}
                          viewBox="0 0 28 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.5 19.7699V10.8881H24.5V19.8411C24.5 23.5032 22.1948 25.7549 18.5066 25.7549H9.48189C5.82821 25.7549 3.5 23.4566 3.5 19.7699ZM9.28595 16.8999C8.75576 16.9244 8.31778 16.5032 8.29473 15.9677C8.29473 15.4311 8.70966 14.9877 9.23985 14.9632C9.75851 14.9632 10.185 15.3727 10.1965 15.8966C10.2195 16.4344 9.80461 16.8777 9.28595 16.8999ZM14.0231 16.8999C13.4929 16.9244 13.0549 16.5032 13.0318 15.9677C13.0318 15.4311 13.4468 14.9877 13.9769 14.9632C14.4956 14.9632 14.9221 15.3727 14.9336 15.8966C14.9566 16.4344 14.5417 16.8777 14.0231 16.8999ZM18.7256 21.1932C18.1954 21.1816 17.7689 20.7382 17.7689 20.2016C17.7574 19.6649 18.1839 19.2227 18.714 19.2111H18.7256C19.2673 19.2111 19.7053 19.6544 19.7053 20.2016C19.7053 20.7499 19.2673 21.1932 18.7256 21.1932ZM13.0318 20.2016C13.0549 20.7382 13.4929 21.1594 14.0231 21.1349C14.5417 21.1127 14.9566 20.6694 14.9336 20.1327C14.9221 19.6077 14.4956 19.1982 13.9769 19.1982C13.4468 19.2227 13.0318 19.6649 13.0318 20.2016ZM8.28321 20.2016C8.30626 20.7382 8.74424 21.1594 9.27442 21.1349C9.79308 21.1127 10.208 20.6694 10.185 20.1327C10.1734 19.6077 9.74698 19.1982 9.22832 19.1982C8.69813 19.2227 8.28321 19.6649 8.28321 20.2016ZM17.7805 15.9561C17.7805 15.4194 18.1954 14.9877 18.7256 14.9761C19.2442 14.9761 19.6592 15.3949 19.6822 15.9094C19.6937 16.4461 19.2788 16.8894 18.7602 16.8999C18.23 16.9116 17.792 16.5032 17.7805 15.9677V15.9561Z"
                            fill="#B9A8FF"
                          />
                          <path
                            opacity="0.4"
                            d="M3.50391 10.888C3.51889 10.2031 3.57652 8.84396 3.68486 8.40646C4.2381 5.94596 6.1168 4.38262 8.80232 4.15979H19.1986C21.861 4.39429 23.7628 5.96812 24.316 8.40646C24.4232 8.83229 24.4809 10.202 24.4958 10.888H3.50391Z"
                            fill="#B9A8FF"
                          />
                          <path
                            d="M9.689 7.77657C10.1961 7.77657 10.5765 7.39274 10.5765 6.87824V3.32107C10.5765 2.80657 10.1961 2.42157 9.689 2.42157C9.18187 2.42157 8.80151 2.80657 8.80151 3.32107V6.87824C8.80151 7.39274 9.18187 7.77657 9.689 7.77657Z"
                            fill="#B9A8FF"
                          />
                          <path
                            d="M18.3108 7.77657C18.8064 7.77657 19.1983 7.39274 19.1983 6.87824V3.32107C19.1983 2.80657 18.8064 2.42157 18.3108 2.42157C17.8036 2.42157 17.4233 2.80657 17.4233 3.32107V6.87824C17.4233 7.39274 17.8036 7.77657 18.3108 7.77657Z"
                            fill="#B9A8FF"
                          />
                        </svg>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div
                          id="DZ_W_TimeLine02"
                          className="widget-timeline dz-scroll style-1 ps ps--active-y p-3 height370"
                        >
                          <ul className="timeline">
                            <li>
                              <div className="timeline-badge primary" />
                              <a
                                className="timeline-panel text-muted"
                                href="javascript:void(0);"
                              >
                                <span>10 minutes ago</span>
                                <h6 className="mb-0">
                                  Youtube, a video-sharing website, goes live{" "}
                                  <strong className="text-primary">$500</strong>
                                  .
                                </h6>
                              </a>
                            </li>
                            <li>
                              <div className="timeline-badge info"></div>
                              <a
                                className="timeline-panel text-muted"
                                href="javascript:void(0);"
                              >
                                <span>20 minutes ago</span>
                                <h6 className="mb-0">
                                  New order placed{" "}
                                  <strong className="text-info">
                                    #XF-2356.
                                  </strong>
                                </h6>
                                <p className="mb-0">
                                  Quisque a consequat ante Sit amet magna at
                                  volutapt...
                                </p>
                              </a>
                            </li>
                            <li>
                              <div className="timeline-badge danger"></div>
                              <a
                                className="timeline-panel text-muted"
                                href="javascript:void(0);"
                              >
                                <span>30 minutes ago</span>
                                <h6 className="mb-0">
                                  john just buy your product{" "}
                                  <strong className="text-warning">
                                    Sell $250
                                  </strong>
                                </h6>
                              </a>
                            </li>
                            <li>
                              <div className="timeline-badge success"></div>
                              <a
                                className="timeline-panel text-muted"
                                href="javascript:void(0);"
                              >
                                <span>15 minutes ago</span>
                                <h6 className="mb-0">
                                  StumbleUpon is acquired by eBay.{" "}
                                </h6>
                              </a>
                            </li>
                            <li>
                              <div className="timeline-badge warning"></div>
                              <a
                                className="timeline-panel text-muted"
                                href="javascript:void(0);"
                              >
                                <span>20 minutes ago</span>
                                <h6 className="mb-0">
                                  Mashable, a news website and blog, goes live.
                                </h6>
                              </a>
                            </li>
                            <li>
                              <div className="timeline-badge dark"></div>
                              <a
                                className="timeline-panel text-muted"
                                href="javascript:void(0);"
                              >
                                <span>20 minutes ago</span>
                                <h6 className="mb-0">
                                  Mashable, a news website and blog, goes live.
                                </h6>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <a
                    className="nav-link user-profile"
                    href="javascript:void(0);"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <div className="header-info2 d-flex align-items-center">
                      <img src="images/placeholder.jpg" alt="" />
                      <div className="d-flex align-items-center sidebar-info">
                        <div className="user-info">
                          <span className="font-w500 d-block  fs-5 text-white">
                            Adam Joe
                          </span>
                          <small className="text-end font-w400">Admin</small>
                        </div>
                        <svg
                          width={14}
                          height={8}
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.8334 1.08331L7.00002 6.91665L1.16669 1.08331"
                            stroke="#FFFF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu profile dropdown-menu-end">
                    <a
                      href="app-profile.html"
                      className="dropdown-item ai-icon "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span className="ms-2">Profile </span>
                    </a>
                    <a
                      href="email-inbox.html"
                      className="dropdown-item ai-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-success"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="ms-2">Inbox </span>
                    </a>
                    <a href="page-login.html" className="dropdown-item ai-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-danger"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                      </svg>
                      <span className="ms-2">Logout </span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/***********************************
        Header end ti-comment-alt
    ************************************/}
        {/***********************************
        Sidebar start
    ************************************/}
        <div className="dlabnav">
          <div className="dlabnav-scroll">
            <ul className="metismenu" id="menu">
              <li>
                <a
                  className="has-arrow "
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <div className="menu-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="IconlyHome">
                        <g id="Home">
                          <path
                            id="Home_2"
                            d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
                            fill="#130F26"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="nav-text">Dashboard</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="index.html">Dashboard Light</a>
                  </li>
                  <li>
                    <a href="balance-page.html">Balance Page</a>
                  </li>
                  <li>
                    <a href="card-center.html">Card Center</a>
                  </li>
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="transaction-details.html">Transaction Details</a>
                  </li>
                  <li>
                    <a href="transaction-history.html">Transaction History</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow "
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <div className="menu-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9174C2 20.3666 5.364 21 9.34933 21C13.3131 21 16.6987 20.3877 16.6987 17.9404C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z"
                        fill="#B9A8FF"
                      />
                      <path
                        opacity="0.4"
                        d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z"
                        fill="#763ed0"
                      />
                      <path
                        opacity="0.4"
                        d="M16.1734 7.84875C16.1734 9.19507 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9395 4.05607C15.7233 5.13216 16.1734 6.44207 16.1734 7.84875Z"
                        fill="#763ed0"
                      />
                      <path
                        d="M21.7791 15.1693C21.4317 14.444 20.5932 13.9466 19.3172 13.7023C18.7155 13.5586 17.0853 13.3545 15.5697 13.3832C15.5472 13.3861 15.5344 13.4014 15.5325 13.411C15.5295 13.4263 15.5364 13.4493 15.5658 13.4656C16.2663 13.8048 18.9738 15.2805 18.6333 18.3928C18.6186 18.5289 18.7292 18.6439 18.8671 18.6247C19.5335 18.5318 21.2478 18.1705 21.7791 17.0475C22.0736 16.4534 22.0736 15.7635 21.7791 15.1693Z"
                        fill="#B9A8FF"
                      />
                    </svg>
                  </div>
                  <span className="nav-text">Apps</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="app-profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="post-details.html">Post Details</a>
                  </li>
                  <li>
                    <a
                      className="has-arrow"
                      href="javascript:void()"
                      aria-expanded="false"
                    >
                      Email
                    </a>
                    <ul aria-expanded="false">
                      <li>
                        <a href="email-compose.html">Compose</a>
                      </li>
                      <li>
                        <a href="email-inbox.html">Inbox</a>
                      </li>
                      <li>
                        <a href="email-read.html">Read</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="app-calender.html">Calendar</a>
                  </li>
                  <li>
                    <a
                      className="has-arrow"
                      href="javascript:void()"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul aria-expanded="false">
                      <li>
                        <a href="ecom-product-grid.html">Product Grid</a>
                      </li>
                      <li>
                        <a href="ecom-product-list.html">Product List</a>
                      </li>
                      <li>
                        <a href="ecom-product-detail.html">Product Details</a>
                      </li>
                      <li>
                        <a href="ecom-product-order.html">Order</a>
                      </li>
                      <li>
                        <a href="ecom-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="ecom-invoice.html">Invoice</a>
                      </li>
                      <li>
                        <a href="ecom-customers.html">Customers</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow "
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <div className="menu-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="IconlyActivity">
                        <g id="Activity">
                          <path
                            id="Activity_2"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.1799 4.41C17.1799 3.08 18.2599 2 19.5899 2C20.9199 2 21.9999 3.08 21.9999 4.41C21.9999 5.74 20.9199 6.82 19.5899 6.82C18.2599 6.82 17.1799 5.74 17.1799 4.41ZM13.3298 14.7593L16.2198 11.0303L16.1798 11.0503C16.3398 10.8303 16.3698 10.5503 16.2598 10.3003C16.1508 10.0503 15.9098 9.8803 15.6508 9.8603C15.3798 9.8303 15.1108 9.9503 14.9498 10.1703L12.5308 13.3003L9.75976 11.1203C9.58976 10.9903 9.38976 10.9393 9.18976 10.9603C8.99076 10.9903 8.81076 11.0993 8.68976 11.2593L5.73076 15.1103L5.66976 15.2003C5.49976 15.5193 5.57976 15.9293 5.87976 16.1503C6.01976 16.2403 6.16976 16.3003 6.33976 16.3003C6.57076 16.3103 6.78976 16.1893 6.92976 16.0003L9.43976 12.7693L12.2898 14.9103L12.3798 14.9693C12.6998 15.1393 13.0998 15.0603 13.3298 14.7593ZM15.4498 3.7803C15.4098 4.0303 15.3898 4.2803 15.3898 4.5303C15.3898 6.7803 17.2098 8.5993 19.4498 8.5993C19.6998 8.5993 19.9398 8.5703 20.1898 8.5303V16.5993C20.1898 19.9903 18.1898 22.0003 14.7898 22.0003H7.40076C3.99976 22.0003 1.99976 19.9903 1.99976 16.5993V9.2003C1.99976 5.8003 3.99976 3.7803 7.40076 3.7803H15.4498Z"
                            fill="#130F26"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="nav-text">Charts</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="chart-flot.html">Flot</a>
                  </li>
                  <li>
                    <a href="chart-morris.html">Morris</a>
                  </li>
                  <li>
                    <a href="chart-chartjs.html">Chartjs</a>
                  </li>
                  <li>
                    <a href="chart-chartist.html">Chartist</a>
                  </li>
                  <li>
                    <a href="chart-sparkline.html">Sparkline</a>
                  </li>
                  <li>
                    <a href="chart-peity.html">Peity</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow "
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <div className="menu-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M11.7759 21.8374C9.49286 20.4273 7.37056 18.7645 5.44782 16.8796C4.09044 15.5338 3.0538 13.8905 2.4171 12.0753C1.27947 8.53523 2.60374 4.48948 6.30105 3.2884C8.25256 2.67553 10.375 3.05175 12.007 4.29983C13.6396 3.05315 15.7613 2.67705 17.7129 3.2884C21.4102 4.48948 22.7434 8.53523 21.6058 12.0753C20.9742 13.8888 19.9438 15.5319 18.5928 16.8796C16.6683 18.7625 14.5463 20.4251 12.2647 21.8374L12.0159 22L11.7759 21.8374Z"
                        fill="#B9A8FF"
                      />
                      <path
                        d="M12.0109 22L11.776 21.8374C9.49013 20.4274 7.36487 18.7647 5.43902 16.8796C4.0752 15.5356 3.03238 13.8922 2.39052 12.0753C1.26177 8.53523 2.58605 4.48948 6.28335 3.2884C8.23486 2.67553 10.3853 3.05204 12.0109 4.31057V22Z"
                        fill="#B9A8FF"
                      />
                      <path
                        d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z"
                        fill="#763ed0"
                      />
                    </svg>
                  </div>
                  <span className="nav-text">Bootstrap</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="ui-accordion.html">Accordion</a>
                  </li>
                  <li>
                    <a href="ui-alert.html">Alert</a>
                  </li>
                  <li>
                    <a href="ui-badge.html">Badge</a>
                  </li>
                  <li>
                    <a href="ui-button.html">Button</a>
                  </li>
                  <li>
                    <a href="ui-modal.html">Modal</a>
                  </li>
                  <li>
                    <a href="ui-button-group.html">Button Group</a>
                  </li>
                  <li>
                    <a href="ui-list-group.html">List Group</a>
                  </li>
                  <li>
                    <a href="ui-card.html">Cards</a>
                  </li>
                  <li>
                    <a href="ui-carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="ui-dropdown.html">Dropdown</a>
                  </li>
                  <li>
                    <a href="ui-popover.html">Popover</a>
                  </li>
                  <li>
                    <a href="ui-progressbar.html">Progressbar</a>
                  </li>
                  <li>
                    <a href="ui-tab.html">Tab</a>
                  </li>
                  <li>
                    <a href="ui-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="ui-pagination.html">Pagination</a>
                  </li>
                  <li>
                    <a href="ui-grid.html">Grid</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow "
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <div className="menu-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="IconlyFilter">
                        <g id="Filter">
                          <path
                            id="Filter_2"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89833C21.3244 4.89833 22 5.56203 22 6.37856C22 7.19618 21.3244 7.85989 20.4933 7.85989H13.9178C13.0856 7.85989 12.4101 7.19618 12.4101 6.37856C12.4101 5.56203 13.0856 4.89833 13.9178 4.89833H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0196 18.5611 14.0196C16.6623 14.0196 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                            fill="#130F26"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="nav-text">Plugins</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="uc-select2.html">Select 2</a>
                  </li>
                  <li>
                    <a href="uc-nestable.html">Nestedable</a>
                  </li>
                  <li>
                    <a href="uc-noui-slider.html">Noui Slider</a>
                  </li>
                  <li>
                    <a href="uc-sweetalert.html">Sweet Alert</a>
                  </li>
                  <li>
                    <a href="uc-toastr.html">Toastr</a>
                  </li>
                  <li>
                    <a href="map-jqvmap.html">Jqv Map</a>
                  </li>
                  <li>
                    <a href="uc-lightgallery.html">Light Gallery</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="widget-basic.html" className="" aria-expanded="false">
                  <div className="menu-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.0754 2H19.4614C20.8636 2 21.9999 3.14585 21.9999 4.55996V7.97452C21.9999 9.38864 20.8636 10.5345 19.4614 10.5345H16.0754C14.6731 10.5345 13.5369 9.38864 13.5369 7.97452V4.55996C13.5369 3.14585 14.6731 2 16.0754 2Z"
                        fill="#763ed0"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                        fill="#B9A8FF"
                      />
                    </svg>
                  </div>
                  <span className="nav-text">Widget</span>
                </a>
              </li>
              <li>
                <a
                  className="has-arrow "
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <div className="menu-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="IconlyDocument">
                        <g id="Document">
                          <path
                            id="Document_2"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.81 2H16.191C19.28 2 21 3.78 21 6.83V17.16C21 20.26 19.28 22 16.191 22H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2ZM8.08 6.66V6.65H11.069C11.5 6.65 11.85 7 11.85 7.429C11.85 7.87 11.5 8.22 11.069 8.22H8.08C7.649 8.22 7.3 7.87 7.3 7.44C7.3 7.01 7.649 6.66 8.08 6.66ZM8.08 12.74H15.92C16.35 12.74 16.7 12.39 16.7 11.96C16.7 11.53 16.35 11.179 15.92 11.179H8.08C7.649 11.179 7.3 11.53 7.3 11.96C7.3 12.39 7.649 12.74 8.08 12.74ZM8.08 17.31H15.92C16.319 17.27 16.62 16.929 16.62 16.53C16.62 16.12 16.319 15.78 15.92 15.74H8.08C7.78 15.71 7.49 15.85 7.33 16.11C7.17 16.36 7.17 16.69 7.33 16.95C7.49 17.2 7.78 17.35 8.08 17.31Z"
                            fill="#130F26"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="nav-text">Forms</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="form-element.html">Form Elements</a>
                  </li>
                  <li>
                    <a href="form-wizard.html">Wizard</a>
                  </li>
                  <li>
                    <a href="form-ckeditor.html">CkEditor</a>
                  </li>
                  <li>
                    <a href="form-pickers.html">Pickers</a>
                  </li>
                  <li>
                    <a href="form-validation.html">Form Validate</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow "
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <div className="menu-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="IconlySwap">
                        <g id="Swap">
                          <path
                            id="Swap_2"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.54618 3.27793C7.71236 3.39789 7.98037 3.67345 7.98037 3.67345C9.02079 4.64858 10.5879 7.07394 11.0911 8.30444C11.1016 8.30444 11.4001 9.03608 11.4118 9.38409V9.43041C11.4118 9.96371 11.1133 10.4626 10.6335 10.7179C10.4357 10.8232 9.95456 10.9211 9.72244 10.9683C9.64556 10.984 9.59599 10.9941 9.59308 10.997C8.90727 11.1016 7.85514 11.1704 6.70003 11.1704C5.48757 11.1704 4.38981 11.1016 3.71453 10.9733C3.70282 10.9733 3.08606 10.8462 2.88009 10.7642C2.58282 10.6372 2.3312 10.4044 2.17087 10.1145C2.05618 9.88294 2 9.63827 2 9.38409C2.01053 9.11685 2.18257 8.618 2.26215 8.42083C2.76539 7.12026 4.41204 4.6367 5.41852 3.68532C5.52307 3.57922 5.64206 3.46806 5.72485 3.39071C5.76902 3.34945 5.8029 3.3178 5.81877 3.30169C6.07039 3.10452 6.37936 3 6.71173 3C7.00783 3 7.30509 3.09264 7.54618 3.27793ZM18.2286 10.1618C18.2286 10.6856 17.8108 11.1096 17.2947 11.1096C16.7786 11.1096 16.3608 10.6856 16.3608 10.1618L16.1033 5.58295C16.1033 4.91543 16.637 4.375 17.2947 4.375C17.9524 4.375 18.4849 4.91543 18.4849 5.58295L18.2286 10.1618ZM21.1199 13.2356C21.4172 13.3639 21.6688 13.5955 21.8291 13.8853C21.9438 14.1169 22 14.3616 22 14.617C21.9895 14.883 21.8174 15.3831 21.7367 15.5802C21.2346 16.8797 19.5868 19.3633 18.5815 20.3158C18.4787 20.4194 18.3619 20.5284 18.2793 20.6055L18.2792 20.6055C18.2331 20.6486 18.1976 20.6817 18.1812 20.6983C17.9284 20.8955 17.6206 21 17.2894 21C16.991 21 16.6937 20.9074 16.4538 20.7209C16.2876 20.6021 16.0196 20.3265 16.0196 20.3265C14.978 19.3526 13.4121 16.926 12.9089 15.6954C12.8972 15.6954 12.5999 14.965 12.5882 14.617V14.5706C12.5882 14.0361 12.8855 13.5373 13.3665 13.2819C13.5639 13.1777 14.0435 13.0796 14.2762 13.0319L14.2762 13.0319C14.3539 13.016 14.404 13.0058 14.4069 13.0028C15.0927 12.8983 16.1449 12.8294 17.3 12.8294C18.5124 12.8294 19.6102 12.8983 20.2855 13.0265C20.296 13.0265 20.9139 13.1536 21.1199 13.2356ZM6.70553 12.8905C6.18942 12.8905 5.77161 13.3146 5.77161 13.8383L5.51414 18.4171C5.51414 19.0846 6.04781 19.625 6.70553 19.625C7.36325 19.625 7.89575 19.0846 7.89575 18.4171L7.63945 13.8383C7.63945 13.3146 7.22165 12.8905 6.70553 12.8905Z"
                            fill="#130F26"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="nav-text">Table</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="table-bootstrap-basic.html">Bootstrap</a>
                  </li>
                  <li>
                    <a href="table-datatable-basic.html">Datatable</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="has-arrow "
                  href="javascript:void()"
                  aria-expanded="false"
                >
                  <div className="menu-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M2.00024 11.0785C2.05024 13.4165 2.19024 17.4155 2.21024 17.8565C2.28124 18.7995 2.64224 19.7525 3.20424 20.4245C3.98624 21.3675 4.94924 21.7885 6.29224 21.7885C8.14824 21.7985 10.1942 21.7985 12.1812 21.7985C14.1762 21.7985 16.1122 21.7985 17.7472 21.7885C19.0712 21.7885 20.0642 21.3565 20.8362 20.4245C21.3982 19.7525 21.7592 18.7895 21.8102 17.8565C21.8302 17.4855 21.9302 13.1445 21.9902 11.0785H2.00024Z"
                        fill="#763ed0"
                      />
                      <path
                        d="M11.2455 15.3842V16.6782C11.2455 17.0922 11.5815 17.4282 11.9955 17.4282C12.4095 17.4282 12.7455 17.0922 12.7455 16.6782V15.3842C12.7455 14.9702 12.4095 14.6342 11.9955 14.6342C11.5815 14.6342 11.2455 14.9702 11.2455 15.3842Z"
                        fill="#763ed0"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.2114 14.5564C10.1114 14.9194 9.76237 15.1514 9.38437 15.1014C6.83337 14.7454 4.39537 13.8404 2.33737 12.4814C2.12637 12.3434 2.00037 12.1074 2.00037 11.8554V8.3894C2.00037 6.2894 3.71237 4.5814 5.81737 4.5814H7.78437C7.97237 3.1294 9.20237 2.0004 10.7044 2.0004H13.2864C14.7874 2.0004 16.0184 3.1294 16.2064 4.5814H18.1834C20.2824 4.5814 21.9904 6.2894 21.9904 8.3894V11.8554C21.9904 12.1074 21.8634 12.3424 21.6544 12.4814C19.5924 13.8464 17.1444 14.7554 14.5764 15.1104C14.5414 15.1154 14.5074 15.1174 14.4734 15.1174C14.1344 15.1174 13.8314 14.8884 13.7464 14.5524C13.5444 13.7564 12.8214 13.1994 11.9904 13.1994C11.1484 13.1994 10.4334 13.7444 10.2114 14.5564ZM13.2864 3.5004H10.7044C10.0314 3.5004 9.46937 3.9604 9.30137 4.5814H14.6884C14.5204 3.9604 13.9584 3.5004 13.2864 3.5004Z"
                        fill="#B9A8FF"
                      />
                    </svg>
                  </div>
                  <span className="nav-text">Pages</span>
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="page-login.html">Login</a>
                  </li>
                  <li>
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <a
                      className="has-arrow"
                      href="javascript:void()"
                      aria-expanded="false"
                    >
                      Error
                    </a>
                    <ul aria-expanded="false">
                      <li>
                        <a href="page-error-400.html">Error 400</a>
                      </li>
                      <li>
                        <a href="page-error-403.html">Error 403</a>
                      </li>
                      <li>
                        <a href="page-error-404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="page-error-500.html">Error 500</a>
                      </li>
                      <li>
                        <a href="page-error-503.html">Error 503</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-lock-screen.html">Lock Screen</a>
                  </li>
                  <li>
                    <a href="empty-page.html">Empty Page</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="copyright">
              <p className="fs-14">
                <strong>doLab Personal Banking Admin</strong> © 2022 All Rights
                Reserved
              </p>
              <p className="fs-14">
                Made with <span className="heart" /> by DexignZone
              </p>
            </div>
          </div>
        </div>
        <div className="content-body">
          {/* row */}
          <div className="container-fluid" >
            {children}
          </div>
        </div>
        <div class="footer out-footer">
          <div class="copyright">
            <p>Copyright © Designed &amp; Developed by <a href="https:// DexignZone.com/" target="_blank"> DexignZone</a> 2022</p>
          </div>
        </div>
      </div>

    </>
  );
}
export default DashboardLayout;
