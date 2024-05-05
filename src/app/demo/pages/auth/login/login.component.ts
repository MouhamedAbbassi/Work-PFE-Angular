// angular import
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../authentication.scss']
})
export default class LoginComponent {
  // public props
  hide = true;




}
