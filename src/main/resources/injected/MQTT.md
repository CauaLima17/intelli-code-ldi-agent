# Trabalhando com o protocolo Message Queuing Telemetry Transport (MQTT)
O MQTT (Message Queuing Telemetry Transport) é um protocolo de comunicação leve baseado no modelo publicação/assinatura (publish/subscribe), amplamente utilizado na integração de dispositivos IoT, sistemas de monitoramento e aplicações distribuídas. Os recursos auxiliares para comunicação estão disponíveis no módulo **"MQTT"**.

#### Assina um cliente em um tópico MQTT

```java
public static void subscribe(String alias, String topic);
```

Realiza a assinatura de um tópico, permitindo que o cliente receba mensagens publicadas nesse canal.

**Parâmetros:**

| Parâmetro | Tipo   | Descrição                                       |
| --------- | ------ | ----------------------------------------------- |
| alias     | String | Alias do protocolo MQTT configurado.            |
| topic     | String | Nome do tópico ao qual o cliente será inscrito. |

!!! example "Exemplo de uso"

    ```java
    try {
        MQTT.subscribe("AliasProtocol", "test/topicoExemplo");
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```

!!! note "Importante"
    O método `MQTT.subscribe()` apenas registra o cliente no tópico informado, habilitando o recebimento de mensagens futuras. Nenhuma mensagem é consumida durante o processo de assinatura.
    Para receber mensagens publicadas no tópico, é necessário utilizar posteriormente o método `MQTT.listen()`. A escuta somente poderá ser realizada em tópicos previamente assinados pelo cliente.

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a comunicação com o broker MQTT ou durante o processo de assinatura do tópico.

<br />

#### Assina um cliente em um tópico MQTT com QoS personalizado

```java
public static void subscribe(String alias, String topic, int qos)
```
Realiza a assinatura de um tópico MQTT, permitindo definir o nível de qualidade de serviço (*Quality of Service - QoS*) utilizado para a entrega das mensagens.

**Parâmetros:**

| Parâmetro | Tipo   | Descrição                                                                                                   |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| alias     | String | Alias do protocolo MQTT configurado.                                                                        |
| topic     | String | Nome do tópico ao qual o cliente será inscrito.                                                             |
| qos       | int    | Nível de qualidade de serviço utilizado na entrega das mensagens. Os valores permitidos são `0`, `1` e `2`. |

**Níveis de QoS**

| Valor | Descrição                                                                       |
| ----- | ------------------------------------------------------------------------------- |
| `0`   | A mensagem é entregue no máximo uma vez, sem confirmação de recebimento.        |
| `1`   | A mensagem é entregue pelo menos uma vez, podendo ocorrer mensagens duplicadas. |
| `2`   | A mensagem é entregue exatamente uma vez, garantindo que não haja duplicidade.  |

!!! example "Exemplo de uso"
    ```java
    try {
        MQTT.subscribe("AliasProtocol", "test/topicoExemplo");
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```

!!! note "Importante"
    O método `MQTT.subscribe()` apenas registra o cliente no tópico informado. Nenhuma mensagem é consumida durante o processo de assinatura.
    Para receber mensagens publicadas no tópico, é necessário utilizar posteriormente o método `MQTT.listen()`. A escuta somente poderá ser realizada em tópicos previamente assinados pelo cliente.


!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a comunicação com o broker MQTT ou durante o processo de assinatura do tópico.

<br />

#### Verifica se um cliente possui uma assinatura ativa em um tópico MQTT

```java
public static boolean isSubscribed(String alias, String topic)
```

Verifica se o cliente associado ao protocolo MQTT informado está atualmente inscrito no tópico especificado.

**Parâmetros:**

| Parâmetro | Tipo   | Descrição                                       |
| --------- | ------ | ----------------------------------------------- |
| alias     | String | Alias do protocolo MQTT configurado.            |
| topic     | String | Nome do tópico cuja assinatura será verificada. |

!!! example "Exemplo de uso"
    ```java
    try {
        boolean estaInscrito = MQTT.isSubscribed("AliasProtocol", "test/topicoExemplo");
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```
    **Retorno:** Retorna `true` caso o cliente esteja inscrito no tópico informado; caso contrário, retorna `false`

!!! note "Importante"
    Este método apenas verifica a existência da assinatura do cliente no tópico informado. Nenhuma mensagem é consumida ou processada durante a verificação.


!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a comunicação com o broker MQTT ou durante a consulta da assinatura.

#### Remove a assinatura de um cliente de um tópico MQTT

```java
public static void unsubscribe(String alias, String topic)
```

Remove a assinatura do cliente do tópico informado. Após a remoção, o cliente deixará de receber mensagens publicadas nesse tópico.

**Parâmetros:**

| Parâmetro | Tipo   | Descrição                                     |
| --------- | ------ | --------------------------------------------- |
| alias     | String | Alias do protocolo MQTT configurado.          |
| topic     | String | Nome do tópico cuja assinatura será removida. |

!!! example "Exemplo de uso"
    ```java
    try {
        MQTT.unsubscribe("AliasProtocol", "test/topicoExemplo");
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```

!!! note "Importante"
    Após a remoção da assinatura, chamadas ao método `MQTT.listen()` para o tópico informado não receberão novas mensagens até que uma nova assinatura seja realizada utilizando `MQTT.subscribe()`.

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a comunicação com o broker MQTT, cliente não inscrito no tôpico ou durante a remoção da assinatura.

<br />

#### Remove a assinatura de um cliente de múltiplos tópicos MQTT

```java
public static void unsubscribe(String alias, String[] topics)
```

Remove a assinatura do cliente de todos os tópicos informados. Após a remoção, o cliente deixará de receber mensagens publicadas em qualquer um dos tópicos especificados.

**Parâmetros:**

| Parâmetro | Tipo     | Descrição                                           |
| --------- | -------- | --------------------------------------------------- |
| alias     | String   | Alias do protocolo MQTT configurado.                |
| topics    | String[] | Lista de tópicos cujas assinaturas serão removidas. |

!!! example "Exemplo de uso"
    ```java
    try {
        String[] topicos = {"test/topicoExemplo1", "test/topicoExemplo2", "test/topicoExemplo3"};
        MQTT.unsubscribe("AliasProtocol", topicos);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```

!!! note "Importante"
    Após a remoção das assinaturas, chamadas ao método `MQTT.listen()` para qualquer um dos tópicos informados não receberão novas mensagens até que novas assinaturas sejam realizadas utilizando `MQTT.subscribe()`.

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a comunicação com o broker MQTT, cliente não inscrito no tôpico ou durante a remoção da assinatura.

#### Monitora um tópico MQTT e aguarda o recebimento de mensagens

```java
public static byte[] listen(String alias, String topic)
```

Inicia a escuta de um tópico MQTT previamente assinado e retorna o conteúdo da próxima mensagem recebida.

**Parâmetros:**

| Parâmetro       | Tipo   | Descrição                                    |
| --------------- | ------ | -------------------------------------------- |
| alias           | String | Alias do protocolo MQTT configurado.         |
| topic           | String | Tópico do qual as mensagens serão recebidas. |

!!! example "Exemplo de uso"
    ```java
    try {
        byte[] bytesMensagem = MQTT.listen("AliasProtocol", "test/topicoExemplo");
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```
    **Retorno:** Conteúdo da mensagem recebida em bytes `(byte[])`

!!! note "Importante"
    O cliente deve estar previamente inscrito no tópico utilizando o método `MQTT.subscribe()`.

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a comunicação com o broker MQTT ou durante a recepção da mensagem.

<br />

#### Monitora um tópico MQTT com tempo limite de espera

```java
public static byte[] listen(String alias, String topic, int timeout)
```

Inicia a escuta de um tópico MQTT previamente assinado e aguarda o recebimento de uma mensagem durante o período especificado.

**Parâmetros:**

| Parâmetro | Tipo   | Descrição                                               |
| --------- | ------ | ------------------------------------------------------- |
| alias     | String | Alias do protocolo MQTT configurado.                    |
| topic     | String | Tópico do qual as mensagens serão recebidas.            |
| timeout   | int    | Tempo máximo de espera pela mensagem, em segundos.      |

!!! example "Exemplo de uso"
    ```java
    try {
        byte[] bytesMensagem = MQTT.listen("AliasProtocol", "test/topicoExemplo", 30);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```
    **Retorno:** Conteúdo da mensagem recebida em bytes `(byte[])`

!!! note "Importante"
    O cliente deve estar previamente inscrito no tópico utilizando o método `MQTT.subscribe()`.

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a comunicação com o broker MQTT ou durante a recepção da mensagem.

#### Publica uma mensagem em um tópico MQTT

```java
public static void publish(String alias, String topic, byte[] payload, int qos, boolean retained)
```
Publica uma mensagem em um tópico MQTT utilizando o protocolo configurado pelo alias informado.

**Parâmetros:**

| Parâmetro | Tipo    | Descrição                                                                                                                                                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alias     | String  | Alias do protocolo MQTT configurado.                                                                                                                                                                         |
| topic     | String  | Tópico para o qual a mensagem será publicada.                                                                                                                                                                |
| payload   | byte[]  | Conteúdo da mensagem a ser enviada.                                                                                                                                                                          |
| qos       | int     | Nível de qualidade de serviço (*Quality of Service*). Valores permitidos: `0`, `1` ou `2`.                                                                                                                   |
| retained  | boolean | Indica se a mensagem deve ser armazenada pelo broker como mensagem retida (*retained message*). Quando `true`, novos assinantes do tópico receberão a última mensagem retida imediatamente após a inscrição. |

**Níveis de QoS**

| Valor | Descrição                                                                      |
| ----- | ------------------------------------------------------------------------------ |
| `0`   | A mensagem é entregue no máximo uma vez. Não há confirmação de recebimento.    |
| `1`   | A mensagem é entregue pelo menos uma vez. Pode haver entregas duplicadas.      |
| `2`   | A mensagem é entregue exatamente uma vez, garantindo que não haja duplicidade. |

!!! example "Exemplo de uso"
    ```java
    try {
        byte[] valor = new byte[]{1, 2, 3};
        MQTT.publish("AliasProtocol", "test/topicoExemplo", valor, 1, false);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a comunicação com o broker MQTT ou durante o processo de assinatura do tópico.

<br />

#### Publica uma mensagem de texto em um tópico MQTT

```java
public static void publish(String alias, String topic, String payload, int qos, boolean retained)
```

Publica uma mensagem de texto em um tópico MQTT utilizando o protocolo configurado pelo alias informado.

**Parâmetros:**

| Parâmetro | Tipo    | Descrição                                                                                  |
| --------- | ------- | ------------------------------------------------------------------------------------------ |
| alias     | String  | Alias do protocolo MQTT configurado.                                                       |
| topic     | String  | Tópico para o qual a mensagem será publicada.                                              |
| payload   | String  | Conteúdo textual da mensagem a ser enviada.                                                |
| qos       | int     | Nível de qualidade de serviço (*Quality of Service*). Valores permitidos: `0`, `1` ou `2`. |
| retained  | boolean | Indica se a mensagem deve ser armazenada pelo broker como mensagem retida.                 |

!!! example "Exemplo de uso"
    ```java
    try {
        String valor = "Mensagem"
        MQTT.publish("AliasProtocol", "test/topicoExemplo", valor, 1, false);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a publicação da mensagem ou durante a comunicação com o broker MQTT.


<br />

#### Publica um caractere em um tópico MQTT

```java
public static void publish(String alias, String topic, char payload, int qos, boolean retained)
```

Publica um único caractere em um tópico MQTT utilizando o protocolo configurado pelo alias informado.

**Parâmetros:**

| Parâmetro | Tipo    | Descrição                                                                                  |
| --------- | ------- | ------------------------------------------------------------------------------------------ |
| alias     | String  | Alias do protocolo MQTT configurado.                                                       |
| topic     | String  | Tópico para o qual a mensagem será publicada.                                              |
| payload   | char    | Caractere que será enviado como conteúdo da mensagem.                                      |
| qos       | int     | Nível de qualidade de serviço (*Quality of Service*). Valores permitidos: `0`, `1` ou `2`. |
| retained  | boolean | Indica se a mensagem deve ser armazenada pelo broker como mensagem retida.                 |

!!! example "Exemplo de uso"
    ```java
    try {
        char valor = 'c'
        MQTT.publish("AliasProtocol", "test/topicoExemplo", valor, 1, false);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a publicação da mensagem ou durante a comunicação com o broker MQTT.

<br />

#### Publica um valor inteiro em um tópico MQTT
```java
public static void publish(String alias, String topic, int payload, int qos, boolean retained)
```

Publica um valor inteiro em um tópico MQTT utilizando o protocolo configurado pelo alias informado.

**Parâmetros:**

| Parâmetro | Tipo    | Descrição                                                                                                                                                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alias     | String  | Alias do protocolo MQTT configurado.                                                                                                                                                                         |
| topic     | String  | Tópico para o qual a mensagem será publicada.                                                                                                                                                                |
| payload   | int     | Valor inteiro que será enviado como conteúdo da mensagem.                                                                                                                                                    |
| qos       | int     | Nível de qualidade de serviço (*Quality of Service*). Valores permitidos: `0`, `1` ou `2`.                                                                                                                   |
| retained  | boolean | Indica se a mensagem deve ser armazenada pelo broker como mensagem retida (*retained message*). Quando `true`, novos assinantes do tópico receberão a última mensagem retida imediatamente após a inscrição. |

!!! example "Exemplo de uso"
    ```java
    try {
        int valor = 123;
        MQTT.publish("AliasProtocol", "test/topicoExemplo", valor, 1, false);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a publicação da mensagem ou durante a comunicação com o broker MQTT.

<br />

#### Publica um valor inteiro longo em um tópico MQTT

```java
public static void publish(String alias, String topic, long payload, int qos, boolean retained)
```

Publica um valor inteiro longo em um tópico MQTT utilizando o protocolo configurado pelo alias informado.

**Parâmetros:**

| Parâmetro | Tipo    | Descrição                                                                                                                                                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alias     | String  | Alias do protocolo MQTT configurado.                                                                                                                                                                         |
| topic     | String  | Tópico para o qual a mensagem será publicada.                                                                                                                                                                |
| payload   | long    | Valor inteiro longo que será enviado como conteúdo da mensagem.                                                                                                                                              |
| qos       | int     | Nível de qualidade de serviço (*Quality of Service*). Valores permitidos: `0`, `1` ou `2`.                                                                                                                   |
| retained  | boolean | Indica se a mensagem deve ser armazenada pelo broker como mensagem retida (*retained message*). Quando `true`, novos assinantes do tópico receberão a última mensagem retida imediatamente após a inscrição. |

!!! example "Exemplo de uso"
    ```java
    try {
        long valor = 123;
        MQTT.publish("AliasProtocol", "test/topicoExemplo", valor, 1, false);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```

!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a publicação da mensagem ou durante a comunicação com o broker MQTT.

<br />

#### Publica um valor decimal de precisão dupla em um tópico MQTT

```java
public static void publish(String alias, String topic, double payload, int qos, boolean retained)
```

Publica um valor decimal de precisão dupla em um tópico MQTT utilizando o protocolo configurado pelo alias informado.

**Parâmetros:**

| Parâmetro | Tipo    | Descrição                                                                                                                                                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alias     | String  | Alias do protocolo MQTT configurado.                                                                                                                                                                         |
| topic     | String  | Tópico para o qual a mensagem será publicada.                                                                                                                                                                |
| payload   | double  | Valor decimal de precisão dupla que será enviado como conteúdo da mensagem.                                                                                                                                  |
| qos       | int     | Nível de qualidade de serviço (*Quality of Service*). Valores permitidos: `0`, `1` ou `2`.                                                                                                                   |
| retained  | boolean | Indica se a mensagem deve ser armazenada pelo broker como mensagem retida (*retained message*). Quando `true`, novos assinantes do tópico receberão a última mensagem retida imediatamente após a inscrição. |

!!! example "Exemplo de uso"
    ```java
    try {
        double valor = 123.5;
        MQTT.publish("AliasProtocol", "test/topicoExemplo", valor, 1, false);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```
!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a publicação da mensagem ou durante a comunicação com o broker MQTT.

<br />

#### Publica um valor decimal de precisão simples em um tópico MQTT

```java
public static void publish(String alias, String topic, float payload, int qos, boolean retained)
```

Publica um valor decimal de precisão simples em um tópico MQTT utilizando o protocolo configurado pelo alias informado.

**Parâmetros:**

| Parâmetro | Tipo    | Descrição                                                                                                                                                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alias     | String  | Alias do protocolo MQTT configurado.                                                                                                                                                                         |
| topic     | String  | Tópico para o qual a mensagem será publicada.                                                                                                                                                                |
| payload   | float   | Valor decimal de precisão simples que será enviado como conteúdo da mensagem.                                                                                                                                |
| qos       | int     | Nível de qualidade de serviço (*Quality of Service*). Valores permitidos: `0`, `1` ou `2`.                                                                                                                   |
| retained  | boolean | Indica se a mensagem deve ser armazenada pelo broker como mensagem retida (*retained message*). Quando `true`, novos assinantes do tópico receberão a última mensagem retida imediatamente após a inscrição. |

!!! example "Exemplo de uso"
    ```java
    try {
        float valor = 123.5;
        MQTT.publish("AliasProtocol", "test/topicoExemplo", valor, 1, false);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```
!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a publicação da mensagem ou durante a comunicação com o broker MQTT.

<br />

#### Publica um valor booleano em um tópico MQTT

```java
public static void publish(String alias, String topic, boolean payload, int qos, boolean retained)
```

Publica um valor booleano em um tópico MQTT utilizando o protocolo configurado pelo alias informado.

**Parâmetros:**

| Parâmetro | Tipo    | Descrição                                                                                                                                                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alias     | String  | Alias do protocolo MQTT configurado.                                                                                                                                                                         |
| topic     | String  | Tópico para o qual a mensagem será publicada.                                                                                                                                                                |
| payload   | boolean | Valor booleano que será enviado como conteúdo da mensagem (`true` ou `false`).                                                                                                                               |
| qos       | int     | Nível de qualidade de serviço (*Quality of Service*). Valores permitidos: `0`, `1` ou `2`.                                                                                                                   |
| retained  | boolean | Indica se a mensagem deve ser armazenada pelo broker como mensagem retida (*retained message*). Quando `true`, novos assinantes do tópico receberão a última mensagem retida imediatamente após a inscrição. |

!!! example "Exemplo de uso"
    ```java
    try {
        boolean valor = true;
        MQTT.publish("AliasProtocol", "test/topicoExemplo", valor, 1, false);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```
!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a publicação da mensagem ou durante a comunicação com o broker MQTT.

<br />

#### Publica um valor inteiro curto em um tópico MQTT

```java
public static void publish(String alias, String topic, short payload, int qos, boolean retained)
```

Publica um valor inteiro curto em um tópico MQTT utilizando o protocolo configurado pelo alias informado.

**Parâmetros:**

| Parâmetro | Tipo    | Descrição                                                                                                                                                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alias     | String  | Alias do protocolo MQTT configurado.                                                                                                                                                                         |
| topic     | String  | Tópico para o qual a mensagem será publicada.                                                                                                                                                                |
| payload   | short   | Valor inteiro curto que será enviado como conteúdo da mensagem.                                                                                                                                              |
| qos       | int     | Nível de qualidade de serviço (*Quality of Service*). Valores permitidos: `0`, `1` ou `2`.                                                                                                                   |
| retained  | boolean | Indica se a mensagem deve ser armazenada pelo broker como mensagem retida (*retained message*). Quando `true`, novos assinantes do tópico receberão a última mensagem retida imediatamente após a inscrição. |

!!! example "Exemplo de uso"
    ```java
    try {
        short valor = 1;
        MQTT.publish("AliasProtocol", "test/topicoExemplo", valor, 1, false);
    } catch(Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```
!!! warning "Exceções que podem ocorrer"
    **MQTTException** — Lançada quando ocorre alguma falha durante a publicação da mensagem ou durante a comunicação com o broker MQTT.

