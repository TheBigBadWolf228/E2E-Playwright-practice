import {SignInPage, AccountPage} from './pages';
import {makeSingleton, Browser} from '../lib';

const pageProvider = (page) => ({
  signIn: (): SignInPage => makeSingleton(SignInPage, page),
  account: (): AccountPage => makeSingleton(AccountPage, page),
});

const provider = {
  browser: new Browser()
}

export {
  pageProvider,
  provider
};

