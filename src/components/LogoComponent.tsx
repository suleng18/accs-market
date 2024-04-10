import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo-xipad.png';
const LogoComponent = () => {
  return (
    <NavLink to={'/'} className={'flex justify-center items-center '}>
      <img src={logo} alt="xipad" className="h-[50px] w-[200px] object-contain rounded-2xl" />
    </NavLink>
  );
};

export default LogoComponent;
