import { Component, OnInit, Input } from '@angular/core';
import {Navitems} from 'diva-shared-apps/components/interfaces/navitems';

@Component({
  selector: 'app-navbar-topmenu',
  templateUrl: './navbar-topmenu.component.html',
  styleUrls: ['./navbar-topmenu.component.css']
})
export class NavbarTopmenuComponent implements OnInit {
  @Input() navItems: Navitems[];
  constructor() { }

  ngOnInit() {
  }
}
