import b_logLogo from '../assets/B_log.png'


const Header = () => {
  return (
    <>
      <header className="w-100% h-10px fixed top-0">
        <img src={b_logLogo} alt="B_log 로고" className="scale-70 ml-10 mt-2"/>
      </header>
    </>
  );
}

export default Header;