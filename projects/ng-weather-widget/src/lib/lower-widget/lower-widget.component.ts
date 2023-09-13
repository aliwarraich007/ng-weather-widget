import { Component, Input } from '@angular/core';
import { IconTransform } from '../@core/utils/icon-transform';
@Component({
  selector: 'app-lower-widget',
  templateUrl: './lower-widget.component.html',
  styleUrls: ['./lower-widget.component.scss'],
})
export class LowerWidgetComponent {
  @Input() icon: string = '';
  @Input() tempMax!: number;
  @Input() tempMin!: number;
  @Input() day!: number;

  iconRender(icon: string) {
    let iconName = IconTransform(icon);
    return iconName;
  }
}
