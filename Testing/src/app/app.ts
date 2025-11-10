import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';


// Signals
const firstName = signal("Morger");
console.log(firstName());
firstName.set('Swapnil');
console.log(firstName());

//computed 
const firstNameCapitalized = computed(() => firstName().toUpperCase());
console.log(firstNameCapitalized());
firstName.set('Dhane');
console.log(firstNameCapitalized());


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Testing');

  //Setting dynamic properties and attributes
  isValidUser = signal(true);

  //Handling user interaction
  cancelSubscription(){
    console.log("Subscription cancelled.")
    return;
  }

  cancleSubscription(event:Event){
    console.log("Event",event);
    return;
  }
}
