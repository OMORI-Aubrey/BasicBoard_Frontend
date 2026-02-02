import b_logLogo from '../assets/B_log.png'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();


  return (
    <>
      <header className="w-100% h-10px fixed top-0">
        <button
          type="button"
          onClick={() => navigate("/")}
        >
          <img src={b_logLogo} alt="B_log 로고" className="scale-70 ml-10 mt-2" />
        </button>
      </header>
    </>
  );
}

export default Header;