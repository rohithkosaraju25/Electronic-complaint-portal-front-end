import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEngineerComponent } from './components/admin/add-engineer/add-engineer.component';
import { AdminHomePageComponent } from './components/admin/admin-home-page/admin-home-page.component';
import { AllEngineersComponent } from './components/admin/all-engineers/all-engineers.component';
import { ChangeDomainComponent } from './components/admin/change-domain/change-domain.component';
import { EngineerDetailsComponent } from './components/admin/engineer-details/engineer-details.component';
import { GetComplaintsByProductcategoryComponent } from './components/admin/get-complaints-by-productcategory/get-complaints-by-productcategory.component';
import { GetComplaintsByProductsComponent } from './components/admin/get-complaints-by-products/get-complaints-by-products.component';
import { GetComplaintsComponent } from './components/admin/get-complaints/get-complaints.component';
import { GetReplaceRequestComplaintsComponent } from './components/admin/get-replace-request-complaints/get-replace-request-complaints.component';
import { RemoveEngineerComponent } from './components/admin/remove-engineer/remove-engineer.component';
import { ReplaceEngineerFromComplaintComponent } from './components/admin/replace-engineer-from-complaint/replace-engineer-from-complaint.component';
import { ClientDetailsComponent } from './components/client/client-details/client-details.component';
import { ClientHomePageComponent } from './components/client/client-home-page/client-home-page.component';
import { GetClientByClientIdComponent } from './components/client/get-client-by-client-id/get-client-by-client-id.component';
import { GetEngineerByDomainComponent } from './components/client/get-engineer-by-domain/get-engineer-by-domain.component';
import { GetEngineerByEngineerIdComponent } from './components/client/get-engineer-by-engineer-id/get-engineer-by-engineer-id.component';
import { BookComplaintComponent } from './components/complaint/book-complaint/book-complaint.component';
import { ChangeComplaintStatusComponent } from './components/complaint/change-complaint-status/change-complaint-status.component';
import { ComplaintDetailsComponent } from './components/complaint/complaint-details/complaint-details.component';
import { GetClientActiveCompalintsComponent } from './components/complaint/get-client-active-compalints/get-client-active-compalints.component';
import { GetClientAllComplaintsComponent } from './components/complaint/get-client-all-complaints/get-client-all-complaints.component';
import { GetClientAllOpenComplaintsComponent } from './components/complaint/get-client-all-open-complaints/get-client-all-open-complaints.component';
import { GetClientOnGoingComplaintsComponent } from './components/complaint/get-client-on-going-complaints/get-client-on-going-complaints.component';
import { GetClientReplacementRequestComplaintsComponent } from './components/complaint/get-client-replacement-request-complaints/get-client-replacement-request-complaints.component';
import { GetClientResolvedComplaintsComponent } from './components/complaint/get-client-resolved-complaints/get-client-resolved-complaints.component';
import { GetEngineerByComplaintIdComponent } from './components/complaint/get-engineer-by-complaint-id/get-engineer-by-complaint-id.component';
import { GetProductByComplaintIdComponent } from './components/complaint/get-product-by-complaint-id/get-product-by-complaint-id.component';
import { RequestToReplaceComponent } from './components/complaint/request-to-replace/request-to-replace.component';
import { ChangeComplaintStatusEngComponent } from './components/engineer/change-complaint-status-eng/change-complaint-status-eng.component';
import { ComplaintByStatusComponent } from './components/engineer/complaint-by-status/complaint-by-status.component';
import { ComplaintDetailsEngComponent } from './components/engineer/complaint-details-eng/complaint-details-eng.component';
import { EngineerHomepageComponent } from './components/engineer/engineer-homepage/engineer-homepage.component';
import { GetAllOpenComplaintsComponent } from './components/engineer/get-all-open-complaints/get-all-open-complaints.component';
import { GetComplaintsByStatusEngComponent } from './components/engineer/get-complaints-by-status-eng/get-complaints-by-status-eng.component';
import { GetOpenComplaintsOrderByPriorityComponent } from './components/engineer/get-open-complaints-order-by-priority/get-open-complaints-order-by-priority.component';
import { GetResolvedComplaintsByDateComponent } from './components/engineer/get-resolved-complaints-by-date/get-resolved-complaints-by-date.component';
import { GetResolvedComplaintsComponent } from './components/engineer/get-resolved-complaints/get-resolved-complaints.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { FindByModelNumberComponent } from './components/product/find-by-model-number/find-by-model-number.component';
import { FindProductComponent } from './components/product/find-product/find-product.component';
import { GetByProductCategoryNameComponent } from './components/product/get-by-product-category-name/get-by-product-category-name.component';
import { GetEngineersByProductCategoryNameComponent } from './components/product/get-engineers-by-product-category-name/get-engineers-by-product-category-name.component';
import { GetEngineersByProductComponent } from './components/product/get-engineers-by-product/get-engineers-by-product.component';
import { GetProductByClientIdComponent } from './components/product/get-product-by-client-id/get-product-by-client-id.component';
import { GetProductComplaintsComponent } from './components/product/get-product-complaints/get-product-complaints.component';
import { GetProductComponent } from './components/product/get-product/get-product.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { RemoveProductsComponent } from './components/product/remove-products/remove-products.component';
import { UpdateProductWarrantyComponent } from './components/product/update-product-warranty/update-product-warranty.component';
import { AboutComponent } from './homepage/about/about.component';
import { ContactComponent } from './homepage/contact/contact.component';
import {  HomepageComponent } from './homepage/homepage.component';
import { ServiceComponent } from './homepage/service/service.component';
import { TeamComponent } from './homepage/team/team.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { ClientLoginComponent } from './login/client-login/client-login.component';
import { EngineerLoginComponent } from './login/engineer-login/engineer-login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { SignupComponent } from './signup/signup.component';



// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : 'admin/adminLogin',component : AdminLoginComponent},
  {path : 'client/clientLogin',component : ClientLoginComponent},
  {path : 'engineer/engineerLogin',component : EngineerLoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]  },
  {path : 'client/saveclient',component : SignupComponent},

  {path:'home',component:HomepageComponent},
  {path : '',redirectTo : 'home',pathMatch : 'full'},
  {path: 'home/service',component:ServiceComponent},
  {path: 'home/about',component:AboutComponent},
  {path: 'home/team',component:TeamComponent},
  {path :'home/contact',component : ContactComponent},
  
  {path:'admin/adminHome/:adminId',component:AdminHomePageComponent},
  {path:'client/clientHome',component:ClientHomePageComponent,canActivate:[AuthGaurdService] },
  {path:'engineer/engineerHome/:engineerId',component:EngineerHomepageComponent},

  //admin
  {path : 'admin/addEngineer',component : AddEngineerComponent},
  {path : 'admin/changedomain',component:ChangeDomainComponent},
  {path : 'admin/status/:status/productCategoryName/:productCategoryName',component : GetComplaintsComponent},
  {path : 'admin/productCategoryName/:productCategoryName',component : GetComplaintsByProductsComponent},
  {path : 'admin/remove/:engineerId',component:RemoveEngineerComponent},
  {path : 'admin/replace/engineer/complaintId/:complaintId',component:ReplaceEngineerFromComplaintComponent},
  {path : 'admin/engineerId/:engineerId',component:EngineerDetailsComponent},
  {path : 'admin/complaintId/:complaintId',component:ComplaintDetailsComponent},
  {path : 'admin/complaints/productByCategoryName',component:GetComplaintsByProductcategoryComponent},
  {path : 'admin/requestedForReplacement',component:GetReplaceRequestComplaintsComponent},
  {path : 'admin/allEngineerDetails',component:AllEngineersComponent},
  {path : 'admin/requestedForReplacement',component:GetReplaceRequestComplaintsComponent},

  //complaint
  {path : 'complaint/bookComplaint',component : BookComplaintComponent,canActivate:[AuthGaurdService] },
  {path : 'complaint/changestatus/:complaintId',component:ChangeComplaintStatusComponent},
  {path : 'complaint/client/:clientId',component : GetClientAllComplaintsComponent},
  {path : 'complaint/open/client/:clientId',component : GetClientAllOpenComplaintsComponent},
  {path : 'complaint/engineer/complaintId/:complaintId',component:GetEngineerByComplaintIdComponent},
  {path : 'complaint/product/complaintId/:complaintId',component:GetProductByComplaintIdComponent},
  {path : 'complaint/complaintId/:complaintId',component:ComplaintDetailsComponent},
  {path:  'complaint/active/client/:clientId',component:GetClientActiveCompalintsComponent},
  {path : 'complaint/modelNumber/:modelNumber',component:ProductDetailsComponent},
  {path : 'complaint/requeststatus/:complaintId',component:RequestToReplaceComponent},
  {path : 'complaint/requested/replacement/client/:clientId',component:GetClientReplacementRequestComplaintsComponent},
  {path : 'complaint/resolved/client/:clientId',component:GetClientResolvedComplaintsComponent},
  {path : 'complaint/onGoing/client/:clientId',component:GetClientOnGoingComplaintsComponent},
  
  //product
  {path : 'product/addProduct',component:AddProductComponent},
  {path : 'product/modelNumber',component:FindProductComponent},
  {path : 'product/deletebyCategory',component:RemoveProductsComponent},
  {path : 'product/categoryName/:productCategoryName',component : GetByProductCategoryNameComponent},
  {path : 'product/updateWarranty/:modelNumber',component : UpdateProductWarrantyComponent},
  {path : 'product/productCategoryName/engineer/:productCategoryName',component:GetEngineersByProductComponent},
  {path : 'product/complaint/productCategoryName/:productCategoryName',component:GetProductComplaintsComponent},
  {path : 'product/productmodelNumber/:modelNumber',component:ProductDetailsComponent},
  {path : 'product/engineers/productCategoryName',component:GetEngineersByProductCategoryNameComponent},
  {path : 'product/getproduct/productCategoryName',component:GetProductComponent},
  {path : 'product/modelNumber/:modelNumber',component:FindByModelNumberComponent},
  {path : 'product/clientId/:clientId',component:GetProductByClientIdComponent},
 
  //engineer
  {path : 'engineer/opencomplaints/:engineerId', component : GetAllOpenComplaintsComponent},
  {path : 'engineer/resolvedcomplaints/:engineerId', component : GetResolvedComplaintsComponent},
  {path : 'engineer/opencomplaints/date/:engineerId', component : GetResolvedComplaintsByDateComponent},
  {path : 'engineer/complaints/:engineerId/status', component : GetComplaintsComponent},
  {path : 'engineer/changestatus/:complaintId', component : ChangeComplaintStatusEngComponent},
  {path : 'engineer/opencomplaints/priority/:engineerId', component : GetOpenComplaintsOrderByPriorityComponent},
  {path : 'engineer/complaints/:engineerId', component : ComplaintByStatusComponent},
  {path : 'engineer/complaints/:engineerId/status/:status', component : GetComplaintsByStatusEngComponent},
  {path : 'engineer/complaintId/:complaintId', component : ComplaintDetailsEngComponent},
  
  //client
  {path : 'client/:clientId',component : GetClientByClientIdComponent},
  {path : 'client/engineerId/:engineerId',component : GetEngineerByEngineerIdComponent},
  {path : 'client/engineerdomain/:domain',component:GetEngineerByDomainComponent},
  {path : 'client/details/clientId/:clientId',component:ClientDetailsComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
