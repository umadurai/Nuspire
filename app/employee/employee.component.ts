import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmpSaveService} from '../emp-save.service';
import {HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  userInputForm: FormGroup;
  showSpinner: boolean;
  errorMessage: string;
  iserror: boolean;


  constructor(private fb: FormBuilder,
              private empService: EmpSaveService,
              private router: Router) { }

  ngOnInit() {
    this.userInputForm = this.fb.group({
      fname: ['', Validators.required],
      fdate: ['', Validators.required]
    });

  }


  onSubmit() {
    // const emp1 = {name: 'Java', date: 'angular'};
    this.showSpinner = true;
    this.iserror = false;
    const emp2 = {name: this.userInputForm.controls.fname.value, date: this.userInputForm.controls.fdate.value };
    this.empService.save(emp2).subscribe(
      res => {

          this.empService.putEmp(res.body);
          this.userInputForm.reset();
          this.router.navigate(['list']);

        },
      (err: HttpErrorResponse) => {
          this.showSpinner = false;
          this.iserror = true;
          if (err.error instanceof Error) {
              this.errorMessage = err.error.message;
          } else {
            if (err.status === 0) {
                this.errorMessage = 'Server is Down ' + err.message;
              }
            this.errorMessage = 'Backend returned status code: ' + err.message;
            }
          },
      () => this.showSpinner = false
      );
    // console.log(emp2);
  }
}
