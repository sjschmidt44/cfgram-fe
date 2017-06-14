'use strict'

// require('./scss/main.scss')

const angular = require('angular')
const ngTouch = require('angular-touch')
const ngAnimate = require('angular-animate')

require('@uirouter/angularjs')
require('angular-ui-bootstrap')
require('ng-file-upload')

const cfgram = angular.module(
  'cfgram',
  ['ui.router', 'ngFileUpload', 'ngTouch', 'ngAnimate', 'ui.bootstrap']
)

// CONFIGS
require('./config/log-config')
require('./config/router-config')

// VIEW CONTROLLERS
require('./view/home/home-controller.js')
require('./view/landing/landing-controller.js')

// SERVICES
require('./service/auth-service.js')
require('./service/gallery-service.js')
require('./service/pic-service.js')

// COMPONENTS
require('./component/gallery/create-gallery/create-gallery.js')
require('./component/gallery/edit-gallery/edit-gallery.js')
require('./component/gallery/gallery-item/gallery-item.js')
require('./component/gallery/thumbnail/thumbnail.js')
require('./component/gallery/thumbnail-container/thumbnail-container.js')
require('./component/gallery/upload-pic/upload-pic.js')

require('./component/landing/login/login.js')
require('./component/landing/signup/signup.js')

require('./component/navbar/navbar.js')

// FILTERS
require('./filter/custom-sort.js')
require('./filter/custom-uppercase.js')
require('./filter/fuzzy-search.js')
