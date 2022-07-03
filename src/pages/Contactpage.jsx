import React from "react";

function Contactpage() {
  return (
    <div className="contact__content">
      <h1>Contact us.</h1>
      <p>Chechen Republic</p>
      <p>Grozny</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d704.9710746875642!2d45.692385413677975!3d43.324449076852524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d13abc103637%3A0x8601f7fff1cac51f!2zSW50b2NvZGUgQ29kaW5nIEJvb3RjYW1wIOKAkyDRiNC60L7Qu9CwINC_0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1656851688092!5m2!1sru!2sru"
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export { Contactpage };
