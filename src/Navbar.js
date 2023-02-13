// import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 style= {{
                color: "blue", 
                marginLeft: "100px"
                }}>What to Eat?</h1>

            <div className="links">
                <a href="/"
                style={{
                    background: "yellow",
                    borderRadius: "8px"
                }}>Home</a>

                <a href="/create" 
                style={{
                    background: "pink",
                    borderRadius: "8px"
                }}>Favorite</a>

                <a href="/create"
                style={{
                    background: "#90EE90",
                    borderRadius: "8px"
                }}>KIV</a>
            </div>
        </nav>    
    );
}





// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1 style= {{
//                 color: "blue", 
//                 marginLeft: "100px"
//                 }}>What to Eat?</h1>

//             <div className="links">
//                 <a href="/"
//                 style={{
//                     background: "yellow",
//                     borderRadius: "8px"
//                 }}>Home</a>

//                 <a href="/create" 
//                 style={{
//                     background: "pink",
//                     borderRadius: "8px"
//                 }}>Favorite</a>

//                 <a href="/create"
//                 style={{
//                     background: "#90EE90",
//                     borderRadius: "8px"
//                 }}>KIV</a>
//             </div>
//         </nav>    
//     );
// }

export default Navbar;