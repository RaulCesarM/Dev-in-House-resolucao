import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngf-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  
  
  key: string = 'selecao';
  selecaoLS: string ='';



  constructor() {  }

  ngOnInit(): void {
    this.selecaoLS = 'lanche';
    
  }

  chamarCategoria(n: any) {
   var num = n;
   
   if(num == 1){
     this.selecaoLS = "lanche";
     
    
   }else if(num == 2){
     this.selecaoLS = "bebidas";
     
     
   }else if(num == 3){
     this.selecaoLS = "porcao";
     
     ///aqui eu abasteço o localstorage
   }

    localStorage.setItem(this.key, this.selecaoLS);//passo o numero páraemtro depois abastço o localstorage
   
    // dai pra usar crei os componentes

  }
/// mas como pode ver é só um db  mas eu coloquei categorisa
  
 ///aqui aquele lance de troca no dropdown 


}
