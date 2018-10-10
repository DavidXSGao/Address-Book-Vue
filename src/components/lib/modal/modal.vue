<template>
  <transition name="modal-fade">
    <div class="modal-background">

      <div class="modal-main"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">

        <header class="modal-head" id="modalTitle">
          <slot name="header">
            This is our header title

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal">x</button>

          </slot>
        </header>
        <section class="modal-soul" id="modalDescription">
          <slot name="body">
            I'm the default body!
          </slot>
        </section>
        <footer class="modal-foot">
          <slot name="footer">
            I'm the default footer!

            <button
              type="button"
              class="btn-green"
              @click="close"
              areia-label="Close modal">Close me!</button>

          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style>
.modal-background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-main {
  background: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
.modal-head,
.modal-foot {
  padding: 15px;
  display: flex;
}
.modal-head {
  border-bottom: 1px solid #eee;
  color: #4aae98;
  justify-content: space-between;
}
.modal-foot {
  border-top: 1px solid #eee;
  justify-content: flex-end;
}
.modal-soul {
  position: relative;
  padding: 20px 10px;
}
.btn-close {
  border: none;
  font-size: 20px;
  /* padding: 20px; */
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}
.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

/* transitions */
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>
