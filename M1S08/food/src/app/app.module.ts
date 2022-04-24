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
import { LanchesComponent } from './components/content/lanches/lanches.component';
import { BebidasComponent } from './components/content/bebidas/bebidas.component';
import { PorcoesComponent } from './components/content/porcoes/porcoes.component';


const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path: 'sobre', component: AboutComponent
  },
  {
    path: 'cardapioBebidas', component: BebidasComponent // poderi ter subrotinas mas preferi o geito masi simples porque o simples funciona
  },
  {
    path: 'cardapioLanches', component: LanchesComponent
  },
  {
    path: 'cardapioPorcoes', component: PorcoesComponent
  }
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
    LanchesComponent,
    BebidasComponent,
    PorcoesComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }






