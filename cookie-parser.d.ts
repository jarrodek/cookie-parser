/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   cookie-parser.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

export {Cookie};

/**
 * A Cookie object.
 * It is based on https://github.com/pillarjs/cookies/blob/master/lib/cookies.js
 */
declare class Cookie {
  maxAge: Number|null;
  expires: Date|null;
  domain: String|null;

  /**
   * Constructs a new cookie.
   *
   * @param name Cookie name
   * @param value Cookie value
   * @param opts Additional cookie attributes:
   * - max-age {Number}
   * - expires {Number}
   * - domain {String}
   * - path {String}
   * - secure {Boolean}
   * - httpOnly {Boolean}
   */
  constructor(name: Stirng|null, value: Stirng|null, opts: object|null);

  /**
   * @returns Cookie's `name=value` string.
   */
  toString(): String|null;

  /**
   * Returns a Cookie as a HTTP header string.
   *
   * @returns Cookie string as a HTTP header value
   */
  toHeader(): String|null;

  /**
   * Override toJSON behaviour so it will eliminate
   * all _* properies and replace it with a proper ones.
   */
  toJSON(): object|null;
}

export {Cookies};

/**
 * A library to handle Cookie parsing.
 * It is based on https://github.com/pillarjs/cookies/blob/master/lib/cookies.js
 */
declare class Cookies {

  /**
   * A list of parsed cookies.
   */
  cookies: Array<Cookie|null>|null;
  url: String|null;

  /**
   * Constructs an object.
   *
   * @param cookie A HTTP cookie strig to parse.
   * @param url A request url for this object. If empty some
   * cookie computations (like checking if cookies match) will be omnited.
   */
  constructor(cookie: String|null, url: String|null);

  /**
   * Parses a cookie string to a list of Cookie objects.
   *
   * @param cookies A HTTP cookie string
   * @returns List of parsed cookies.
   */
  static parse(cookies: String|null): Array<Cookie|null>|null;

  /**
   * Clients must fill `path` and `domain` attribute if not set by the
   * server to match current request url.
   */
  _fillCookieAttributes(): void;

  /**
   * Get a cookie by name.
   *
   * @param name Cookie name
   * @returns A Cookie object or null.
   */
  get(name: String|null): Cookie|null;

  /**
   * Adds a cookie to the list of cookies.
   *
   * @param name Name of the cookie.
   * @param value Value of the cookie.
   * @param opts Other cookie options to set.
   */
  set(name: String|null, value: String|null, opts: {[key: String|null]: String|null}): void;

  /**
   * Returns a string that can be used in a HTTP header value for Cookie.
   * The structure of the cookie string depends on if you want to send a
   * cookie from the server to client or other way around.
   * When you want to send the `Cookie` header to server set
   * `toServer` argument to true. Then it will produce only `name=value;`
   * string. Otherwise it will be the `Set-Cookie` header value
   * containing all other cookies properties.
   *
   * @param toServer True if produced string is to be used with
   * `Cookie` header
   */
  toString(toServer: Boolean|null): String|null;

  /**
   * Remove cookies from `this.cookies` that has been set for different
   * domain and path.
   * This function has no effect if the URL is not set.
   *
   * This function follows an alghoritm defined in https://tools.ietf.org/html/rfc6265 for
   * domain match.
   *
   * @returns A list of removed cookies.
   */
  filter(): Array<Cookie|null>|null;

  /**
   * Merges this cookies with another Cookies object.
   * This cookies will be overwritten by passed cookies according to
   * the HTTP spec.
   * This function is useful when you need to override cookies with
   * the response from the server
   * as defined in the https://tools.ietf.org/html/rfc6265.
   *
   * @param cookies An Cookies object with newest cookies.
   * @param copyKeys If set, it will try copy values
   * for given keys from old object to the new one.
   */
  merge(cookies: Cookies|null, copyKeys: String|any[]|null): void;

  /**
   * Gets the path for a domain as defined in
   * https://tools.ietf.org/html/rfc6265#section-5.1.4
   *
   * @param url A url to extract path from.
   */
  _getPath(url: String|null): String|null;

  /**
   * Checks if paths mach as defined in
   * https://tools.ietf.org/html/rfc6265#section-5.1.4
   *
   * Note: This function will return false if the `this.url` was not set.
   *
   * @param cookiePath Path from the cookie.
   * @returns True when paths matches.
   */
  _matchPath(cookiePath: String|null): Boolean|null;

  /**
   * Checks if `domain` of the request url (defined as `this.url`)
   * matches domain defined in a cookie.
   * This follows algoritm defined in https://tools.ietf.org/html/rfc6265#section-5.1.3
   *
   * Note: If `cookieDomain` is not set it returns false, while
   * (according to the spec) it should be set to `domain` and pass the test.
   * Because this function only check if domains matches it will not
   * override domain.
   * Cookie domain should be filled before calling this function.
   *
   * Note: This function will return false if the `this.url` was not set.
   *
   * @param cookieDomain A domain received in the cookie.
   * @returns True if domains matches.
   */
  _matchDomain(cookieDomain: String|null): Boolean|null;

  /**
   * Clears cookies from `this.cookies` that already expired.
   *
   * @returns List of removed (expired) cookies.
   */
  clearExpired(): Array<Cookie|null>|null;
}
