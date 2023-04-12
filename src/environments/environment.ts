// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fcmUrl: 'https://fcm.googleapis.com/fcm/send',
  fcmServerKey:
    // eslint-disable-next-line max-len
    'AAAA5H7dh_Y:APA91bFKV7ebgBiUHsoMQ0bzQqMsnLhELoDVlGp5N90_iDmcq3TvMoiwMASZl8DZLpMlSHrIXhq1UthcQhFHfll3btAp81xPRng4zmFjg9nLv6B-PWarbAVeFVlNNA6vW7IKKWLKY8sf',
  firebaseConfig: {
    apiKey: 'AIzaSyALq6H0t5Ck8sMOlN4yI6v_QMLvUkoiq6E',
    authDomain: 'pps-demo-app.firebaseapp.com',
    projectId: 'pps-demo-app',
    storageBucket: 'pps-demo-app.appspot.com',
    messagingSenderId: '981380990966',
    appId: '1:981380990966:web:74467cf71fd0ac639a29d7',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
