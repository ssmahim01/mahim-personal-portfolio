const Footer = ({theme}) => {
  return (
    <footer className={`border-t ${theme === "light" ? "custom-bg border-gray-300 bg-center" : "bg-gray-900 border-gray-800"} footer footer-center font-semibold p-4`}>
      <aside>
        <p className="text-base font-medium">
          Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-teal-600 font-bold">Sayman Shakil Mahim</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;