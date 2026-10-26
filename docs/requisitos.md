# Requisitos do sistema

Recorte acadêmico: **somente o professor autônomo**. Os códigos abaixo preservam os identificadores do documento de referência para facilitar a conferência. Itens removidos estão explicitados ao final. Prioridades são as do documento; a cobertura distingue o sistema proposto da demonstração atual.

**Cobertura:** “Simulado” altera somente dados fictícios em memória; “Visual” permite consultar ou navegar; “Futuro” está documentado, mas não é executado no protótipo. Nenhum desses estados equivale a uma implementação de servidor.

## Requisitos funcionais

| ID de origem | Requisito adaptado para o professor | Prioridade | Cobertura atual |
| --- | --- | --- | --- |
| RF01 | Permitir criar a conta do professor por e-mail e senha. | Essencial | Futuro; sem formulário de credenciais |
| RF02 | Autenticar o professor e restringir o acesso ao seu espaço. | Essencial | Futuro; perfil único demonstrativo |
| RF03 | Permitir recuperação de senha por e-mail. | Importante | Futuro |
| RF05 | Cadastrar, editar, inativar e buscar alunos. | Essencial | Cadastro e busca simulados; edição/inativação futuras |
| RF06 | Filtrar alunos por situação financeira. | Importante | Futuro |
| RF07 | Registrar nível, objetivo e data de início do aluno. | Importante | Nível e objetivo simulados; início futuro |
| RF08 | Exibir o pacote e suas aulas restantes. | Essencial | Visual; saldo fictício fixo por cadastro |
| RF09 | Exibir agenda semanal com horário e quadra. | Essencial | Visual; semana fixa, cartões identificam quadra |
| RF10 | Agendar aulas individuais, em grupo de 2 a 4 alunos e reposições. | Essencial | Individual e reposição simulados; grupos futuros |
| RF11 | Agendar aula única ou recorrente semanalmente. | Essencial | Única simulada; recorrência futura |
| RF12 | Impedir conflitos de professor, aluno e quadra. | Essencial | Bloqueio local do mesmo horário para professor único, aulas de 1 hora; regra geral futura |
| RF13 | Cadastrar quadras com piso e disponibilidade. | Essencial | Consulta visual; manutenção não é selecionável; cadastro futuro |
| RF14 | Registrar reservas particulares e manutenção. | Importante | Futuro |
| RF15 | Calcular ocupação das quadras. | Importante | Futuro |
| RF16 | Remarcar/cancelar aula e registrar motivo. | Essencial | Futuro |
| RF17 | Gerar pendência de reposição ao cancelar por chuva. | Essencial | Futuro; existe exemplo de reposição, sem geração automática |
| RF18 | Cancelar aulas de um dia por chuva e gerar reposições. | Desejável | Futuro |
| RF19 | Manter lista de espera por horário. | Desejável | Futuro |
| RF20 | Registrar presença, falta ou reposição. | Essencial | Simulado no registro de treino |
| RF21 | Registrar conteúdo trabalhado por etiquetas ou texto. | Importante | Texto livre simulado; etiquetas futuras |
| RF22 | Registrar observações e foco da próxima aula. | Importante | Simulado em campo de observações |
| RF23 | Atualizar fundamentos técnicos com histórico datado. | Importante | Futuro |
| RF24 | Exibir evolução técnica em gráfico. | Desejável | Futuro |
| RF25 | Registrar cobranças de mensalidade, pacote e avulsa. | Essencial | Consulta de exemplos; novas cobranças futuras |
| RF26 | Dar baixa com forma, data e observação. | Essencial | Forma e data simuladas; observação futura |
| RF27 | Exibir recebido, pendente e atrasado no mês. | Essencial | Visual, atualizado após baixa simulada |
| RF28 | Exibir receita mensal e distribuição por tipo. | Importante | Futuro |
| RF29 | Descontar uma aula do pacote após realização. | Essencial | Futuro; treino não desconta saldo |
| RF30 | Exibir alertas de vencimento e atraso. | Importante | Resumo visual e situação por vencimento; notificações futuras |
| RF31 | Exportar relatório financeiro em PDF/planilha. | Desejável | Futuro |
| RF32 | Exibir painel com alunos, aulas, receita, ocupação e alertas. | Importante | Visual: alunos, aulas, recebido, agenda e pendências; ocupação futura |

## Requisitos não funcionais

Metas para a aplicação futura, salvo evidências explicitamente descritas em [verificação](verificacao.md). As metas do documento não foram comprovadas por estudos ou ensaios de produção.

| ID | Categoria | Requisito adaptado | Situação nesta etapa |
| --- | --- | --- | --- |
| RNF01 | Usabilidade | O professor deve conseguir iniciar um agendamento em poucos passos. | Um formulário demonstrativo; avaliação com usuários pendente |
| RNF02 | Responsividade | Adaptar a interface a celular, tablet e computador. | CSS responsivo; larguras verificadas no relatório |
| RNF03 | Compatibilidade | Funcionar em versões atuais de Chrome, Firefox, Edge e Safari. | Navegadores não testados permanecem pendentes |
| RNF04 | Desempenho | Agenda e painel devem carregar em até 3 segundos na conexão definida para avaliação. | Meta da aplicação futura; “conexão comum” precisa de critério mensurável |
| RNF05 | Segurança | Usar hash apropriado para senhas e HTTPS em ambiente hospedado. | Sem senhas/servidor; abertura local não comprova HTTPS |
| RNF06 | Controle de acesso | Cada professor deve acessar apenas seus alunos e registros. | Futuro; não há contas nem isolamento real |
| RNF07 | Privacidade | Prever tratamento adequado dos dados, transparência e possibilidade de exclusão. | Somente dados fictícios; conformidade da aplicação futura requer avaliação |
| RNF08 | Disponibilidade | Ter disponibilidade mínima de 95%, com período de medição definido pelo grupo. | Meta de hospedagem futura, sem medição nesta etapa |
| RNF09 | Recuperação | Realizar backup diário do banco e permitir recuperação. | Não há banco; implementação e restauração testada futuras |
| RNF10 | Integridade | Agendamento e pagamento devem evitar duplicidade e perda de dados. | Simulação local; transações e concorrência futuras |
| RNF11 | Manutenibilidade | Manter código modular, versionado e documentado. | HTML, CSS e JS separados; Git e documentação |
| RNF12 | Custo | Operar com infraestrutura de baixo custo. | Protótipo sem dependências; custo da aplicação futura não estimado |
| RNF13 | Localização | Usar português, datas dd/mm/aaaa e reais. | `pt-BR`, `Intl.DateTimeFormat` e `Intl.NumberFormat` |

## Regras de negócio propostas

| ID | Regra | Demonstração |
| --- | --- | --- |
| RN01 | O mesmo professor não pode ministrar duas aulas em horários sobrepostos. | Horários inteiros de 1 hora; duplicidade local bloqueada, mesmo em outra quadra |
| RN02 | Quadra em manutenção não pode receber novos agendamentos. | Apenas quadras disponíveis aparecem no formulário |
| RN03 | Cancelamento por chuva deve gerar reposição sem consumir aula do pacote. | Documentada; não executada |
| RN04 | Uma aula realizada deve consumir uma unidade do pacote aplicável, uma única vez. | Documentada; não executada |
| RN05 | Uma cobrança paga não deve receber segunda baixa. | Ação removida após a simulação; sem concorrência real |
| RN06 | Uma aula em grupo deve ter de dois a quatro alunos. | Documentada; não executada |
| RN07 | O estado “Atrasado” representa cobrança não paga cujo vencimento já passou. | Usa a data fixa de referência 26/10/2026 para apresentação reproduzível |

## Critérios de aceitação do protótipo

1. Abrir o arquivo local sem instalação e acessar as seis telas pelo menu.
2. Clicar nos indicadores do painel e chegar a alunos, agenda e financeiro.
3. Buscar um aluno existente e exibir estado vazio para busca sem resultado.
4. Cadastrar aluno fictício e consultar nome, nível, objetivo e pacote.
5. Agendar aula em horário livre e vê-la na semana; recusar horário já ocupado pelo professor.
6. Consultar quadras, sem permitir agendamento na quadra em manutenção.
7. Registrar treino fictício e vê-lo no histórico.
8. Simular baixa de cobrança e atualizar seus indicadores sem repetir a baixa.
9. Recarregar a página e restaurar os dados iniciais, sem gravar em armazenamento local ou enviar requisições de dados.
10. Exibir conteúdo digitado como texto, sem executar HTML.

## Itens do documento retirados do recorte

| Origem | Decisão nesta etapa |
| --- | --- |
| RF02: autenticação de professor e aluno | Adaptado para professor único |
| RF04: convite para o aluno criar acesso | Excluído |
| RF33–RF36: aulas, remarcação, evolução e financeiro no portal do aluno | Excluídos; dados correspondentes podem ser consultados pelo professor |
| RF37: troca de recados | Excluído |
| RF38: notificações por e-mail/WhatsApp | Fora da entrega básica |
| RNF06: restrição do portal do aluno | Adaptado para isolamento entre professores na aplicação futura |

Não foram incluídos associação, gestor, captação, integrações ou demais expansões do produto existente. Os requisitos futuros não representam compromisso de implementar tudo nesta etapa de protótipo.
