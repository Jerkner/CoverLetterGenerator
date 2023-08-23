document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const outputElement = document.getElementById("output");
  
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const recruitingPage = document.getElementById("recruitingPage").value;
  
      const template = `Dear ${name},
  
  I am writing to express my strong interest in the Front-End Developer position at ${name}, as advertised on ${recruitingPage}. With a passion for creating engaging and user-friendly web experiences, I am excited about the opportunity to contribute my skills to your team.
  
  As a self-taught Front-End Developer, I have honed my expertise in HTML, CSS, JavaScript, and React through practical projects and continuous learning. I am skilled in crafting visually appealing and responsive websites that enhance user interaction and engagement. In addition to my technical proficiency, my keen eye for design and user experience allows me to translate complex concepts into intuitive and seamless interfaces.
  
  What sets me apart is my ability to collaborate effectively in cross-functional teams. I thrive in dynamic environments where I can contribute my creativity and problem-solving skills to achieve shared goals. My experience in mentorship and assisting fellow team members in previous roles has allowed me to develop strong communication and teamwork skills that are essential for a collaborative development environment.
  
  Thank you for considering my application. I look forward to the opportunity to discuss how my background and enthusiasm for web development can contribute to the success of ${name}. Please find my resume at https://jerkner-resume.netlify.app/ and my portfolio at https://jerkner-portfolio.netlify.app/.
  
  Best regards,
  Philip Jerkner`;
  
      outputElement.innerText = template;
      document.getElementById("name").value = ''
      document.getElementById("recruitingPage").value = ''
    });
  });
  