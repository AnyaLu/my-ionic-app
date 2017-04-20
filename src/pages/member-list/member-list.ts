import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MemberList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
})
export class MemberList {

  members:Array<any>

constructor(public navCtrl: NavController, public navParams: NavParams) {
this.members = [
{id:111,index:1,name:"Anya",sex:"male",phone:13912345678,mail:"anya@avanade.com",avatar:"assets/img/timg.jpg"},
{id:222,index:2,name:"Elvis",sex:"male",phone:13812345678,mail:"elvis@avanade.com",avatar:"assets/img/timg.jpg"},
{id:555,index:3,name:"SiSi",sex:"famale",phone:13712345678,mail:"sisi@avanade.com",avatar:"assets/img/timg.jpg"},
{id:444,index:4,name:"Yanis",sex:"male",phone:13612345678,mail:"yanis@avanade.com",avatar:"assets/img/timg.jpg"},
{id:333,index:5,name:"PKey",sex:"male",phone:13512345678,mail:"pkey@avanade.com",avatar:"assets/img/timg.jpg"},
]
}

up(){
this.members.sort(function(a,b){return a.index-b.index}); 
}
down(){
this.members.sort(function(a,b){return b.index-a.index}); 
}
random(){
this.members.sort(function(a,b){return a.id-b.id}); 
} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberList');
  }

}
