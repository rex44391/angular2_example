import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng5SliderModule } from 'ng5-slider';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContextMenuModule } from 'ngx-contextmenu';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate/navigate.component';
import { OutputComponent } from './output/output.component';
import { OutputCardComponent} from './output/output-card/output-card.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HomeComponent } from './home/home.component';
import { NgbdDelModal } from './output/output-card/del-modal/del-modal.component';
import { NgbdEditModal } from './output/output-card/edit-modal/edit-modal.component';
import { ChartComponent } from './chart/chart.component';
import { ChartPanelComponent } from './chart/chart-panel/chart-panel.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'output', component: OutputComponent },
  { path: 'pfe', component: ProfileEditorComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    OutputComponent,
    OutputCardComponent,
    ProfileEditorComponent,
    HomeComponent,
    NgbdDelModal,
    NgbdEditModal,
    ChartComponent,
    ChartPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ContextMenuModule.forRoot({
      autoFocus: true
    }),
    NgbModule,
    NgxChartsModule,
    AngularFontAwesomeModule,
    Ng5SliderModule
  ],
  entryComponents: [
    NgbdDelModal,
    NgbdEditModal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
