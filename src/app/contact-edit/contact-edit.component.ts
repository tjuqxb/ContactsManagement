import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    phone: '',
    id: ''
  }

  constructor(private router: Router, private route: ActivatedRoute,
              private http: HttpClient ) { }

  ngOnInit(): void {

    this.getContactById();
  }

  editContact() {
    const id = this.formData.id;
    this.http.patch(`http://localhost:3000/contacts/${this.formData.id}`, this.formData).toPromise().then((data) => {
      this.router.navigate(['/contacts']);
    }).catch(err => {
    })
  }

  getContactById() {
    const contactId = this.route.snapshot.params.id;
    this.http.get(`http://localhost:3000/contacts/${contactId}`).toPromise().then((data: any) => {
      this.formData = data;
    }).catch(err => {

    })
  }

}
