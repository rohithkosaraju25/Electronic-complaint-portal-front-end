import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEngineerComponent } from './components/admin/add-engineer/add-engineer.component';
import { ChangeDomainComponent } from './components/admin/change-domain/change-domain.component';
import { RemoveEngineerComponent } from './components/admin/remove-engineer/remove-engineer.component';
import { GetComplaintsComponent } from './components/admin/get-complaints/get-complaints.component';
import { GetComplaintsByProductsComponent } from './components/admin/get-complaints-by-products/get-complaints-by-products.component';
import { ReplaceEngineerFromComplaintComponent } from './components/admin/replace-engineer-from-complaint/replace-engineer-from-complaint.component';
import { EngineerDetailsComponent } from './components/admin/engineer-details/engineer-details.component';
import { ComplaintDetailsComponent } from './components/complaint/complaint-details/complaint-details.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { ClientLoginComponent } from './login/client-login/client-login.component';
import { EngineerLoginComponent } from './login/engineer-login/engineer-login.component';
import { AdminHomePageComponent } from './components/admin/admin-home-page/admin-home-page.component';
import { EngineerHomepageComponent } from './components/engineer/engineer-homepage/engineer-homepage.component';
import { AllEngineersComponent } from './components/admin/all-engineers/all-engineers.component';
import { GetReplaceRequestComplaintsComponent } from './components/admin/get-replace-request-complaints/get-replace-request-complaints.component';
import { FindByClientIdComponent } from './components/client/find-by-client-id/find-by-client-id.component';
import { GetClientByClientIdComponent } from './components/client/get-client-by-client-id/get-client-by-client-id.component';
import { GetEngineerByDomainComponent } from './components/client/get-engineer-by-domain/get-engineer-by-domain.component';
import { GetEngineerByEngineerIdComponent } from './components/client/get-engineer-by-engineer-id/get-engineer-by-engineer-id.component';
import { BookComplaintComponent } from './components/complaint/book-complaint/book-complaint.component';
import { GetClientAllComplaintsComponent } from './components/complaint/get-client-all-complaints/get-client-all-complaints.component';
import { ChangeComplaintStatusComponent } from './components/complaint/change-complaint-status/change-complaint-status.component';
import { GetClientAllOpenComplaintsComponent } from './components/complaint/get-client-all-open-complaints/get-client-all-open-complaints.component';
import { GetEngineerByComplaintIdComponent } from './components/complaint/get-engineer-by-complaint-id/get-engineer-by-complaint-id.component';
import { GetProductByComplaintIdComponent } from './components/complaint/get-product-by-complaint-id/get-product-by-complaint-id.component';
import { GetClientActiveCompalintsComponent } from './components/complaint/get-client-active-compalints/get-client-active-compalints.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './homepage/about/about.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './homepage/team/team.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { ClientHomePageComponent } from './components/client/client-home-page/client-home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { RequestToReplaceComponent } from './components/complaint/request-to-replace/request-to-replace.component';
import { GetClientResolvedComplaintsComponent } from './components/complaint/get-client-resolved-complaints/get-client-resolved-complaints.component';
import { GetClientOnGoingComplaintsComponent } from './components/complaint/get-client-on-going-complaints/get-client-on-going-complaints.component';
import { GetClientReplacementRequestComplaintsComponent } from './components/complaint/get-client-replacement-request-complaints/get-client-replacement-request-complaints.component';
import { ClientDetailsComponent } from './components/client/client-details/client-details.component';
import { GetAllOpenComplaintsComponent } from './components/engineer/get-all-open-complaints/get-all-open-complaints.component';
import { ChangeComplaintStatusEngComponent } from './components/engineer/change-complaint-status-eng/change-complaint-status-eng.component';
import { GetResolvedComplaintsByDateComponent } from './components/engineer/get-resolved-complaints-by-date/get-resolved-complaints-by-date.component';
import { GetResolvedComplaintsComponent } from './components/engineer/get-resolved-complaints/get-resolved-complaints.component';
import { ComplaintByStatusComponent } from './components/engineer/complaint-by-status/complaint-by-status.component';
import { GetOpenComplaintsOrderByPriorityComponent } from './components/engineer/get-open-complaints-order-by-priority/get-open-complaints-order-by-priority.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { FindProductComponent } from './components/product/find-product/find-product.component';
import { FindByModelNumberComponent } from './components/product/find-by-model-number/find-by-model-number.component';
import { RemoveProductsComponent } from './components/product/remove-products/remove-products.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { GetProductByClientIdComponent } from './components/product/get-product-by-client-id/get-product-by-client-id.component';
import { GetProductComplaintsComponent } from './components/product/get-product-complaints/get-product-complaints.component';
import { UpdateProductWarrantyComponent } from './components/product/update-product-warranty/update-product-warranty.component';
import { GetEngineersByProductCategoryNameComponent } from './components/product/get-engineers-by-product-category-name/get-engineers-by-product-category-name.component';
import { GetProductComponent } from './components/product/get-product/get-product.component';
import { ClientServiceService } from './services/client-service.service';
import { ProductService } from './services/product.service';
import { AdminService } from './services/admin.service';
import { ComplaintService } from './services/complaint.service';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { AuthenticationService } from './services/authentication.service';
import { EngineerService } from './services/engineer.service';
import { GetComplaintsByProductcategoryComponent } from './components/admin/get-complaints-by-productcategory/get-complaints-by-productcategory.component';
import { GetEngineersByProductComponent } from './components/product/get-engineers-by-product/get-engineers-by-product.component';
import { GetByProductCategoryNameComponent } from './components/product/get-by-product-category-name/get-by-product-category-name.component';
import { GetComplaintsByStatusEngComponent } from './components/engineer/get-complaints-by-status-eng/get-complaints-by-status-eng.component';
import { ComplaintDetailsEngComponent } from './components/engineer/complaint-details-eng/complaint-details-eng.component';



@NgModule({
  declarations: [
   //login
    AdminLoginComponent,
    ClientLoginComponent,
    EngineerLoginComponent,

    //logout
    LogoutComponent,

    //register
    SignupComponent,
    
    //home
    HomepageComponent,
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    AdminHomePageComponent,
    ClientHomePageComponent,
    EngineerHomepageComponent,

    AppComponent,
    //admin
    AddEngineerComponent,
    AllEngineersComponent,
    ChangeDomainComponent,
    RemoveEngineerComponent,
    GetComplaintsComponent,
    GetComplaintsByProductsComponent,
    GetComplaintsByProductcategoryComponent,
    ReplaceEngineerFromComplaintComponent,
    EngineerDetailsComponent, //route it to eng
    ComplaintDetailsComponent, //routr it to complaint
    GetReplaceRequestComplaintsComponent,
   

    //client
    GetClientByClientIdComponent,
    GetEngineerByDomainComponent,
    GetEngineerByEngineerIdComponent,//route to eng
    ClientDetailsComponent,

    //complaint
    BookComplaintComponent,
    ChangeComplaintStatusComponent,
    GetClientAllComplaintsComponent,
    GetClientAllOpenComplaintsComponent,
    GetEngineerByComplaintIdComponent,
    GetProductByComplaintIdComponent,
    ComplaintDetailsComponent,
    GetClientActiveCompalintsComponent,
    RequestToReplaceComponent,
    GetClientResolvedComplaintsComponent,
    GetClientOnGoingComplaintsComponent,
    GetClientReplacementRequestComplaintsComponent,
    
    //engineer
    GetAllOpenComplaintsComponent,
    GetResolvedComplaintsByDateComponent,
    GetResolvedComplaintsComponent,
    ComplaintByStatusComponent,
    GetOpenComplaintsOrderByPriorityComponent,
    ChangeComplaintStatusEngComponent,
    GetComplaintsByStatusEngComponent,
    ComplaintDetailsEngComponent,

    //product
    AddProductComponent,
    FindProductComponent,
    FindByModelNumberComponent,
    RemoveProductsComponent,
    ProductDetailsComponent,
    GetProductByClientIdComponent,
    GetProductComplaintsComponent,
    UpdateProductWarrantyComponent,
    GetEngineersByProductCategoryNameComponent,
    GetEngineersByProductComponent,
    GetProductComponent,
    GetByProductCategoryNameComponent,
    
    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ComplaintService,AdminService,ClientServiceService,ProductService,EngineerService,AuthGaurdService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
