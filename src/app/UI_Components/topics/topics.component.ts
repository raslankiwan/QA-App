import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/Classes/topic';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  constructor() { }
  @Input() topic: Topic;
  stringifiedTopic: string
  ngOnInit(): void {
    this.stringifiedTopic = JSON.stringify(this.topic);
  }

}
