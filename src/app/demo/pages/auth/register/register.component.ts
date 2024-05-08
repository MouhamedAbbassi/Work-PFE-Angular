// angular import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { EntrepriseService } from 'src/app/services/entrprise';
import { EtudiantService } from 'src/app/services/etudiant';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule, RouterModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../authentication.scss']
})
export default class RegisterComponent {

  constructor(private etudiantService: EtudiantService,private entrepriseService: EntrepriseService,private router: Router) { }
  error: string | null = null;

  // public props
  hide = true;
  coHide = true;
  showInputs: boolean = true;
  // student input
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  specialisation: string = '';
  slug: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // entreprise input
  raisonSociale : string = '';
  adresse: string = '';
  pays: string= '';
  telephone: string= '';
  fax: string= '';
  slugE: string= '';
  emailE : string= '';
  siteWeb: string= '';
  matriculeFiscale: string= '';
  patents: string= '';
  secteurActivite: string= '';
  description: string= '';
  premierResponsable: string= '';
  telephoneResponsable: string= '';
  emailContact: string= '';
  passwordE: string= '';
  confirmPasswordE: string = '';



   selectedValue="Etudiant";
  onSelectChange(event: any) {
    this.selectedValue = event;
    this.showInputs = this.selectedValue === 'Etudiant';
  }


  register(): void {
    if (this.showInputs) {
      const etudiant = {
        slug: this.slug,
        email: this.email,
        password: this.password,
        passwordConfirm: this.confirmPassword,
        specialisation: this.specialisation,
        telephone: this.phone,
        nom: this.firstName,
        prenom: this.lastName
        // Add other form field values here
      };

      this.etudiantService.signup(etudiant).subscribe(
        response => {
          console.log('Signup successful', response);
          this.router.navigate(['/auth/login']);

          // Handle success response
        },
        error => {
          console.error('Signup failed', error);
          this.error ='form invalid! Bad request... ';
        }
      );
    } else {
      console.log('Signup failed');
      // Handle case where 'showInputs' is false (e.g., user selected 'Entreprise')
    }
  }

  registerEntreprise(): void {
    if (!this.showInputs) {
      const entreprise = {
        raisonSociale: this.raisonSociale,
        slug: this.slugE,
        adresse: this.adresse,
        pays: this.pays,
        fax: this.fax,
        siteWeb: this.siteWeb,
        matriculeFiscale: this.matriculeFiscale,
        email: this.emailE,
        password: this.passwordE,
        passwordConfirm: this.confirmPasswordE,
        telephone: this.telephone,
        patents: this.patents,
        secteurActivite: this.secteurActivite,
        description: this.description,
        premierResponsable: this.premierResponsable,
        telephoneResponsable: this.telephoneResponsable,
        emailContact: this.emailContact,

        // Add other form field values here
      };

      this.entrepriseService.signup(entreprise).subscribe(
        response => {
          console.log('Signup successful', response);
          this.router.navigate(['/auth/login']);
        },
        error => {
          console.error('Signup failed', error);
          this.error ='form invalid! Bad request... ';
        }
      );
    } else {
      console.log('Signup failed');
      // Handle case where 'showInputs' is false (e.g., user selected 'Entreprise')
    }
  }

}
