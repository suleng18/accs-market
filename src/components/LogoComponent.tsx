import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo-2.webp';
const LogoComponent = () => {
  return (
    <NavLink to={'/'} className={'flex justify-center items-center mb-2'}>
      {/* <img src={logo} alt="xipad" className="h-[70px] object-contain" /> */}
    </NavLink>
  );
};

export default LogoComponent;
