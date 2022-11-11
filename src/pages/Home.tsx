import HeroIntro from "../components/HeroIntro";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useEffect } from "react";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import HomePageFooter from "../components/HomePageFooter";
import HomePageFooterDynamic from "../components/HomePageFooterDynamic";

const Home = () => {
    const { themeMode } = useSelector((state: RootState) => state.theme);

    // to change theme of whole body
    // document.body.id = themeMode;
    return (
        <div id={`${themeMode}`}>
            <section className="section1">
                <div className="main-container">
                    <NavBar />
                    <HeroIntro />
                </div>
            </section>
            <Hero2 />
            <Hero3 />
            {/* <HomePageFooter /> */}
            <HomePageFooterDynamic />
        </div>
    );
};

export default Home;
