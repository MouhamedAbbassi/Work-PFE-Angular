// angular import
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant'; // Import EtudiantService
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for displaying messages

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { EntrepriseService } from 'src/app/services/entrprise';

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
    private entrepriseService: EntrepriseService,
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
      (response: any) => {
        // Handle successful login
        console.log('Etudiant login successful', response);
        // Store token in local storage
        localStorage.setItem('token', response.token);
        // Redirect user to dashboard or any desired page
        this.router.navigate(['/profileEtudiant']);
      },
      error => {
        // Handle login error
        console.error('Etudiant login failed', error);
        // Display error message
        this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
          duration: 3000,
        });
      }
    );

    // Call login function from EntrepriseService
    this.entrepriseService.login({ email: this.email, password: this.password }).subscribe(
      (response: any) => {
        // Handle successful login
        console.log('Entreprise login successful', response);
        // Store token in local storage
        localStorage.setItem('token', response.token);
        // Redirect user to dashboard or any desired page
        this.router.navigate(['/profile']);
      },
      error => {
        // Handle login error
        console.error('Entreprise login failed', error);
        // Display error message
        this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
