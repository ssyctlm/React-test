import React from 'react'

//Stateless Functional Component
//LifeCycle Hooks can ONLY be used in Class component
const changeColor = (total) => {
    let style = "badge badge-pill m-2 badge-";
    return total ? style.concat('warning') : style.concat('secondary')
}


const NavBar = (props) => {
    console.log("Navbar-Rendered")
    return (
        <nav className="navbar navbar-light bg-light" >
            <a className="navbar-brand" href="./index">
                Navbar
                <span className={changeColor(props.total)}>
                    {props.total}
                </span>
            </a>

        </nav >
    )
}





export default NavBar