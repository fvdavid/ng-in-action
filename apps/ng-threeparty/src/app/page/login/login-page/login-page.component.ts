import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { LoginCardComponent } from "../login-card/login-card.component";

@Component({
  selector: 'app-login-page',
  imports: [
    NgxTypedWriterModule,
    LoginCardComponent
],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

}
