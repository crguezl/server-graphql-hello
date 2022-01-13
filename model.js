const  sqlite3  =  require('sqlite3').verbose();
const database = new sqlite3.Database("./my.db");

const  createContactTable  = () => {
    const  query  =  `
        CREATE TABLE IF NOT EXISTS contacts (
        id integer PRIMARY KEY,
        firstName text,
        lastName text,
        email text UNIQUE)`;

    return  database.run(query);
}

function getById(id){
    return new Promise((resolve, reject) => {                
        database.all("SELECT * FROM contacts WHERE id = (?);",[id], function(err, rows) {                           
            if(err){
                reject(null);
            }
            resolve(rows[0]);
        });
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        database.all("SELECT * FROM contacts;", function(err, rows) {  
            if(err){
                reject([]);
            }
            resolve(rows);
        });
    })
}

function insert({firstName, lastName, email}) {
    return new Promise((resolve, reject) => {

        database.run('INSERT INTO contacts (firstName, lastName, email) VALUES (?,?,?);', [firstName , lastName, email], (err) => {
            if(err) {
                reject(null);
            }
            database.get("SELECT last_insert_rowid() as id", (err, row) => {
                
                resolve({
                    id: row["id"],
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                });
            });
        });
    })
}

function updateContacts({id, firstName , lastName, email}) {
    console.log(`updateContacts({${id}, ${firstName} , ${lastName}, ${email})`)
    return new Promise((resolve, reject) => {

        database.run('UPDATE contacts SET firstName = (?), lastName = (?), email = (?) WHERE id = (?);', [firstName, lastName, email, id], (err) => {
            if(err) {
                reject(err);
            }
            resolve(`Contact #${id} updated`);
            
        });
    })
}

module.exports = { 
    database,
    createContactTable,
    getAll,
    getById,
    insert,
    updateContacts
}
