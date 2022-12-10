import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryService } from './service/summary.service';
import { SummaryComponent } from './page/summary/summary.component';
import { ListComponent } from './page/summary/list/list.component';
import { SortComponent } from './page/summary/sort/sort.component';
import { DetailsComponent } from './page/summary/country/details/details.component';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './page/share/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ListComponent,
    SortComponent,
    DetailsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [SummaryService],
  bootstrap: [AppComponent],
  entryComponents: [DetailsComponent],
  exports: [
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ]
})
export class AppModule { }
