import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	public url: string;

	public client_id:string = 'a42902122640357ec59d';
	public client_secret:string = '334b901236a27158ec59e817080135721ca5aaa7';

	constructor(private _http:Http){
		console.log('Github services ready....');
		this.username='bradtraversy';
	}

	getUser(){
		this.url=`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
		return this._http.get(this.url)
			.map(res => res.json())
	}
	getRepos(){
		this.url=`http://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`;
		return this._http.get(this.url)
			.map(res => res.json())
	}
	updateUser(username:string){
		this.username = username;
	}
}
