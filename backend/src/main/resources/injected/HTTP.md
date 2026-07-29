# Trabalhando com requisições HTTP

HTTP (Hypertext Transfer Protocol) é um protocolo de comunicação amplamente utilizado na internet para a troca de informações entre clientes e servidores. Por meio dele, é possível enviar requisições e receber respostas de serviços, APIs e aplicações web.

#### Envia uma requisição pelo método GET. Os parâmetros devem ser passados junto com a url

```java
public static String enviarGet(String url)
```

**Parâmetros**

| Parâmetro | Tipo   | Descrição                                               |
| --------- | ------ | ------------------------------------------------------- |
| url       | String | A url da requisição, com os parâmetros a serem passados |

!!! example "Exemplo de uso"

    ```java

    try {
        String url "http://host.remoto/teste?parametro1=valor&parametro2=valor2";
        String resultado = HTTP.enviarGet(url);

    } catch (HTTPException ex) {
        //Tratamento da exceção
    }

    ```
    **Retorna**: Uma String com a resposta da requisição HTTP.

!!! warning "**Exceções que podem ocorrer:**"
    **HTTPException** - Caso ocorra algum erro na comunicação com o host

<br>

#### Envia uma requisição pelo método POST. Os parâmetros são encapsulados pela classe ParametrosPost, como mostrado no exemplo abaixo.

```java
public static String enviarPost(String url, ParametrosPost parametros)
```

**Parâmetros**

| Parâmetro  | Tipo   | Descrição                                    |
| ---------- | ------ | -------------------------------------------- |
| url        | String | A url da requisição                          |
| parametros | String | Os parâmetros a serem enviados na requisição |

!!! example "Exemplo de uso"

    ```java

    try { 
        String url "http://host.remoto/teste"; 
        ParametrosPost parametros = HTTP.criarParametros(); 
        parametros.adicionarParametro("parametro1", "valor1"); 
        parametros.adicionarParametro("parametro2", "valor2");  
        String resultado = HTTP.enviarPost(url, parametros); 

    } catch (HTTPException ex) { 
        //Tratamento da exceção 
    }

    ```
    **Retorna**: Uma String com a resposta da requisição HTTP.

!!! warning "**Exceções que podem ocorrer:**"
    **HTTPException** - Caso ocorra algum erro na comunicação com o host
