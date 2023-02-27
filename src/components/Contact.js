import React from "react";
import './form.css'

function Contact() {
    return (
        <main className="contact">

            <form name="contact" method="POST" data-netlify="true">
                <h2>Send me a message</h2>

                <fieldset>

                    <div className="inputBox">
                        <input type="text" name="name" id="name" placeholder="." required />
                        <label for="name">Name</label>
                    </div>

                    <div className="inputBox">
                        <input type="email" name="email" id="email" placeholder="." required />
                        <label for="email">Email</label>
                    </div>

                    <div className="inputBox">
                        <textarea type="text" name="message" id="message" placeholder="." required></textarea>
                        <label for="name">Message</label>
                    </div>

                    <button id="submitButton" type="submit"> Submit </button>
                </fieldset>

            </form>


        </main>
    )
}

export default Contact;