import projectlogo from '../Images/mondayMusings.png'
function Navbar() {
    return(
        <nav>
            <img src = {projectlogo} width="100px" className="nav--icon"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar