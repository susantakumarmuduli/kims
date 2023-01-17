import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-two',
  templateUrl: './layout-two.component.html',
  styleUrls: ['./layout-two.component.less'],
})
export class LayoutTwoComponent {
  isMenuShow = true;
  slideMenuShowhide() {
    this.isMenuShow = !this.isMenuShow;
  }
}
