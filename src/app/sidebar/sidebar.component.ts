import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  path = '';

  constructor(private route: Router, private platform: PlatformLocation) { }

  ngOnInit(): void {
    this.path = this.platform.pathname.substr(1);
    // console.log(this.path);
  }

}
