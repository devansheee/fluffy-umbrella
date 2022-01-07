import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You've selected department :{{ deptInt }}</h3>

    <p>
      <button (click)="showOverview()">Overview</button> <br> 
      <button (click)="showContact()">Contact</button>
    </p>
    <!-- <router-outlet></router-outlet>  currently commenting the changes because it's suddenly showing some error-->
    <p>
      <button (click)="previous()">Previous</button> <br />
      <br />
      <button (click)="next()">Next</button>
    </p>
    <div>
      <button (click)="goToDepartments()">Back</button>
    </div>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;
  public deptInt: number = -1;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //we did not use snapshot approach bcz it did not change the id in the url in the previous versions ig
    // this.departmentId = this.route.snapshot.paramMap.get('id');
    //this.deptInt = parseInt( this.departmentId);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = params.get('id');
    });
    this.deptInt = parseInt(this.departmentId);
  }

  previous() {
    let previousId = --this.deptInt;
    this.router.navigate(['/departments', previousId]);
    console.log(this.deptInt, ' ', previousId);
  }
  next() {
    let nextId = ++this.deptInt;
    this.router.navigate(['/departments', nextId]);
    console.log(this.deptInt, ' ', nextId);
  }

  goToDepartments() {
    //optional parameters in routing
    let selectedId = this.deptInt ? this.deptInt : null;

    //this.router.navigate(['/departments', {id: selectedId}]);  >>> absolute routing to be removed.
    //relative routing. ../ means a step back
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route,
    });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
