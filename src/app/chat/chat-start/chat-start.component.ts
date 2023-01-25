import { WebSocketService } from './web-socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-start',
  templateUrl: './chat-start.component.html',
  styleUrls: ['./chat-start.component.css'],
})
export class ChatStartComponent implements OnInit {
  title = 'Websocket Angular client ';
  userName: string = localStorage.getItem('username') !;
  message: string = '';
  output: any[] = [];
  feedback: string = '';

  constructor(private WebSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.WebSocketService
    .listen('typing')
    .subscribe((data:any) => this.updateFeedback(data));
  this.WebSocketService
    .listen('chat')
    .subscribe((data:any) => this.updateMessage(data));

    //const username = localStorage.getItem('username')?.toString();
    //this.userName = username;
    //console.log({username});

  }
  updateMessage(data: any) {
    this.feedback = '';
    if (!!!data) return;
    console.log(`${data.handle} : ${data.message}`);
    this.output.push(data);
  }

  updateFeedback(data: any) {
    this.feedback = `${data} is typing a message`;
  }


messageTyping(): void {
  this.WebSocketService.emit('typing', this.userName);
}


  sendMessage(): void {
    this.WebSocketService.emit('chat', {
      message: this.message,
      handle: this.userName,
    });
    this.message = '';
  }

}
