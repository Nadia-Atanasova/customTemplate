import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DxButtonModule,
  DxDataGridModule, DxPopupModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxValidationSummaryModule,
  DxValidatorModule
} from "devextreme-angular";
import {IProvince} from "./interfaces/provincias.interface";
import {ProvinceColumnComponent} from "./province-column/component/province-column.component";

@Component({
  imports: [DxDataGridModule, DxValidatorModule, DxValidationSummaryModule, DxTemplateModule, DxTextBoxModule, DxButtonModule, DxPopupModule, ProvinceColumnComponent],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'customTemplate';
  dataSource: IProvince[] = [];
}
