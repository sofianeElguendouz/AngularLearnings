import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  message = "hello, it's me SOFIANE ! :D"
  status = "éteint"
  isAuth = false
  @Input() theName : string;

  constructor(){
    setTimeout(     () => {this.isAuth = true;}   ,  4000     );
  }


  ngOnInit() {
  }


  getMSG(){
    return this.message;
  }


  onAllumer() {
    console.log('On allume tout !');
    this.isAuth = false;
  }

}
