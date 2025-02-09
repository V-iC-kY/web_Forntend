import { Component } from '@angular/core';
import { MessagingService } from './service/messageing.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'push-notification';
  message: any;
  constructor(private messagingService: MessagingService) { }
  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }
}