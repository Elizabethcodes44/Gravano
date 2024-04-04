// Layout.js
import WhatsAppIcon from "../assets/whatsapp.jpg";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {children}
      <a href="https://wa.me/2347038983575" target="_blank" className="whatsapp-icon">
        <img src={WhatsAppIcon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Layout;
