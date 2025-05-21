import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

//pinia 스토어 정의
//defineStore: 스토어를 생성하는 함수
//첫번째 인자가 스토어의 고유 ID가 된다.
export const useCounterStore = defineStore('counter', () => {
  //state
  const count = ref(0); //카운터 값을 저장하는 변수
  //getter
  //action
  //1씩 증가시키는 매서드
  const increase = () => {
    count.value = 0;
  };
  return { count, increase, reset };
});
