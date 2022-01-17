import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RepoComponent } from './repo/repo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';
import { DecoratorPipe } from './decorator.pipe';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RepoComponent,
    NotfoundComponent,
    HomepageComponent,
    UserComponent,
    FormSearchComponent,
    DecoratorPipe,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
