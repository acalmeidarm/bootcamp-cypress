
class CadastroPage{

    go(){
    cy.visit('/')
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

    }

    acessaPagCadastro(){
        cy.get('h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    preencheForm(dadosEntregador){
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type(dadosEntregador.nome)
        //cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(dadosEntregador.cpf_inv)
        cy.get(':nth-child(3) > :nth-child(1) > input').type(dadosEntregador.email)
        cy.get(':nth-child(3) > :nth-child(2) > input').type(dadosEntregador.whatsapp)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(dadosEntregador.address.cep)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()

        cy.get(':nth-child(4) > :nth-child(1) > input').type(dadosEntregador.address.numero)
        cy.get(':nth-child(4) > :nth-child(2) > input').type(dadosEntregador.address.detalhe)

        cy.get(':nth-child(3) > input').should('have.value', dadosEntregador.address.rua)
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value', dadosEntregador.address.bairro)
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', dadosEntregador.address.cidade_estado)
      
        cy.get('.delivery-method > :nth-child(2)').click()
                
        //cy.get('.dropzone').selectFile('cypress/fixtures/cnh-digital.jpg', {action: 'drag-drop',})

                
    }

    enviaCadastro(){
        cy.get('.button-success').click()
    }

    validaMsgCpf(msgCpfInv){
        cy.get('.alert-error').should('have.text', msgCpfInv)
    }

    validaEnvioCnh(msgCnhInv){
        cy.get('form > :nth-child(6)').should('have.text',msgCnhInv)
    }
    
    validaCadastroSucesso(cadastroRealizado){
        cy.get('.swal2-popup').contains(cadastroRealizado)
    }


}


export default CadastroPage;




