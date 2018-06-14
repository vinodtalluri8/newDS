
import {Component, Input, OnInit} from '@angular/core';
import {Navitems} from 'diva-shared-apps/components/interfaces/navitems';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems: Navitems[] = [
    {
      displayName: 'System Code',
      children: [
        {
          displayName: 'View System Codes',
          route: 'systemcodes'

        }]
    },
    {
      displayName: 'System Values',
      children: [
        {
          displayName: 'View System Values',
          route: 'systemvalues'

        }]
    }
  ];
  ngOnInit() {
  }

}
