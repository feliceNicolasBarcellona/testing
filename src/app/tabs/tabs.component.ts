import { Component, ContentChildren, Input, QueryList, AfterContentInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @Input() tabs: string[] = [];
  @Input() class: string = '';
  selectedTab: number = 0;

  @ContentChildren(TemplateRef) templates: QueryList<TemplateRef<any>> = new QueryList<TemplateRef<any>>();
  tabTemplates = new Map<string, TemplateRef<any>>();

  constructor() { }

  ngAfterContentInit(): void {
    this.templates.forEach((template, index) => {
      this.tabTemplates.set(this.tabs[index], template);
    });
  }

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
