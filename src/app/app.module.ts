// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './demo/shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';
import { EntrepriseService } from './services/entrprise';
import { EtudiantService } from './services/etudiant';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffresComponent } from './offres/offres.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,ProfileComponent,
    SharedModule,CommonModule,HttpClientModule ,ReactiveFormsModule,OffresComponent  ],
  bootstrap: [AppComponent],
providers: [AuthInterceptor,EntrepriseService,EtudiantService]
})
export class AppModule {}
