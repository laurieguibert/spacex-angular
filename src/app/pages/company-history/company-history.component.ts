import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/Services/spacex-api.service';

@Component({
  selector: 'app-company-history',
  templateUrl: './company-history.component.html',
  styleUrls: ['./company-history.component.scss']
})
export class CompanyHistoryComponent implements OnInit {
  companyHistory: CompanyHistory;

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getCompanyHistory().subscribe(data => {
      this.companyHistory = data;
    });
  }
  ngOnInit() {
  }

}
