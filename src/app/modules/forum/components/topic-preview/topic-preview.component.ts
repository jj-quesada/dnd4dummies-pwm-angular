import { Component } from '@angular/core';
import { ROUTES, Router } from '@angular/router';

@Component({
  selector: 'app-topic-preview',
  templateUrl: './topic-preview.component.html',
  styleUrl: './topic-preview.component.scss'
})
export class TopicPreviewComponent {

  routesURL = ROUTES;
  
  constructor(private router: Router) {}

  goToTopic(): void {
    this.router.navigate(['/forum/topic']);
  }
  
  
}
