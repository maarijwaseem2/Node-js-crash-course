const fs = require('fs');

const readstream = fs.createReadStream('../docs/blog3.txt',{encoding:'utf8'});
const writestream = fs.createWriteStream('../docs/blog4.txt');

// on Statement used 
// readstream.on('data',(chunk)=>{
//     console.log('------NEW CHUNK--------');
//     console.log(chunk);
//     writestream.write('\nNEW CHUNK\n');
//     writestream.write(chunk);
// });

// Piping used 
readstream.pipe(writestream)