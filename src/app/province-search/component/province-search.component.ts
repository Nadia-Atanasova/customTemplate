import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DxButtonModule, DxPopupModule, DxSelectBoxModule} from "devextreme-angular";
import {PROVINCES} from "../../consts/defaults.consts";

@Component({
  selector: 'province-search',
  standalone: true,
  imports: [
    DxPopupModule,
    DxButtonModule,
    DxSelectBoxModule
  ],
  templateUrl: './province-search.component.html',
  styleUrl: './province-search.component.css'
})
export class ProvinceSearchComponent {
  @Input() selectedValue: number = 0;
  @Output() selectedValueChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  list = PROVINCES;
  @Input() containerElement: any;

  onAccept() {
    this.selectedValueChange.emit(this.selectedValue);
    this.onHide();
  }

  onCancel() {
    this.onHide();
  }

  onHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  popupReady(e: any) {
    // if (!e.component._isFirstLoad) {
    //   e.component._isFirstLoad = true;
    let contentEl = e.component.content().parentElement;
    contentEl.className += "  dx-dropdowneditor-overlay";
    // }
  }

}
