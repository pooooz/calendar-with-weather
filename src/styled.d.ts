import 'styled-components';
import { IDevice } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    device: IDevice;
  }
}
