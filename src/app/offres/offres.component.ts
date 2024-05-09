import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntrepriseService } from '../services/entrprise';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../demo/shared/shared.module';

@Component({
  selector: 'app-offres',
  standalone: true,
  imports: [SharedModule, RouterModule,CommonModule],
  templateUrl: './offres.component.html',
  styleUrl: './offres.component.scss'
})
export class OffresComponent implements OnInit {
  offerForm!: FormGroup;

  constructor(private offerService: EntrepriseService
    ,private router: Router
  ) { }
  error: string | null = null;

  ngOnInit(): void {

  }
  type:string= '';
  description:string= '';
  entreprise:string= '';
  lieu:string= '';
  datePublication:string= '';
  dateExpiration:string= '';
  competencesRequises:string[]= [];
  experienceRequise:string[]= [];
  niveauEtudeRequis:string= '';
  publicCible:string= '';
  duree:string= '';
  nombrePostes:string= '';
  salaire:string= '';
  recompense:string= '';
  qualificationsRequises:string= '';
  documents:string= '';
  submitOffer(): void {

      const offer = {
        type: this.type,
        description: this.description,
        entreprise: this.entreprise,
        lieu: this.lieu,
        datePublication: this.datePublication,
        dateExpiration: this.dateExpiration,
        competencesRequises: this.competencesRequises,
        experienceRequise: this.experienceRequise,
        niveauEtudeRequis: this.niveauEtudeRequis,
        publicCible: this.publicCible,
        duree: this.duree,
        nombrePostes: this.nombrePostes,
        salaire: this.salaire,
        recompense: this.recompense,
        qualificationsRequises: this.qualificationsRequises,
        documents: this.documents,

        // Add other form field values here
      };
      console.log(offer);

      this.offerService.newOffer(offer).subscribe(
        response => {
          console.log('offer successful', response);
          this.router.navigate(['/profile']);

          // Handle success response
        },
        error => {
          console.error('offer failed', error);
          this.error ='form invalid! Bad request... ';
        }
      );
    }

}
