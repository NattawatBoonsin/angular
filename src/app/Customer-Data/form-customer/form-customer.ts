import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomer } from '../add-customer/add-customer';

@Component({
  selector: 'app-form-customer',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, FormsModule, MatDialogModule],
  templateUrl: './form-customer.html',
  styleUrl: './form-customer.css'
})
export class FormCustomer {
  constructor(private _dialog: MatDialog) {}

  openAddCustomerForm() {
    this._dialog.open(AddCustomer)
  } 
}
