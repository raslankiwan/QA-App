import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Topic } from 'src/app/Classes/topic';
import { FetchTopicsService } from '../../Services/fetch-topics.service'
import { QuestionsService } from 'src/app/Services/questions.service';
import { IQuestion } from 'src/app/Classes/question';

@Component({
  selector: 'app-questions-panel',
  templateUrl: './questions-panel.component.html',
  styleUrls: ['./questions-panel.component.css']
})
export class QuestionsPanelComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fetchTopicsService: FetchTopicsService,
    private questionsService: QuestionsService
  ) { }

  id: number;
  topic: Topic;
  question: string
  opened = false;
  loading= true;
  questions: IQuestion []


  ngOnInit(): void {
    this.id = JSON.parse(this.route.snapshot.paramMap.get('id'));
    this.getTopic();
    
  }
  

  getTopic(): void {
    this.fetchTopicsService.fetchTopic(this.id)
    .subscribe(topic => {
      this.topic = topic
      this.loading = false
      this.getQuestions();
    })
  }

  getQuestions(): void {
    this.questionsService.getQuestions(this.topic.id)
    .subscribe(questions => {
      this.questions = questions
    //  console.log('questions: ', this.questions)
    })
  }


  hideQuestionModal(status: string): void {
    this.opened = false;
    if (status === 'Post') {
      this.postQuestion()
    } else {
      this.question = '';
    }
  }

  showQuestionModal(): void {
    this.opened = true;
  }

  updateQuestion(text: string): void {
    this.question = text;
  }

  postQuestion(): void {
    this.questionsService.addQuestion(this.question, 1, this.topic.id)
    .subscribe(response => {
      console.log('resonse: ', response)
      this.getQuestions()
    })
  }

}
