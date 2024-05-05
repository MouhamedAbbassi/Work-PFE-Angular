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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule,CommonModule,HttpClientModule   ],
  bootstrap: [AppComponent]
})
export class AppModule {}
