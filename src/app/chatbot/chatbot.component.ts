import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  @Input() flowData: any; // Objeto com o fluxo e as ações globais

  flowItems: any[] = [];
  flowItemsFiltered: any[] = [];
  selectedItems: any[] = [];

  selectedAll = false;

  selectedItem: any;
  filterInput: any;

  constructor() { }

  ngOnInit() {
    this.extractFlowItems();
  }

  private extractFlowItems() {
    if (this.flowData && this.flowData.flow) {
      this.flowItems = Object.values(this.flowData.flow);
      this.flowItemsFiltered = this.flowItems
    }
  }

  onSelect(item: any) {
    const index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item); // Adiciona o item aos selecionados
    } else {
      this.selectedItems.splice(index, 1); // Remove o item dos selecionados
    }
  }

  isSelected(item: any): boolean {
    return this.selectedItems.indexOf(item) !== -1; // Verifica se o item está selecionado
  }

  filter() {
    this.flowItemsFiltered = this.flowItems.filter(o => o.$title.toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z]/g, "").includes(this.filterInput.toLowerCase().normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z]/g, "")))
  }

  toggleSelectAll() {
    if (this.selectedAll) {
      this.selectedItems = [...this.flowItemsFiltered]; // Seleciona todos os itens filtrados
    } else {
      this.selectedItems = []; // Limpa a seleção
    }
  }

}
