document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const copyButton = document.getElementById("copyButton");
    const downloadButton = document.getElementById("downloadPDF");
    const outputElement = document.getElementById("output");
    const today = new Date().toLocaleDateString('en-GB');

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
    
        const name = document.getElementById("name").value;
        const role = document.getElementById("role").value;
        const recruitingPage = document.getElementById("recruitingPage").value;
        const language = document.getElementById("language").value;
    
        const template = language === "English" ?
`Name: Philip Jerkner
Location: Portugal and Sweden
Email: philip@jerkner.se
Phone: +46 76 808 53 92

${today}

Dear hiring team at ${name},

I am writing to express my strong interest in the ${role} position at ${name}, as advertised on ${recruitingPage}. As a self-taught ${role === "React Developer" ? "React developer" : role === "JavaScript Developer" ? "JavaScript developer" : role.toLowerCase()} with a strong passion for design and UI/UX, I am eager to contribute my skills to your development team.

Proficient in HTML5, CSS3, JavaScript, and React, I'm adept at creating clean and intuitive interfaces. My experience in API integration and version control with Git complements my technical proficiency.

I am enthusiastic about the opportunity to bring my skills and passion for development to ${name}. If you seek a developer who excels at transforming complexities into elegant solutions, I would welcome the chance to discuss further.

Thank you for considering my application. I look forward to the possibility of contributing to the success of ${name}.

Resume: https://jerkner-resume.netlify.app/
Portfolio: https://jerkner-portfolio.netlify.app/
GitHub: https://github.com/Jerkner

Best regards,
Philip Jerkner` :

`Namn: Philip Jerkner
Plats: Portugal och Sverige
E-post: philip@jerkner.se
Telefon: +46 76 808 53 92

${today}

Till rekryteringsteamet på ${name},

Jag skriver för att uttrycka mitt starka intresse för ${role === "React Developer" ? "React-utvecklare" : role === "JavaScript Developer" ? "JavaScript-utvecklare" : role === "Web Developer" ? "webbutvecklare" : "frontend-utvecklare"}-positionen på ${name}, som annonserades på ${recruitingPage}. Som en självlärd ${role === "React Developer" ? "React-utvecklare" : role === "JavaScript Developer" ? "JavaScript-utvecklare" : role === "Web Developer" ? "webbutvecklare" : "frontend-utvecklare"} med en passion för design och användarupplevelse ser jag fram emot att få bidra med mina färdigheter till ert utvecklingsteam.

Jag behärskar HTML5, CSS3, JavaScript och React och är skicklig på att skapa rena och intuitiva gränssnitt. Min erfarenhet av API-integration och versionshantering med Git kompletterar min tekniska kompetens.

Jag ser med entusiasm fram emot möjligheten att få tillföra mina färdigheter och min passion för utveckling till ${name}. Om ni söker efter en utvecklare som utmärker sig i att omvandla komplexiteter till eleganta lösningar, skulle jag vara tacksam för möjligheten att få diskutera detta vidare.

Tack för att ni överväger min ansökan. Jag ser fram emot möjligheten att få bidra till ${name}s framgång.

CV: https://jerkner-resume.netlify.app/
Portfölj: https://jerkner-portfolio.netlify.app/
GitHub: https://github.com/Jerkner

Vänliga hälsningar,
Philip Jerkner`

        outputElement.value = template;
        document.getElementById("name").value = ''
    });
    

    copyButton.addEventListener("click", function () {
        outputElement.select();
        document.execCommand("copy");
        outputElement.blur();
    });

    downloadButton.addEventListener("click", function () {
        const content = outputElement.value;
    
        const docDefinition = {
            content: content
        };
    
        pdfMake.createPdf(docDefinition).download('Philip_Jerkner_Cover_Letter.pdf');
    });
    
    
});