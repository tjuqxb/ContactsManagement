import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts = [];
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getContacts();
  }

  deleteContact(id, event): void{
    event.preventDefault();
    if (!window.confirm('Confirm deletion?')) {
      return;
    }
    this.http.delete(`http://localhost:3000/contacts/${id}`).toPromise().then(data => {
      this.getContacts();
    }).catch(err => {

    })
  }

  getContacts(): void {
    this.http.get('http://localhost:3000/contacts', ).toPromise().then((data: any) => {
      this.contacts = data;
    }).catch(err => {

    })
  }

}
