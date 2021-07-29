# Meu primeiro projeto usando apenas o que aprendi, sem seguir tutorial.


## BackEnd em Java com SpringBoot

- Criada a aplicação com a Spring Tool Suite
- Criado modelo representando entidade no banco de dados
- Usando Lombok para diminuir códigos boiler plate
- Criado o repository extendendo de JpaRepository
- Criado o controller principal que gerencia os endpoints dos requests
- Injeção de dependência do repository na classe controller, trabalhando com crud no banco de dados (GET, POST, PUT, DELETE)
- Banco de dados mysql

## FrontEnd em React

- Axios para as requisições http
- Reducer para cálculo de gastos, o retorno do banco de dados traz consigo um pré cálculo de sub total de valor de cada item. Realiza o cálculo final do total         gasto em todos os itens da lista, no frontend
- Utilizando componentes react-bootstrap
- Trabalhado com o conceito de services, isolando a responsabilidade do crud em um componente de classe à parte
- Componentização da lista de itens, dinâmica, inserindo itens através de modal bootstrap gerenciado por estado no react
- Lista itens, remove itens e calcula o total gasto em todos os itens listados


