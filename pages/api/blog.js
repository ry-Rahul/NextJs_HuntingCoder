import * as fs from "fs";

export default async function handler(req, res) {

    let allBlogs = [];
    const data = await fs.promises.readdir("blogData");
    for (let i = 0; i < data.length; i++) {
        const fileContent = await fs.promises.readFile(
            `blogData/${data[i]}`,
            "utf8"
        );
        allBlogs.push(JSON.parse(fileContent));
    }
    res.status(200).json(allBlogs);

   /*  fs.promises.readdir("blogData", (err, data) => {
        console.log(data);
        data.forEach((item) => {
            console.log(item);
            fs.readFile(`blogData/${item}`, "utf8", (err, data) => {
                console.log(data);
                allBlogs.push(data);
            });
        })
        res.status(200).json(allBlogs); 
    });
    */
}
