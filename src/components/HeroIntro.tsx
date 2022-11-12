// sfc stateles func component
import qandeel from "../images/qandeel.jpeg";
import df4 from "../images/df4.jpeg";
import df4close from "../images/df4-close.jpg";
import Theme from "./theme";
import * as Scroll from "react-scroll";
import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";

const HeroIntro = () => {
    return (
        <div className="intro-wrapper ">
            <div className="nav-wrapper">
                <div className="dots-wrapper">
                    <div id="dot-1" className="browser-dot"></div>
                    <div id="dot-2" className="browser-dot"></div>
                    <div id="dot-3" className="browser-dot"></div>
                </div>
                <ul id="navigation">
                    <li>
                        <a
                            onClick={() => scroll.scrollToBottom()}
                            href="#Contacts"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            {/* left column */}
            <div className="left-column">
                <img id="profile_pic" src={df4close} alt="qandeel" />
                <h5 style={{ textAlign: "center", lineHeight: 0 }}>
                    Personalize Theme
                </h5>
                <Theme />
                <p id="settings-note">
                    *Theme settings will be saved for
                    <br />
                    your next vist
                </p>
            </div>
            {/* right column */}
            <div className="right-column">
                <div id="preview-shadow">
                    <div id="preview">
                        <div id="corner-tl" className="corner"></div>
                        <div id="corner-tr" className="corner"></div>
                        <h3>What I Do</h3>
                        <p>
                            I was a lead developer and fast learner in past
                            life, now I enjoy my work as a fullstack developer.
                        </p>
                        <div id="corner-br" className="corner"></div>
                        <div id="corner-bl" className="corner"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroIntro;
