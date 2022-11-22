import CadastroPage from '../pages/CadastroPage'
it('Realizar cadastro com CPF inválido', () => {
    var dadosEntregador = {
        nome: 'Maria Joaquina',
        cpf: '68740374041',
        cpf_inv: 'xyz',
        email: 'maria@joaquina.com',
        whatsapp: '61932338965',
        address: {
            cep:'89286340',
            rua: 'Rua Bahia',
            numero: '10',
            detalhe:'Ap 1305',
            bairro: 'Cruzeiro',
            cidade_estado: 'São Bento do Sul/SC'

        },
        metodo_entrega: 'Bicicleta',
        cnh: 'cnh-digital.jpg'

    }
   

    var cadastro = new CadastroPage()
    cadastro.go()
    
    cy.get('a[href="/deliver"]').click()

    cadastro.acessaPagCadastro()
    cadastro.preencheForm(dadosEntregador)
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(dadosEntregador.cpf_inv)
    cadastro.enviaCadastro()
    const msgCpfInv = 'Oops! CPF inválido'
    cadastro.validaMsgCpf(msgCpfInv)
    
  })

  it('Não envia dados da CNH', () => {
    var dadosEntregador = {
        nome: 'Maria Joaquina',
        cpf: '68740374041',
        cpf_inv: 'xyz',
        email: 'maria@joaquina.com',
        whatsapp: '61932338965',
        address: {
            cep:'89286340',
            rua: 'Rua Bahia',
            numero: '10',
            detalhe:'Ap 1305',
            bairro: 'Cruzeiro',
            cidade_estado: 'São Bento do Sul/SC'

        },
        metodo_entrega: 'Bicicleta',
        cnh: ''

    }
   

    var cadastro = new CadastroPage()
    cadastro.go()
    
    cy.get('a[href="/deliver"]').click()

    cadastro.acessaPagCadastro()
    cadastro.preencheForm(dadosEntregador)
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(dadosEntregador.cpf)
    cadastro.enviaCadastro()
    const msgCnhInv = 'Adicione uma foto da sua CNH'
    cadastro.validaMsgCpf(msgCnhInv)
    
  })

  it('Realiza cadastro com sucesso', () => {
    var dadosEntregador = {
        nome: 'Maria Joaquina',
        cpf: '68740374041',
        cpf_inv: 'xyz',
        email: 'maria@joaquina.com',
        whatsapp: '61932338965',
        address: {
            cep:'89286340',
            rua: 'Rua Bahia',
            numero: '10',
            detalhe:'Ap 1305',
            bairro: 'Cruzeiro',
            cidade_estado: 'São Bento do Sul/SC'

        },
        metodo_entrega: 'Bicicleta',
        cnh: 'cnh-digital.jpg'

    }
   

    var cadastro = new CadastroPage()
    cadastro.go()
    
    cy.get('a[href="/deliver"]').click()

    cadastro.acessaPagCadastro()
    cadastro.preencheForm(dadosEntregador)
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(dadosEntregador.cpf)
    cy.get('.dropzone').selectFile('cypress/fixtures/cnh-digital.jpg', {action: 'drag-drop',})
    cadastro.enviaCadastro()
    const cadastroRealizado = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    cadastro.validaCadastroSucesso(cadastroRealizado)
   
    
  })