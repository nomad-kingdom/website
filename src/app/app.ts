import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "@core/partials/header";
import { Footer } from "@core/partials/footer";
import { Loading } from "@core/partials/loading/loading";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Loading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nomad-kingdom');
}
