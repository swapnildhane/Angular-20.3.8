import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<div class="about-content">
  <h1>About Me</h1>
  <p>Software developer with 3+ years experience in React, Node.js, and now Angular!</p>
  <p>Building modern web applications with authentication, responsive design, and great UX.</p>
  <div class="skills">
    <h3>Skills</h3>
    <ul>
      <li>Angular • React • Node.js</li>
      <li>Authentication & Guards</li>
      <li>Responsive Design</li>
      <li>StackBlitz Development</li>
    </ul>
  </div>
  </div>`,

  
  styles: [`.about-content {
    max-width: 800px;
  }
  h1 {
    color: #333;
    margin-bottom: 2rem;
  }
  .skills ul {
    list-style: none;
    padding: 0;
  }
  .skills li {
    background: #f8f9fa;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #667eea;
  }`]
})
export class AboutComponent { }
