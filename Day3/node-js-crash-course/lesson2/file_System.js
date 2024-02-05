const fs  = require('fs');
// reading file 
// fs.readFile('../docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// writing File
// fs.writeFile('../docs/blog2.txt','My name is maarij',()=>{
//     console.log('File was written');
// });

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder Created');
//     });
// }
// else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder deleted');
//     });
// }

// deleting files 
if(fs.existsSync('../docs/deletename.txt')){
    fs.unlink('../docs/deletename.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('File deleted');
    })
}