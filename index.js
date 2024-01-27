import  inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

/* Get user input using inquirer npm package*/
inquirer
.prompt([
    { 
        message : "Type your URL: ",
         name: "URL"
    }
])
.then((answers) => {
    const  url = answers.URL;
/*Transform the user URL into a QR code image using qr-image npm package*/
    var qs_svg = qr.image(url);
    qs_svg.pipe(fs.createWriteStream("my_qr_img.png"));
/*Save user input using the fs node module in a text file*/
    fs.writeFile("my_URL.text", answers.URL, (err)=>{
        if (err) throw err;
        console.log("The file has been saved!");
    });
    })
.catch;
((err)=>{
    if (err.isTtyError){
        console.log("Prompt could not be rendered!")
    } else{
        console.log("Oups! something went wrong")
    }
});
    
