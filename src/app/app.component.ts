import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public navItems: string[] = [
    '/login',
    '/list',
    '/other'
  ];

  public get selectedTab(): number {
    return this.navItems.findIndex(item => this.router.url.startsWith(item));
  }

  constructor(private router: Router) { }

  public onTabChange(tabEvent: MatTabChangeEvent) {
    this.router.navigate([this.navItems[tabEvent.index]]);
  }
}
