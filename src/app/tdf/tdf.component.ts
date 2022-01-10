import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { EnrollmentService } from 'src/services/enrollment.service';
@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  userModel = new User('Dev', 'dev@test.com', 435678556, 'default', 'morning', true);
  submitted = false;
  errorMessage="";
  constructor(private enrollmentService: EnrollmentService) { }

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
  onSubmit(){
    this.enrollmentService.enroll(this.userModel)
        .subscribe(
          data => console.log('Success',data),
          error => this.errorMessage = error.statusText
        );
        this.submitted=true;
    //console.log(this.userModel);
  }

}
