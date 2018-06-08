import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/Services/spacex-api.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  companyInfo: CompanyInfo;

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getCompanyInfo().subscribe(data => {
      this.companyInfo = data;
    });
  }
  ngOnInit() {
  }
}
