import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IQuestion } from 'src/app/Classes/question';
import { QuestionsService } from 'src/app/Services/questions.service';
import { Router } from '@angular/router';
import { IAnswer } from 'src/app/Classes/ianswer';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private questionService: QuestionsService,
    public router: Router
  ) { }

  @Input() question: IQuestion;
  @Output() questionDeleted = new EventEmitter();

  deleteModal= false;

  answers: IAnswer [] = []

  ngOnInit(): void {
    this.fillAnswers();
  }

  fillAnswers(): void {
    for(const answerId in this.question.answers) {
      const { answer, questionId, likes, dislikes, userId } =  this.question.answers[answerId]
      let ans: IAnswer = {answerId, answer,  questionId, likes, dislikes, userId  }
      this.answers.push(ans)
    }

    this.question.answers = this.answers

  }

  incLikes(): void {
    this.question.likes += 1;
    this.questionService.updateLikes(this.question.questionId, this.question.likes)
    .subscribe(response => {
      console.log('resonse: ', response)
    })
  }


  incDislikes(): void {
    this.question.dislikes += 1;
    this.questionService.updateDislikes(this.question.questionId, this.question.dislikes)
    .subscribe(response => {
      console.log('resonse: ', response)
    })
  }

  deleteQuestion(): void {
    this.questionService.deleteQuestion(this.question.questionId)
    .subscribe(response => {
      console.log('resonse: ', response)
    })
    this.deleteModal= false;
    this.questionDeleted.emit('QuestionDeleted');
  }

  toggleDeleteModal(): void {
    this.deleteModal = !this.deleteModal
  }


  viewAnswers(): void {
    this.router.navigate(['/answers'], { queryParams:  this.question})
  }

}
