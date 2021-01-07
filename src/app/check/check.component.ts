import { Component, OnInit } from '@angular/core';
// import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  selectedCategories: string[] = [ 'Sports'];

  uploadedFiles: any[] = [];

  constructor() {}
  // private messageService: MessageService
  // onUpload(event) {
  //     for(let file of event.files) {
  //         this.uploadedFiles.push(file);
  //     }

  //     this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  // }

  ngOnInit() {
  }

}
