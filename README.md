# FE project with Vue 2 foundation setting.
stacks: vue2, vuerouter, axios, vuex, vuetify

``해당 repository는 빠른 프로젝트 세팅을 위해 만들어졌습니다``
``This repository is for making your project more fast.``

## Usage

**Toast**
```
// call show toast
let msg = <massage you want>
this.$toast.success(msg)
this.$toast.warning(msg)
this.$toast.error(msg)
this.$toast.info(msg)
this.$toast.loading(msg)

// remove toast
this.$toast.remove()
```
By default, the toast is shown for 3 seconds.
if you want control this option, see ``src/components/toast.vue`` file in repository
and change this option.
```
:timeout="toast.type=='loading'?-1:3000"
```
3000 means 3 seconds.

**Circular loader**
```
// call show progess indicator
this.$loading(true)

// remove indicator
this.$loading(false)
```
The indicator color follows vuetify's primary color.


## Project setup, test, depoly
```
npm install
npm serve
npm build
```