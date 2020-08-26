import {SignInPage, AccountPage} from './pages';
import {makeSingleton} from '../lib';

const pageProvider = (page) => ({
  signIn: () => makeSingleton(SignInPage, page),
  account: () => makeSingleton(AccountPage, page),
});

export {
  pageProvider,
};

