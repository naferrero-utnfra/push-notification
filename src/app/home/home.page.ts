import { Component } from '@angular/core';
import { PushNotificationService } from '../services/push-notification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private pnService: PushNotificationService) {}

  sendPush() {
    this.pnService
      .sendPushNotification({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        registration_ids: [
          // eslint-disable-next-line max-len
          'cJvh2_xeQ_-_qwqdcCQywn:APA91bFM73dgD4QCztcEWzVsMWVRwJv3IJircDIWfxMLRAUVdkDMRF4dgbPYZKKESkd1G6sLHysLGswQ4xa2Fvlcwo4wAeE6XMNRwAWsrQqT5aKXk1mzfnw6LOjONe56klqRyhayMbS_',
        ],
        notification: {
          title: 'Mi titulo',
          body: 'Mi body',
        },
        data: {
          id: 1,
          nombre: 'nicolas',
        },
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
