const namePattern = /^[a-zA-Z\s]{3,50}$/;

const phonePattern = /^(\+?\d{1,3}[-\s]?)?(\(?\d{2,3}\)?[-\s]?)?\d{2}[-\s]?\d{2}[-\s]?\d{2}$/;

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const imageupload=document.querySelector("#uploadimage");

const zoneImage1=document.querySelector("#zoneImage1");

const inputImage = document.getElementById('inputImage');

const inputtext=document.querySelector("#inputtext");

const inputtext1=document.querySelector("#inputtext1");

const inputtext2=document.querySelector("#inputtext2");

const button=document.querySelector("#button");

const infoerreur=document.querySelector("#infoerreur");


  inputImage.addEventListener('change', function (event) {
    const file = event.target.files[0];

 
    if (file) {

        const imageURL = URL.createObjectURL(file);
        localStorage.setItem('uploadedImage', imageURL);
        imageupload.style.display="none";


        var imageCarte1= document.createElement("img");
        imageCarte1.src = imageURL;
        imageCarte1.classList.add("zoneImagee");
        zoneImage1.appendChild(imageCarte1);
        

    }
});


button.addEventListener('click', function(event) {
    event.preventDefault(); 
    event.stopPropagation();

    
    const input = inputtext.value;
    const input1 = inputtext1.value;
    const input2 = inputtext2.value;

   
    
    
     if (input === "" || input1 === "" || input2 === "" ) {
        const messageErreur = document.createElement('p');
        infoerreur.style.display = "flex"; 
        infoerreur.style.color = "red"; 
        infoerreur.style.fontSize = "14px";
        infoerreur.style.marginBottom = "4px";
        messageErreur.textContent='Les champs ne peut pas être vide!';
        messageErreur.classList.add("erreur");
        infoerreur.appendChild(messageErreur);
        setTimeout(function() {
            location.reload(); 
        }, 3000);
     }else if (!namePattern.test(input) || !phonePattern.test(input1) || !emailPattern.test(input2))
     {
        const messageErreur = document.createElement('p');
        infoerreur.style.display = "flex"; 
        infoerreur.style.color = "red"; 
        infoerreur.style.fontSize = "14px";
        infoerreur.style.marginBottom = "4px";
        messageErreur.textContent='Le nom doit contenir entre 3 et 50 lettres et espaces! et Numéro de téléphone invalide. Exemple : (123) 456-7890 ou +33 123 456 789';
        messageErreur.classList.add("erreur");
        infoerreur.appendChild(messageErreur);
        setTimeout(function() {
            location.reload(); 
        }, 3000);
     }else  {
          localStorage.setItem('input', input);
          localStorage.setItem('input1', input1);
          localStorage.setItem('input2', input2);
          window.location.href = './card.html'; }
        
});






function redirigerVersPageindex() {
    window.location.href = "./index.html"; 
    }
    const namecard= document.getElementById('namecard');
    const input = localStorage.getItem('input');
    const input1 = localStorage.getItem('input1');
    const input2 = localStorage.getItem('input2');
    const imageURL = localStorage.getItem('uploadedImage'); 
    const svgObject = document.getElementById('svgObject');
   
    namecard.textContent=input;
    namecard.style.textTransform = "uppercase";

  svgObject.onload = function() {
      
    const svgDoc = svgObject.contentDocument;
      const text1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text1.setAttribute('x', 200);
      text1.setAttribute('y', 100);
      text1.setAttribute('font-size', '24');
      text1.setAttribute('font-weight', 'bold');
      text1.setAttribute('font-family', 'Roboto'); 
      text1.setAttribute('style', 'text-transform: uppercase;');
      text1.setAttribute('fill', 'black');
      text1. classList.add("textcard");
      text1.textContent = `NAME : ${input || 'Aucune donnée'}`;

      svgDoc.documentElement.appendChild(text1);

      const text2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text2.setAttribute('x', 200);
      text2.setAttribute('y', 140);
      text2.setAttribute('font-size', '20');
      text2.setAttribute('font-family', 'Roboto');
      text2.setAttribute('fill', 'black');
      text2.textContent = `NUMBER :${input1 || 'Aucune donnée'}`;
      svgDoc.documentElement.appendChild(text2);

      const text3 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text3.setAttribute('x', 200);
      text3.setAttribute('y', 180);
      text3.setAttribute('font-size', '20');
      text3.setAttribute('font-family', 'Roboto');
      // newImage.setAttribute('max-width', "300px"); 
      text3.setAttribute('fill', 'black');
      text3.textContent = `EMAIL :${input2 || 'Aucune donnée'}`;
      svgDoc.documentElement.appendChild(text3);
  
          
      const newImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      newImage.setAttribute('href', imageURL); 
      newImage.setAttribute('x', 10);  
      newImage.setAttribute('y', 40); 
      newImage.setAttribute('width', 180);  
      newImage.setAttribute('height', 180); 
      newImage.setAttribute('style', 'border-radius: 50%;'); 
      newImage.style.margin = "20px"; 
      newImage.classList.add("imageDisplay"); 
      svgDoc.documentElement.appendChild(newImage);


      const Image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      Image.setAttribute('href', 'http://127.0.0.1:5501/assets/images/coding.png'); 
      Image.setAttribute("x", "520");
      Image.setAttribute("y", "10");
      Image.setAttribute("width", "50");
      Image.setAttribute("height", "50"); 
      svgDoc.documentElement.appendChild(Image);
     
      const text4 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text4.setAttribute("x", "545");
      text4.setAttribute("y", "70");
      text4.setAttribute("width", "50");
      text4.setAttribute("height", "50")
      text4.setAttribute('font-family', 'Roboto');
      text4.setAttribute('writing-mode', 'vertical-rl');
      text4.setAttribute('fill', 'black');

      text4.textContent = 'Coding by HANEN RIGUEN';
      svgDoc.documentElement.appendChild(text4);
  
  };

