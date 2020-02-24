import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/Classes/topic';
import { FetchTopicsService } from 'src/app/Services/fetch-topics.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  topics: Topic [] = []
  constructor(
    private fetchTopicsService: FetchTopicsService
  ) { }

 // menuItems=[{name: 'Categories', path: 'home'}]

  ngOnInit(): void {
    this.fetchTopics();
  }

  fetchTopics(): void {
    this.fetchTopicsService.fetchTopics()
    .subscribe(topics => this.topics = topics)
  }

}
