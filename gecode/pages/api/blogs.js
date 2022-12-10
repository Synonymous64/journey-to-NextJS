// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default async function handler(req, res) {
  // console.log(res); // it doesn't show up in web console only displayed on the command lines
  // let allBlogs = [];
  // fs.readdir('blogData', (err, data) => {
  //   console.log(data);
  //   data.forEach((item)=>{
  //     console.log(item);
  //     fs.readFile('blogData/' + item, 'utf-8', (err, res)=>{
  //       // console.log(res);
  //       allBlogs.push(res);
  //       if(err) console.log('not found');
  //       console.log(allBlogs);
  //     })
  //   })
  //   res.status(200).json(allBlogs);
  // })
  let data = await fs.promises.readdir('blogData');
  let myFile;
  let allBlogs = [];
  for(let item = 0; item < data.length; ++item){
    console.log(data[item]);
    myFile = await fs.promises.readFile('blogData/' + data[item], 'utf-8');
    console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs)
}
