import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

@Injectable()
export class DatabaseProvider {

  databaseName = 'data.db';
  constructor( private sqlite: SQLite) {
    
  }

  getDatabase(databaseName: string){
    let database = this.sqlite.create({name: databaseName, location: 'default'});
    return database;
  }

  createTable(){
    this.getDatabase(this.databaseName)
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS favorite ( id INT PRIMARY KEY, spanishWord VARCHAR(30), englishWord VARCHAR(30), description VARCHAR(30))', [])
        .then()
        .catch((error) => {
        console.log(error);
      })


    }).catch((error) => {
      console.log(error);
    });
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

  insertWord( spanishWord: string, englishWord: string, description: string){
    this.getDatabase(this.databaseName)
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO favorite (spanishWord, englishWord, description) VALUES (?, ?, ?)', [ spanishWord, englishWord, description])
          .then()
          .catch();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteWord(id: number){
    this.getDatabase(this.databaseName)
      .then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM favorite WHERE id = ' + id.toString(), [])
          .then()
          .catch();
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
