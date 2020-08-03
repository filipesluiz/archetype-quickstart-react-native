import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import 'nativeModules';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
jest.mock('nativeModules');
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

Enzyme.configure({ adapter: new Adapter() });
