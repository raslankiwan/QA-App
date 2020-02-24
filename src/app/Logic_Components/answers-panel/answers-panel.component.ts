import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/Classes/question';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AnswersService } from 'src/app/Services/answers.service';
import { IAnswer } from 'src/app/Classes/ianswer';

@Component({
  selector: 'app-answers-panel',
  templateUrl: './answers-panel.component.html',
  styleUrls: ['./answers-panel.component.css']
})
export class AnswersPanelComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private answersService: AnswersService
  ) { }

  question: IQuestion;
  showModal = false;
  answer: string= ''
  answers: IAnswer[] = []

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( (params) => {
      this.question = {question: params['question'], questionId: params['questionId'], likes: params['likes'], dislikes: params['dislikes'], userId: params['userId'], topicId: params['topicId'], answers: params['answers'] }
    })
    this.getAnswers()
  }

  updateAnswers($event): void {
    this.getAnswers();
  }

  getAnswers(): void {
    this.answersService.getAnswers(this.question.questionId)
    .subscribe(answers => {
      this.answers = answers
      console.log('answers: ', this.answers)
    })
  }

  updateAnswer(text: string): void {
    this.answer = text
  }

  showAnswerModal(): void {
    this.showModal = true; 
  }

  hideAnswerModal(status): void {
    this.showModal = false; 
    if (status === 'Post') {
      this.postAnswer()
    } else {
      this.answer = '';
    }
  }

  postAnswer(): void {
    this.answersService.addAnswer(this.answer, 1, this.question.questionId)
    .subscribe(response => {
      console.log('resonse: ', response)
      this.getAnswers()
    })
  }
}
