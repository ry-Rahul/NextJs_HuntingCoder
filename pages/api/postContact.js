import * as fs from "fs";

export default async function handler(req, res) {
    
    if (req.method === "POST") {
        // console.log(req.body);
        let data = await fs.promises.readdir("contactData");
        // console.log(data)
        // 
        let id = data.length + 1;
        fs.promises.writeFile(`contactData/${id}.json`, JSON.stringify(req.body),()=>{});
        res.status(200).json({ message: "This is a post request" });
    } else {
        res.status(200).json({ message: "This is a get request" });
    }
}
