import * as fs from "fs";

// http://localhost:3001/api/getblog?slug=rahul
export default function handler(req, res) {
    const fileContent = fs.readFile(
        `blogData/${req.query.slug}.json`,
        "utf8",
        (err, data) => {
            if (err) {
                res.status(404).json({ message: "Blog not found" });
            } else {
                // console.log(data);
                res.status(200).json(JSON.parse(data));

            }
        }
    );

    // console.log(req.query.slug);
    // const data = JSON.parse(fileContent);
    
}
