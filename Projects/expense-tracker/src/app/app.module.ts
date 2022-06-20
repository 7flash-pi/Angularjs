import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { BalanceComponent } from './balance/balance.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';
import { TranscationListComponent } from './transcation-list/transcation-list.component';
import { AddTranscationComponent } from './add-transcation/add-transcation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BalanceComponent,
    IncomeExpensesComponent,
    TranscationListComponent,
    AddTranscationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
