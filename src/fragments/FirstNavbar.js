import { Link } from 'react-router-dom'

import Logo from '../assets/images/papaluz.jpeg';

import ProductSearch from './FirstNavbar/ProductSearch';
import FirstNavbarActions from './FirstNavbar/FirstNavbarActions';

function FirstNavbar() {
  return (
    <header className=' sticky top-0 shadow-lg bg-white'>
      <nav className=' flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} className='w-[5rem]' />
        </Link>
        <ProductSearch />
        <FirstNavbarActions />
      </nav>
    </header>
  )
}

export default FirstNavbar