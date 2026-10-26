# Protótipo da interface

Protótipo navegável de seis telas para o professor, implementado em HTML, CSS e JavaScript. Abra [index.html](../prototipo/index.html) depois de baixar ou clonar o repositório. A visualização de código do GitHub não executa HTML.

## Telas e interações

| Tela | O que apresentar | O que pode ser simulado |
| --- | --- | --- |
| Painel | Alunos ativos, aulas da semana, recebido, aulas de segunda e pendências | Indicadores e atalhos abrem a tela relacionada |
| Agenda | Semana fixa, horários, aluno, tipo e quadra | Nova aula individual ou reposição; bloqueio de horário ocupado |
| Alunos | Busca, cartões e detalhes do pacote | Cadastro com nome, nível e objetivo; consulta dos detalhes |
| Treinos | Histórico do conteúdo das aulas | Novo registro com data, presença, conteúdo e observações |
| Quadras | Piso e disponibilidade | Consulta; quadra em manutenção não pode ser agendada |
| Financeiro | Cobranças e totais recebido/pendente/atrasado | Baixa demonstrativa com forma e data |

## Roteiro sugerido de apresentação

1. **Contextualizar:** o professor precisa de uma visão centralizada da sua rotina. Mostrar que existe apenas um perfil de acesso.
2. **Painel → alunos:** clicar no indicador de alunos, buscar “Ana” e abrir seus detalhes. Mostrar o saldo fictício do pacote.
3. **Cadastro:** usar “Novo aluno” com um nome inventado. O aluno aparece na lista e nas opções dos próximos formulários.
4. **Agenda:** agendar uma aula para quinta-feira às 14h. Conferir o cartão e tentar criar outra no mesmo horário, demonstrando o conflito do professor.
5. **Quadras:** mostrar a quadra em manutenção e sua ausência no formulário de agendamento.
6. **Treinos:** registrar um treino fictício e mostrar sua inclusão no histórico. O registro não desconta aulas automaticamente.
7. **Financeiro:** registrar o pagamento de Bruno Modelo e observar os totais atualizados. Não existe PIX real nem envio de cobrança.
8. **Encerrar:** recarregar a página e explicar que a demonstração é temporária; persistência e autenticação pertencem à implementação futura.

## Limites conhecidos

- Semana de 26 a 30/10/2026, dias úteis, horários fixos e duração de 1 hora. Não há navegação para outras semanas.
- Não há cadastro real de professor, login, senha, recuperação ou compartilhamento de dados.
- Não existem servidor, banco, upload, rastreamento, cookies ou armazenamento persistente da aplicação.
- Alunos e transações são inventados. Nunca inserir dados reais no protótipo público.
- Não há grupos, recorrência, cancelamento, baixa parcial, geração automática de reposição ou consumo de pacote.
- Treinos representam anotações, sem avaliação técnica em gráficos.
- Não há modo escuro nesta entrega mínima; a paleta original foi mantida na versão clara.
- O documento de referência possui funcionalidades adicionais; consulte os estados na [matriz de requisitos](requisitos.md).

## Como alterar

O arquivo `index.html` contém a estrutura e o formulário; `style.css` define layout, cores e adaptação para celular; `app.js` contém os exemplos e as interações em memória. O grupo pode editar qualquer um com um editor de texto. Recarregue a página para conferir a alteração. Use somente arquivos próprios ou com autorização de uso.
