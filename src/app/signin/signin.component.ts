import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm = {
    email: '',
    password: '',
  };

  email_err: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    const formData = this.signInForm;
    this.http.post('http://localhost:8000/users/signin', formData).toPromise().then((data: any) => {
      this.email_err = '';
      window.alert('Sign in successfully!');
      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('user_info', JSON.stringify(data.user));
      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err);
      if (err.status === 401) {
        this.email_err = 'Login failed';
      }
    });
  }


}
