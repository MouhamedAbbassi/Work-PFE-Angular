// angular import
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// project import
import { LayoutService } from 'src/app/@theme/services/layout.service';
import { EntrepriseService } from 'src/app/services/entrprise';
import { EtudiantService } from 'src/app/services/etudiant';

@Component({
  selector: 'app-nav-left',
  templateUrl: './toolbar-left.component.html',
  styleUrls: ['./toolbar-left.component.scss']
})
export class NavLeftComponent {
  // constructor
  constructor(private layoutService: LayoutService,
    private entrepriseService: EntrepriseService,
    private etudiantseService: EtudiantService,
    private router: Router,
  ) {}

  // public method
  toggleMenu() {
    this.layoutService.toggleSideDrawer();
  }

  profileId: any;
  profileData: any;



  ngOnInit(): void {
    // Fetch profile data when component initializes
    this.fetchProfileId();
  }

  fetchProfileId(): void {
    // Call profile method from EntrepriseService
    this.entrepriseService.profile().subscribe(
      (data) => {
        // Handle successful response
        console.log('Profile data:', data);
        this.profileId = data; // Assign profile data to variable
        console.log(this.profileId.user.userId);
        // After obtaining profile ID, fetch profile data
        this.fetchEntrepriseProfileData();
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

  fetchEntrepriseProfileData(): void {
    // Call method from EntrepriseService to fetch data using profile ID
    if (this.profileId && this.profileId.user && this.profileId.user.userId) {
      this.entrepriseService.getProfileById(this.profileId.user.userId).subscribe(
        (data) => {
          // Handle successful response
          console.log('Profile data: from', data);
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

  fetchEtudiantProfileData(): void {
    // Call method from EntrepriseService to fetch data using profile ID
    if (this.profileId && this.profileId.user && this.profileId.user.userId) {
      this.etudiantseService.getProfileById(this.profileId.user.userId).subscribe(
        (data) => {
          // Handle successful response
          console.log('Profile data from nav:', data);
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
