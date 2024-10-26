import React from 'react'
import './header.css';
import logo from '../../media/logos/logo-dark.png'

export default function Header() {
    return (
        <div>
            <header id="mainHeader" className='desktop-menu'>
                <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item px-lg-3">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item px-lg-2">
                                    <a class="nav-link active" aria-current="page" href="#">About</a>
                                </li> 
                                <li class="nav-item px-lg-2">
                                    <a class="nav-link active" aria-current="page" href="#">Why Choose</a>
                                </li>
                                <li class="nav-item px-lg-2">
                                    <a class="nav-link active" aria-current="page" href="#">Services</a>
                                </li>
                                <li class="nav-item px-lg-2">
                                    <a class="nav-link active" aria-current="page" href="#">Portfolio</a>
                                </li>
                                <li class="nav-item px-lg-2">
                                    <a class="nav-link active" aria-current="page" href="#">Blog</a>
                                </li>
                                <li class="nav-item px-lg-2">
                                    <a class="nav-link active" aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
