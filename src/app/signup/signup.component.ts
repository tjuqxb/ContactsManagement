import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = {
    email: '',
    password: '',
  };

  email_err: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    const formData = this.signUpForm;
    this.http.post('http://localhost:8000/users/register', formData).toPromise().then((data: any) => {
      this.email_err = '';
      window.alert('Register successfully!');
      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('user_info', JSON.stringify(data.user));
      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err);
      if (err.status === 409) {
        this.email_err = 'email address already exists';
      }
    });
  }

}
