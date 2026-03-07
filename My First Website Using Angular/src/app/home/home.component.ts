import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="hero">
<h1>Welcome to My Website!</h1>

<div class="features">
  <div class="feature-card">
    <h3>🔐 Secure Login</h3>
    <p>Protected routes with AuthGuard</p>
  </div>
  <div class="feature-card">
    <h3>🏠 Responsive Design</h3>
    <p>Modern navbar with active states</p>
  </div>
  <div class="feature-card">
    <h3>⚡ Fast Loading</h3>
    <p>StackBlitz optimized Angular app</p>
  </div>
</div>
</div>
  `,
  styles: [`
    .hero {
  text-align: center;
  padding: 3rem 0;
}
h1 {
  font-size: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-bottom: 1rem;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}
.feature-card:hover {
  transform: translateY(-5px);
}
  `]
})
export class HomeComponent { }
