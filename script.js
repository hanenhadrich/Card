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

//function input image first step
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

//import all informationsto the card
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
    // else{// alert("Le champ ne peut pas être vide !");
    //     
});

