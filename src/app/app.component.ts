import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  dialog = false;
  mail = 'neven.zdelar@gmail.com';

  dialogMessage;

  items = [
    {
      link: 'https://www.linkedin.com/in/neven-zdelar/',
      icon: 'fab fa-linkedin-in',
      message: 'LinkedIn'
    },
    {
      link: 'https://github.com/nven1/',
      icon: 'fab fa-github',
      message: 'GitHub'
    },
    {
      link: '#',
      icon: 'fas fa-envelope',
      message: 'Copy mail to clipboard'
    },
    {
      link: 'https://zavrsnidemo.neven.dev',
      icon: 'fas fa-columns',
      message: 'Newsmaster (thesis)'
    },
    {
      link: 'https://zavrsni.neven.dev',
      icon: 'fab fa-angular',
      message: 'Newsmaster 2 (work in progress)'
    },
  ];

  dialogToggle(index) {
    this.dialog = !this.dialog;
    this.dialogMessage = this.items[index].message;
  }

  buttonAction(index) {
    if (index == 2) {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = this.mail;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);

      this.dialogMessage = 'Copied';
    }
    else {
      window.open(this.items[index].link,'_blank');
    }

  }
}
