import fs from "node:fs/promises";
const DB = "./user.json";
const readDB = async () => {
    try{
        const data = await fs.readFile(DB);
        return JSON.parse(data);
    }catch(err){
        return [];
    }
}
const writeDB = async (data) => {
    try{
        await fs.writeFile(DB, JSON.stringify(data));
    }catch(err){
        console.log(err);
    }
}

const createUser = (user) => new Promise(
    async (resolve, reject) => {
        if(!user.id) return reject("User id is required");
        const users = await readDB(); // db query to read
        user.name = user.name || "Unknown user";
        users.push(user);
        await writeDB(users); // db query to write
        return resolve(user);
    }
);
const run = async() => {
    const newUser = await createUser({ id: 1, name: "Alice" });
    console.log(newUser);
}
run();