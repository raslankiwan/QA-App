import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import { IAnswer } from 'src/app/Classes/ianswer';
import { AnswersService } from 'src/app/Services/answers.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor(
    private answersService: AnswersService
  ) { }
  @Input() answer: IAnswer;
  @Input() questionId: string;

  @Output() answerDeleted = new EventEmitter();

  deleteModal= false;
  editModal= false;
  newAnswer: ''


  ngOnInit(): void {
  }

  incLikes(): void {
    this.answer.likes += 1;
    this.answersService.updateLikes(this.answer.answerId, this.questionId, this.answer.likes)
    .subscribe(response => {
      console.log('resonse: ', response)
    })
  }


  incDislikes(): void {
    this.answer.dislikes += 1;
    this.answersService.updateDislikes(this.answer.answerId, this.questionId, this.answer.dislikes)
    .subscribe(response => {
      console.log('resonse: ', response)
    })
  }

  deleteAnswer(): void {
    this.answersService.deleteAnswer(this.answer.answerId, this.questionId)
    .subscribe(response => {
      console.log('resonse: ', response)
      this.answerDeleted.emit('answerDeleted')
    })
    this.deleteModal= false
  }

  updateAnswer(text): void {
    this.newAnswer = text
  }


  postAnswer(): void {
    this.answersService.updateAnswer(this.newAnswer, this.answer.answerId, this.questionId)
    .subscribe(response => {
      console.log('resonse: ', response)
      this.editModal = false;
      this.answer.answer = this.newAnswer
    })

  }

  toggleDeleteModal(): void {
    this.deleteModal = !this.deleteModal;
  }

  toggleEditModal(): void {
    this.editModal = !this.editModal;
  }

}
