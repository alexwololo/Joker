import CookieConsent, {  } from "react-cookie-consent";


const GetCookie = () => {

  return(
<CookieConsent debug={true}
  location="bottom"
  buttonText="I accept"
  cookieName="JokerCookie"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={1}
  onAccept={(acceptedByClicking) => {
    if (acceptedByClicking) {
      // triggered if user scrolls past threshold
      alert("Accept was triggered by clicking the Accept button");
    }
  }}
  enableDeclineButton
  onDecline={() => {
    alert("nay!");
  }}
  >
        This site stores a cookie if you accept, otherwise proceed to log in
      </CookieConsent>
  )
}

export default GetCookie;
