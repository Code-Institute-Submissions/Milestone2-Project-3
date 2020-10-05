function sendMail(contactForm) {
    emailjs.send("gmail", "martin_johnson", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "your_message": contactForm.message.value
    })
     .then(alert("Thank you! You email has been sent"));

  $("#contact-form").text();
}