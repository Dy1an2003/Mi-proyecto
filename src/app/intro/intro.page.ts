import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  username: string = 'dylan.nunez';
  password: string = '1234';

  constructor(private navCtrl: NavController, private router: Router) {}

  login() {
    // Lógica de inicio de sesión aquí

    if (this.username === 'usuario' && this.password === 'contrasena') {
      // Redirigir a la página home después del inicio de sesión exitoso
      this.goToHome();
    } else {
      console.log('Error de inicio de sesión');
    }
  }

  goToHome() {
    // Lógica para redirigir a la página 'home'
    console.log("Go to home");
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
