export interface Attachment {
  content: ArrayBuffer;

  contentId: string;

  disposition: string;

  filename: string;

  mimeType: string;

  related: boolean;
}
