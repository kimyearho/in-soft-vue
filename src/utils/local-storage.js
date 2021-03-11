/**
 * 로컬 스토리지에 데이터를 저장한다.
 *
 * @param {*} keyName - 로컬 스토리지 KEY 명
 * @param {*} value - 저장할 값
 */
export function SET_LOCAL_STORAGE(keyName, value) {
  localStorage.setItem(keyName, value)
}

/**
 * keyName에 일치하면 로컬 스토리지 값을 조회한다.
 *
 * @param {*} keyName - 로컬 스토리지 KEY 명
 * @returns {*} 조회된 값
 */
export function GET_LOCAL_STORAGE(keyName) {
  return localStorage.getItem(keyName)
}

/**
 * 일치하는 keyName을 삭제한다.
 *
 * @param {*} keyName - 로컬 스토리지 KEY 명
 */
export function REMOVE_LOCAL_STORAGE(keyName) {
  localStorage.removeItem(keyName)
}
