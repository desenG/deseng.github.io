import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  title: string = "Are you sure you want to logout?";
  message: string = "If you logout bad things might happen, but don't mind me, I'm just the description in a modal...";
  textAction: string = "Logout";
  textClose: string = "Go back";
  constructor(
    public dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    if (data.title)this.title = data.title;
    if (data.message) this.message = data.message;
    if (data.textAction) this.textAction = data.textAction;
    if (data.textClose) this.textClose = data.textClose;
  }

  ngOnInit() {
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    this.dialogRef.close(true);
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close(false);
  }

  
}
