import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RatingModule } from 'primeng/rating';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { TopNavComponent } from './pages/top-nav/top-nav.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SummaryComponent, TopNavComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MenubarModule,
    ToggleButtonModule,
    TooltipModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
