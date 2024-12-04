describe('User Group Test',()=>{
    it("should login to website",()=>{
        cy.visit("https://vending-main-client-dev.rvvcs.com/auth/login"); 
        cy.get('input[class="v-field__input"]').eq(0).type('admin');
        cy.get('input[class="v-field__input"]').eq(1).type('123456');
        cy.get('input[type="checkbox"]').check();
        cy.get("#__nuxt > div > div > div > div > div > div > div > div.v-card-item.py-8.pa-sm-8.pa-md-15 > div > div > div:nth-child(2) > div:nth-child(4) > button").click()
        cy.wait(1000)
        cy.get("#__nuxt > div > div > div > div > nav")
        cy.get("#__nuxt > div > div > div > div > div").wait(1000).click()
    })
    it('insert new vending',()=>{
        cy.get('button[class="v-btn v-btn--icon v-theme--PurpleTheme v-btn--density-default v-btn--size-small v-btn--variant-flat ms-md-3 ms-sm-5 ms-3 text-muted"]').should('be.visible').wait(1000).click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line v-list-item--rounded v-list-item--variant-text mb-1 leftPadding"]').eq(0).should('be.visible').wait(1000).click()
        cy.get('a[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default elevation-3 v-btn--size-default v-btn--variant-elevated"]').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('input[id^="input-"]').eq(0).should('be.visible').click().wait(1000).type('test99',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(0).click()
        cy.wait(1000)
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).should('be.visible').click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click()
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').click().wait(1000).type('111',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click().wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click().wait(1000)
        cy.scrollTo(500, 0)
        cy.get('input[class="v-field__input"]').eq(2).should('be.visible').click().wait(1000).type('222',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click().wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click().wait(1000)
        cy.get('input[class="v-field__input"]').eq(3).should('be.visible').click().wait(1000).type('333',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click().wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click().wait(1000)
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(4).should('be.visible').click().wait(1000).type('444',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click().wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click().wait(1000)
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(5).should('be.visible').click().wait(1000).type('555',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click().wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click().wait(1000)
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(6).should('be.visible').click().wait(1000).type('666',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click().wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click().wait(1000)
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(7).should('be.visible').click().wait(1000).type('777',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click().wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click().wait(1000)
        cy.scrollTo('top')
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).click()
        cy.wait(1000)
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(0).click()
        cy.get('input[class="v-field__input"]').eq(8).should('be.visible').click().wait(1000).type('888',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click().wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click().wait(1000)
        cy.scrollTo('top')
        cy.get('input[class="v-field__input"]').eq(9).should('be.visible').click().wait(1000).type('999',{delay: 100})
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').click().wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click().wait(1000)
        cy.scrollTo('top')
    })
    it('click at user group',()=>{
        cy.get('button[class="v-btn v-btn--icon v-theme--PurpleTheme v-btn--density-default v-btn--size-small v-btn--variant-flat ms-md-3 ms-sm-5 ms-3 text-muted"]').should('be.visible').wait(1000).click()
        cy.get('a[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line v-list-item--rounded v-list-item--variant-text mb-1 leftPadding"]').eq(1).should('be.visible').wait(1000).click()
    })
    it('search test001',()=>{
        cy.get('input[class="v-field__input"]').wait(1000).click().type('test001')
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').wait(1000).click()
        cy.scrollTo('top')
        cy.get('div[class="v-list-item v-list-item--link v-theme--PurpleTheme v-list-item--density-default v-list-item--one-line rounded-0 v-list-item--variant-text"]').eq(1).should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(1).should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').wait(1000).click()
        cy.scrollTo('top')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').wait(1000).click()
        cy.contains('เริ่มต้นด้วย').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').wait(1000).click()
        cy.contains('ลงท้ายด้วย').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').wait(1000).click()
        cy.contains('เท่ากับ').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').wait(1000).click()
        cy.contains('ไม่มี').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').wait(1000).click()
        cy.get('i[class="mdi-menu-down mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default v-select__menu-icon"]').eq(2).should('be.visible').wait(1000).click()
        cy.contains('ไม่เท่ากับ').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.scrollTo('top')
        cy.get('i[class="mdi-filter mdi v-icon notranslate v-theme--PurpleTheme v-icon--size-default text-primary v-icon--clickable"]').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-muted v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.scrollTo('top')
    })
    it('insert new user group',()=>{
        cy.get('a[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default elevation-3 v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        cy.get('input[class="v-field__input"]').eq(1).should('be.visible').wait(1000).click().type('test001')
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-save v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.wait(1000)
        cy.get('button[class="swal2-confirm swal2-styled"]').should('be.visible').wait(1000).click()
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').should('be.visible').wait(1000).click()
        cy.get('input[type="checkbox"]').eq(14).wait(1000).click()
        cy.wait(1000)
        cy.get('button[class="v-btn v-btn--elevated v-theme--PurpleTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated"]').eq(1).wait(1000).click()
    })
})
