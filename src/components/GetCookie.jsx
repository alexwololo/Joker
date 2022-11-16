import CookieConsent, { Cookies } from "react-cookie-consent";


const GetCookie = () => {

  return(
<CookieConsent
  location="bottom"
  buttonText="I accept"
  cookieName="jokerCookie"
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
                alert("remove cookie here!");
                Cookies.remove("jokerCookie")
              }}

  >
        Accept if you consent for the website to store cookies. Otherwise press decline.


      </CookieConsent>
  )
}

export default GetCookie;
