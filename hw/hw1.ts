// last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
// prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.


type Last = <T>(arr:T[]) => T
const last : Last = (a) => a[a.length]


type Prepend = <T>(a:T[],b:T) => T[]
const prepend : Prepend = (arr,item) => {
  arr.unshift(item)
  return arr
}