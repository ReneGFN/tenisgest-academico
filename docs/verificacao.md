# Verificação da entrega

Data: **25/10/2026**. Escopo: arquivos deste repositório acadêmico independente. Os testes não constituem auditoria do produto expandido nem aprovação para usar dados reais.

## Evidências funcionais

Verificação automatizada com Microsoft Edge via Playwright, abrindo diretamente o arquivo `prototipo/index.html`, sem servidor. A ferramenta de verificação foi executada no ambiente de preparação, sem acrescentar dependências ao repositório.

- As seis telas abriram pelo menu, sem transbordamento da página em 390, 768 e 1440 px.
- Indicador do painel abriu alunos; busca encontrou Ana e apresentou estado vazio para termo sem resultado.
- Detalhes exibiram pacote; cadastro fictício apareceu na lista e foi restaurado ao recarregar.
- Texto contendo marcação HTML apareceu como texto, sem criar elemento de imagem ou executar código.
- Agendamento livre apareceu na semana e repetição do horário do professor foi recusada.
- Quadra em manutenção não apareceu entre as duas opções disponíveis.
- Registro de treino apareceu no histórico.
- Baixa de pagamento atualizou o total recebido e removeu a ação de nova baixa.
- Fechar formulário com alteração pediu confirmação para descartar.
- Rota inválida voltou ao painel.
- Não ocorreram erros JavaScript ou requisições externas; `localStorage` e `sessionStorage` ficaram vazios.
- Captura do painel e visualização em celular examinadas visualmente; paleta, hierarquia e leitura preservadas.
- Sintaxe de `app.js` conferida com `node --check`.

Rótulos acessíveis dos seletores foram explicitados após a primeira execução encontrar ambiguidade de seleção. O teste completo passou após a correção. Uma tentativa inicial de iniciar o navegador no ambiente restrito falhou; ela não foi considerada evidência funcional. A execução local autorizada permitiu concluir os testes.

## Dez grupos de segurança

| Grupo | Resultado | Evidência e limite |
| --- | --- | --- |
| 1. Segredos e dados sensíveis | Verificado no escopo | Repositório novo, sem copiar histórico, configurações, Word original, credenciais ou registros do produto; somente dados fictícios. Arquivos revisados antes de publicar. |
| 2. APIs e frontend | Verificado no escopo | Sem `fetch`, XHR, APIs ou integrações. CSP com `connect-src 'none'`; teste sem requisições externas. |
| 3. Entradas | Verificado no escopo | Campos obrigatórios, limites de tamanho, seleções e datas limitadas; conflito local testado. Validação de cliente não substitui servidor futuro. |
| 4. Autenticação e autorização | Não aplicável à demonstração | Sem contas ou dados privados. Autenticação e isolamento são requisitos futuros, não simulados por login fictício. |
| 5. Ataques comuns | Verificado no escopo | Texto digitado escapado antes da renderização e teste com HTML. Sem SQL, comandos, cookies de sessão ou operações de servidor. |
| 6. Logs e auditoria | Não aplicável à demonstração | Sem log de autenticação, telemetria ou armazenamento de alterações. Auditoria da aplicação futura não implementada. |
| 7. Senhas e recuperação | Não aplicável | Não são solicitadas, processadas ou armazenadas senhas. |
| 8. Backup e recuperação | Não aplicável aos dados da demonstração | Dados somente em memória, restaurados ao recarregar. Git guarda os arquivos do projeto; não existe banco para backup. |
| 9. Dependências e publicação | Verificado no escopo | Protótipo sem pacotes, CDNs, build ou dependências runtime; nenhum `npm install` necessário. Não é uma distribuição do sistema de produção. |
| 10. HTTPS e comunicação | Não aplicável à abertura local | Protótipo validado em arquivo local; não foi criado ambiente de hospedagem do app. Publicação do código no GitHub não comprova TLS/cabeçalhos de uma aplicação hospedada. |

## Pendências

Chrome, Firefox e Safari não foram executados. Não foram realizados testes com usuários, leitor de tela, cargas concorrentes ou medidas de disponibilidade. Requisitos de autenticação, persistência, transações, privacidade com dados reais, recuperação de senha, backup e integrações pertencem à implementação futura. O grupo deve confirmar as exigências da disciplina e aprovar o recorte com o orientador.

Referência de revisão de interface: [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), consultadas nesta preparação; usados controles nativos, rótulos, foco visível, aviso de descarte, região de status, link de salto e adaptação responsiva. Isso não equivale a certificação de acessibilidade.
