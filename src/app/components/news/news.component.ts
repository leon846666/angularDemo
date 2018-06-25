import { Component, OnInit } from '@angular/core';
import { Http,Jsonp,Headers } from '@angular/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public dd=[];
  constructor(private http:Http,private jsonp:Jsonp) { }
  private headers = new Headers({'Content-Type': 'application/json'});


  ngOnInit() {
  }

  requestData(){
    //alert("re")
    var _that=this;
   this.http.get( "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1")
   .subscribe(
     function(data){
      console.log(data);
      _that.dd=JSON.parse(data['_body']);
      _that.dd= _that.dd['result'];
      console.log(_that.dd);
   },function(err){
    console.log(err);
   });
  
  }

  requestJsonpData(){
    //alert("re")
    var _that=this;
   this.jsonp.get( "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1")
   .subscribe(
     function(data){
      console.log(data);
      
      _that.dd=data['_body']['result'];
      console.log(_that.dd);
   },function(err){
    console.log(err);
   });  
}

postData(){
  this.http .post(
    'http://127.0.0.1:3000/dologin', 
  JSON.stringify({"username": 'admin'}),
   {headers:this.headers}
  ).subscribe(function(data){

  },function(error){

  }) // .toPromise() .subscribe(function(res){ console.log(res.json()); });

}


}
