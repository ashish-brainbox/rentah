import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from '../services/reports.service';
@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  p: any = 1;
  public allCategories: any[] = [];
  public dummyCategories: any[] = [];
  searchName: string = '';

  showSearchIcon: boolean = true;

  constructor(
    public matDialog: MatDialog,
    private changeDetection: ChangeDetectorRef,
    private spinnerService: NgxSpinnerService,
    private toast: ToastrService,
    private reportService:ReportsService
    
  ) {

  }

  ngOnInit(): void {
    // this.getReports()
  }

  getReports() {
    this.spinnerService.show();
    this.reportService.readReport().subscribe((data: any) => {
      console.log(data, "reports list")
      this.changeDetection.detectChanges();  //Updating array on HTML side only
      this.spinnerService.hide();
    }, (err: any) => {
      console.log('reports list error')
      this.spinnerService.hide();
    });
  }

  // editBannerDialog(banner: any) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   dialogConfig.id = 'add-category-component';
  //   dialogConfig.height = "395px";
  //   dialogConfig.width = "545px";
  //   dialogConfig.panelClass = 'custom-container1';
  //   dialogConfig.data = banner;
  //   const modalDialog = this.matDialog.open(BannersAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
  //     if (confirm) {
  //       this.getBanners()
  //     }
  //   })
  // }

  // addNewBanner() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   dialogConfig.id = 'add-category-component';
  //   dialogConfig.height = "395px";
  //   dialogConfig.width = "545px";
  //   dialogConfig.panelClass = 'custom-container1';
  //   dialogConfig.data = {};
  //   const modalDialog = this.matDialog.open(BannersAddUpdateComponent, dialogConfig).afterClosed().subscribe(confirm => {
  //     if (confirm) {
  //       this.getBanners()
  //     }
  //   })
  // }

  // deleteBannerDialog(bannerId: string) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   dialogConfig.id = 'del-category-component';
  //   dialogConfig.height = "190px";
  //   dialogConfig.width = "510px";
  //   dialogConfig.panelClass = 'custom-container';
  //   dialogConfig.data = { bannerId: bannerId };
  //   const modalDialog = this.matDialog.open(BannerDeleteComponent, dialogConfig).afterClosed().subscribe(confirm => {
  //     if (confirm) {
  //       this.getBanners()
  //     }
  //   })
  // }


}
