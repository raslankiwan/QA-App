import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { BreadcrumbModule } from 'angular-crumbs'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI_Components/header/header.component';
import { HomepageComponent } from './Logic_Components/homepage/homepage.component';
import { TopicsComponent } from './UI_Components/topics/topics.component';
import { QuestionsPanelComponent } from './Logic_Components/questions-panel/questions-panel.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { QuestionComponent } from './Logic_Components/question/question.component';
import { AnswersPanelComponent } from './Logic_Components/answers-panel/answers-panel.component';
import { AnswerComponent } from './Logic_Components/answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    TopicsComponent,
    QuestionsPanelComponent,
    QuestionComponent,
    AnswersPanelComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    DialogsModule,
    FontAwesomeModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
