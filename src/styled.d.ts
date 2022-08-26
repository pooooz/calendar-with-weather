import 'styled-components';
import { IDevice } from './globalStyles';

declare module 'styled-components' {
  export interface DefaultTheme {
    device: IDevice;
  }
}
