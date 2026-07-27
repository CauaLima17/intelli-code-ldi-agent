# Sobre a classe `LOG`
A classe LOG fornece métodos utilitários para registro de eventos da aplicação, permitindo armazenar informações relevantes para monitoramento, rastreamento e diagnóstico de problemas.

Por meio dela, é possível registrar mensagens em diferentes níveis de severidade, como erros (Error), avisos (Warn), informações (Info) e demais categorias suportadas pelo sistema de logging.

#### Registra uma mensagem de erro juntamente com a exceção associada

```java
public static void error(String message, Exception ex);
```

!!! example "Exemplo de uso"

    ```java

    LOG.error("Ocorreu um erro no processo", ex);

    ```

<br>

#### Registra uma mensagem informativa em um LOG

```java
public static void info(String message);
```

!!! example "Exemplo de uso"

````
```java
LOG.info("Processo iniciado com sucesso");
```
````

<br>

#### Registra uma mensagem de aviso em um LOG

```java
public static void warn(String message);
```

!!! example "Exemplo de uso"

````
```java
LOG.warn("O arquivo de configuração não foi encontrado. Valores padrão serão utilizados");
```
````
