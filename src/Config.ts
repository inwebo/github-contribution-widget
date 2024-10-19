export default class Config {
  private readonly _username: string;
  private readonly _accessToken: string;
  private readonly _apiUrl: string = "https://api.github.com/graphql";


  get username(): string {
    return this._username;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  constructor(username: string, accessToken: string) {
    this._username = username;
    this._accessToken = accessToken;
  }
}
