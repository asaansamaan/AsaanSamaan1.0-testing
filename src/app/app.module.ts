import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Router Module
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Firebase Imports
import { environment } from '../environments/environment.prod';
export const firebaseConfig = environment.config;
// import { environment } from '../environments/environment';
// export const firebaseConfig = environment.config;
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// AsaanSamaan Module
import { HeroesModule } from './pages/heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './not-found.component';

// Servicess
import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
