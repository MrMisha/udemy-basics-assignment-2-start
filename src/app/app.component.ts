import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public userName: string = '';

	getResetUserNameButtonDisabled(): boolean {
		return this.userName === '';
	}

	onResetUserNameButtonClick(){
		this.userName = '';
	}
}
