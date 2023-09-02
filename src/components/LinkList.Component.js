import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


const LinkListComponent = () => {

    const theme = useSelector((state) => state.theme.value)
   
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light border-bottom-${theme} bg-${theme}`}>
                <div class="container-fluid">
                    
                    <button class="navbar-toggler btn bg-success text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                       
                        <li class="nav-item dropdown">
                        <a className={`btn bg-success link-light nav-link dropdown-toggle text-white`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Investimentos
                        </a>
                        <ul className={"dropdown-menu bg-success"} aria-labelledby="navbarDropdownMenuLink">
                            <li><Link to={`/`} className='btn text-white'>Crypto</Link></li>
                            <li><Link to={`/fiis`} className='btn text-white'>Fundo Imobiliário</Link></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default LinkListComponent;
