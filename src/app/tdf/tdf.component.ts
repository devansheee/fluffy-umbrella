import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  userModel = new User('Dev', 'dev@test.com', 435678556, 'default', 'morning', true);
  constructor() { }

  ngOnInit(): void {
  }

  validateTopic(value: string){

    if(value === 'default'){
      this.topicHasError= true;
    }
    else{
      this.topicHasError= false;
    }

  }

}
