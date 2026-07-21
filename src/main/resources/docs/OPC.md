# Trabalhando com Servidores OPC

OPC (Open Platform Communications) é um padrão de comunicação utilizado na automação industrial para a troca de dados entre dispositivos, controladores, sistemas supervisórios e aplicações. Os recursos disponibilizados permitem conectar-se a servidores OPC, ler valores de tags e monitorar informações de processos industriais.

#### Escreve um valor do tipo _[boolean](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static void escreverBoolean(String servidor, String variavel, boolean valor);
```

| Parâmetro | Tipo    | Descrição                            |
| --------- | ------- | ------------------------------------ |
| servidor  | String  | O nome do servidor                   |
| variavel  | String  | A variável do servidor a ser escrita |
| valor     | boolean | O valor a ser escrito na variável    |

**Exemplo:**

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");
    boolean valor = true

    if (podeEscrever) {
        OPC.escreverBoolean("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[char](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static void escreverChar(String servidor, String variavel, char valor);
```

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| servidor  | String | O nome do servidor                   |
| variavel  | String | A variável do servidor a ser escrita |
| valor     | char   | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");
    char valor = 'A';

    if (podeEscrever) {
        OPC.escreverChar("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _Date_ no Servidor OPC.

```java
public static void escreverDate(String servidor, String variavel, Date valor);
```

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| servidor  | String | O nome do servidor                   |
| variavel  | String | A variável do servidor a ser escrita |
| valor     | Date   | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");
    Date valor = new Date();

    if (podeEscrever) {
        OPC.escreverDate("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[double](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static void escreverDouble(String servidor, String variavel, double valor);
```

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| servidor  | String | O nome do servidor                   |
| variavel  | String | A variável do servidor a ser escrita |
| valor     | double | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");
    double valor = 3.141592;

    if (podeEscrever) {
        OPC.escreverDouble("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[float](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static void escreverFloat(String servidor, String variavel, float valor);
```

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| servidor  | String | O nome do servidor                   |
| variavel  | String | A variável do servidor a ser escrita |
| valor     | float  | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");
    float valor = 3.141592;

    if (podeEscrever) {
        OPC.escreverFloat("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[int](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static void escreverInt(String servidor, String variavel, int valor);
```

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| servidor  | String | O nome do servidor                   |
| variavel  | String | A variável do servidor a ser escrita |
| valor     | int    | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");
    int valor = 3;

    if (podeEscrever) {
        OPC.escreverInt("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[long](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static void escreverLong(String servidor, String variavel, long valor);
```

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| servidor  | String | O nome do servidor                   |
| variavel  | String | A variável do servidor a ser escrita |
| valor     | long   | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");
    long valor = 1231456;

    if (podeEscrever) {
        OPC.escreverLong("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[short](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static void escreverShort(String servidor, String variavel, short valor);
```

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| servidor  | String | O nome do servidor                   |
| variavel  | String | A variável do servidor a ser escrita |
| valor     | short  | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");
    short valor = 255;

    if (podeEscrever) {
        OPC.escreverShort("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Escreve um valor do tipo _[String](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static void escreverString(String servidor, String variavel, String valor);
```

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| servidor  | String | O nome do servidor                   |
| variavel  | String | A variável do servidor a ser escrita |
| valor     | String | O valor a ser escrito na variável    |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");
    String valor = "Br-Mirror";

    if (podeEscrever) {
        OPC.escreverString("servidor", "tagQualquer", valor);
    }

    ```

<br>

#### Ler um valor do tipo _[boolean](../sintaxe_java/tipos_dados.md)_.

```java
public static boolean lerBoolean(String servidor, String variavel);
```

| Parâmetro | Tipo   | Descrição             |
| --------- | ------ | --------------------- |
| servidor  | String | O nome do servidor    |
| variavel  | String | A variável a ser lida |



!!! example "Exemplo de uso"

    ```java

    bool valorBoolean = OPC.lerBoolean("servidor", "tagQualquer");

    ```

    **Retorna:** o valor da variável (boolean)

<br>

#### Ler um valor do tipo _Date_ no Servidor OPC.

```java
public static Date lerDate(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição             |
| --------- | ------ | --------------------- |
| servidor  | String | O nome do servidor    |
| variavel  | String | A variável a ser lida |

!!! example "Exemplo de uso"

    ```java

    Date valorDate = OPC.lerDate("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (Date)

<br>

#### Ler um valor do tipo _[double](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static double lerDouble(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição             |
| --------- | ------ | --------------------- |
| servidor  | String | O nome do servidor    |
| variavel  | String | A variável a ser lida |

!!! example "Exemplo de uso"

    ```java

    double valorDouble = OPC.lerDouble("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (double)

<br>

#### Ler um valor do tipo _[float](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static float lerFloat(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição             |
| --------- | ------ | --------------------- |
| servidor  | String | O nome do servidor    |
| variavel  | String | A variável a ser lida |

!!! example "Exemplo de uso"

    ```java

    float valorFloat = OPC.lerFloat("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (float)

<br>

#### Ler um valor do tipo _[int](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static int lerInt(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição             |
| --------- | ------ | --------------------- |
| servidor  | String | O nome do servidor    |
| variavel  | String | A variável a ser lida |

!!! example "Exemplo de uso"

    ```java

    int valorInt = OPC.lerInt("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (int)

<br>

#### Ler um valor do tipo _[long](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static long lerLong(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição             |
| --------- | ------ | --------------------- |
| servidor  | String | O nome do servidor    |
| variavel  | String | A variável a ser lida |

!!! example "Exemplo de uso"

    ```java

    long valorLong = OPC.lerLong("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (long)

<br>

#### Ler um valor do tipo _[short](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static short lerShort(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição             |
| --------- | ------ | --------------------- |
| servidor  | String | O nome do servidor    |
| variavel  | String | A variável a ser lida |

!!! example "Exemplo de uso"

    ```java

    short valorShort = OPC.lerShort("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (short)

<br>

#### Ler um valor do tipo _[String](../sintaxe_java/tipos_dados.md)_ no Servidor OPC.

```java
public static String lerString(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição             |
| --------- | ------ | --------------------- |
| servidor  | String | O nome do servidor    |
| variavel  | String | A variável a ser lida |



!!! example "Exemplo de uso"

    ```java

    String valorString = OPC.lerString("servidor", "tagQualquer");

    ```
    **Retorna:** o valor da variável (String)

<br>

## getTipo

---

Retorna o tipo da variável.

```java
public static int getTipo(String servidor, String variavel)
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

    int tipo = OPC.getTipo("servidor", "tagQualquer");

    switch (tipo) {     
        case 0:
            Date valorDate = OPC.lerDate("servidor", "tagQualquer");
            break;     
        case 1:
            float valorFloat = OPC.lerFloat("servidor", "tagQualquer");
            break;     
        case 2:
            short valorShort = OPC.lerShort("servidor", "tagQualquer");
            break;      
        case 3:
            double valorDouble = OPC.lerDouble("servidor", "tagQualquer");
            break;     
        case 4:
            String valorString = OPC.lerString("servidor", "tagQualquer");
            break;      
        case 5:
            boolean valorBoolean = OPC.lerBoolean("servidor", "tagQualquer");
            break;     
        case 6:
            int valorInt = OPC.lerInt("servidor", "tagQualquer");
            break;      
        case 7:
            char valorChar = OPC.lerChar("servidor", "tagQualquer");
            break;      
        case 8:
            long valorLong = OPC.lerLong("servidor", "tagQualquer");
            break;  }

    ```

<br>

## podeLer

---

Verifica se a variável pode ser lida.

```java
public static boolean podeLer(String servidor, String variavel)
```

| Parâmetro | Tipo   | Descrição                   |
| --------- | ------ | --------------------------- |
| servidor  | String | O nome do servidor          |
| variavel  | String | A variável a ser verificada |

!!! example "Exemplo de uso"

    ```java

    boolean podeLer = OPC.podeLer("servidor", "tagQualquer");

    if (podeLer) {
        double valorDouble = OPC.lerDouble("servidor", "tagQualquer");
    }

    ```
    **Retorna:** _true_ caso seja possível ler a variável e _false_ caso contrário

<br>

## podeEscrever

---

```java
public static boolean podeEscrever(String servidor, String variavel)
```

Verifica se a variável pode ser escrita.

| Parâmetro | Tipo   | Descrição                   |
| --------- | ------ | --------------------------- |
| servidor  | String | O nome do servidor          |
| variavel  | String | A variável a ser verificada |

!!! example "Exemplo de uso"

    ```java

    boolean podeEscrever = OPC.podeEscrever("servidor", "tagQualquer");

    if (podeEscrever) {
        OPC.escreverString("servidor", "tagQualquer", "Um valor");
    }

    ```
    **Retorna:** _true_ caso seja possível escrever na variável e _false_ caso contrário
