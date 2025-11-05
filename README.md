# 🔧 Angular Installation Guide

Follow the steps below to set up Angular on your system:

1️⃣ Install Node.js (Required)

Download and install Node.js (LTS version 18 or above) from:

https://nodejs.org/

To verify installation:

node -v
npm -v

2️⃣ Install Angular CLI

Run the following command in your terminal:

npm install -g @angular/cli


Verify Angular installation:

ng version

3️⃣ Create a New Angular Project
ng new ProjectName


Move into the project folder:

cd ProjectName

4️⃣ Run the Angular Application
ng serve --open


This will automatically open the application in your browser at:

http://localhost:4200/

5️⃣ Generate Components / Services (Optional)

Generate a new component:

ng generate component component-name


Generate a new service:

ng generate service service-name
