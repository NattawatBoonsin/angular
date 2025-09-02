import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { AddOrder } from '../add-order/add-order';

@Component({
  selector: 'app-add-customer',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, FormsModule, MatDialogModule, MatTabsModule],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.css'
})
export class AddCustomer {
   constructor(private _dialog: MatDialog) {}

  openAddOrderForm() {
    this._dialog.open(AddOrder)
  } 

}
