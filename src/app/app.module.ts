import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Routes.
import { Routing, RoutingProviders } from './app.routing';

// Root
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';

//Services
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BookComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
