import { useState, useContext } from "react";
import './Sidebar.css';
import AdminSidebar from "../admin/AdminSidebar";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import IdContext from "../login/IdContext";
import CoordinatorSidebar from "../coordinator/CoordinatorSidebar";
import StudentSidebar from "../student/StudentSidebar";
import SubMenu from "./SubMenu";

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const idctx = useContext(IdContext)
    let data
    if (idctx.role === "admin") {
        data = AdminSidebar
    } else {
        console.log("rol:"+idctx.role)
        console.log("id:"+idctx.id)
        if (idctx.role === "coordonator") {
            data = CoordinatorSidebar
        } else {
            data = StudentSidebar
        }
    }

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="sidebar">
                <Link to={"#"} className="menu-bars">
                    <FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose onClick={showSidebar} />
                        </Link>
                    </li>
                    {data.map((item, index) => {
                        return (
                            <SubMenu key={index} item={item} />
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default Sidebar;