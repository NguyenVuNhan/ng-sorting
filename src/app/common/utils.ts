import { async } from "@angular/core/testing";

export let swap = async (arr: Array<number>, a, b, delay: number = 35) => {
  await sleep(delay);
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

export let sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
