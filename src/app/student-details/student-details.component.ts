import { Component, OnInit } from '@angular/core';
import { studentService } from '../student.service';

@Component({
  selector: '.app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public students: any = [];
  public errMsg = "";
  constructor(private _stdService: studentService) { }

  ngOnInit() {
    this._stdService.getStudent().subscribe(data => this.students = data, error => this.errMsg = error)

  }

}
