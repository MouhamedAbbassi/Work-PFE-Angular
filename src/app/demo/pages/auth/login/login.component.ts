// angular import
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant'; // Import EtudiantService
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for displaying messages

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../authentication.scss']
})

export default class LoginComponent {
  // public props
  hide = true;
  email: string = ''; // Add email property to bind with input field
  password: string = ''; // Add password property to bind with input field

  constructor(
    private etudiantService: EtudiantService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  // Method to handle login
  login(): void {
    // Check if email and password are provided
    if (!this.email || !this.password) {
      this.snackBar.open('Please provide email and password', 'Close', {
        duration: 3000,
      });
      return;
    }

    // Call login function from EtudiantService
    this.etudiantService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        // Handle successful login
        console.log('Login successful', response);
        // Redirect user to dashboard or any desired page
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Handle login error
        console.error('Login failed', error);
        // Display error message
        this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
