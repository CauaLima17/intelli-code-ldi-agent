# Sobre a classe `Anexo`
A classe `Anexo` é responsável por representar e configurar arquivos que serão enviados juntamente com uma mensagem de e-mail.

#### Cria um anexo puro, isto é, anexo que não poderá ser adicionado ao corpo da mensagem do e-mail. Normalmente é utilizado para anexar arquivos de texto, multimídia e etc.

```java
public Anexo();
```

!!! example "Exemplo de uso"

    ```java

    Anexo anexo = new Anexo();

    ```

<br>

#### Cria um anexo do tipo **INLINE** (que pode ser utilizada no corpo da mensagem) se inline for Anexo.INLINE, caso contrário será criado um anexo puro. Normalmente é utilizado para anexar imagens que serão referênciadas em tags HTML no corpo da mensagem do e-mail.

```java
public Anexo(int inline);
```

| Parâmetro | Tipo | Descrição                                    |
| --------- | ---- | -------------------------------------------- |
| inline    | int  | Indica se o anexo será do tipo Anexo.INLINE. |

!!! example "Exemplo de uso"

    ```java

    Anexo anexo = new Anexo(Anexo.INLINE);

    ```

<br>

#### Adiciona o diretório do arquivo a ser anexado.

```java
public void adicionarEndereco(String endereco);
```

| Parâmetro | Tipo   | Descrição                           |
| --------- | ------ | ----------------------------------- |
| endereco  | String | Diretório do arquivo a ser anexado. |

!!! example "Exemplo de uso"

    ```java

    Anexo anexo = new Anexo();
    anexo.adicionarEndereco("C:/dir/imagem.png");

    ```
!!! warning "**Observações**"
    1. Caso este método não seja executado não poderá ser adicionado ao e-mail.
    2. Múltiplas execuções deste método irão sobrepor diretórios já existentes.
    3. Atenção ao uso de "\" no endereço, Java compreende tal símbolo como um comando, sendo assim utilize "\\\" ou "/" em seu lugar.

<br>

#### Específica o identificador do anexo. O identificador poderá ser utilizado para referenciar o anexo no corpo da mensagem do e-mail.



```java
public void adicionarIdentificador(String identificador);
```

| Parâmetro     | Tipo   | Descrição              |
| ------------- | ------ | ---------------------- |
| identificador | String | Identificador do anexo |

!!! example "Exemplo de uso"

    ```java

    Anexo anexo = new Anexo();
    anexo.adicionarEndereco("C:/dir/imagem.png"); anexo.adicionarIdentificador("rede");

    ```

!!! warning "**Uso Obrigatório**"
    Este método deve ser executado obrigatoriamente caso o anexo seja do tipo **INLINE**.
<br>

#### Renomeia o anexo, o anexo é nomeado inicialmente quando é definido o endereço do arquivo (adicionarEndereco()) desta forma com este método é possível alterar o nome do arquivo a ser anexado.

```java
public void renomearArquivo(String nome);
```

| Parâmetro | Tipo   | Descrição             |
| --------- | ------ | --------------------- |
| nome      | String | Novo nome do arquivo. |

!!! example "Exemplo de uso"

    ```java

    Anexo anexo = new Anexo(); 
    anexo.adicionarEndereco("C:/dir/imagem.png"); 
    anexo.renomearArquivo("imagem1.png");

    ```