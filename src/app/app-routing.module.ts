import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Logic_Components/homepage/homepage.component';
import { QuestionsPanelComponent } from './Logic_Components/questions-panel/questions-panel.component'
import { AnswersPanelComponent } from './Logic_Components/answers-panel/answers-panel.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },

  {
    path: 'home', 
    component: HomepageComponent,
    children: [
      { 
        path: 'myquestions/:id',
        component: QuestionsPanelComponent,
        children: [
          { 
            path: 'answers',
            component: AnswersPanelComponent,
            data: {
              breadcrumb: ':question'
            }, 
            
          }
        ]

      }
    ]
  },
  { path: 'questions/:id', component: QuestionsPanelComponent },
  { path: 'answers', component: AnswersPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
