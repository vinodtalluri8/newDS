import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule} from 'diva-shared-apps/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
