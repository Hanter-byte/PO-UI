import { Component } from '@angular/core';
import { PoMenuPanelItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Customers';

  public readonly menuItems: Array<PoMenuPanelItem> = [
    {
      label: 'Home',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-home',
    },
    {
      label: 'Customers',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-user',
    },
    {
      label: 'New Sale',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-money',
    },
    {
      label: 'Gift',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-gift',
    },
    {
      label: 'Settings',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-settings',
    },
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }
}
