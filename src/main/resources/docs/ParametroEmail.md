# Sobre a classe `ParametroEmail`

A classe `ParametroEmail` é responsável por encapsular todas as informações necessárias para a composição de uma mensagem de e-mail. Por meio dela, é possível definir destinatários, assunto, conteúdo da mensagem, anexos e configurações adicionais, como a codificação do texto.

#### Adiciona um anexo a lista de anexos que será enviada no e-mail.

```java
public void adicionarAnexo(Anexo anexo);
```

| Parâmetro | Tipo  | Descrição                                                                                 |
| --------- | ----- | ----------------------------------------------------------------------------------------- |
| anexo     | Anexo | Variável do tipo Anexo que guarda informações sobre local do arquivo e seu identificador. |

!!! note "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();

    // Montando o anexo ... parametro.adicionarAnexo(anexo);
    Anexo anexo = new Anexo();

    ```

<br>

#### Define o título/assunto do e-mail a ser enviado, caso este método não seja executado o e-mail será enviado com o título em branco.

```java
public void adicionarAssunto(String assunto);
```

| Parâmetro | Tipo  | Descrição                                                                                 |
| --------- | ----- | ----------------------------------------------------------------------------------------- |
| anexo     | Anexo | Variável do tipo Anexo que guarda informações sobre local do arquivo e seu identificador. |

!!! example "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();

    // Montando o anexo ... 
    parametro.adicionarAnexo(anexo);
    Anexo anexo = new Anexo();

    ```

<br>

#### Adiciona um ou mais destinatários ao e-mail. O método pode ser chamado mais de uma vez de forma que sempre irá adicionar e-mails a lista de destinatários.

```java
public void adicionarDestinatario(String email);
```

| Parâmetro | Tipo   | Descrição                                                         |
| --------- | ------ | ----------------------------------------------------------------- |
| email     | String | E-mails que deverão ser adicionados ao e-mail, separados por ",". |

!!! example "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();

    parametro.adicionarDestinatario("fulano1@email.com");
    parametro.adicionarDestinatario("fulano2@email.com, fulano3@email.com");

    ```
    
<br>

#### Adiciona ao e-mail a mensagem, concatenando com a mensagem do e-mail já existente. A mensagem suporta HTML.

```java
public void adicionarMensagem(String mensagem);
```

| Parâmetro | Tipo   | Descrição                  |
| --------- | ------ | -------------------------- |
| mensagem  | String | Mensagem a ser adicionada. |

!!! example "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();
    parametro.adicionarMensagem("Um pouco de conteúdo... ");
    parametro.adicionarMensagem("Mais um pouco... ");
    parametro.adicionarMensagem("<h2>em HTML</h2>");

    ```

<br>

#### Remove a primeira incidência de Anexo com identificador igual a id da lista de anexos. Caso nenhuma incidência ocorra a lista de anexos permanece inalterada.

```java
public void removerAnexo(String id);
```

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| id        | String | Identificador do anexo a ser removido. |

!!! example "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();
    Anexo anexo1 = new Anexo();
    Anexo anexo2 = new Anexo();
    anexo1.adicionarIdentificador("1");
    anexo2.adicionarIdentificador("2");

    // Montando os anexos ...
    parametro.adicionarAnexo(anexo1);
    parametro.adicionarAnexo(anexo2);

    try {
        parametro.removerAnexo("2");
    } catch (EmailException ex) {   
        //Tratamento da exceção
    }

    ```

!!! warning "Exceções que podem ocorrer"
    **EmailException** - Se algum anexo da lista não possuir identificador

<br>

#### Remove as primeiras incidências dos e-mails contidos em destinatario.

```java
public void removerDestinatario(String destinatario);
```

| Parâmetro    | Tipo   | Descrição                                                                               |
| ------------ | ------ | --------------------------------------------------------------------------------------- |
| destinatario | String | E-mails a serem removidos da lista de destinos, os e-mails devem ser separados por ",". |

!!! example "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();
    parametro.adicionarDestinatario("fulano1@email.com");
    parametro.adicionarDestinatario("fulano2@email.com,fulano3@email.com");
    parametro.removerDestinatario("fulano2@email.com,fulano1@email.com");

    ```

<br>

#### Limpa toda a lista de anexos do parâmetro.

```java
public void removerTodosAnexos();
```

!!! example "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();
    Anexo anexo1 = new Anexo();
    Anexo anexo2 = new Anexo();
    anexo1.adicionarIdentificador("1");
    anexo2.adicionarIdentificador("2");

    // Montando os anexos ...
    parametro.adicionarAnexo(anexo1);
    parametro.adicionarAnexo(anexo2);

    parametro.removerTodosAnexos();

    ```

<br>

#### Limpa toda a lista de destinatários do parâmetro.

```java
public void removerTodosDestinatarios();
```

!!! example "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();
    parametro.adicionarDestinatario("fulano1@email.com");
    parametro.adicionarDestinatario("fulano2@email.com,fulano3@email.com");

    parametro.removerTodosDestinatarios();

    ```

<br>

#### Limpa toda a mensagem armazenada no parâmetro.

```java
public void limparMensagem();
```

!!! example "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();
    parametro.adicionarMensagem("Um pouco de conteúdo... ");
    parametro.adicionarMensagem("Mais um pouco... ");
    parametro.adicionarMensagem("<h2>em HTML</h2>");

    parametro.limparMensagem();

    ```

<br>

#### Define o tipo de codificação que será enviado o e-mail.

```java
public void definirCodificacao(String codificacao);
```

| Parâmetro   | Tipo   | Descrição                                              |
| ----------- | ------ | ------------------------------------------------------ |
| codificacao | String | Tipo da codificação do texto, ex.: UTF-8, UTF-16, etc. |

!!! example "Exemplo de uso"

    ```java

    ParametroEmail parametro = new ParametroEmail();
    parametro.definirCodificacao("UTF-8");

    ```
