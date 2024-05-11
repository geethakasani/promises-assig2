const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

   // Progression 2: using setTimeout() - use 1000 units for time parameter

 
//Progression 3: Create a function to creat cookies and create an object of Promise.


    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

      
      // Progression 5: handling errors and adding new cookie to the list


// Progression 7: creating a new async function

// calling the new async function

function getCookies(cookies) {
   setTimeout(() => {
     let output = "";
     for (let i = 0; i < cookies.length; i++) {
       output += cookies[i].name + " <br>";
     }
     document.body.innerHTML=output;
   }, 1000);
 }
 function createCookie(newCookie) {
   return new Promise((resolve, reject) => {
      const cookieExists = cookies.some(cookie => cookie.name === newCookie.name);
      if (!cookieExists) {
        setTimeout(() => {
          cookies.push(newCookie);
          resolve("New cookie added!");
        }, 2000);
      } else {
        reject(new Error("Cookie already exists!"));
      }
    });
  }
   
async function handlePromises() {
   try {
     await createCookie(newCookie);
     getCookies(cookies);
   } catch (error) {
     console.error("Error:", error);
   }
 }
 
 
 handlePromises();
 

