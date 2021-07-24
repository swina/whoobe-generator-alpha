import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Home: () => import('../..\\components\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c)),
  NotFound: () => import('../..\\components\\NotFound.vue' /* webpackChunkName: "components/not-found" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockElementComponent: () => import('../..\\components\\blocks\\block.element.component.vue' /* webpackChunkName: "components/blocks-block-element-component" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockElement: () => import('../..\\components\\blocks\\block.element.vue' /* webpackChunkName: "components/blocks-block-element" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockMenuContainer: () => import('../..\\components\\blocks\\block.menu.container.vue' /* webpackChunkName: "components/blocks-block-menu-container" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockPopup: () => import('../..\\components\\blocks\\block.popup.vue' /* webpackChunkName: "components/blocks-block-popup" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockPreviewContainer: () => import('../..\\components\\blocks\\block.preview.container.vue' /* webpackChunkName: "components/blocks-block-preview-container" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockPreviewForm: () => import('../..\\components\\blocks\\block.preview.form.vue' /* webpackChunkName: "components/blocks-block-preview-form" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockPreviewMenu: () => import('../..\\components\\blocks\\block.preview.menu.vue' /* webpackChunkName: "components/blocks-block-preview-menu" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockPreviewSingleContainer: () => import('../..\\components\\blocks\\block.preview.single.container.vue' /* webpackChunkName: "components/blocks-block-preview-single-container" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockPreview: () => import('../..\\components\\blocks\\block.preview.vue' /* webpackChunkName: "components/blocks-block-preview" */).then(c => wrapFunctional(c.default || c)),
  BlocksBlockSlider: () => import('../..\\components\\blocks\\block.slider.vue' /* webpackChunkName: "components/blocks-block-slider" */).then(c => wrapFunctional(c.default || c)),
  CommonBtIcon: () => import('../..\\components\\common\\bt.icon.vue' /* webpackChunkName: "components/common-bt-icon" */).then(c => wrapFunctional(c.default || c)),
  CommonChip: () => import('../..\\components\\common\\chip.vue' /* webpackChunkName: "components/common-chip" */).then(c => wrapFunctional(c.default || c)),
  CommonDoubleRange: () => import('../..\\components\\common\\double.range.vue' /* webpackChunkName: "components/common-double-range" */).then(c => wrapFunctional(c.default || c)),
  CommonIcon: () => import('../..\\components\\common\\icon.vue' /* webpackChunkName: "components/common-icon" */).then(c => wrapFunctional(c.default || c)),
  CommonIconExtra: () => import('../..\\components\\common\\IconExtra.vue' /* webpackChunkName: "components/common-icon-extra" */).then(c => wrapFunctional(c.default || c)),
  CommonLoading: () => import('../..\\components\\common\\loading.vue' /* webpackChunkName: "components/common-loading" */).then(c => wrapFunctional(c.default || c)),
  CommonLogin: () => import('../..\\components\\common\\login.vue' /* webpackChunkName: "components/common-login" */).then(c => wrapFunctional(c.default || c)),
  CommonModalFullscreen: () => import('../..\\components\\common\\modal.fullscreen.vue' /* webpackChunkName: "components/common-modal-fullscreen" */).then(c => wrapFunctional(c.default || c)),
  CommonModal: () => import('../..\\components\\common\\modal.vue' /* webpackChunkName: "components/common-modal" */).then(c => wrapFunctional(c.default || c)),
  CommonNavigation: () => import('../..\\components\\common\\navigation.vue' /* webpackChunkName: "components/common-navigation" */).then(c => wrapFunctional(c.default || c)),
  CommonPluginWrapper: () => import('../..\\components\\common\\plugin.wrapper.vue' /* webpackChunkName: "components/common-plugin-wrapper" */).then(c => wrapFunctional(c.default || c)),
  CommonPluginsWrapper: () => import('../..\\components\\common\\Plugins.Wrapper.vue' /* webpackChunkName: "components/common-plugins-wrapper" */).then(c => wrapFunctional(c.default || c)),
  CommonRadio: () => import('../..\\components\\common\\radio.vue' /* webpackChunkName: "components/common-radio" */).then(c => wrapFunctional(c.default || c)),
  CommonScrollTop: () => import('../..\\components\\common\\ScrollTop.vue' /* webpackChunkName: "components/common-scroll-top" */).then(c => wrapFunctional(c.default || c)),
  CommonToggle: () => import('../..\\components\\common\\toggle.vue' /* webpackChunkName: "components/common-toggle" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaAudio: () => import('../..\\components\\blocks\\elements\\moka.audio.vue' /* webpackChunkName: "components/blocks-elements-moka-audio" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaChip: () => import('../..\\components\\blocks\\elements\\moka.chip.vue' /* webpackChunkName: "components/blocks-elements-moka-chip" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaDownload: () => import('../..\\components\\blocks\\elements\\moka.download.vue' /* webpackChunkName: "components/blocks-elements-moka-download" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaIcon: () => import('../..\\components\\blocks\\elements\\moka.icon.vue' /* webpackChunkName: "components/blocks-elements-moka-icon" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaIframe: () => import('../..\\components\\blocks\\elements\\moka.iframe.vue' /* webpackChunkName: "components/blocks-elements-moka-iframe" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaImg: () => import('../..\\components\\blocks\\elements\\moka.img.vue' /* webpackChunkName: "components/blocks-elements-moka-img" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaInput: () => import('../..\\components\\blocks\\elements\\moka.input.vue' /* webpackChunkName: "components/blocks-elements-moka-input" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaLink: () => import('../..\\components\\blocks\\elements\\moka.link.vue' /* webpackChunkName: "components/blocks-elements-moka-link" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaList: () => import('../..\\components\\blocks\\elements\\moka.list.vue' /* webpackChunkName: "components/blocks-elements-moka-list" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaMenuResponsive: () => import('../..\\components\\blocks\\elements\\moka.menu.responsive.vue' /* webpackChunkName: "components/blocks-elements-moka-menu-responsive" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaMenu: () => import('../..\\components\\blocks\\elements\\moka.menu.vue' /* webpackChunkName: "components/blocks-elements-moka-menu" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaSelect: () => import('../..\\components\\blocks\\elements\\moka.select.vue' /* webpackChunkName: "components/blocks-elements-moka-select" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaSimpleSvg: () => import('../..\\components\\blocks\\elements\\moka.simple.svg.vue' /* webpackChunkName: "components/blocks-elements-moka-simple-svg" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaSvg: () => import('../..\\components\\blocks\\elements\\moka.svg.vue' /* webpackChunkName: "components/blocks-elements-moka-svg" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaText: () => import('../..\\components\\blocks\\elements\\moka.text.vue' /* webpackChunkName: "components/blocks-elements-moka-text" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaTextarea: () => import('../..\\components\\blocks\\elements\\moka.textarea.vue' /* webpackChunkName: "components/blocks-elements-moka-textarea" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaToggle: () => import('../..\\components\\blocks\\elements\\moka.toggle.vue' /* webpackChunkName: "components/blocks-elements-moka-toggle" */).then(c => wrapFunctional(c.default || c)),
  BlocksElementsMokaVideo: () => import('../..\\components\\blocks\\elements\\moka.video.vue' /* webpackChunkName: "components/blocks-elements-moka-video" */).then(c => wrapFunctional(c.default || c)),
  PluginsArticles: () => import('../..\\components\\plugins\\articles\\articles.vue' /* webpackChunkName: "components/plugins-articles" */).then(c => wrapFunctional(c.default || c)),
  PluginsSnipcart: () => import('../..\\components\\plugins\\snipcart\\snipcart.vue' /* webpackChunkName: "components/plugins-snipcart" */).then(c => wrapFunctional(c.default || c)),
  PluginsSnipcartAddToCart: () => import('../..\\components\\plugins\\snipcart\\snipcart_add_to_cart.vue' /* webpackChunkName: "components/plugins-snipcart-add-to-cart" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreWhoobeEn: () => import('../..\\components\\plugins\\store\\whoobe\\en.js' /* webpackChunkName: "components/plugins-store-whoobe-en" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreWhoobeIt: () => import('../..\\components\\plugins\\store\\whoobe\\it.js' /* webpackChunkName: "components/plugins-store-whoobe-it" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreWhoobeLayouts: () => import('../..\\components\\plugins\\store\\whoobe\\layouts.vue' /* webpackChunkName: "components/plugins-store-whoobe-layouts" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreWhoobeModel: () => import('../..\\components\\plugins\\store\\whoobe\\model.js' /* webpackChunkName: "components/plugins-store-whoobe-model" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreWhoobeProduct: () => import('../..\\components\\plugins\\store\\whoobe\\product.vue' /* webpackChunkName: "components/plugins-store-whoobe-product" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreAddToCart: () => import('../..\\components\\plugins\\store\\whoobe\\store.add.to.cart.js' /* webpackChunkName: "components/plugins-store-add-to-cart" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreCategories: () => import('../..\\components\\plugins\\store\\whoobe\\store.categories.vue' /* webpackChunkName: "components/plugins-store-categories" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreFilter: () => import('../..\\components\\plugins\\store\\whoobe\\store.filter.vue' /* webpackChunkName: "components/plugins-store-filter" */).then(c => wrapFunctional(c.default || c)),
  PluginsStorePagination: () => import('../..\\components\\plugins\\store\\whoobe\\store.pagination.vue' /* webpackChunkName: "components/plugins-store-pagination" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreRelated: () => import('../..\\components\\plugins\\store\\whoobe\\store.related.vue' /* webpackChunkName: "components/plugins-store-related" */).then(c => wrapFunctional(c.default || c)),
  PluginsStoreSlider: () => import('../..\\components\\plugins\\store\\whoobe\\store.slider.vue' /* webpackChunkName: "components/plugins-store-slider" */).then(c => wrapFunctional(c.default || c)),
  PluginsStore: () => import('../..\\components\\plugins\\store\\whoobe\\store.vue' /* webpackChunkName: "components/plugins-store" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
