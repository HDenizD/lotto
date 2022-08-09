import { defineStore } from 'pinia'
import axios from 'axios'

type Draws = {
  additionalNumbers: string[];
  date: string;
  gameAmount: string;
  jackpot: string;
  numbers: string[];
  seo: {
    title: string;
  }
}[]

export const useApp = defineStore('app', {
  state: () => {
    return {
      draws: [] as Draws,
    }
  },
  getters: {
    getDraws: (state) => state.draws,
  },
  actions: {
    fetchDrawingResults() {
      const myQuery = `{
        draw(type: "eurojackpot"){
          backendError
          draws {
            additionalNumbers
            date
            gameAmount
            jackpot
            megaPlier
            numbers
            odds {
              link
              numberOfWinners
              numbers
              odd
              winningClass
              withOptions
            }
            powerPlay
            seo {
              description
              texts {
                content
                headline
              }
              title
            }
            shares
            time
          }
          success
          visibleErrors {
            idents
            messages
          }
        }
      }`

      axios
        .get(`/api?query=${myQuery}`)
        .then((res) => {
          this.draws = res.data.data.draw.draws
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
})
