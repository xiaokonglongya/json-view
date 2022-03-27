const TokenKey = "token";
const UserKey = "infoKey";
/**
 * 获取用户信息
 */
export function getLocalUser() {
  try {
    return JSON.parse(sessionStorage.getItem(UserKey) ?? "");
  } catch (error) {}
}

/**
 * 设置本地用户信息
 * @param info 用户信息
 */
export function setLocalUser(info) {
  try {
    sessionStorage.setItem(UserKey, JSON.stringify(info));
  } catch (error) {}
}

export function isUserLogin() {
  return getLocalUser() ? true : false;
}
export function clearLocaUser() {
  sessionStorage.removeItem(UserKey);
}

/**
 * 将Token设置到本地
 * @param token String 储存的Token
 */
export function setToken(token: string) {
  sessionStorage.setItem(TokenKey, JSON.stringify(token));
}
/**
 * 获取本地储存的token
 * @returns  String
 */
export function getToken() {
  try {
    return JSON.parse(sessionStorage.getItem(TokenKey) ?? "");
  } catch (error) {}
}

interface SpikSystemDataType {
  account: String;
  token: String;
}
/**
 * 用于系统跨系统跳转实现
 *
 * 保存数据
 */

const SKYK = "spik_data";
export function setSpikSystemDate(account: string, token: string) {
  let data = {
    account,
    token,
  };
  sessionStorage.setItem(SKYK, JSON.stringify(data));
}
/**
 * @returns { {account:String } | Boolean }
 */
export function getSpikSystemDate(): SpikSystemDataType  {
  let result;
  try {
    result = JSON.parse(sessionStorage.getItem(SKYK) ?? "");
  } catch (error) {}
  return result ?? false;
}
