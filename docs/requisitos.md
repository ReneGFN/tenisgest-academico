# Requisitos do sistema

Os requisitos abaixo são os do documento fornecido, organizados em tabelas e restritos ao perfil do professor. Os códigos e as prioridades originais foram preservados. Eles descrevem o sistema proposto; as imagens do protótipo não comprovam a implementação das regras.

## Requisitos funcionais

### Acesso do professor

| Código | Requisito | Prioridade |
| --- | --- | --- |
| RF01 | O sistema deve permitir que o professor crie uma conta com e-mail e senha. | Essencial |
| RF02 | O sistema deve autenticar o professor e permitir o acesso aos seus próprios dados e aos dados dos seus alunos. | Essencial |
| RF03 | O sistema deve permitir a recuperação de senha por e-mail. | Importante |

### Gestão de alunos

| Código | Requisito | Prioridade |
| --- | --- | --- |
| RF05 | O sistema deve permitir cadastrar, editar, inativar e buscar alunos. | Essencial |
| RF06 | O sistema deve permitir filtrar alunos por situação financeira (em dia, pendente e atrasado). | Importante |
| RF07 | O sistema deve registrar o nível técnico, o objetivo e a data de início de cada aluno. | Importante |
| RF08 | O sistema deve exibir o pacote contratado e a quantidade de aulas restantes de cada aluno. | Essencial |

### Agenda e quadras

| Código | Requisito | Prioridade |
| --- | --- | --- |
| RF09 | O sistema deve exibir a agenda semanal organizada por quadra e horário. | Essencial |
| RF10 | O sistema deve permitir agendar aulas individuais, em grupo (de dois a quatro alunos) e de reposição. | Essencial |
| RF11 | O sistema deve permitir agendar aulas únicas ou com recorrência semanal. | Essencial |
| RF12 | O sistema deve impedir conflitos de horário envolvendo professor, aluno e quadra. | Essencial |
| RF13 | O sistema deve cadastrar quadras com tipo de piso (saibro, cimento ou sintético) e status (disponível ou em manutenção). | Essencial |
| RF14 | O sistema deve registrar reservas particulares e períodos de manutenção das quadras. | Importante |
| RF15 | O sistema deve calcular e exibir o percentual de ocupação das quadras. | Importante |
| RF16 | O sistema deve permitir remarcar ou cancelar aulas, registrando o motivo (chuva, falta ou outro). | Essencial |
| RF17 | O sistema deve gerar uma pendência de reposição quando a aula for cancelada por chuva. | Essencial |
| RF18 | O sistema deve permitir cancelar, em lote, todas as aulas de um dia por chuva e gerar as respectivas reposições. | Desejável |
| RF19 | O sistema deve manter lista de espera para horários concorridos. | Desejável |

### Registro de treino e evolução técnica

| Código | Requisito | Prioridade |
| --- | --- | --- |
| RF20 | O sistema deve registrar a presença do aluno em cada aula (presente, falta ou reposição). | Essencial |
| RF21 | O sistema deve registrar o conteúdo trabalhado na aula, por etiquetas selecionáveis ou texto livre. | Importante |
| RF22 | O sistema deve registrar observações do professor sobre pontos positivos, dificuldades e foco da próxima aula. | Importante |
| RF23 | O sistema deve permitir atualizar o nível do aluno por fundamento (forehand, backhand, saque, devolução, voleios, deslocamento e tática), mantendo o histórico com data. | Importante |
| RF24 | O sistema deve exibir a evolução técnica do aluno em gráfico ao longo do tempo. | Desejável |

### Controle financeiro

| Código | Requisito | Prioridade |
| --- | --- | --- |
| RF25 | O sistema deve registrar cobranças dos tipos mensalidade, pacote e aula avulsa. | Essencial |
| RF26 | O sistema deve permitir dar baixa em pagamentos, informando forma (PIX, transferência, dinheiro ou cartão), data e observação. | Essencial |
| RF27 | O sistema deve exibir os valores recebidos, pendentes e atrasados no mês. | Essencial |
| RF28 | O sistema deve exibir gráfico de receita mensal e distribuição da receita por tipo de cobrança. | Importante |
| RF29 | O sistema deve descontar uma aula do pacote do aluno a cada aula realizada. | Essencial |
| RF30 | O sistema deve emitir alertas de vencimento próximo e de atraso de pagamento. | Importante |
| RF31 | O sistema deve exportar relatórios financeiros em PDF ou planilha. | Desejável |

### Painel do professor

| Código | Requisito | Prioridade |
| --- | --- | --- |
| RF32 | O sistema deve exibir um painel com alunos ativos, aulas da semana, receita do mês, ocupação das quadras, aulas do dia e alertas. | Importante |

## Requisitos não funcionais

| Código | Categoria | Descrição |
| --- | --- | --- |
| RNF01 | Usabilidade | O sistema deve ter interface simples, de modo que o professor consiga agendar uma aula em poucos passos, sem treinamento prévio. |
| RNF02 | Responsividade | A interface deve se adaptar a celulares, tablets e computadores, já que o professor utiliza o sistema na própria quadra. |
| RNF03 | Compatibilidade | O sistema deve funcionar nas versões atuais dos navegadores Chrome, Firefox, Edge e Safari. |
| RNF04 | Desempenho | As telas principais (agenda e painel) devem carregar em até 3 segundos em conexão de internet comum. |
| RNF05 | Segurança | As senhas devem ser armazenadas por meio de hash e toda a comunicação deve usar HTTPS. |
| RNF06 | Controle de acesso | O professor deve acessar apenas seus próprios dados e os dados dos seus alunos. |
| RNF07 | Privacidade | O tratamento de dados pessoais e financeiros deve seguir a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), com consentimento no cadastro e possibilidade de exclusão dos dados. |
| RNF08 | Disponibilidade | O sistema deve estar disponível em pelo menos 95% do tempo (meta a ser ajustada conforme a hospedagem escolhida). |
| RNF09 | Confiabilidade | O sistema deve realizar backup automático diário do banco de dados. |
| RNF10 | Integridade | As operações de agendamento e de baixa de pagamento devem ser transacionais, sem duplicidade ou perda de dados. |
| RNF11 | Manutenibilidade | O código deve ser modular, versionado em Git e documentado, facilitando correções e novas funcionalidades. |
| RNF12 | Custo | A solução deve operar em hospedagem de baixo custo, de forma coerente com a proposta de atender professores autônomos. |
| RNF13 | Localização | A interface deve estar em português do Brasil, com datas no formato dd/mm/aaaa e valores em reais (R$). |

## Ajustes de escopo

- RF02 e RNF06: adaptados para o acesso exclusivo do professor.
- RF04: convite para acesso do aluno, retirado deste recorte.
- RF33 a RF37: funcionalidades da área do aluno e recados, retiradas deste recorte.
- RF38: envio de lembretes por e-mail/WhatsApp, fora da entrega básica.
- RNF05: redação técnica ajustada para armazenamento de senhas por hash.
- Não foram acrescentados requisitos da expansão para associações ou gestores.

Fonte: texto e imagens do documento “Desenvolvimento de um Sistema de Gestão de Aulas Particulares de Tênis” (2026), fornecido pelo grupo. Recorte: área do professor.
