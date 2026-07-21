# Trabalhando com funções utilitárias

Funções utilitárias são blocos de código personalizados criados para promover a reutilização e a organização do código. Estão disponíveis no módulo **"Functions"**.

Essas funções podem ser chamadas dentro de scripts de transação ou até mesmo utilizadas por outras funções, permitindo a composição de lógica por meio de funções aninhadas.

#### Criando uma função utilitária

As funções recebem um **`Map<String, Object>`** com os parâmetros de entrada, disponibilizado automaticamente na variável **inputs**. Para acessar os valores, utilize o método **<code>get()</code>**. Da mesma forma, toda função deve retornar seus resultados em um **`Map<String, Object>`**, representado por **outputs**, utilizando o método **<code>put()</code>** para definir os valores de saída.

Veja abaixo um exemplo válido da criação de uma função:

!!! example "Exemplo de uso"
    ```java
    Integer num1 = (Integer) inputs.get("num1");
    Integer num2 = (Integer) inputs.get("num2");

    int soma = num1.intValue() + num2.intValue();
    outputs.put("resultado", Integer.valueOf(soma));
    ```

#### Realizando a chamada de uma função utilitária

```java
public static Map<String, Object> execute(String nome, Map<String, Object> inputs);
```

**Parâmetros**

| Parâmetro | Tipo                | Descrição                                               |
| --------- | ------------------- | ------------------------------------------------------- |
| nome      | String              | Refere-se ao nome da função que será executada          |
| inputs    | Map<String, Object> | Refere-se aos argumentos que a função recebe            |

!!! example "Exemplo de uso"
    ```java
    try {
        LOG.info("Iniciando transação: " + nomeTransacao);

        // Definição dos inputs da função
        Map inputs = new HashMap();
        inputs.put("num1", Integer.valueOf(1));
        inputs.put("num2", Integer.valueOf(2));

        // Chamada de uma função com o nome "soma"
        Map outputs = Functions.execute("soma", inputs);
        
        LOG.info("Resultado: " + outputs.get("resultado").toString());
    } catch (Exception e) {
        LOG.error("Ocorreu um erro: " + e.getMessage());
    }
    ```