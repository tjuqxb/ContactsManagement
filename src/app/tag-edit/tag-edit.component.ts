import { Component, OnInit } from '@angular/core';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.css']
})
export class TagEditComponent implements OnInit {
  formData = {
    name: '',
    color: '',
    id: ''
  }

  constructor(private platform: PlatformLocation) { }

  ngOnInit(): void {
    this.formData.id = this.platform.pathname.split('/')[3];
  }

  editTag(): void {
    console.log(this.formData);
  }

}
