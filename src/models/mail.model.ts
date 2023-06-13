import { Attachment } from "./attachment.model";
import { Receiver } from "./receiver.model";

export interface Mail {
  attachments: Attachment[];

  html: string;

  text: string;

  cc?: Receiver[];

  date: string;

  from: Receiver;

  messageId?: string;

  returnPath?: string;

  subject: string;

  to: Receiver[];
}
