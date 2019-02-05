import { Component, OnInit } from '@angular/core';
import { EmpModelModule} from '../emp-model/emp-model.module';
import { EmpSaveService} from '../emp-save.service';

@Component({
  templateUrl: './list-emp.component.html',
})
export class ListEmpComponent implements OnInit {
  empList: EmpModelModule[];

  constructor(private empService: EmpSaveService) { }

  ngOnInit() {
    this.empList = this.empService.getEmp();
  }

}
