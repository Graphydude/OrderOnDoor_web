import "../../Styles/Home/Footer.css";
import { FaRegCopyright } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer-back-div">
      <div className="footer">
        <div className="footer-policy-div">
          <a href="#" className="policy-first-child">
            Terms & Conditions <br /> Refund Policy
          </a>
          <a href="#">
            <span></span> Shipping Policy
          </a>
          <a href="#">
            <span></span> Cancellation Policy
          </a>
          <a href="#">
            <span></span> Privacy Policy
          </a>
          <a href="#">
            <span></span> Returns &
          </a>
        </div>
        <div className="footer-wrapper-div">
          <div className="footer-wrapper">
            <small>
              {/* <a href="#">ORDER ON DOOR</a>
              <FaRegCopyright className="fa-copyright" />
              <p>
                2021 CREATED BY <strong>Nabeel Dewan.</strong> OOD E-COMMERCE
                SOLUTIONS.
              </p> */}
              <p>
                <a href="#">ORDER ON DOOR</a>
                <FaRegCopyright className="fa-copyright"/>
                2021 CREATED BY <strong>Nabeel Dewan.</strong> OOD E-COMMERCE
                SOLUTIONS.
              </p>
            </small>
            <p>
              Address: Plot No. 1735/645, New Anjam Colony, Baldia Town No .05,
              Karachi
            </p>
            <p>Contact: +923052365091</p>
          </div>
          <div className="bank-cards-img-div">
            <img
              src="https://orderondoor.com/wp-content/themes/woodmart/images/payments.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
