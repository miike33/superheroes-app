import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../models/heroes.model';
import { DialogLiterals } from '../../constants/constants';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirmDialog.component.html',
  styles: [],
})
export class ConfirmDialogComponent {
  public literals = DialogLiterals;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
