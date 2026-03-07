import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar">
<div class="nav-brand">RD Graphics</div>
<ul class="nav-links">
  <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
  <li><a routerLink="/about" routerLinkActive="active">About</a></li>
  <li><a routerLink="/work" routerLinkActive="active">Work</a></li>
  <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
  <li class="user-section">
    Hi, {{ user?.username }}! 
    <button (click)="logout()">Logout</button>
  </li>
</ul>
</nav>

  `,
  styles: [`
    .navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}
.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;
  margin-left: auto;
}
.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s;
}
.nav-links a:hover, .nav-links a.active {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}
.user-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
}
.user-section button {
  background: rgba(255,255,255,0.2);
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}
.user-section button:hover {
  background: white;
  color: #667eea;
}
  `]
})
export class NavComponent implements OnInit {
  user: any = null;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.currentUser;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
