import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getRecentNews() : Promise<any> {
    return new Promise(
      (resolve,reject)=>{
        firebase.firestore().collection('News').orderBy('_date','desc').get().then(
          (value)=>{
            resolve(value);
          }
        ).catch(
          (reason)=>{
            reject(reason);
          }
        )
      }
    )
  }

  getNewsByCategory(category:string) : Promise<News[]> {
    return new Promise(
      (resolve,reject)=>{
        firebase.firestore().collection('News').where('category','==',category).get().then(
          (value)=>{
            const tab = [];
            for(let doc of value.docs){
              tab.push(doc.data())
            }
            resolve(tab)
          }
        ).catch(
          (reason)=>{
            reject(reason)
          }
        )
      }
    )
  }

  getNewsById(id:string) : Promise<any> {
    return new Promise(
      (resolve,reject)=>{
        firebase.firestore().collection('News').where('_id','==',id).get().then(
          (value)=>{
            resolve(value);
          }
        ).catch(
          (reason)=>{
            reject(reason);
          }
        )
      }
    )
  }

  addNews(news:News) : Promise<string> {
    return new Promise(
      (resolve,reject)=>{
 
      }
    )
  }

  updateNews(news:News) : Promise <string> {
    return new Promise(
      (resolve,reject)=>{

      }
    )
  }

  deleteNews(id:string) : Promise <string> {
    return new Promise(
      (resolve,reject)=>{

      }
    )
  }
}
