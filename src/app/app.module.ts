import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, SummaryComponent, TopNavComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, InputTextModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
