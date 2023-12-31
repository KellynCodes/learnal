import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'learnal-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent implements OnInit {
  links: AnchorDto[] = [
    {
      id: 1,
      title: 'Home',
      href: 'https://learnal.netlify.app/about',
      text: 'About me',
    },

    {
      id: 2,
      title: 'Contact',
      href: 'https://engkelly.netlify.app/contact',
      text: 'Contact me',
    },
  ];

  input: string = '';
  filteredLinks: AnchorDto[] = [];

  @ViewChild('resultsBox', { static: true }) resultsBoxRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onKeyUp(): void {
    if (this.input.length) {
      this.filteredLinks = this.links.filter((link) =>
        link.text.toLowerCase().includes(this.input.toLowerCase())
      );
    } else {
      this.filteredLinks = [];
    }
  }
}

export interface AnchorDto {
  id: number;
  title: string;
  href: string;
  text: string;
}
