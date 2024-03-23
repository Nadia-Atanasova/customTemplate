import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DxButtonModule, DxPopupModule, DxSelectBoxModule} from "devextreme-angular";
import {PROVINCES} from "../../consts/defaults.consts";

@Component({
  selector: 'province-selection',
  standalone: true,
  imports: [
    DxPopupModule,
    DxButtonModule,
    DxSelectBoxModule
  ],
  templateUrl: './province-selection.component.html',
  styleUrl: './province-selection.component.css'
})
export class ProvinceSelectionComponent {
  @Input() selectedValue: number = 0;
  @Output() selectedValueChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  list = PROVINCES;

  onAccept() {
    this.selectedValueChange.emit(this.selectedValue);
  }

  onCancel() {
    this.onHide();
  }

  onHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

}
