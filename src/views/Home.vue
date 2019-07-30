<template>
  <div class="home widget-configurator" :style="css">
    <main class="container no-breadcrumbs" role="main" data-id="main-content">
      <div>
        <h2 class="h4">Stwórz swoją wizytówkę</h2>
        <div class="row">
          <div class="col-md-5">
            <div class="row">
              <div class="col-md-12">
                <section class="panel panel-default">
                  <div class="panel-body">
                    <p>To jest kreator wizytówki Twojego profilu w serwisie ZnanyLekarz.pl. Możesz ją w łatwy sposób
                      zamieścić na swojej stronie internetowej.</p>
                    <CardGenerator/>
                  </div>
                </section>
                <CardBg :colors="colors" @change="setBackground"/>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <CardPreview
              :id="selected['urlname']"
              :type="settings.type"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CardBg from '../components/card/CardBg'
import CardGenerator from '../components/card/CardGenerator'
import CardPreview from '../components/card/CardPreview'

export default {
  name: 'home',
  data () {
    return {
      css: {},
      colors: [{
        name: 'checker',
        active: true
      }, {
        name: 'silver',
        active: false
      }, {
        name: 'dark',
        active: false
      }]
    }
  },
  components: {
    CardBg,
    CardGenerator,
    CardPreview
  },
  computed: {
    ...mapGetters({
      settings: 'getCardSettings',
      selected: 'getSelectedUser'
    })
  },
  methods: {
    setBackground (css) {
      this.css = css
    }
  }
}
</script>
<style scoped lang="scss">
  .widget-configurator {
    min-height: 100vh;
  }
</style>
