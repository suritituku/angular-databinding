import { Component, OnInit } from '@angular/core';
import { studentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

public students: any = [];
constructor(private _stdService: studentService) { }

  ngOnInit() {
    this._stdService.getStudent()
    .subscribe(data => this.students = data)
  }

}


