describe("Sidebar component", function() {

    var Sidebar = require('./../../../src/components/SideBar.vue')
    var Vue = require('vue')

    it('has a methods hook', () => {
    	expect(typeof Sidebar.methods).toBe('object')
  	})

  	it('has a toggleSidebar method', () => {
    	const sidebarMethods = Sidebar.methods
    	expect(typeof sidebarMethods.toggleSidebar).toBe('function')
  	})

  	it('has a computed hook', () => {
    	expect(typeof Sidebar.computed).toBe('object')
  	})

  	xit('correctly sets the message when created', () => {
    	const vm = new Vue(Sidebar).$mount()
    	expect(vm.sidebarStatus).toBe('true')
  	})

});
