
import photo1 from '../assets/photo/img3.png'
import photo2 from '../assets/photo/img1.jpg'
import photo3 from '../assets/photo/img2.jpg'
import '../assets/css/home2.css'


import Header from '../components/Header'



function navbar(){
    return(
        <div>
            {/* navbar start  */}

            <div className="container-fluid">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                <div className="container-fluid">

                                    <a href="#" className="navbar-brand d-flex align-items-center">
                                        <div className="icon p-2 me-2">
                                            <img className="img-fluid" src={photo1} alt="img" style={{width: '30px', height: '30px'}} />
                                        </div>
                                        <h1 className="m-0 text-success">Property Plaza Hub</h1>
                                    </a>

                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a className="nav-link text-success" aria-current="page" href="index.html">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="./about.html">About</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    Property
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="Property List.html">Property List</a></li>
                                                    <li><a className="dropdown-item" href="Property Type.html">Property Type</a></li>
                                                    <li><a className="dropdown-item" href="Property Agent.html">Property Agent</a></li>
                                                </ul>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    Pages
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="Testimonial.html">Testimonial</a></li>
                                                    <li><a className="dropdown-item"
                                                            href="https://www.moneycontrol.com/news/tags/real-estate.html">News</a></li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" aria-disabled="true" href="Contact.html">Contact</a>
                                            </li>
                                        </ul>
                                        <form className="d-flex">
                                            <div className='App'> 
                                                <Header /> 
                                            </div>
                                            <button className="btn btn-success " type="submit"><a href="./submitPr.html"
                                                    style={{color: 'white', textDecoration: 'none'}}>Submit Property</a></button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>







                    <div className="container-fluid header bg-white p-0">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-6 p-5 mt-lg-5">
                                <h1 className="display-5 mb-4" style={{fontWeight: 'bold'}}>Find A <span className="text-success">Perfect
                                        Home</span> To
                                    Live With Your Family</h1>
                                <p className="mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                                    sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="#" className="btn btn-success py-2 px-5" style={{fontSize: '20px'}}>Get Start's</a>
                            </div>


                            <div className="col col-md-6 col-12">
                                <div id="carouselExampleFade" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={photo2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={photo3} className="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                        data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                                        <span className="visually-hidden ">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                        data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>




                    <div className="container-fluid bg-success mb-5" style={{padding: "35px"}}>
                        <div className="container">

                            <div className="row g-2">


                                <div className="col col-12 col-lg-3 col-xl-3">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Selected keyword</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-lg-3 col-xl-3">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Property Type</option>
                                        <option value="1">Flat</option>
                                        <option value="2">Home</option>
                                        <option value="3">Appartment</option>
                                        <option value="4">Villa</option>
                                        <option value="5">Office</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-lg-3 col-xl-3">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Location</option>
                                        <option value="1">Surat</option>
                                        <option value="2">Navsari</option>
                                        <option value="3">Vesu</option>
                                        <option value="4">Rajkot</option>
                                        <option value="5">Amreli</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-lg-3 col-xl-3">
                                    <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* navbar end  */}
        </div>
    )
}

export default navbar