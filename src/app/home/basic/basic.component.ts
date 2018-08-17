import { Component, OnInit } from '@angular/core';
import { DatagetterService } from '../../services/datagetter.service';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  constructor(private datagetterService: DatagetterService) {}

  ngOnInit() {
    this.datagetterService.readJSON().subscribe((value) => { console.log(value); });
  }
}
