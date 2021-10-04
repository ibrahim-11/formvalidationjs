
var form = document.getElementById("myForm");   
      
let nom = form.nom;               
let prenom = form.prenom;               
let email = form.email;    
let password = form.password;   
let confirm_password = form.cpassword;   
let submit = form.submit;   

form.addEventListener("submit",(e)=>{
    e.preventDefault();


    if (nom.value == "")                                  
        { 
            document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
            nom.focus(); 
            return false; 
        }else{
            document.getElementById('errorname').innerHTML="";  
        }
    
        if (prenom.value == "")                                  
        { 
            document.getElementById('errorp').innerHTML="Veuillez entrez un prenom valide";  
            prenom.focus(); 
            return false; 
        }else{
            document.getElementById('errorp').innerHTML="";  
        }
    
           
        if (email.value == "")                                   
        { 
            document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
            email.focus(); 
            return false; 
        }else{
            document.getElementById('erroremail').innerHTML="";  
        }
       
        if (email.value.indexOf("@", 0) < 0)                 
        { 
            document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
            email.focus(); 
            return false; 
        } 
       
        if (email.value.indexOf(".", 0) < 0)                 
        { 
            document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
            email.focus(); 
            return false; 
        } 
    
    
       
        if (password.value == "")                           
        {
            document.getElementById('errorps').innerHTML="Veuillez entrez un password valide"; 
            password.focus(); 
            return false; 
        }else{
            document.getElementById('errorps').innerHTML="";  
        }
       
        if (password.value != confirm_password.value)                        
        {
            document.getElementById('errorps').innerHTML="les mot de pass ne sont pas identique"; 
            confirm_password.focus(); 
            return false; 
        }else{
            document.getElementById('errorps').innerHTML="";  
        }

        let url = "/rest/index.php";

        //send post data
        let user = {
            name: nom.value,
            surname:prenom.value,
            email:email.value,
            password:password.value
            
        };
        
        let options = {
            method: 'post',
            body: JSON.stringify(user)
        };
        
        fetch(url, options).then(resp => resp.json()).then(json => console.log(json));


})


// let url = "./rest/index.php";

// //send post data
// let user = {
//     name: nom.value,
//     surname:prenom.value,
//     email:email.value,
//     password:password.value
    
// };

// let options = {
//     method: 'post',
//     body: JSON.stringify(user)
// };

// fetch(url, options).then(resp => resp.json()).then(json => console.log(json));

