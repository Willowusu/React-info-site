//Header.js will not be used because i have not configured webpack and as such can't use
//the import or require statement on the clinet side
function Header(){
    return (
        <header>
            <nav className="nav">
                <img src="mondayMusings.png" className="logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )

}

function Footer(){
    return(
        <footer><small>Copyright 2020 Owusu development. All Rights reserved</small></footer>
    )
}

function MainContent(){
    return(
        <div>
            <h1>Reasons I'm excited to leaarn React</h1>
            <ol>
                <li>I am learning React because it is fun</li>
                <li>I want to be a versatile programmer</li>
                <li>I want to have a neat portfolio</li>
                <li>I am learning React because I want to make money</li>
                <li>I am learning React because I want to be an asset anywhere i work</li>
            </ol>
         </div>
    )
}
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />    
         
        </div> 
        )
}



ReactDOM.render(<App />, document.getElementById("root"))