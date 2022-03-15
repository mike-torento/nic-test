import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicTableCellConfig, DynamicTableConfig } from '../dynamic-table/dynamic-table.model';

@Component({
  selector: 'app-dynamic-table-cell-wrapper',
  templateUrl: './dynamic-table-cell-wrapper.component.html',
  styleUrls: ['./dynamic-table-cell-wrapper.component.less']
})
export class DynamicTableCellWrapperComponent implements OnInit {


  @Input() public cellData: any;
  @Input() public cellConfig!: DynamicTableCellConfig;

  @ViewChild("cellContainer", { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.createComponent();
  }

  createComponent() {
    this.container.clear(); 
    const factory = this.resolver.resolveComponentFactory(this.cellConfig.component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.value = this.cellData;
  }

}
