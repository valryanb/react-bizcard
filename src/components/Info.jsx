// photo, name, tagline, buttons 

export default function Info(){
    return(
    <header>
        <img src="./public/selfie.png"/>
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <h3><a href="https://laurasmith.website/">laurasmith.website</a></h3>
        <nav>
        <button className="main-btn"><i className="fa-solid fa-envelope"></i> Email</button>
        <button className="main-btn blue"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
        </nav>
    </header>
)}