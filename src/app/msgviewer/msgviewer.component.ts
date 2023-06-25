import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import MsgReader from '@kenjiuno/msgreader';

@Component({
  selector: 'app-msgviewer',
  templateUrl: './msgviewer.component.html',
  styleUrls: ['./msgviewer.component.scss']
})
export class MsgviewerComponent {

  @Input()
  url : string;

  body : string;
  senderName : string;
  senderEmail : string;
  emailSubject : string;
  attachments : any[];
  msgFile : any;
  msgReader : MsgReader;
  recipientEmail : string;



  constructor(private http: HttpClient) {}

  download(file: any): void {
        let fileContent = this.msgReader.getAttachment(file).content;
        const downloadLink = document.createElement('a');
        downloadLink.download = file.fileName;
        const blob = new Blob([fileContent]);
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.style.display = 'none';
        downloadLink.onclick = (event: any) => {
          document.body.removeChild(event.target);
        };
        document.body.appendChild(downloadLink);
        downloadLink.click();
  }

  ngOnInit() {
    this.http.get(this.url, { responseType: 'arraybuffer' }).subscribe((arrayBuffer: ArrayBuffer) => {
      const byteArray = new Uint8Array(arrayBuffer);
      this.msgReader = new MsgReader(byteArray);
      this.msgFile = this.msgReader.getFileData();
      console.log(this.msgFile);
      this.body = this.msgFile.body;
      this.senderEmail = this.msgFile.senderEmail;
      this.emailSubject = this.msgFile.subject;
      this.senderName = this.msgFile.senderName;
      this.attachments = this.msgFile.attachments;
      this.recipientEmail = this.msgFile.recipients.smtpAddress;
    
    });
    return true;
  }
  
}
