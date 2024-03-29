import { Router } from '@angular/router';
import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http'
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
})
export class SpecialEventsComponent implements OnInit {
  constructor(private _eventService: EventService, private _router : Router,private toast: NgToastService) {}
  specialEvents: any;
  ngOnInit(): void {
    this._eventService.getSpecialEvents().subscribe(
        (res: any)=>{
           this.specialEvents = res;
           console.log("special", res);
      }

      // res => this.specialEvents = res,
      // err => {
      //   if(err instanceof HttpErrorResponse){
      //     if(err.status === 401){
      //       this._router.navigate(['/login'])
      //     }
      //   }
      // }
    );
    
  }
}
