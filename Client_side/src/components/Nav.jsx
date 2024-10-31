import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
// import { SiNike } from "../assets/icons";
import { useNavigate} from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        
        <a href="/">
        <img src={headerLogo} alt="header logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <a
                 href={item.href}
                 className='fonts-montserrat leading-normal text-lg text-slate-gray'
                 >
                  {item.label}
               </a>
            </li>
          ))}
          <button onClick={() => navigate('/sign-up')} className='fonts-montserrat leading-normal text-lg text-slate-gray'>Sign Up</button>
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav