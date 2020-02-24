import { Component, OnInit, Input } from '@angular/core';
import { IBreadCrumb } from 'src/app/Classes/ibread-crumb';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cats: string[] = ['Categories']


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
  }


}
