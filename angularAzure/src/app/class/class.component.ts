import { Component, OnInit } from '@angular/core';

import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  providers: [ClassService]
})
export class ClassComponent implements OnInit {
  data: [];

  constructor(private service: ClassService) { }

  ngOnInit() {
    this.service.getData().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }

}
