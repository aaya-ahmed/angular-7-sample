import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SearchComponent } from './layout/components/search/search.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { LayoutComponent } from './layout/layout.component';
import { VerticalCardComponent } from './components/vertical-card/vertical-card.component';
import { MaterialModule } from './modules/material/material.module';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ColorDirective } from './directive/color.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    NavbarComponent,
    UsersComponent,
    UserDetailsComponent,
    LayoutComponent,
    VerticalCardComponent,
    HorizontalCardComponent,
    ProgressBarComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
