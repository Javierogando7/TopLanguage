import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

@Injectable()
export class DatabaseProvider {
  databaseName = 'data.db';
  words = [];
  usuarios = [];

  constructor( public sqlite: SQLite) {
    
  }

  getWords(){
    this.words = this.getTable('favorite');
    return this.words;
  }

  getUsers(){
    this.usuarios = this.getTable('users');
    return this.usuarios;
  }

  getDatabase(databaseName: string){
    let database = this.sqlite.create({name: databaseName, location: 'default'});
    return database;
  }

  deleteDatabase(){
    this.sqlite.deleteDatabase({name: this.databaseName, location: 'default'})
    .then()
    .catch();
  }

  createTable(){
    this.getDatabase(this.databaseName)
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS favorite ( id INTEGER PRIMARY KEY AUTOINCREMENT, spanishWord VARCHAR(30), englishWord VARCHAR(30), description VARCHAR(30))', [])
        .then()
        .catch((error) => {
        console.log(error);
      })


    }).catch((error) => {
      console.log(error);
    });
  }


  createTableregister(){
    this.getDatabase(this.databaseName)
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS users ( id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30), email VARCHAR(30), password VARCHAR(30))', [])
        .then()
        .catch((error) => {
        console.log(error);
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  getUser(user: string){
    let Users = [];
    this.getDatabase(this.databaseName).then((db:SQLiteObject) => {
      db.executeSql('SELECT * FROM users where name = ' +  user, [])
      .then ((data) => {
          for (let i = 0; i < data.rows.length; i++) {
            let item = data.rows.item(i);
            Users.push(item);
          }
      })
      .catch((error) => {
        console.log(error);
      })
    });
    return Users;
  }


  getPassword(pass: string){
    let Passwords = [];
    this.getDatabase(this.databaseName).then((db:SQLiteObject) => {
      db.executeSql('SELECT name FROM users WHERE password = ' + Passwords, []).then ((data) => {
        for (let i = 0; i< data.rows.length; i++) {
          let item = data.rows.item(i);
          Passwords.push (item);
        }
      }).catch((error => {
        console.log(error);
      }))
    })
     return Passwords;
      }
    

  getTable(tableName: string){
    let table = [];
    this.getDatabase(this.databaseName)
    .then((db: SQLiteObject) => {
      db.executeSql('select * from ' + tableName, [])
      .then((data) => {
          for (let i = 0; i < data.rows.length; i++) {
            let item = data.rows.item(i);
            table.push(item);
          }
      }).catch((error) => {
        console.log(error);
      })
    }).catch((error) => {
      console.log(error);
    });

    return table;
  }

  insertuser(name: string, email: string, password: string){
    this.getDatabase(this.databaseName)
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password])
          .then()
          .catch();
      })
      .catch((error) => {
        console.log(error);
      });
  }


  insertWord(spanishWord: string, englishWord: string, description: string){
    this.getDatabase(this.databaseName)
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO favorite (spanishWord, englishWord, description) VALUES (?, ?, ?)', [spanishWord, englishWord, description])
          .then()
          .catch();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteWord(id){
    this.getDatabase(this.databaseName)
      .then((db: SQLiteObject) => {
        try {
          db.executeSql('DELETE FROM favorite WHERE id = ' + id, [])
          .then()
          .catch();
        } catch (error) {
          console.log(error);
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
