import React, { FormEvent, SyntheticEvent } from "react";
import emailjs from "emailjs-com";

const HomePageFooterDynamic = () => {
    function sendEmail(e: FormEvent<HTMLFormElement>) {
        console.log(e.currentTarget.type);
        e.preventDefault();
        emailjs
            .sendForm(
                "service_oa5o0ys",
                "template_oc7f8on",
                e.currentTarget,
                "YoR-HqOyLGpenVETJ"
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }
    return (
        <section className="section2">
            <div className="main-container">
                <a href=""></a>
                <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
                <form id="contact-form" onSubmit={sendEmail}>
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

export default HomePageFooterDynamic;
