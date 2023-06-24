import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import postalMime from 'postal-mime';
import { Attachment } from 'src/models/attachment.model';
import { Mail } from 'src/models/mail.model';

@Component({
  selector: 'app-emailviewer',
  templateUrl: './emailviewer.component.html',
  styleUrls: ['./emailviewer.component.scss'],
})
export class EmailviewerComponent {
  parsed: any;

  @Input()
  public mailSrc: string;

  private config: any = {
    api: '',
  };

  private mailId: string;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  download(file: Attachment): void {
    const downloadLink = document.createElement('a');
    downloadLink.download = file.filename;
    const blob = new Blob([file.content]);
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.style.display = 'none';
    downloadLink.onclick = (event: any) => {
      document.body.removeChild(event.target);
    };
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  async ngOnInit(): Promise<void> {
    await this.route.queryParams.subscribe((params) => {
      this.mailId = params['mailId'];
    });
    // this.config = await this.http
    //   .get<any>(`assets/demo.config.json`)
    //   .toPromise();

    // let url = `${this.config.api}/${this.mailId}`;

    // if (this.config.api.match(/{mailId}/)) {
    //   url = this.config.api.replace(/{mailId}/, this.mailId);
    // }
    const parser = new postalMime();
    const email = await this.http
      .get<Blob>(this.mailSrc, {
        observe: 'response',
        responseType: 'blob' as 'json',
      })
      .toPromise();
      debugger;
    this.parsed = await parser.parse(email.body);
    console.log(this.parsed);
  }
}
