export enum AppRoute {
  Login = '/login',
  Registration = '/registration',
  Home = '/home',
  MovieScreen = '/movieScreen/:movieId?',
  SearchScreen = '/',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}