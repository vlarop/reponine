import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetModule } from './set/set.module';
import { PasswordModule } from './password/password.module';
import { EditModule } from './edit/edit.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    SetModule,
    PasswordModule,
    EditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
