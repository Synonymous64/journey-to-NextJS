import * as fs from 'fs';
// http://localhost:3000/api/getBlog?slug=how-to-learn-javascript
export default function handler(req, res) {
    // console.log(res); // it doesn't show up in web console only displayed on the command lines
    fs.readFile(`blogData/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) res.status(500).json({ error: "No such blog found" })
        console.log(req.query.slug);
        res.status(200).json(JSON.parse(data));
    })
}
