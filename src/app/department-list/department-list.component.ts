import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-department-list',
  template: `

    <h3>Department List</h3>
    <ul class="items">
      <li (click) = "onSelect(dept)" [class.selected] = 'isSelected(dept)' *ngFor="let dept of departmentlist">
        <span class="badge">{{dept.id}}</span> {{dept.name}}
      </li>
    </ul>

  `,
  
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departmentlist = [
    {'id': 1 , 'name': 'Computer'},
    {'id': 2, 'name': 'Civil'},
    {'id': 3, 'name': 'Electrical'},
    {'id': 4, 'name': 'Mechanical'},
  ];

  public departmentId: any;
  public selectedId : number = -1;
  
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.departmentId = params.get('id');      
    });
    this.selectedId = parseInt(this.departmentId);

  }

  onSelect(dept: any){
      this.router.navigate(['/departments/', dept.id]);
  }

  isSelected(department: any){
      return department.id === this.selectedId;
  }

}
