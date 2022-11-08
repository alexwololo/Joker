import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";


const GetCookie = () => {

  return(
<CookieConsent debug={true}
  location="bottom"
  buttonText="I accept"
  cookieName="myAwesomeCookieName2"
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
    alert("nay!");}}
  >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
  )
}

export default GetCookie;
