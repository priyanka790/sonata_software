import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatMenu } from '@angular/material/menu';
@Component({
  selector: 'app-emp-directory',
  templateUrl: './emp-directory.component.html',
  styleUrls: ['./emp-directory.component.css'],
})
export class EmpDirectoryComponent implements OnInit {
  empDetails: any = [];
   
  isShow :any;
  isActive:boolean = false;
  selectedIndex: number = null;

  // slides = [
  //   {'image': '/assets/images/svg/user-img.svg'},
  //   {'image': '/assets/images/svg/user-img.svg'},
  //   {'image': '/assets/images/svg/user-img.svg'},
  //   {'image': '/assets/images/svg/user-img.svg'},
  //   {'image': '/assets/images/svg/user-img.svg'}
  // ];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getEmpDetails();
  }


  getEmpDetails() {
    this.httpClient.get('assets/emp-details.json').subscribe((data: any) => {
      this.empDetails = data.prospects;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.empDetails, event.previousIndex, event.currentIndex);
  }
 
  activeFunction(index : number){
    this.selectedIndex = index;
    this.isShow = this.selectedIndex;
    this.isActive = true;
  }


}
