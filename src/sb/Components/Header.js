import { map } from 'jquery'
import React, { useState } from 'react'

function Header() {
    const [navLinks]=useState({
        mainLinks:[
            {name:"Advisor Advantage",url:"https://www.commonwealth.com/advisor-advantage"},
            {name:"Advisor Solutions",url:"https://www.commonwealth.com/advisor-solutions"},
            {name:"Insights",url:"https://www.commonwealth.com/insights"},
            {name:"About Us",url:"https://www.commonwealth.com/about-us"},
        ],
        searchSVG:(<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-search-icon"><circle cx="13" cy="9" r="7.5" stroke="currentColor" stroke-width="3"></circle><path d="M2 20L7 15" stroke="currentColor" stroke-width="3"></path></svg>),
        letConnect:{name:"Let's Connect", url:"https://www.commonwealth.com/contact-us"},
        navSecondryLinks:[
            {name:"Member Login",url:"https://home.commonwealth.com/login/login.aspx"},
            {name:"For Clients",url:"https://www.commonwealth.com/for-clients"},
            {name:"Careers",url:"https://www.commonwealth.com/careers"},
    ]
    })
    return (
        <div className="header-container">
            <div className='header-logo'>
                <a className='logo-link' target="__self">
                <svg className="wordmark-module__wordmark___1W3yS navigation-module__wordmark___1Tnl2" fill="none" viewBox="0 0 1010.78 94.83" xmlns="http://www.w3.org/2000/svg">
                <path id="wordmark-text" className="wordmark-text" fill='#fff' fill-rule="evenodd" clip-rule="evenodd" d="M964.44,35.51V7.26H948.5v79.6h15.94V58c0-11.6,4.44-17.66,13.22-17.66c7.16,0,11,4.44,11,13.12v33.49H1005 V49.43c0-15.74-7.67-24.41-21.39-24.41C975.54,25.01,968.98,28.34,964.44,35.51 M938.31,85.75V70.62 c-2.93,0.61-5.85,0.91-8.88,1.01c-4.14,0-6.05-1.61-6.05-5.45V39.95h15.33V26.43h-15.33V7.26h-15.94V68.4 c0,13.82,6.56,19.17,17.76,19.17C929.64,87.56,934.08,86.86,938.31,85.75 M894.53,7.36h-16.14v79.6h16.14V7.36z M835.1,61.94 l15.03-1.82v2.42c0,7.16-5.95,12.71-13.92,12.71c-5.35,0-8.58-2.52-8.58-6.66C827.54,64.97,830.36,62.54,835.1,61.94 M813.62,36.52l8.37,11.1c4.24-5.35,10.69-8.37,17.55-8.17c6.76,0,10.49,2.32,10.49,6.15v1.01c0,1.41-1.01,2.22-3.13,2.42 l-16.55,1.51c-11.7,1.11-19.37,8.47-19.37,18.97c0,11.1,8.47,18.97,20.48,18.97c8.07,0,14.73-3.63,18.66-9.58v8.27h15.94V49.73 c0-16.55-8.58-24.72-26.13-24.72C827.74,25.01,818.66,29.05,813.62,36.52 M787.99,49.93h-27.24c1.61-7.36,6.66-11.4,14.33-11.4 C782.74,38.53,787.28,43.38,787.99,49.93 M744.51,56.69c0,18.06,12.01,31.68,32.49,31.68c11.6,0,19.17-3.83,24.11-7.97l-8.47-11.7 c-4.54,3.13-9.89,4.84-15.33,4.74c-7.06,0-14.33-3.53-16.24-11.6l-0.1-0.2h44.59V57.3c0-19.47-11.4-32.18-29.86-32.18 C756.51,25.01,744.51,38.74,744.51,56.69 M639.08,26.43l24.52,60.53h12.11l15.33-35.92l15.13,35.92h12.11l24.52-60.53h-17.45 l-13.42,36.12l-14.53-36.12h-12.91l-14.43,36.12l-13.52-36.12L639.08,26.43z M577.74,26.43v60.53h15.94V58 c0-11.5,4.44-17.66,12.91-17.66c7.36,0,11.3,4.44,11.3,13.12v33.49h16.34V49.03c0-15.33-7.77-24.11-21.29-24.11 c-7.97-0.1-15.44,3.93-19.67,10.69v-9.18H577.74z M552.22,56.69c0,9.69-7.06,16.14-16.14,16.14s-16.14-6.46-16.14-16.14 s7.06-16.14,16.14-16.14S552.22,47.01,552.22,56.69 M503.49,56.69c0,18.87,13.92,31.68,32.59,31.68 c18.66,0,32.59-12.81,32.59-31.68s-13.92-31.68-32.59-31.68S503.49,37.83,503.49,56.69 M451.03,36.21 c-3.53-7.67-10.19-11.3-18.77-11.3c-9.28,0-15.23,4.34-18.87,10.79v-9.28h-15.54v60.53h15.94V58c0-11.3,4.14-17.66,13.12-17.66 c7.16,0,11,4.34,11,13.12v33.49h16.04V58c0-11.3,4.24-17.66,13.32-17.66c7.16,0,10.9,4.34,10.9,13.12v33.49h16.14V50.14 c0-16.34-9.18-25.22-22.9-25.22C461.92,24.91,454.96,29.35,451.03,36.21 M341.66,36.21c-3.53-7.67-10.19-11.3-18.77-11.3 c-9.28,0-15.23,4.34-18.87,10.79v-9.28h-15.54v60.53h15.94V58c0-11.3,4.14-17.66,13.12-17.66c7.16,0,11,4.34,11,13.12v33.49h15.94 V58c0-11.3,4.24-17.66,13.32-17.66c7.16,0,10.9,4.34,10.9,13.12v33.49h16.14V50.14c0-16.34-9.18-25.22-22.9-25.22 C352.56,24.91,345.6,29.35,341.66,36.21 M263.07,56.69c0,9.69-6.96,16.14-16.04,16.14c-9.08,0-16.14-6.46-16.14-16.14 s7.06-16.14,16.14-16.14C256.11,40.55,263.07,46.91,263.07,56.69 M214.34,56.69c0,18.87,13.92,31.68,32.59,31.68 s32.49-12.81,32.49-31.68s-13.92-31.68-32.59-31.68S214.34,37.83,214.34,56.69 M186.9,88.37c7.47,0,13.82-1.31,22.4-5.25 l-6.66-15.64c-4.84,2.42-10.29,3.73-15.74,3.83c-14.63,0-25.42-10.39-25.42-24.72S172.27,21.89,187,21.89 c8.88,0,16.34,3.63,20.58,8.07l11.9-12.21c-8.68-8.17-20.28-12.81-32.28-12.61c-24.31,0-42.57,18.16-42.57,41.67 S162.89,88.37,186.9,88.37"/>
                <g class="wordmark-icon">
                <polygon className="pathway pathway-1" fill='#e7f74b' points="62.1,5.14 5,65.27 5,5.14 		"></polygon>
                <polygon className="pathway pathway-2" fill='#e7f74b' points="73.4,5.14 5,68.19 5,71.02 88.03,5.44 88.03,5.14 		"></polygon>
                <polygon className="pathway pathway-3" fill='#e7f74b' points="5,73.84 5,76.77 88.03,32.98 88.03,19.26"/>
                <polygon className="pathway pathway-4" fill='#e7f74b' points="5,79.59 5,82.42 88.03,60.63 88.03,46.81"/>
                <polygon className="pathway pathway-5" fill='#e7f74b' points="5,88.17 88.03,88.17 88.03,74.45 5,85.35"/>
                <polygon className="pathway pathway-6" fill='#e7f74b' points="5,65.27 62.1,5.15 47.97,5.15 5.01,62.44"/>
                </g>
                </svg>
                </a>
            </div>
            <nav className="header-nav">
                <ul className="nav-main-links">
                    {navLinks && navLinks.mainLinks.map((el,i)=>(
                        <li key={i} className="nav-l-container">
                            <a href={el.url}>{el.name}</a>
                        </li>
                    ))}
                </ul>
                <a className="nav-s-container" href="#searchInput">
                    {navLinks.searchSVG}

                </a>
                <a className=" nav-lc" href={navLinks.letConnect.url}>
                        {navLinks.letConnect.name}
                </a>
                <ul className="nav-s-links">
                    {navLinks.navSecondryLinks.map((el,i)=>(
                        <li key={i}>
                            <a href={el.url} target="__blank">{el.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header