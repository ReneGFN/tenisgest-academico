# Visão do projeto

## Problema

Professores autônomos de tênis precisam organizar alunos, horários, quadras, pagamentos e treinos. Informações dispersas podem causar choques de horário, perda do controle de pacotes e esquecimento de reposições por chuva. Essa é a problemática apresentada no documento de referência, e não o resultado de uma pesquisa de campo realizada nesta entrega.

**Pergunta orientadora:** como uma aplicação web pode ajudar o professor autônomo a centralizar essas tarefas de forma simples?

## Objetivo geral

Propor uma aplicação web para o professor de tênis administrar alunos, agenda, quadras, pagamentos e registros de treino. A etapa atual entrega levantamento de requisitos e protótipo de interface, para discussão com o grupo e posterior avaliação.

## Objetivos específicos

1. Organizar os requisitos a partir do documento fornecido e do recorte definido pelo responsável.
2. Representar as principais telas da rotina do professor.
3. Demonstrar navegação e ações básicas com dados fictícios.
4. Documentar regras e limitações antes de uma implementação completa.

## Justificativa

Uma ferramenta focada na rotina do professor pode reduzir a dispersão das informações e facilitar a consulta de agenda, pendências e histórico. O protótipo permite discutir essa proposta antes de investir em infraestrutura e integrações. Esses benefícios são esperados, não resultados medidos nesta etapa.

## Público e limites

| Dentro da proposta | Fora desta entrega |
| --- | --- |
| Um professor autônomo utilizando seu próprio espaço | Associações, gestores, equipes e permissões institucionais |
| Alunos cadastrados pelo professor | Login e portal do aluno |
| Agenda, quadras, treinos e controle financeiro básico | Chat, automações, campanhas e integrações |
| Consulta e simulação local | Autenticação real, banco de dados e pagamentos reais |

O aluno é uma entidade administrada pelo professor, não um ator que acessa o sistema. Os requisitos de segurança e persistência descrevem a futura aplicação; não são fornecidos pelo protótipo estático.

## Origem e adaptação

Fonte: documento Word **“Desenvolvimento de um Sistema para Gestão de Aulas Particulares”**, recebido em 25/10/2026. O conteúdo identifica o trabalho como “Desenvolvimento de um Sistema de Gestão de Aulas Particulares de Tênis”, do curso de Sistemas de Informação da PUC Minas, em 2026.

O documento inclui dois perfis. O pedido explícito do responsável restringe este repositório ao professor. Foram retirados da proposta o portal do aluno, convites de acesso e recados; não foram copiadas telas ou módulos da aplicação expandida. O protótipo deste repositório é HTML/CSS/JavaScript e não deve ser descrito como um arquivo Figma. O documento original permanece com o responsável, sem republicação do arquivo e de seus metadados.

## Direção visual

Referência principal: tela de agendamento do professor no documento fornecido e identidade original do TênisGest. Preservam-se barra lateral verde-escuro `#1a3a2a`, destaque lima `#c8e63b`, fundo claro `#f5f7f2`, superfícies brancas e tipografia sem serifa. O objetivo é reconhecimento e leitura, com seis destinos no menu e formulários curtos. Não há imagens externas, fontes remotas ou bibliotecas de interface.

## Próxima etapa do grupo

Confirmar integrantes e divisão de tarefas, revisar os requisitos e apresentar o protótipo ao orientador. Entrevistas, validação com professores, implementação de servidor e testes com usuários ainda não foram realizados neste repositório.
