import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ContainerComponent } from './componentes/arquitectura/container/container.component';
import { HeaderComponent } from './componentes/arquitectura/header/header.component';
import { HeaderUserComponent } from './componentes/arquitectura/header/header-user/header-user.component';
import { HeaderLogoComponent } from './componentes/arquitectura/header/header-logo/header-logo.component';
import { BodyComponent } from './componentes/arquitectura/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    HeaderUserComponent,
    HeaderLogoComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
