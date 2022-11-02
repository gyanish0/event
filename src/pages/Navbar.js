import React from 'react'
import Logo from '../img/company_logo.png'
import bgImage from '../img/bgevent.jpg'
import { WrapperNav } from '../Style/WarpperNav'


const Navbar = () => {

    var sectionStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        

    }
    return (
        <WrapperNav>
            <nav class="navbar navbar-expand-lg border h-25" style={sectionStyle}>
                <div class="container-fluid ">
                    <img class="logo img-fluid" src={Logo} />

                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <span class="navbar-text">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active fs-3 me-2" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active fs-3 me-2" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active fs-3 me-2" aria-current="page" href="#">Service</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active fs-3 me-2" aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </WrapperNav>
    )
}

export default Navbar
