import {Component, Input} from '@angular/core';
import {DxButtonModule, DxTextBoxModule} from "devextreme-angular";
import {ProvinceSelectionComponent} from "../../province-selection/component/province-selection.component";
import {DxButtonTypes} from "devextreme-angular/ui/button";

@Component({
  selector: 'province-column',
  standalone: true,
  imports: [
    DxTextBoxModule,
    ProvinceSelectionComponent,
    DxButtonModule
  ],
  templateUrl: './province-column.component.html',
  styleUrl: './province-column.component.css'
})
export class ProvinceColumnComponent {
  @Input() data: any;
  showPopup: boolean = false;

  searchButton = {
    icon: 'search',
    onClick: () => {
      this.offerSelection();
    },
  };

  onValueChanged($event: any) {
    this.data?.setValue($event.value);
  }

  offerSelection() {
    this.showPopup = true;
  }
  onPopupSelection($event: any) {
    this.data?.setValue($event);
  }
}
