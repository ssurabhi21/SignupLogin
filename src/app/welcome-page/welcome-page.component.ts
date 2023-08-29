import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Update the path if needed

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  username!: string; // Add the "!" operator to indicate it will be assigned in ngOnInit

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.getLoggedInUsername();
  }
}
