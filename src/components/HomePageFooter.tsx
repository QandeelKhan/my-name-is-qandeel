import React from "react";

const HomePageFooter = () => {
    return (
        <section className="section2">
            <div className="main-container">
                <a href=""></a>
                <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
                <form id="contact-form">
                    {/* <a id="contact"></a> */}
                    <label>Name</label>
                    <input
                        className="input-field"
                        type="text"
                        name="name"
                    ></input>
                    <label>Subject</label>
                    <input
                        className="input-field"
                        type="text"
                        name="subject"
                    ></input>
                    <label>Email</label>
                    <input
                        className="input-field"
                        type="text"
                        name="email"
                    ></input>
                    <label>Message</label>
                    <textarea className="input-field" name="message"></textarea>
                    <input id="submit-btn" type="submit" value="Send"></input>
                </form>
            </div>
        </section>
    );
};

export default HomePageFooter;
