import { Component } from '@angular/core';
import PureCounter from '@srexi/purecounterjs';
import * as Aos from 'aos';
@Component({
  selector: 'mentor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit(): void {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
    new PureCounter();
  }
}
