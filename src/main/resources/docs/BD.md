# Trabalhando com Bancos de Dados

Semelhante a um ORM, o sistema do Logique Data Integrator (LDI) disponibiliza recursos de script para manipulação de bancos de dados por meio da classe `BD`, fornecendo métodos para consultas, inserções, atualizações e demais operações de acesso a dados de forma simplificada.

#### Inserção de valores em uma tabela no banco de dados

```java
public static void inserir(String alias, String tabela, String[] colunas, Object[] valores)
```

**Parâmetros:**

| Parâmetro | Tipo     | Descrição                                                           |
| --------- | -------- | ------------------------------------------------------------------- |
| alias     | String   | O alias do banco                                                    |
| tabela    | String   | Tabela onde serão inseridos os valores                              |
| colunas   | String[] | As colunas da tabela                                                |
| valores   | Object[] | Os valores a serem inseridos, seguindo a ordem definida nas colunas |

!!! example "Exemplo de uso"

    ```java

    String[] colunas = new String[]{"coluna1", "coluna2", "coluna3"};

    Object[] valores = new Object[]{"ABC", Integer.valueOf(1234), Integer.valueOf(333)};

    String alias = "nomeDoBanco"; String tabela = "nomeDaTabela";

    BD.inserir(alias, tabela, colunas, valores);

    ```

<br>

#### Inserção de um objeto em uma tabela no banco de dados

```java
public static void inserir(String alias, String tabela, String coluna, Object valor)
```

Insere um valor na tabela

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| alias     | String | O alias do banco                       |
| tabela    | String | Tabela onde serão inseridos os valores |
| coluna    | String | A coluna da tabela                     |
| valor     | Object | O valor a ser inserido                 |

!!! example "Exemplo de uso"

    ```java

    String coluna = "coluna1";
    String valor = "teste";
    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";

    BD.inserir(alias,tabela, coluna, valor);

    ```

<br>

#### Inserção de um valor do tipo [int](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void inserir(String alias, String tabela, String coluna, int valor)
```

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| alias     | String | O alias do banco                       |
| tabela    | String | Tabela onde serão inseridos os valores |
| coluna    | String | A coluna da tabela                     |
| valor     | int    | O valor a ser inserido                 |

!!! example "Exemplo de uso"

    ```java

    String coluna = "coluna1";
    int valor = 123;
    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";

    BD.inserir(alias, tabela, coluna, valor);

    ```

<br>

#### Inserção de um valor do tipo [long](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void inserir(String alias, String tabela, String coluna, long valor)
```

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| alias     | String | O alias do banco                       |
| tabela    | String | Tabela onde serão inseridos os valores |
| coluna    | String | A coluna da tabela                     |
| valor     | long   | O valor a ser inserido                 |

!!! example "Exemplo de uso"

    ```java

    String coluna = "coluna1";
    int valor = 123;
    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";

    BD.inserir(alias, tabela, coluna, valor);

    ```

<br>

#### Inserção um valor do tipo [double](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void inserir(String alias, String tabela, String coluna, double valor)
```

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| alias     | String | O alias do banco                       |
| tabela    | String | Tabela onde serão inseridos os valores |
| coluna    | String | A coluna da tabela                     |
| valor     | double | O valor a ser inserido                 |

!!! example "Exemplo de uso"

    ```java

    String coluna = "coluna1";
    double valor = 123d;
    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";

    BD.inserir(alias, tabela, coluna, valor);

    ```

<br>

#### Inserção um valor do tipo [float](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void inserir(String alias, String tabela, String coluna, float valor)
```

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| alias     | String | O alias do banco                       |
| tabela    | String | Tabela onde serão inseridos os valores |
| coluna    | String | A coluna da tabela                     |
| valor     | float  | O valor a ser inserido                 |

!!! example "Exemplo de uso"

    ```java

    String coluna = "coluna1";
    float valor = 123f;
    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";

    BD.inserir(alias, tabela, coluna, valor);

    ```

<br>

#### Inserção um valor do tipo [char](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

`public static void inserir(String alias, String tabela, String coluna, char valor)`

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| alias     | String | O alias do banco                       |
| tabela    | String | Tabela onde serão inseridos os valores |
| coluna    | String | A coluna da tabela                     |
| valor     | char   | O valor a ser inserido                 |

!!! example "Exemplo de uso"

    ```java

    String coluna = "coluna1";
    char valor = 'c';
    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";

    BD.inserir(alias, tabela, coluna, valor);

    ```

<br>

#### Inserção um valor do tipo [boolean](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

`public static void inserir(String alias, String tabela, String coluna, boolean valor)`

| Parâmetro | Tipo    | Descrição                              |
| --------- | ------- | -------------------------------------- |
| alias     | String  | O alias do banco                       |
| tabela    | String  | Tabela onde serão inseridos os valores |
| coluna    | String  | A coluna da tabela                     |
| valor     | boolean | O valor a ser inserido                 |

!!! example "Exemplo de uso"

    ```java

    String coluna = "coluna1";
    boolean valor = false;
    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";

    BD.inserir(alias, tabela, coluna, valor);

    ```

<br>

#### Atualiza um valor em uma tabela do banco de dados.

```java
public static void atualizar(String alias, String tabela, String coluna, Object valor, String where)
```

| Parâmetro | Tipo   | Descrição                                        |
| --------- | ------ | ------------------------------------------------ |
| alias     | String | O alias do banco                                 |
| tabela    | String | A tabela onde será atualizado o valor            |
| coluna    | String | A coluna onde será atualizado o valor            |
| valor     | Object | O novo valor a ser inserido                      |
| where     | String | A condição que define qual linha será atualizada |

!!! example "Exemplo de uso"

    ```java

    String valor = "ABC";
    BD.atualizar("nomeDoBanco", "nomeTabela", "coluna1", valor, "coluna2 = 1234");

    ```

<br>

#### Atualiza um valor do tipo [int](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void atualizar(String alias, String tabela, String coluna, int valor, String where)
```

| Parâmetro | Tipo   | Descrição                                        |
| --------- | ------ | ------------------------------------------------ |
| alias     | String | O alias do banco                                 |
| tabela    | String | A tabela onde será atualizado o valor            |
| coluna    | String | A coluna onde será atualizado o valor            |
| valor     | int    | O novo valor a ser inserido                      |
| where     | String | A condição que define qual linha será atualizada |

!!! example "Exemplo de uso"

    ```java

    int valor = 124;
    BD.atualizar("nomeDoBanco", "nomeTabela", "coluna1", valor, "coluna2 = 1234");

    ```

<br>

#### Atualiza um valor do tipo [long](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void atualizar(String alias, String tabela, String coluna, long valor, String where)
```

| Parâmetro | Tipo   | Descrição                                        |
| --------- | ------ | ------------------------------------------------ |
| alias     | String | O alias do banco                                 |
| tabela    | String | A tabela onde será atualizado o valor            |
| coluna    | String | A coluna onde será atualizado o valor            |
| valor     | long   | O novo valor a ser inserido                      |
| where     | String | A condição que define qual linha será atualizada |

!!! example "Exemplo de uso"

    ```java

    long valor = 12L;
    BD.atualizar("nomeDoBanco", "nomeTabela", "coluna1", valor, "coluna2 = 1234");

    ```

<br>

#### Atualiza um valor do tipo [double](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void atualizar(String alias, String tabela, String coluna, double valor, String where)
```

| Parâmetro | Tipo   | Descrição                                        |
| --------- | ------ | ------------------------------------------------ |
| alias     | String | O alias do banco                                 |
| tabela    | String | A tabela onde será atualizado o valor            |
| coluna    | String | A coluna onde será atualizado o valor            |
| valor     | double | O novo valor a ser inserido                      |
| where     | String | A condição que define qual linha será atualizada |

!!! example "Exemplo de uso"

    ```java

    double valor = 12d;
    BD.atualizar("nomeDoBanco", "nomeTabela", "coluna1", valor, "coluna2 = 1234");

    ```

<br>

#### Atualiza um valor do tipo [float](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void atualizar(String alias, String tabela, String coluna, float valor, String where)
```

| Parâmetro | Tipo   | Descrição                                        |
| --------- | ------ | ------------------------------------------------ |
| alias     | String | O alias do banco                                 |
| tabela    | String | A tabela onde será atualizado o valor            |
| coluna    | String | A coluna onde será atualizado o valor            |
| valor     | float  | O novo valor a ser inserido                      |
| where     | String | A condição que define qual linha será atualizada |

!!! example "Exemplo de uso"

    ```java

    float valor = 12f;
    BD.atualizar("nomeDoBanco", "nomeTabela", "coluna1", valor, "coluna2 = 1234");

    ```

<br>

#### Atualiza um valor do tipo [char](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void atualizar(String alias, String tabela, String coluna, char valor, String where)
```

| Parâmetro | Tipo   | Descrição                                        |
| --------- | ------ | ------------------------------------------------ |
| alias     | String | O alias do banco                                 |
| tabela    | String | A tabela onde será atualizado o valor            |
| coluna    | String | A coluna onde será atualizado o valor            |
| valor     | char   | O novo valor a ser inserido                      |
| where     | String | A condição que define qual linha será atualizada |

!!! example "Exemplo de uso"

    ```java

    char valor = 'C';
    BD.atualizar("nomeDoBanco", "nomeTabela", "coluna1", valor, "coluna2 = 1234");

    ```

<br>

#### Atualiza um valor do tipo [boolean](../sintaxe_java/tipos_dados.md) na tabela do banco de dados.

```java
public static void atualizar(String alias, String tabela, String coluna, boolean valor, String where)
```

| Parâmetro | Tipo    | Descrição                                        |
| --------- | ------- | ------------------------------------------------ |
| alias     | String  | O alias do banco                                 |
| tabela    | String  | A tabela onde será atualizado o valor            |
| coluna    | String  | A coluna onde será atualizado o valor            |
| valor     | boolean | O novo valor a ser inserido                      |
| where     | String  | A condição que define qual linha será atualizada |

!!! example "Exemplo de uso"

    ```java

    boolean valor = false;
    BD.atualizar("nomeDoBanco", "nomeTabela", "coluna1", valor, "coluna2 = 1234");

    ```

<br>

#### Atualiza todos os valores de uma coluna de uma tabela.

```java
public static void atualizar(String alias, String tabela, String coluna, Object valor)
```

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| alias     | String | O alias do banco                      |
| tabela    | String | A tabela onde será atualizado o valor |
| coluna    | String | A coluna onde será atualizado o valor |
| valor     | Object | O novo valor a ser inserido           |

!!! example "Exemplo de uso"

    ```java

    Object valor = "teste";
    BD.atualizar("nomeDoBanco", "nomeTabela", "coluna1", valor);

    ```

<br>

#### Atualiza os valores nas colunas de uma tabela (Com Where).

```java
public static void atualizar(String alias, String tabela, String[] colunas, Object[] valores)
```

| Parâmetro | Tipo     | Descrição                                        |
| --------- | -------- | ------------------------------------------------ |
| alias     | String   | O alias do banco                                 |
| tabela    | String   | A tabela onde será atualizado o valor            |
| colunas   | String[] | As colunas quer serão atualizadas                |
| valores   | Object[] | Os valores a serem inseridos                     |
| where     | String   | A condição que define qual linha será atualizada |

!!! example "Exemplo de uso"

    ```java

    Object[] valores = new Object[]{"valor1", Integer.valueOf(22)};
    String[] colunas = new String[]{"coluna1", "coluna2"};

    BD.atualizar("nomeDoBanco", "nomeTabela", colunas, valores ,"colunaTal = 1234");

    ```

<br>

#### Atualiza os valores nas colunas da tabela (Sem Where).

```java
public static void atualizar(String alias, String tabela, String[] colunas, Object[] valores)
```

| Parâmetro | Tipo     | Descrição                             |
| --------- | -------- | ------------------------------------- |
| alias     | String   | O alias do banco                      |
| tabela    | String   | A tabela onde será atualizado o valor |
| colunas   | String[] | As colunas quer serão atualizadas     |
| valores   | Object[] | Os valores a serem inseridos          |

!!! example "Exemplo de uso"

    ```java

    Object[] valores = new Object[]{"valor1", Integer.valueOf(22)};
    String[] colunas = new String[]{"coluna1", "coluna2"};

    BD.atualizar("nomeDoBanco", "nomeTabela", colunas, valores);

    ```

<br>

#### Remove um valor da tabela

```java
public static void removerValor(String alias, String tabela, String where)
```

| Parâmetro | Tipo   | Descrição                                       |
| --------- | ------ | ----------------------------------------------- |
| alias     | String | O alias do banco                                |
| tabela    | String | A tabela onde será removido o valor             |
| where     | String | A condição que define a linha que será removida |

!!! example "Exemplo de uso"

    ```java

    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";

    BD.removerValor(alias, tabela, "coluna1 = 21");

    ```

<br>

#### Remove todos as linhas da tabela.

```java
public static void removerTudo(String alias, String tabela)
```

| Parâmetro | Tipo   | Descrição                     |
| --------- | ------ | ----------------------------- |
| alias     | String | O alias do banco              |
| tabela    | String | A tabela onde estão as linhas |

!!! example "Exemplo de uso"

    ```java

    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";

    BD.removerTudo(alias, tabela);

    ```

<br>

#### Executa uma instrução SQL.

```java
public static int executarSQLInsertOuUpdate(String alias, String query)
```

| Parâmetro | Tipo   | Descrição               |
| --------- | ------ | ----------------------- |
| alias     | String | O alias do banco        |
| query     | String | A query a ser executada |

!!! example "Exemplo de uso"

    ```java

    String alias = "nomeDoBanco";
    int resultado = BD.executarSQLInsertOuUpdate(alias, "INSERT INTO TABELA1 (COLUNA1, COLUNA2) VALUES (1, 2)");

    ```
    **Retorna:** A quantidade de linhas afetadas pela instrução

<br>

#### Executa uma instrução SQL de consulta.

```java
public static Object[][] executarSQLSelect(String alias, String consulta);
```

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| alias     | String | O alias do banco               |
| consulta  | String | A consulta SQL a ser executada |

!!! example "Exemplo de uso"

    ```java

    String alias = "nomeDoBanco";
    Object[][] resultado = BD.executarSQLSelect(alias, "SELECT * FROM TABELA1");

    for (int i = 0; i < resultado.length; i++) {
        Object[] linha = resultado[i];

        for (int j = 0; j < linha.length; j++) {
              Object coluna = linha[j];
        }
    }

    ```
    **Retorna:** Uma matriz linha x coluna com o resultado da consulta

<br>

#### Realiza a consulta de uma linha, segundo uma determinada condição.

```java
public static Object[] lerValor(String alias, String tabela, String[] colunas, String where);
```

| Parâmetro | Tipo     | Descrição                                                                       |
| --------- | -------- | ------------------------------------------------------------------------------- |
| alias     | String   | O alias do banco                                                                |
| tabela    | String   | A tabela onde será consultado o valor                                           |
| colunas   | String[] | As colunas a serem retornadas. Caso seja null serão retornadas todas as colunas |
| where     | String   | A condição que define qual linha será retornada                                 |

!!! example "Exemplo de uso"

    ```java

    String[] colunas = new String[]{"coluna1", "coluna2", "coluna3"};
    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";
    Object[] linha = BD.lerValor(alias, tabela, colunas, "coluna1 = 2");

    for (int i = 0; i < linha.length; i++) {   
        Object coluna = linha[i];
    }

    ```
    **Retorno:** Um array de Object, onde cada índice representa o valor de cada coluna da linha

<br>

#### Realiza a consulta dos valores de uma tabela.

```java
public static Object[][] lerValores(String alias, String tabela, String[] colunas)
```

| Parâmetro | Tipo     | Descrição                                                                       |
| --------- | -------- | ------------------------------------------------------------------------------- |
| alias     | String   | O alias do banco                                                                |
| tabela    | String   | A tabela a ser consultada                                                       |
| colunas   | String[] | As colunas a serem retornadas. Caso seja null serão retornadas todas as colunas |

!!! example "Exemplo de uso"

    ```java

    String[] colunas = new String[]{"coluna1", "coluna2", "coluna3"};
    String alias = "nomeDoBanco";
    String tabela = "nomeDaTabela";
    Object[][] resultados = BD.lerValores(alias, tabela, colunas);

    for (int i = 0; i < resultados.length; i++) {
        Object[] linha = resultados[i];

        for (int j = 0; j < linha.length; j++) {
              Object coluna = linha[j];
        }
    }

    ```
    **Retorno:** Um array de Object, onde cada índice representa o valor de cada coluna da linha

<br>

#### Executa uma query cadastrada anteriormente no sistema.

```java
public static Object[][] executarConsulta(String nomeConsulta)
```

| Parâmetro    | Tipo   | Descrição                                |
| ------------ | ------ | ---------------------------------------- |
| nomeConsulta | String | A consulta cadastrada que será executada |

!!! example "Exemplo de uso"

    ```java

    String nomeConsulta = "consulta_teste";
    Object[][] resultado = BD.executarConsulta(nomeQuery);

    for (int i = 0; i < resultado.length; i++) {
        Object[] linha = resultado[i];

        for (int j = 0; j < linha.length; j++) {
              Object coluna = linha[j];
        }
    }

    ```
    **Retorno:** Uma matriz linha x coluna com os resultados da consulta
