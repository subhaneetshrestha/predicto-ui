import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pdto-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'predicto-ui';
}
