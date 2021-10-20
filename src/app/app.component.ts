import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetModule } from './set/set.module';
import { PasswordModule } from './password/password.module';
import { EditModule } from './edit/edit.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zentityAssignment';

  constructor(private router: Router) { }
  //   navigateToSetUsername(){
  //   this.router.navigate(['username']);
  // }

}
