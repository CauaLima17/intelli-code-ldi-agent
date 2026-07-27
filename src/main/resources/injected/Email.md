# Trabalhando com o protocolo SMTP
O SMTP (Simple Mail Transfer Protocol) é um protocolo padrão utilizado para o envio de mensagens de e-mail entre servidores e aplicações. Ele permite transmitir e-mails para destinatários através de servidores de correio eletrônico, sendo amplamente utilizado em sistemas de notificações, alertas automáticos e comunicação corporativa.

#### Enviar um e-mail para um destinatário

Utilizando as configurações de um servidor SMTP, é possível enviar mensagens de e-mail por meio do método `enviar`. As informações da mensagem, como destinatário, assunto e conteúdo, devem ser fornecidas através da classe [ParametroEmail](./metodos_parametro_email.md), responsável por encapsular os parâmetros necessários para o envio.

```java
public static void enviar(String servidor, ParametroEmail parametro);
```

| Parâmetro | Tipo           | Descrição                                         |
| --------- | -------------- | ------------------------------------------------- |
| servidor  | String         | Nome (alias) da configuração de e-mail cadastrada |
| parametro | ParametroEmail | Parâmetros a serem enviados no e-mail             |

!!! example "Exemplo de uso"

    ``` java

    ParametroEmail parametro = new ParametroEmail(); 
    parametro.adicionarDestinatario("destino1@email.com,destino2@email.com"); 
    parametro.adicionarDestinatario("destino3@email.com"); parametro.adicionarAssunto("Título do e-mail"); 
    parametro.adicionarMensagem("Conteúdo do e-mail"); 

    try {
        Email.enviar("alias",parametro); 

    } catch (EmailException ex) {
        //Tratamento da exceção
    }

    ```

!!! warning "**Exceções que podem ocorrer:**"
    **EmailException** - Caso ocorra algum erro no envio do e-mail