function sendemail() {
  const data = {
    to_email: "ahmedramadan3331@gmail.com",
    from_name: document.getElementById("join-name").value,
    from_email: "ahmedramadan3331@gmail.com",
    title: "Join Us",
    message: "Hello, I would like to join the ranch. Here are my details:\n\n" +
      ` Name :  ${document.getElementById("join-name").value}
      Phone : ${document.getElementById("join-phone").value}
      Flat : ${document.getElementById("join-flat").value}
      Building : ${document.getElementById("join-building").value}
      Street : ${document.getElementById("join-street").value}
      Compound : ${document.getElementById("join-compound").value}
      Area : ${document.getElementById("join-area").value}
      Branch : ${document.getElementById("join-branch").value}
      `,
  };

  const requiredFields = [
    "join-name",
    "join-phone",
    "join-flat",
    "join-building",
    "join-street",
    "join-compound",
    "join-area",
    "join-branch",
  ];

  const isAllFieldsFilled = requiredFields.every(
    (field) => document.getElementById(field).value !== ""
  );

  if (!isAllFieldsFilled) {
    alert("Please fill in all the required fields");
    return;
  }

  Emailjs.send("service_v78s6q8", "template_x5cqtzl", data);
}

document.getElementById("join-submit").addEventListener("click", sendemail);
Emailjs.send("service_v78s6q8", "template_x5cqtzl", data)
  .then(function(response) {
    console.log("SUCCESS!", response.status, response.text);
    alert("Your request has been sent successfully!");
  }, function(error) {
    console.log("FAILED...", error);
    alert("There was an error sending your request. Please try again.");
  });

