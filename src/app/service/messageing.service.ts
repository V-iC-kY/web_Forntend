import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  constructor(private angularFireMessaging: AngularFireMessaging) {
    // Subscribe to the message stream
    this.angularFireMessaging.messages.subscribe(
      (payload: any) => {
        console.log("New message received: ", payload);
        this.currentMessage.next(payload);
      }
    );
  }
  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token: any) => {
        console.log(token);
      },
      (err: any) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload: any) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
}