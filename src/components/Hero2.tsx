import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import qandeel from "../images/qandeel.jpeg";

const Hero2 = () => {
    const { themeMode } = useSelector((state: RootState) => state.theme);
    return (
        <section className="section2" id={`${themeMode}`}>
            <div className="main-container">
                <div className="about-wrapper">
                    <div className="about-me">
                        <h4>More about me</h4>

                        <p>
                            I build new projects just to tickle my brain and
                            love teaching others how they're made.
                        </p>

                        <p>
                            While I keep busy teaching courses, I still take
                            interviews in search of a great team &amp; projects
                            that interest me.
                        </p>

                        <hr />

                        <h4>TOP EXPERTISE</h4>

                        <p>
                            Fullstack developer with primary focus on Django +
                            React:{" "}
                            <a target="_blank" href="resume.pdf">
                                Download Resume
                            </a>
                        </p>

                        <div id="skills">
                            <ul>
                                <li>Python</li>
                                <li>Python scripting</li>
                                <li>Django</li>
                                <li>JavaScript</li>
                                <li>Typescript</li>
                                <li>ReactJS</li>
                                <li>React Native</li>
                                <li>Kubernetes</li>
                            </ul>

                            <ul>
                                <li>Docker</li>
                                <li>Kubernetes</li>
                                <li>orchestration</li>
                                <li>Kubernetes</li>
                                <li>Web Design</li>
                            </ul>
                        </div>
                    </div>

                    <div className="social-links">
                        <img id="social_img" src={qandeel} alt="qandeel" />
                        <h3>Find me on Twitter &amp; Youtube</h3>

                        <a
                            target="_blank"
                            href="https://twitter.com/CQandeelhaider?t=7N5zmsfiGutO8r0H5Y5xfA&s=09"
                            rel="noreferrer"
                        >
                            YouTube: @Qandeel-Khan
                        </a>
                        <br />
                        <a
                            target="_blank"
                            href="https://twitter.com/CQandeelhaider?t=7N5zmsfiGutO8r0H5Y5xfA&s=09"
                            rel="noreferrer"
                        >
                            Twitter: @CQandeelhaider
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
