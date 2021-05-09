import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { HttpClientModule } from '@angular/common/http';
import { PicsService } from './pics.service';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PictureComponent } from './picture/picture.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/pic.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//ng g c "nombre componente"
//ng g s "nombre servicio"
//ng g module routing --module app

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SearchComponent,
    PictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    StoreModule.forRoot({ counter: counterReducer }),
    NgbModule,
  ],
  providers: [PicsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
