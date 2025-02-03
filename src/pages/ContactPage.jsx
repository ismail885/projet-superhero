import React, { useRef, useState } from "react";
import "./contact.scss";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yuu1v55",
        "template_zpuv5ut",
        form.current,
        "baNwAcDlfw4KLp9nX"
      )
      .then(
        (result) => {
          console.log("Email envoyé : ", result.text);
          alert("Message envoyé avec succès !");
          setSubmitted(true);
        },
        (error) => {
          console.error("Erreur lors de l'envoi : ", error.text);
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      );
    e.target.reset();
  };

  return (
    <main className="contact">
      <h1>Contactez-nous</h1>
      {submitted ? (
        <p>Merci de nous avoir contactés !</p>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <label>Nom :</label>
          <input type="text" name="from_name" required />

          <label>Prénom :</label>
          <input type="text" name="from_firstname" required />

          <label>Email :</label>
          <input type="email" name="user_email" required />

          <input type="hidden" name="to_name" value="Isma" />

          <label>Message :</label>
          <textarea name="message" required />

          <button type="submit">Envoyer</button>
        </form>
      )}
    </main>
  );
};

export default ContactPage;
