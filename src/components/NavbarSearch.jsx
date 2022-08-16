import React from "react";
import "../css/nav.css";

const NavbarSearch = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg  bg-light navbar2 ps-5">
        <div class="container">
         
          <div class="collapse navbar-collapse col-9" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
                {/* <li class="nav-item dropdown px-2">
                    <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Shop
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li> */}
              <li class="nav-item px-2">
                <a class="nav-link active"  href="#">Invite a friend-get $10</a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" href="#">Sell</a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" href="#">Join our team</a>
              </li>
              
            </ul>
           
          </div>
          <form class="d-flex">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success px-3 btn-search" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>

          
        </div>
      </nav>
    </div>
  );
};

export default NavbarSearch;
