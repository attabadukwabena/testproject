import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

const app = createApp({

  data() {
    return {
      tweet:{
        'message':'',
        'name': '',
        'time': ''
      },
      tweets: []
    }
  },

  methods: {

  },

  async created() {
    await this.getTweets()
  },

  methods: {

     async getTweets() {
       var res = await fetch('http://127.0.0.1:8000/api/')
       this.tweets = await res.json()

    },

    async addTweet() {

      await this.getTweets()

      await fetch('http://127.0.0.1:8000/api/',{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.tweet)
      })

      await this.getTweets()
    }
  }

})
app.config.compilerOptions.delimiters = [ '${', '}' ]
app.mount("#app")
