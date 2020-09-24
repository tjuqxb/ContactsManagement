import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = JSON.parse(window.localStorage.getItem('user_info') || '{}');
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  signOut(): void {
    try {
      window.localStorage.removeItem('token');
      this.router.navigate(['signin']);
    }catch (err) {
      window.alert('Log out failed');
    }
  }

}
