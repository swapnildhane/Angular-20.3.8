import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  template: `<div class="work-content">
  <h1>My Work</h1>
  <div class="projects">
    <div class="project">
      <h3>Attendance System</h3>
      <p>AI-powered face recognition with React + Node.js</p>
    </div>
    <div class="project">
      <h3>This Website</h3>
      <p>Angular + StackBlitz with full authentication</p>
    </div>
    <div class="project">
      <h3>More Projects</h3>
      <p>Coming soon... 🚀</p>
    </div>
  </div>
  </div>`,
  styles:[`
  .projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.project {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
  `]
})
export class WorkComponent { }
