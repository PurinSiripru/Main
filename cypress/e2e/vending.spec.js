describe('Vending Test',()=>{
    it("should login to website",()=>{
        cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login"); 
        cy.get('input[class="v-field__input"]').eq(0).type('admin');
        cy.get('input[class="v-field__input"]').eq(1).type('123456');
        cy.get('input[type="checkbox"]').check();
        cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
        
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > div").click()
        cy.get("#__nuxt > div > div > div > div > header > div > div > div:nth-child(1) > button").click()
    })
    it("search test001",()=>{
        
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line v-list-item--rounded v-list-item--variant-text mb-1 leftPadding"]').eq(0).click()
        cy.get('input[class="v-field__input"]').click()
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').type('test001',{delay: 100})
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(1).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(1).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        cy.scrollTo('top')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(1).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(2).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(3).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(4).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
    })
    it('insert new vending',()=>{
        cy.get('a[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default elevation-3 v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('input[id^="input-"]').eq(0).should('be.visible').click().wait(500).type('test001',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').click().wait(500).type('111',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.scrollTo(500, 0)
        cy.get('input[class="v-field__input"]').eq(2).should('be.visible').click().wait(500).type('222',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('input[class="v-field__input"]').eq(3).should('be.visible').click().wait(500).type('333',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(4).should('be.visible').click().wait(500).type('444',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(5).should('be.visible').click().wait(500).type('555',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(6).should('be.visible').click().wait(500).type('666',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(7).should('be.visible').click().wait(500).type('777',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click().click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).click()
        cy.get('input[class="v-field__input"]').eq(8).should('be.visible').click().wait(500).type('888',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(9).should('be.visible').click().wait(500).type('999',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.scrollTo('top')
    })
    it('check id vending',()=>{
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(3).click()
        cy.scrollTo('top')
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(0).click()
        cy.scrollTo(0, 1000);
        ; // รอ 500ms
        cy.scrollTo(1000, 0);
        ; 
        cy.get('a[class="v-breadcrumbs-item--link"]').click()
        
    })
    it("search test001 again",()=>{
        
        cy.get('input[class="v-field__input"]').click()
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').type('test001',{delay: 100})
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(1).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(1).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        cy.scrollTo('top')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(1).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(2).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(3).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(4).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
    })
    it('check test001 data',()=>{
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(3).click()
        cy.scrollTo('top')
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(0).click()
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(2).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(3).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(4).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(5).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(6).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(7).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(8).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(9).should('be.visible').click()
        
        cy.scrollTo(1000,0)
        cy.get('a[class="v-breadcrumbs-item--link"]').click()
        
    })
    it('update 111 to AAA and test validation of IP',()=>{
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(3).click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(0).click()
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).should('be.visible').click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(2).should('be.visible').clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(2).should('be.visible').click().wait(500).type('BBB',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(3).should('be.visible').clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(3).should('be.visible').click().wait(500).type('CCC',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(4).should('be.visible').clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(4).should('be.visible').click().wait(500).type('DDD',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(5).should('be.visible').clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(5).should('be.visible').click().wait(500).type('EEE',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(6).should('be.visible').clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(6).should('be.visible').click().wait(500).type('1357',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(7).should('be.visible').wait(500).clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').wait(1000).click()
        cy.wait(1000)
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        cy.get('input[class="v-field__input"]').eq(8).should('be.visible').wait(1000).clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        cy.get('input[class="v-field__input"]').eq(8).should('be.visible').click().wait(1000).type('1234',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        cy.get('input[class="v-field__input"]').eq(9).should('be.visible').wait(1000).clear()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        cy.get('input[class="v-field__input"]').eq(9).should('be.visible').click().wait(1000).type('5678',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').click().wait(1000).type('AAA',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
    })
    it("search test001 again",()=>{
        
        cy.get('input[class="v-field__input"]').click()
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').type('test001',{delay: 100})
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(1).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(1).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        cy.scrollTo('top')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(1).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(2).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(3).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(4).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
    })
    it('check AAA data',()=>{
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(3).click()
        cy.scrollTo('top')
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').eq(0).click()
        
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(2).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(3).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(4).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(5).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(6).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(7).should('be.visible').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(8).should('be.visible').click()
        cy.get('input[class="v-field__input"]').eq(9).should('be.visible').click()
        
        cy.scrollTo(1000,0)
        cy.get('a[class="v-breadcrumbs-item--link"]').click()
        
    })
    it('delete test001',()=>{
        cy.get('i[class="mdi-dots-vertical mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default"]').eq(3).should('be.visible').click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text cursor-pointer"]').should('be.visible').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
        cy.wait(500)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').click()
    })
    it("search not found test001",()=>{
        
        cy.get('input[class="v-field__input"]').click()
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').type('test001',{delay: 100})
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(1).click()
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(1).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        cy.scrollTo('top')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(1).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(2).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(3).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"').eq(2).click()
        
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(4).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.scrollTo('top')
    })
})
