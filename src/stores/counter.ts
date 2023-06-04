import { defineStore } from "pinia";

interface State {
    counter: number
}

export const useCounterStore = defineStore({
    id: 'counter',
    state: (): State => {
        return {
            counter: 0
        }
    },
    // データの加工処理
    // 大元のデータに変更はない
    getters: {
        doubleCount: (state): number => {
            return state.counter * 2
        }
    },
    // データの変更処理
    // 大元のデータの変更
    actions: {
        incrementCount(): void {
            this.counter++
        }
    }
})