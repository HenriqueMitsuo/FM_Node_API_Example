# API Design in NODE v3 NOTES

## LIBs used

- EXPRESS
- CORS
- BODY-PARSER
- CUID
- DOTENV
- BCRYPT
- JSONWEBTOKEN
- LODASH
- MONGOOSE
- MORGAN
- VALIDATOR
- NODEMON

## BASED ON

- https://github.com/FrontendMasters/api-design-node-v3

## OVERVIEW

- Generic CRUD Resolvers => crud.js: Pode ser utilizado por todas as rotas, só trocando o "Model" utilizado
- Model: descreve um modelo = Objeto/Tabela/Documento
- Controller: conecta um model aos metodos presentes no "crud.js"
- Router: conecta as rotas com os controllers

## API

- Application Programming Interface
- Interface em HTTP para intereção com os dados de um servidor
- Operações básicas (CRUD):
  - Create
  - Read
  - Update
  - Destroy

## REST

- API design pattern
- Permite a aplicação descrever que ações são possiveis no servidor
- Funciona melhor com estruturas de dados básicas (relacionais simples)

## NODE API

- Async
- Event Driven
- Single Threaded
- Not CPU intensive
  
## EXPRESS

- Standard API Framework
  
## MongoDB

- Non-Relational
- Document Store

## MONGOOSE 

- lean() : Transforma documentos MongoDB em JSON

## JWT

- AUTHENTICATION
- AUTHORIZATION
- IDENTIFICATION
- Bearer == Client
- Sign Token
- Verify Token

## API GUIDE

-   -   <=>     -      <== crudController
- Route <=> Controller <== Model