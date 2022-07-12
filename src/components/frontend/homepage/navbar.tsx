import {
    LogoCompany,
    ShoppingCart,
    UserProfile,
} from 'assets';

const NavbarHomepage = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand navbar-each-section" href="/#">
          <img src={LogoCompany} alt="ini gambar logo company" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar-each-section"
          id="navbarNav"
        >
          <ul className="navbar-nav navbar-font--regular">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#jumbo"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Page1">
                Benefit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Page2">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#page3">
                Category
              </a>
            </li>
          </ul>
        </div>
        <div className=" navbar-nav ml-lg-auto">
          <a className="nav-link active" href="#Score">
            <img src={ShoppingCart} alt="" />
          </a>
          <div className="dropdown">
          <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={UserProfile} alt="" />
          </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="/login">
                  Sign In
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/register">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
  
        </div>
      </div>
    </nav>
    );
};

export default NavbarHomepage;