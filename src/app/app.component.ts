import { Component } from '@angular/core'; //using gibi

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // ./aynı klasör demek
  styleUrls: ['./app.component.css'] //dizi
})
export class AppComponent {
  title = 'northwind'; // title:string = "northwind"; diye de yazılabilirdi
  user: string = "Engin Demiroğ"
  
}

//html'sinin datasını yönettiğimiz yer bu component