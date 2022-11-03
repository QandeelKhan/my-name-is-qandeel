import React from "react";
import qandeel from "../images/qandeel.jpeg";
const Hero3 = () => {
    return (
        <section className="section1">
            <div className="main-container">
                <h3 style={{ textAlign: "center" }}>
                    Some of my past projects
                </h3>
                <div className="post-wrapper">
                    <div>
                        <div className="post">
                            <img
                                className="thumbnail"
                                src={qandeel}
                                alt="qandeel"
                            />
                            <div className="post-preview">
                                <h6 className="post-title">
                                    Laboratory Management System
                                </h6>
                                <p className="post-intro">
                                    Designed built &amp; mantained a the lab
                                    managment system for FOI Laboratories
                                </p>
                                <a href="post.html">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="post">
                            <img
                                className="thumbnail"
                                src={qandeel}
                                alt="qandeel"
                            />
                            <div className="post-preview">
                                <h6 className="post-title">
                                    Online Store - CoursePost Title
                                </h6>
                                <p className="post-intro">
                                    Online store with paypal payments
                                    intergration and guest user shopping
                                </p>
                                <a href="post.html">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="post">
                            <img
                                className="thumbnail"
                                src={qandeel}
                                alt="qandeel"
                            />
                            <div className="post-preview">
                                <h6 className="post-title">
                                    Membership Website
                                </h6>
                                <p className="post-intro">
                                    Modulized guide for online courses with step
                                    by step intructions
                                </p>
                                <a href="post.html">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero3;
