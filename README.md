# ABInBev - Challenge
## Descrição

## Instruções
1. Baixe e instale o Node: [https://nodejs.org/]
2. Clone o repositório: `` (SSH) or `` (HTTPS)
3. No diretório raiz do projeto rodar os comandos `npm install` e `npx cypress open` para abrir o framework
4. Após a inicialização do Cypress selecionar e rodar o teste '' que ele já irá executar todos os casos de teste.


## Estrutura de diretórios
```
/
├─ cypress/            # Raiz do projeto onde se encontram os demais diretórios e testes
├─ ├─downloads/        # Diretório padrão gerado através do comando 'npm init' para armazenamento de dados e arquivos utilizados nos testes
├─ ├─e2e/              # Estrutura de diretórios que contém as estruturas dos testes
├─ ├─────services/     # Estrutura de diretórios que contém as estruturas dos testes relacionados a serviços
├─ ├─────tests/        # Scripts de testes
├─ ├─fixtures/         # Diretório padrão gerado através do comando 'npm init'
├─ ├─plugins/          # Set de plugins
├─ ├─screenshots/      # Armazenamento de screenshots
├─ ├─support           # Diretório padrão gerado através do comando 'npm init'
├─ node_modules        # Coleção de funções
├─ .gitignore          # Lista de arquivos e pastas ignoradas pelo git
├─ cypress.config.js   # Arquivo para config cypress
├─ package-lock.json   # Manifesto do projeto
├─ package.json        # Manifesto do projeto
└─ README.md           # Esse arquivo
```
