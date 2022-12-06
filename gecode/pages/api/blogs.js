// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default function handler(req, res) {
  // console.log(res); // it doesn't show up in web console only displayed on the command lines
  fs.readdir('blogData', (err, data) => {
    console.log(data);
    res.status(200).json(data);
  })
}
