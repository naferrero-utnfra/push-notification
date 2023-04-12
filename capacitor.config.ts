import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'pps-demo-app',
  webDir: 'www',
  bundledWebRuntime: false,
  // plugins: {
  //   //Esto es solo par iOS
  //   // eslint-disable-next-line @typescript-eslint/naming-convention
  //   PushNotifications: {
  //     presentationOptions: ['badge', 'sound', 'alert'],
  //   },
  // },
};

export default config;
