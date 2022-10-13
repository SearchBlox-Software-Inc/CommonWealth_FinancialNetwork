import React, { useState } from 'react'

function Footer() {
    const [footerLinks] = useState([
        [
            {
                text: "Advisor Advantage",
                url: "https://www.commonwealth.com/advisor-advantage"
            },
            {
                text: "Evolve Your Business",
                url: "https://www.commonwealth.com/advisor-advantage/evolve-your-business"
            },
            {
                text: "Accelerate Your Growth",
                url: "https://www.commonwealth.com/advisor-advantage/accelerate-your-growth"
            },
            {
                text: "Streamline Your Operations",
                url: "https://www.commonwealth.com/advisor-advantage/streamline-your-operations"
            },
            {
                text: "Transition Your Way",
                url: "https://www.commonwealth.com/advisor-advantage/transition-your-way"
            },
        ],
        [
            {
                text: "Advisor Solutions",
                url: "https://www.commonwealth.com/advisor-solutions",
            },
            {
                text: "Affiliation Flexibility",
                url: "https://www.commonwealth.com/advisor-solutions/affiliation-flexibility"
            },
            {
                text: "Tailored Business Strategies",
                url: "https://www.commonwealth.com/advisor-solutions/tailored-business-strategies"
            },
            {
                text: "Entrepreneurial Capital",
                url: "https://www.commonwealth.com/advisor-solutions/entrepreneurial-capital"
            },
            {
                text: "Advanced Planning & Research",
                url: "https://www.commonwealth.com/advisor-solutions/advanced-planning-and-research"
            },
            {
                text: "Complete Marketing Support",
                url: "https://www.commonwealth.com/advisor-solutions/complete-marketing-support"
            },
            {
                text: "Holistic Investment Solutions",
                url: "https://www.commonwealth.com/advisor-solutions/holistic-investment-solutions"
            },
            {
                text: "Collaborative Compliance",
                url: "https://www.commonwealth.com/advisor-solutions/collaborative-compliance"
            },
            {
                text: "Powerful Technology",
                url: "https://www.commonwealth.com/advisor-solutions/powerful-technology"
            },
        ],
        [
            {
                text: "Insights",
                url: "https://www.commonwealth.com/insights"
            },
            {
                text: "The Independent Market Observer",
                url: "https://blog.commonwealth.com/independent-market-observer"
            },
            {
                text: "Breakaway Resource Center",
                url: "https://learn.commonwealth.com/advisor-guide/independence"
            },
            {
                text: "Advisor Stories",
                url: "https://www.commonwealth.com/insights/advisor-stories"
            },
            {
                text: "Press and News",
                url: "https://www.commonwealth.com/insights/press-and-news"
            },
        ],
        [
            {
                text: "About Us",
                url: "https://www.commonwealth.com/about-us"
            },
            {
                text: "Leadership",
                url: "https://www.commonwealth.com/about-us/leadership"
            },
            {
                text: "Our History",
                url: "https://www.commonwealth.com/about-us/history"
            },
            {
                text: "Advisor-Centric Culture",
                url: "https://www.commonwealth.com/about-us/advisor-centric-culture"
            },
            {
                text: "Diversity, Equity, & Inclusion",
                url: "https://www.commonwealth.com/about-us/diversity-equity-and-inclusion"
            },
            {
                text: "Corporate Responsibility",
                url: "https://www.commonwealth.com/about-us/corporate-responsibility"
            },
            {
                text: "Giving Back",
                url: "https://www.commonwealth.com/about-us/giving-back"
            },
        ]
    ])
    const [socialIcons]=useState([{
        svg:(<svg class="socialLink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346.1223 346.1223"><path  d="M173.0612,0A173.0612,173.0612,0,1,0,346.1223,173.0612,173.0612,173.0612,0,0,0,173.0612,0Zm-51.81,263.2413h-37.79V141.3365h37.79ZM101.7469,124.27A21.9428,21.9428,0,1,1,123.69,102.327,21.8516,21.8516,0,0,1,101.7469,124.27ZM226.09,263.2413V203.5079c0-14.6285,0-32.9142-19.5047-32.9142s-23.1619,15.8476-23.1619,31.6952v60.9524h-37.79V141.3365h36.5714v17.0667c7.3142-12.19,20.7237-20.7238,35.3524-19.5048,39.0094,0,45.1047,25.6,45.1047,58.5143l1.219,65.8286Z"></path></svg>),
        url:"https://www.linkedin.com/company/commonwealth-financial-network",
    },
    {
        url:"https://twitter.com/CommonwealthFN",
        svg:(<svg class="socialLink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path  d="M200,0h0C89.543,0,0,89.543,0,200v0C0,310.457,89.543,400,200,400h0c110.4568,0,200-89.543,200-200v0C400,89.543,310.457,0,200,0ZM306.6885,157.7542c.15,2.2.15,4.41.15,6.63,0,67.78-51.6,145.94-145.94,145.94v-.04a145.21,145.21,0,0,1-78.62-23,104.4178,104.4178,0,0,0,12.21.74,102.92,102.92,0,0,0,63.7-22,51.35,51.35,0,0,1-47.92-35.62,51.2106,51.2106,0,0,0,23.16-.88,51.31,51.31,0,0,1-41.15-50.28v-.65a50.9113,50.9113,0,0,0,23.28,6.42,51.33,51.33,0,0,1-15.88-68.47,145.62,145.62,0,0,0,105.71,53.59,51.34,51.34,0,0,1,87.41-46.78,102.793,102.793,0,0,0,32.57-12.45,51.47,51.47,0,0,1-22.55,28.37,102.3832,102.3832,0,0,0,29.46-8.07A104.3628,104.3628,0,0,1,306.6885,157.7542Z"></path></svg>)
    },
    {
        url:"https://www.facebook.com/CommonwealthFinancialNetwork",
        svg:(<svg class="socialLink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1017.7778"><path d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.554,187.231,467.37,432,505.7778V660H302V512H432V399.2C432,270.88,508.4385,200,625.3892,200,681.4077,200,740,210,740,210V336H675.4371C611.8351,336,592,375.4667,592,415.9573V512H734L711.3,660H592v357.7778C836.769,979.37,1024,767.554,1024,512Z"></path></svg>)
    },
    {
        url:"https://www.youtube.com/user/CommonwealthBD",
        svg:(<svg class="socialLink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><g stroke="none" stroke-width="1" fill-rule="evenodd"><path d="M200,0 C310.45695,0 400,89.54305 400,200 C400,310.45695 310.45695,400 200,400 C89.54305,400 0,310.45695 0,200 C0,89.54305 89.54305,0 200,0 Z M200.559577,114.00064 L199.440702,114.00064 C192.462686,114.012802 122.226682,114.256045 103.992727,119.120909 C93.4381818,121.935455 85.1118182,130.261818 82.2581818,140.855455 C77.3933182,159.052273 77.150075,196.053089 77.1379128,199.707678 L77.1379128,200.292322 C77.150075,203.946911 77.3933182,240.947727 82.2581818,259.144545 C85.0727273,269.699091 93.3990909,278.025455 103.992727,280.879091 C123.186364,286 200,286 200,286 C200,286 276.852727,286 296.007273,280.879091 C306.561818,278.064545 314.888182,269.738182 317.741818,259.144545 C322.606682,240.947727 322.849925,203.946911 322.862087,200.292322 L322.862087,199.707678 C322.849925,196.053089 322.606682,159.052273 317.741818,140.855455 C314.927273,130.300909 306.600909,121.974545 296.007273,119.120909 C277.810455,114.256045 207.541027,114.012802 200.559577,114.00064 Z" ></path><g transform="translate(174.304348, 161.000000)"  fill-rule="nonzero"><polygon points="0.596245059 77.1486364 66.6585178 39 0.596245059 0.851363636"></polygon></g></g></svg>)
    },
    {
        url:"https://www.instagram.com/commonwealthfn",
        svg:(<svg class="socialLink" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><path d="M305,256c0,27.1-21.9,49-49,49s-49-21.9-49-49s21.9-49,49-49S305,228.9,305,256z"></path><path d="M370.6,169.3c-2.4-6.4-6.1-12.2-11-16.9c-4.7-4.9-10.5-8.6-16.9-11c-5.2-2-13-4.4-27.3-5.1 c-15.5-0.7-20.2-0.9-59.4-0.9c-39.3,0-43.9,0.1-59.4,0.9c-14.3,0.7-22.1,3.1-27.3,5.1c-6.4,2.4-12.2,6.1-16.9,11 c-4.9,4.7-8.6,10.5-11,16.9c-2,5.2-4.4,13-5.1,27.3c-0.7,15.5-0.9,20.1-0.9,59.4c0,39.2,0.2,43.9,0.9,59.4c0.7,14.3,3,22.1,5.1,27.3 c2.4,6.4,6.1,12.2,11,16.9c4.7,4.9,10.5,8.6,16.9,11c5.2,2,13,4.4,27.3,5.1c15.5,0.7,20.1,0.9,59.4,0.9c39.3,0,43.9-0.1,59.4-0.9 c14.3-0.7,22.1-3,27.3-5.1c12.8-4.9,23-15.1,27.9-27.9c2-5.2,4.4-13,5.1-27.3c0.7-15.5,0.9-20.2,0.9-59.4c0-39.3-0.1-43.9-0.9-59.4 C375,182.3,372.6,174.5,370.6,169.3z M256,331.5c-41.7,0-75.5-33.8-75.5-75.5s33.8-75.5,75.5-75.5c41.7,0,75.5,33.8,75.5,75.5 S297.7,331.5,256,331.5z M334.5,195.2c-9.7,0-17.6-7.9-17.6-17.6s7.9-17.6,17.6-17.6s17.6,7.9,17.6,17.6 C352.1,187.3,344.2,195.2,334.5,195.2z"></path><path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M402.1,316.6 c-0.7,15.6-3.2,26.3-6.8,35.7c-7.6,19.7-23.2,35.4-43,43c-9.3,3.6-20,6.1-35.7,6.8c-15.7,0.7-20.7,0.9-60.6,0.9 c-39.9,0-44.9-0.2-60.6-0.9c-15.6-0.7-26.3-3.2-35.7-6.8c-9.8-3.7-18.7-9.5-26-17c-7.5-7.3-13.3-16.2-17-26 c-3.6-9.3-6.1-20-6.8-35.7c-0.7-15.7-0.9-20.7-0.9-60.6s0.2-44.9,0.9-60.6c0.7-15.6,3.2-26.3,6.8-35.7c3.7-9.8,9.5-18.7,17-26 c7.3-7.5,16.2-13.3,26-17c9.4-3.6,20-6.1,35.7-6.8c15.7-0.7,20.7-0.9,60.6-0.9s44.9,0.2,60.6,0.9c15.6,0.7,26.3,3.2,35.7,6.8 c9.8,3.7,18.7,9.5,26,17c7.5,7.3,13.3,16.2,17,26c3.6,9.4,6.1,20,6.8,35.7c0.7,15.7,0.9,20.7,0.9,60.6S402.8,300.9,402.1,316.6z"></path></svg>)
    },
])
    return (
        <>
        <div className="footer-wrapper">
            <section className="footer-head-sec">
                <a className="logo-link">
                    <svg class="wordmark-module__wordmark___1W3yS footer-module__wordmark___3yOvn" fill="#fff" viewBox="0 0 1010.78 94.83" xmlns="http://www.w3.org/2000/svg"><path id="wordmark-text" class="wordmark-text" fill-rule="evenodd" clip-rule="evenodd" d="M964.44,35.51V7.26H948.5v79.6h15.94V58c0-11.6,4.44-17.66,13.22-17.66c7.16,0,11,4.44,11,13.12v33.49H1005 V49.43c0-15.74-7.67-24.41-21.39-24.41C975.54,25.01,968.98,28.34,964.44,35.51 M938.31,85.75V70.62 c-2.93,0.61-5.85,0.91-8.88,1.01c-4.14,0-6.05-1.61-6.05-5.45V39.95h15.33V26.43h-15.33V7.26h-15.94V68.4 c0,13.82,6.56,19.17,17.76,19.17C929.64,87.56,934.08,86.86,938.31,85.75 M894.53,7.36h-16.14v79.6h16.14V7.36z M835.1,61.94 l15.03-1.82v2.42c0,7.16-5.95,12.71-13.92,12.71c-5.35,0-8.58-2.52-8.58-6.66C827.54,64.97,830.36,62.54,835.1,61.94 M813.62,36.52l8.37,11.1c4.24-5.35,10.69-8.37,17.55-8.17c6.76,0,10.49,2.32,10.49,6.15v1.01c0,1.41-1.01,2.22-3.13,2.42 l-16.55,1.51c-11.7,1.11-19.37,8.47-19.37,18.97c0,11.1,8.47,18.97,20.48,18.97c8.07,0,14.73-3.63,18.66-9.58v8.27h15.94V49.73 c0-16.55-8.58-24.72-26.13-24.72C827.74,25.01,818.66,29.05,813.62,36.52 M787.99,49.93h-27.24c1.61-7.36,6.66-11.4,14.33-11.4 C782.74,38.53,787.28,43.38,787.99,49.93 M744.51,56.69c0,18.06,12.01,31.68,32.49,31.68c11.6,0,19.17-3.83,24.11-7.97l-8.47-11.7 c-4.54,3.13-9.89,4.84-15.33,4.74c-7.06,0-14.33-3.53-16.24-11.6l-0.1-0.2h44.59V57.3c0-19.47-11.4-32.18-29.86-32.18 C756.51,25.01,744.51,38.74,744.51,56.69 M639.08,26.43l24.52,60.53h12.11l15.33-35.92l15.13,35.92h12.11l24.52-60.53h-17.45 l-13.42,36.12l-14.53-36.12h-12.91l-14.43,36.12l-13.52-36.12L639.08,26.43z M577.74,26.43v60.53h15.94V58 c0-11.5,4.44-17.66,12.91-17.66c7.36,0,11.3,4.44,11.3,13.12v33.49h16.34V49.03c0-15.33-7.77-24.11-21.29-24.11 c-7.97-0.1-15.44,3.93-19.67,10.69v-9.18H577.74z M552.22,56.69c0,9.69-7.06,16.14-16.14,16.14s-16.14-6.46-16.14-16.14 s7.06-16.14,16.14-16.14S552.22,47.01,552.22,56.69 M503.49,56.69c0,18.87,13.92,31.68,32.59,31.68 c18.66,0,32.59-12.81,32.59-31.68s-13.92-31.68-32.59-31.68S503.49,37.83,503.49,56.69 M451.03,36.21 c-3.53-7.67-10.19-11.3-18.77-11.3c-9.28,0-15.23,4.34-18.87,10.79v-9.28h-15.54v60.53h15.94V58c0-11.3,4.14-17.66,13.12-17.66 c7.16,0,11,4.34,11,13.12v33.49h16.04V58c0-11.3,4.24-17.66,13.32-17.66c7.16,0,10.9,4.34,10.9,13.12v33.49h16.14V50.14 c0-16.34-9.18-25.22-22.9-25.22C461.92,24.91,454.96,29.35,451.03,36.21 M341.66,36.21c-3.53-7.67-10.19-11.3-18.77-11.3 c-9.28,0-15.23,4.34-18.87,10.79v-9.28h-15.54v60.53h15.94V58c0-11.3,4.14-17.66,13.12-17.66c7.16,0,11,4.34,11,13.12v33.49h15.94 V58c0-11.3,4.24-17.66,13.32-17.66c7.16,0,10.9,4.34,10.9,13.12v33.49h16.14V50.14c0-16.34-9.18-25.22-22.9-25.22 C352.56,24.91,345.6,29.35,341.66,36.21 M263.07,56.69c0,9.69-6.96,16.14-16.04,16.14c-9.08,0-16.14-6.46-16.14-16.14 s7.06-16.14,16.14-16.14C256.11,40.55,263.07,46.91,263.07,56.69 M214.34,56.69c0,18.87,13.92,31.68,32.59,31.68 s32.49-12.81,32.49-31.68s-13.92-31.68-32.59-31.68S214.34,37.83,214.34,56.69 M186.9,88.37c7.47,0,13.82-1.31,22.4-5.25 l-6.66-15.64c-4.84,2.42-10.29,3.73-15.74,3.83c-14.63,0-25.42-10.39-25.42-24.72S172.27,21.89,187,21.89 c8.88,0,16.34,3.63,20.58,8.07l11.9-12.21c-8.68-8.17-20.28-12.81-32.28-12.61c-24.31,0-42.57,18.16-42.57,41.67 S162.89,88.37,186.9,88.37"></path><g class="wordmark-icon"><polygon class="pathway pathway-1" points="62.1,5.14 5,65.27 5,5.14 		"></polygon><polygon class="pathway pathway-2" points="73.4,5.14 5,68.19 5,71.02 88.03,5.44 88.03,5.14 		"></polygon><polygon class="pathway pathway-3" points="5,73.84 5,76.77 88.03,32.98 88.03,19.26 		"></polygon><polygon class="pathway pathway-4" points="5,79.59 5,82.42 88.03,60.63 88.03,46.81 		"></polygon><polygon class="pathway pathway-5" points="5,88.17 88.03,88.17 88.03,74.45 5,85.35 		"></polygon><polygon class="pathway pathway-6" points="5,65.27 62.1,5.15 47.97,5.15 5.01,62.44 		"></polygon></g></svg>
                </a>
            </section>
            <section className="footer-links-wrapper">
                {
                    footerLinks.map((pel, i) => (
                        <ul key={i}>
                            {pel.map((el, i) => (
                                <li key={i}>
                                    <a href={el.url}>{el.text}</a>
                                </li>
                            ))
                        }
                        </ul>
                    ))
                }
                <ul className="no-before-after">
                    <li><a href="https://www.commonwealth.com/about-us">About Us</a></li>
                    <li><a href="https://www.commonwealth.com/insights">Our Insights</a></li>
                    <li><a href="https://www.commonwealth.com/careers">Careers</a></li>
                    <li><a className="footer-lc" href="https://home.commonwealth.com/login/login.aspx">Member Login</a></li>
                </ul>
                <ul className="no-before-after2">
                    <li><a href="https://www.commonwealth.com/for-clients">For Clients</a></li>
                    <li><a href="https://www.commonwealth.com/insights/press-and-news">Press and News</a></li>
                    <li><a href="https://www.commonwealth.com/contact-us">Contact Us</a></li>
                    <li><a href="https://www.commonwealth.com/accessibility-policy">Accessibility Policy </a></li>
                </ul>
                <div class="footer-address-wrapper">
                    <h1>Waltham</h1>
                    <a class="" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&amp;query=29%20Sawyer%20Road%20Waltham,%20MA%2002453-3483">29 Sawyer RoadWaltham, MA 02453-3483</a>
                    <p><span>Toll-Free </span><a href="tel:+18002370081">800.237.0081</a></p>
                    <p><span>Phone </span><a href="tel:+17817360700">781.736.0700</a></p>
                    <p><span>Fax </span><a href="tel:+17817360793">781.736.0793</a></p>
                    </div>
                    <div class="footer-address-wrapper">
                    <h1>San Diego</h1>
                    <a class="" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&amp;query=110%20West%20A%20Street,%20Suite%201800%20San%20Diego,%20CA%2092101-3706">110 West A Street, Suite 1800San Diego, CA 92101-3706</a><p><span>Toll-Free </span>
                    <a href="tel:+18773471982">877.347.1982</a></p><p><span>Phone </span><a href="tel:+16194719700">619.471.9700</a></p><p><span>Fax </span><a href="tel:+16194719701">619.471.9701</a></p>
                </div>

                <section className="social-icons-container">
                <ul>
                    {
                        socialIcons.map((el,i)=>(
                            <li>
                                <a href={el.url}>
                                    {el.svg}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                </section>
            </section>
        </div>
        <section className="sec-footer">
                <div className="sec-footer-container">
                    <div className="first-con">
                    <a href="https://brokercheck.finra.org/" className="footerimg-link" target="_blank" rel="noopener noreferrer">
                    <img src="//images.ctfassets.net/a320zjmb1inn/18F2QZ8je8v2yJ56ROCICc/3d91e67f251132fe5c395c9190fb2649/BrokerCheck-Small.png" width="300" height="76" alt="BrokerCheck - check the background of this investment professional"/></a>
                    <p><b>Information about securities-registered professionals may be found at&nbsp;</b><a class="" target="_blank" rel="noopener noreferrer" href="https://brokercheck.finra.org/"><b>FINRA BROKERCHECK</b></a><b>.</b></p>
                    </div>
                    <div className="sec-con">
                    <p><a class="" target="_blank" rel="noopener noreferrer" href="//assets.ctfassets.net/a320zjmb1inn/5cor4ZgFfBq5LQgnriHmIL/b0c8c57a13098eac192c276d43b7fbfd/Form_CRS_07-29-22.pdf">Form CRS</a> | <a class="" href="/for-clients/disclosure/customer-id-program">Disclosure</a> | <a class="" href="/for-clients/disclosure/privacy-policy">Privacy Policy</a> </p>
                    <p>©2022 Commonwealth Financial Network®, Member <a class="" target="_blank" rel="noopener noreferrer" href="https://www.finra.org/">FINRA</a>/<a class="" target="_blank" rel="noopener noreferrer" href="https://www.sipc.org/">SIPC</a>, 
a Registered Investment Adviser. All rights reserved.</p>
                    </div>
                </div>
            </section>
                    </>
    )
}

export default Footer