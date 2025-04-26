import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pdto-private',
  imports: [RouterOutlet],
  templateUrl: './private.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateComponent {}
