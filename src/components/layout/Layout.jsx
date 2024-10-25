import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create" >Create</Link></li>
                    <li><Link to="/delete" >Delete</Link></li>
                    <li><Link to="/read" >Read</Link></li>
                    <li><Link to="/update" >Update</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout;