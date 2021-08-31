import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { StorageService } from 'src/app/services/storage.service';
import * as Chart from 'chart.js'
@Component({
  selector: 'app-agua',
  templateUrl: './agua.page.html',
  styleUrls: ['./agua.page.scss'],
})
export class AguaPage implements OnInit {

  constructor(
    public router: Router,
    private _storage: StorageService,
    private _apiService: ApiServiceService,
    private ref: ChangeDetectorRef
  ) { }

  private grafChart: Chart;
  user: any;
  listData = [];

  ngOnInit() {
    let a =['Ene'];
    let b =[0];
    this.genereteChart(a,b);
    this.getAgua();
  }

  goInicio() {
    this.router.navigate(['/inicio']);
  }

  async getAgua() {
    this.user = await this._storage.getLocalStorage('user');
    this._apiService.getConsumoAgua(this.user.username).subscribe((res: any) => {
      if (!res) return;
      console.log(res);
      this.listData = res.data;
      let labels = [];
      let data = [];
      for (let i = 1; i < 6; i++) {
        if (res.data.length < i) return;
        labels.push(res.data[res.data.length - i].mes);
        data.push(Math.round(res.data[res.data.length - i].monto));
      }

      this.genereteChart(labels,data);
      this.ref.detectChanges();
     
    });
  }

  genereteChart(a,b) {
    const ctx = document.getElementById('canva');
    this.grafChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: a,
        datasets: [{
          label: 'Monto en soles',
          data: b,
          lineTension: 0,
          fill: false,
          borderColor: '#3c40c2 ',
          backgroundColor: 'transparent',
          pointBackgroundColor: '#3c40c2 ',
          pointRadius: 2,
          pointHoverRadius: 10,
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
