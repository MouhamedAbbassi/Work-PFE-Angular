import { Component } from '@angular/core';
import { EtudiantService } from '../services/etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-etudiant',
  standalone: true,
  imports: [],
  templateUrl: './profile-etudiant.component.html',
  styleUrl: './profile-etudiant.component.scss'
})
export class ProfileEtudiantComponent {
  profileId: any;
  profileData: any;

  constructor(
    private etudiantseService: EtudiantService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Fetch profile data when component initializes
    this.fetchProfileId();
  }

  fetchProfileId(): void {
    // Call profile method from EntrepriseService
    this.etudiantseService.profile().subscribe(
      (data) => {
        // Handle successful response
        console.log('Profile data:', data);
        this.profileId = data; // Assign profile data to variable
        console.log(this.profileId.user.userId);
        // After obtaining profile ID, fetch profile data
        this.fetchEtudiantProfileData();
      },
      (error) => {
        // Handle error
        console.error('Error fetching profile:', error);
        // Display error message to user
        // You can use a snackbar or toast component to display error messages
      }
    );
  }

  fetchEtudiantProfileData(): void {
    // Call method from EntrepriseService to fetch data using profile ID
    if (this.profileId && this.profileId.user && this.profileId.user.userId) {
      this.etudiantseService.getProfileById(this.profileId.user.userId).subscribe(
        (data) => {
          // Handle successful response
          console.log('Profile data:', data);
          this.profileData = data; // Assign profile data to variable
        },
        (error) => {
          // Handle error
          console.error('Error fetching profile data:', error);
          // Display error message to user
          // You can use a snackbar or toast component to display error messages
        }
      );
    }
  }
}
