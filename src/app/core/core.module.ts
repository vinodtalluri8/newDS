import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarTopmenuComponent } from './navbar-topmenu/navbar-topmenu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule} from 'diva-shared-apps/shared.module';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    SharedModule,MatButtonModule,MatToolbarModule,MatMenuModule
  ],
  declarations: [NavbarComponent,
  NavbarTopmenuComponent],
  exports: [NavbarComponent,
  NavbarTopmenuComponent]
})
export class CoreModule { }
