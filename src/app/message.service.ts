import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];
  // add new message 
  add(message:string){
    this.messages.push(message);
  }
  // clear all messages 
  clear(){
    this.messages = [];
  }
  constructor() { }
}
