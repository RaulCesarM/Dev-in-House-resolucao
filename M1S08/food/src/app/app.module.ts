import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadersComponent } from './components/headers/headers.component';
import { ContentComponent } from './components/content/content.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';

import { FormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';


const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path: 'sobre', component: AboutComponent
  },
  {
    path: 'cardapio', component: CardapioComponent
  },
  {
    path: 'cardapio', component: ContentComponent
  },
  {
    path: 'pedido', component: PedidosComponent
  },
  {
    path: 'usuario', component: UsersComponent
  },



];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeadersComponent,
    ContentComponent,
    AboutComponent,
    HomeComponent,
    CarrouselComponent,
    CardapioComponent,
    UsersComponent,
    PedidosComponent,
 
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }






