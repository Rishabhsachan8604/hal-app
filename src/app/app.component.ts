import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    "../assets/plugins/jquery-ui/jquery-ui.min.css",
    "../assets/plugins/bootstrap/bootstrap-4.1.1/css/bootstrap.min.css",
    "../assets/plugins/font-awesome/5.1/css/all.css",
    "../assets/css/animate.min.css",
    "../assets/css/style.min.css",
    "../assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css"]
})
export class AppComponent {
  title = 'hal';
}
