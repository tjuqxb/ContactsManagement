import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  tagList = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    const userInfo = JSON.parse(window.localStorage.getItem('user_info'));
    const id = userInfo.id;
    this.http.get('http://localhost:8000/tags/' + id, ).toPromise().then((data: any) => {
      this.tagList = data;
      console.log(data);
    }).catch(err => {

    })
  }

  deleteTag(id, event) {

  }

}
