import { NewsService } from './../../services/news.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit,OnDestroy {
  private routerSubscription : Subscription;
  private categoryName : string;
  pageLoading : boolean;
  constructor(private router:Router,private route:ActivatedRoute,private newsService:NewsService) { }

  ngOnInit(): void {
    this.pageLoading = true;
    this.routerSubscription = this.route.queryParams.subscribe((params:Params)=>{
      this.categoryName = params['categoryName'];
      this.newsService.getNewsByCategory(this.categoryName).then(
        (value)=>{
          console.log(value);
          this.pageLoading = false;
        }
      ).catch(
        (reason)=>{
          console.log(reason);
          this.pageLoading = false;
        }
      )
    })
  }

  ngOnDestroy() : void {
    this.routerSubscription.unsubscribe();
  }

}
