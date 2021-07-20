<template> 
  <div>
    <client-only>
      <blocks-block-preview v-if="homepage" :doc="homepage.blocks.json"/>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'WhoobeHomepage',
  data:()=>({
    homepage: null,
    template:null,
    loaded: false
  }),
  
  head(){
        this.$store.dispatch('seo_title' , this.homepage.seo_title )
        this.$store.dispatch('seo_description',this.homepage.seo_description )
        return {
            title: this.homepage.seo_title ? this.homepage.seo_title : this.homepage.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { 
                  hid: 'description',
                  name: 'description', 
                  content: this.homepage.seo_description ? this.homepage.seo_description : this.homepage.title,
                }
            ]
        }
        
        
  },
  computed: {
    ...mapState( ['settings']),
  },
  async asyncData({app,route}){
        
      const articles = await app.$whoobe.service ( 'articles' ).find ( {
          query : {
              homepage : true
          }
      })
      return { 
          homepage : articles.data[0]
      }
  }
}
</script>
