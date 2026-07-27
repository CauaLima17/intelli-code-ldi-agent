# Trabalhando com Servidores PI

Os servidores PI são utilizados para coleta, armazenamento e disponibilização de dados operacionais e históricos de processos industriais. Os recursos disponíveis permitem consultar informações, registrar valores e integrar dados do PI System com outras aplicações e sistemas de automação.

#### Escreve um valor do tipo _Date_ no Servidor PI.

```java
public static void escreverDate(String servidor, String variavel, Date valor);
```

| Parâmetro | Tipo    | Descrição                            |
| --------- | ------- | ------------------------------------ |
| servidor  | String  | O nome do servidor                   |
| variavel  | String  | A variável do servidor a ser escrita |
| valor     | boolean | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = PI.podeEscrever("servidor", "tagQualquer");
    Date valor = new Date();

    if (podeEscrever) {
        PI.escreverDate("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[double](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static void escreverDouble(String servidor, String variavel, double valor);
```

| Parâmetro | Tipo    | Descrição                            |
| --------- | ------- | ------------------------------------ |
| servidor  | String  | O nome do servidor                   |
| variavel  | String  | A variável do servidor a ser escrita |
| valor     | boolean | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = PI.podeEscrever("servidor", "tagQualquer");
    double valor = 3.141592;

    if (podeEscrever) {
        PI.escreverDouble("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[float](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static void escreverFloat(String servidor, String variavel, float valor);
```

| Parâmetro | Tipo    | Descrição                            |
| --------- | ------- | ------------------------------------ |
| servidor  | String  | O nome do servidor                   |
| variavel  | String  | A variável do servidor a ser escrita |
| valor     | boolean | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = PI.podeEscrever("servidor", "tagQualquer");
    float valor = 3.141592;

    if (podeEscrever) {
        PI.escreverFloat("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[int](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static void escreverInt(String servidor, String variavel, int valor);
```

| Parâmetro | Tipo    | Descrição                            |
| --------- | ------- | ------------------------------------ |
| servidor  | String  | O nome do servidor                   |
| variavel  | String  | A variável do servidor a ser escrita |
| valor     | boolean | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = PI.podeEscrever("servidor", "tagQualquer");
    int valor = 3;

    if (podeEscrever) {
        PI.escreverInt("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[short](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static void escreverShort(String servidor, String variavel, short valor);
```

| Parâmetro | Tipo    | Descrição                            |
| --------- | ------- | ------------------------------------ |
| servidor  | String  | O nome do servidor                   |
| variavel  | String  | A variável do servidor a ser escrita |
| valor     | boolean | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = PI.podeEscrever("servidor", "tagQualquer");
    short valor = 255;

    if (podeEscrever) {
        PI.escreverShort("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[String](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static void escreverString(String servidor, String variavel, String valor);
```

| Parâmetro | Tipo    | Descrição                            |
| --------- | ------- | ------------------------------------ |
| servidor  | String  | O nome do servidor                   |
| variavel  | String  | A variável do servidor a ser escrita |
| valor     | boolean | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = PI.podeEscrever("servidor", "tagQualquer");
    String valor = "Br-Mirror";

    if (podeEscrever) {
        PI.escreverString("servidor", "tagQualquer", valor);
    }

    ```
<br>

#### Escreve um valor do tipo _Date_ no Servidor PI.

```java
public static Date lerDate(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| servidor  | String | O nome do servidor                |
| variavel  | String | A variável do servidor a ser lida |

!!! example "Exemplo de uso"

    ```java

    Date valorDate = PI.lerDate("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (Date)

<br>

#### Escreve um valor do tipo _[double](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static double lerDouble(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| servidor  | String | O nome do servidor                |
| variavel  | String | A variável do servidor a ser lida |

!!! example "Exemplo de uso"

    ```java

    double valorDate = PI.lerDouble("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (double)

<br>

#### Escreve um valor do tipo _[float](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static float lerFloat(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| servidor  | String | O nome do servidor                |
| variavel  | String | A variável do servidor a ser lida |

!!! example "Exemplo de uso"

    ```java

    float valorDate = PI.lerFloat("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (float)

<br>

#### Escreve um valor do tipo _[int](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static int lerInt(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| servidor  | String | O nome do servidor                |
| variavel  | String | A variável do servidor a ser lida |

!!! example "Exemplo de uso"

    ```java

    int valorDate = PI.lerInt("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (int)

<br>

#### Escreve um valor do tipo _[short](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static short lerShort(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| servidor  | String | O nome do servidor                |
| variavel  | String | A variável do servidor a ser lida |

!!! example "Exemplo de uso"

    ```java

    short valorDate = PI.lerShort("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (short)

<br>

#### Escreve um valor do tipo _[String](../sintaxe_java/tipos_dados.md)_ no Servidor PI.

```java
public static String lerString(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição                         |
| --------- | ------ | --------------------------------- |
| servidor  | String | O nome do servidor                |
| variavel  | String | A variável do servidor a ser lida |

!!! example "Exemplo de uso"

    ```java

    String valorDate = PI.lerString("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (String)

<br>

#### Retorna o tipo de dado de uma variável do servidor PI
Obtém o tipo de dado associado a uma variável (tag) do servidor PI. O valor retornado pode ser utilizado

```java
public static int getTipo(String servidor, String variavel);
```

| Parâmetro | Tipo   | Descrição                   |
| --------- | ------ | --------------------------- |
| servidor  | String | O nome do servidor          |
| variavel  | String | A variável a ser verificada |

**Retorna:** um _[int](../sintaxe_java/tipos_dados.md)_ representando os tipos, que podem ser:

| Retorno | Tipo representado |
| ------- | ----------------- |
| 0       | Date              |
| 1       | float             |
| 2       | short             |
| 3       | double            |
| 4       | String            |
| 5       | boolean           |
| 6       | int               |
| 7       | char              |
| 8       | long              |

!!! example "Exemplo de uso"

    ```java

    int tipo = PI.getTipo("servidor", "tagQualquer");

    switch (tipo) {     
        case 0:
            Date valorDate = PI.lerDate("servidor", "tagQualquer");
            break;     
        case 1:
            float valorFloat = PI.lerFloat("servidor", "tagQualquer");
            break;     
        case 2:
            short valorShort = PI.lerShort("servidor", "tagQualquer");
            break;      
        case 3:
            double valorDouble = PI.lerDouble("servidor", "tagQualquer");
            break;     
        case 4:
            String valorString = PI.lerString("servidor", "tagQualquer");
            break;      
        case 5:
            boolean valorBoolean = PI.lerBoolean("servidor", "tagQualquer");
            break;     
        case 6:
            int valorInt = PI.lerInt("servidor", "tagQualquer");
            break;      
        case 7:
            char valorChar = PI.lerChar("servidor", "tagQualquer");
            break;      
        case 8:
            long valorLong = PI.lerLong("servidor", "tagQualquer");
            break;  }

    ```

<br>

#### Verifica se uma variável pode ser lida
Verifica se a variável informada está disponível para leitura no servidor PI.

```java
public static boolean podeLer(String servidor, String variavel)
```

**Parâmetros:**

| Parâmetro | Tipo   | Descrição                   |
| --------- | ------ | --------------------------- |
| servidor  | String | O nome do servidor          |
| variavel  | String | A variável a ser verificada |

!!! example "Exemplo de uso"

    ```java

    boolean podeLer = PI.podeLer("servidor", "tagQualquer");

    if (podeLer) {
        double valorDouble = PI.lerDouble("servidor", "tagQualquer");
    }

    ```
    **Retorna:** _true_ caso seja possível ler a variável e _false_ caso contrário

<br>

#### Verifica se uma variável pode ser escrita
Verifica se a variável informada permite operações de escrita no servidor PI.

```java
public static boolean podeEscrever(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição                   |
| --------- | ------ | --------------------------- |
| servidor  | String | O nome do servidor          |
| variavel  | String | A variável a ser verificada |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = PI.podeEscrever("servidor", "tagQualquer");

    if (podeEscrever) {
        PI.escreverString("servidor", "tagQualquer", "Um valor");
    }

    ```

    **Retorna:** _true_ caso seja possível escrever na variável e _false_ caso contrário
