
import {Link} from 'react-router-dom';

function Navbar(){
    return<div>
        <nav className='list'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    < Link to="/about">About</Link>
                </li>
                <li>
                    < Link to="/ColorPicker">ColorPicker</Link>
                </li>
                <li>
                    < Link to="/TodoList">TodoList</Link>
                </li>
        
                
            </ul>
        </nav>
    </div>
}

export default Navbar;
