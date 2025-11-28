# Meu Agente — Guia de Produto, Planos e Uso

**Versão:** 1.0\
**Data:** Outubro/2025\
**Contato comercial:** [comercial@meuagente.api.br](mailto\:comercial@meuagente.api.br)

---

## Sumário

1. [Visão Geral](#sec-visao-geral)
2. [Planos e Preços](#sec-planos-precos)
3. [Matriz de Recursos por Plano](#sec-matriz)
4. [Sub‑Agentes e Funcionalidades](#sec-subagentes)
5. [Uso Diário (Fluxos no WhatsApp)](#sec-uso-diario)
6. [Integrações e Requisitos Técnicos](#sec-integracoes)
7. [Segurança, Privacidade e Conformidade](#sec-seguranca)
8. [Suporte e Backups](#sec-suporte)
9. [Boas Práticas e Limites do Canal](#sec-boas-praticas)
10. [Métricas e Relatórios](#sec-metricas)
11. [Perguntas Frequentes (FAQ)](#sec-faq)
12. [Anexos (Templates de Mensagem, Glossário)](#sec-anexos)

---



## 1) Visão Geral

**Meu Agente** é um micro SaaS que disponibiliza uma equipe de Agentes de IA operando diretamente em um número do **WhatsApp** para executar tarefas de **atendimento, operações e automação**. O objetivo é **reduzir tempo operacional**, **elevar conversão** e **padronizar processos**, preservando segurança e privacidade dos dados.

**Principais benefícios:**

- Atendimento 24/7 dentro das regras do WhatsApp Business.
- Integração com Google (Calendar, Drive, Tasks e Gmail) **não nativa**, disponível mediante implantação opcional **com custo adicional** nos planos **Business/Premium**.
- Operações financeiras simples (entradas/saídas) com exportação *(disponível nos planos pagos)*.
- Pesquisa na web, extração de dados de fontes permitidas e relatórios prontos.
- Sub‑agentes especializados (SDR, Marketing, Agendamento, Dev e Vídeo) no plano Business e Premium.

---



## 2) Planos e Preços

> Os valores abaixo estão **definidos e consolidados** para contratação. Impostos não inclusos.

### Plano **Free** — **Gratuito**

Para quem quer explorar o Meu Agente sem custo. **Sem automações automáticas via atendimento pelo WhatsApp**; os **registros são inseridos manualmente pelo usuário**. **Sem exportação de dados** e **sem backup**.

- Acesso ao app em nuvem do Meu Agente.
- Sem número dedicado, sem suporte e sem sub‑agentes Business/Premium.
- Operações manuais dentro do app (ex.: lançar entradas/saídas manualmente).
- Sem exportação (CSV/PDF) e **sem backups** (dados voláteis conforme política; recomenda-se migração para plano pago para garantir retenção).

### Plano **Básico** — **R\$ 497,00/mês**

Para profissionais e pequenas equipes que desejam começar com agentes de IA no WhatsApp usando infraestrutura em nuvem do Meu Agente.

**Observações do Básico:** acesso ao app e a diversas funcionalidades, porém com **lançamentos e interações manuais**, **sem automações automáticas** do Meu Agente, **sem suporte**, e **não inclui funcionalidades que são exclusivas dos planos Business e Premium** (ex.: **número WhatsApp dedicado**, **suporte prioritário 24/7**, **sub‑agentes SDR/Marketing/Agendamento/Dev/Vídeo** e **camadas avançadas de Web Search/Scrape**).

### Plano **Business** — **R\$ 997,00/mês**

Para empresas que precisam de \*\*número WhatsApp próprio \*\* suporte prioritário 24/7 e sub‑agentes adicionais (SDR-Recepcionista, Marketing, Agendamento, Dev e Vídeo), com maior capacidade de personalização.

- **Implantação (setup inicial) inclusa**.
- **Taxa de manutenção/treinamento/atualização:** **R\$ 149,00/h** (quando necessária), cobrindo ajustes de modelos, reconfigurações e treinamentos pontuais.

### Plano **Premium** — **R\$ 1497,00/mês**

Tudo do Business, com **camada avançada adicional** nos agentes de **Web Search** e **Scrape** (sempre em **fontes permitidas** e/ou **APIs oficiais**), automações estendidas, governança de dados ampliada e sub‑agentes adicionais (Agente de Confirmação, Agente de Resumo de Grupos, Agente de Remarketing e Agente de Follow‑up), com extrema capacidade de personalização.

- **Implantação (setup inicial) inclusa**.
- **Taxa de manutenção/treinamento/atualização:** **R\$ 149,00/h** (quando necessária), cobrindo ajustes de modelos, reconfigurações e treinamentos pontuais.

> **Add‑ons e ferramentas adicionais** (**somente plano Premium**): créditos de execução (ex.: tarefas de busca/extração ou minutos de geração de vídeo), integrações sob demanda e **bases de conhecimento adicionais**; os valores **variam conforme demanda** e a **necessidade de automações** a serem incluídas na estrutura.

---



## 3) Matriz de Recursos por Plano

| Recurso                                          | Free        | Básico      | Business           | Premium         |
| ------------------------------------------------ | ----------- | ----------- | ------------------ | --------------- |
| **Automação via atendimento no WhatsApp**        | –           | –           | ✔︎                 | ✔︎              |
| Agente Financeiro (entradas/saídas + categorias) | ✔︎          | ✔︎          | ✔︎                 | ✔︎              |
| Exportação de dados (CSV/PDF)                    | –           | ✔︎          | ✔︎                 | ✔︎              |
| Agente de Scrape (fontes permitidas/APIs)        | ✔︎ (básico) | ✔︎ (básico) | ✔︎ (intermediário) | ✔︎ (avançado)   |
| Agente Web Search                                | ✔︎          | ✔︎          | ✔︎                 | ✔︎ (avançado)   |
| Número WhatsApp dedicado                         | –           | –           | ✔︎                 | ✔︎              |
| **Implantação (setup inicial) inclusa**          | –           | –           | ✔︎                 | ✔︎              |
| **Suporte prioritário**                          | –           | –           | ✔︎ (24/7)          | ✔︎ (24/7)       |
| Agente SDR (qualificação de leads)               | –           | –           | ✔︎                 | ✔︎              |
| Agente de Marketing (Google Ads)                 | –           | –           | ✔︎                 | ✔︎              |
| Agente de Agendamento (Calendar/Drive/Tasks)     | –           | –           | ✔︎                 | ✔︎              |
| Agente de Dev (programação e debugging)          | –           | –           | ✔︎                 | ✔︎              |
| Agente de Vídeo (Google Veo 3)                   | –           | –           | ✔︎                 | ✔︎ (cota maior) |
| **Agente de Confirmação (Premium)**              | –           | –           | –                  | ✔︎              |
| **Agente de Resumo de Grupos (Premium)**         | –           | –           | –                  | ✔︎              |
| **Agente de Remarketing (Premium)**              | –           | –           | –                  | ✔︎              |
| **Agente de Follow‑up (Premium)**                | –           | –           | –                  | ✔︎              |
| Backups diários off‑site                         | –           | –           | –                  | ✔︎              |
| Governança de dados / auditoria                  | —           | Básico      | Interm.            | Avançado        |

> **Suporte:** no **Free e no Básico não há suporte**; nos planos **Business/Premium** o suporte é **prioritário 24/7**.

---



## 4) Sub‑Agentes e Funcionalidades

### 4.1 Agente Financeiro

- Registra **entradas e saídas**, categoria (ex.: marketing, operação, impostos) e **descrição**.
- Exportação **CSV**/planilha, filtros por período e categoria — **disponível apenas nos planos pagos**.

**Exemplos de mensagens no WhatsApp:**\
"Quero registrar uma saída de R\$ 320,00 em Marketing, descrição 'Impulsionamento Instagram', para hoje às 14:40."\
"Registra uma entrada de R\$ 1.200,00 na categoria Assinaturas — Plano Business — com data 01/10/2025."\
"Exporta um CSV do período de 01/09/2025 a 30/09/2025 apenas com as categorias Marketing e Operação."

---

### 4.2 Agente de Scrape (Fontes Permitidas)

- Extração de dados e conteúdos por **APIs oficiais**, **open data** e **fontes com permissão explícita**.
- Geração de **relatórios** (CSV/JSON) e **resumos** com referências.
- **Não** realiza scraping de sites que **proíbem** tal prática nos termos de uso.

**Exemplos de mensagens no WhatsApp:**\
"Faça o scrape do site exemplo.com e me envie os contatos comerciais (nome, e-mail e telefone) em CSV."\
"Busque no portal de dados abertos de Curitiba o dataset de aluguel residencial de 2024 e me mande um CSV filtrado por bairro."\
"Use a API 'imoveis\_publicos' e traga título, preço e bairro (até 200 itens) em JSON."

---

### 4.3 Agente Web Search

- Pesquisas avançadas por tema, fonte e localidade.
- Entrega de **resumos citados**, **links** e **anexos** (quando apropriado).

**Exemplos de mensagens no WhatsApp:**\
"Busque 3 pousadas em Fortaleza com potencial de vendas para o meu produto e me envie nomes, sites e telefones."\
"Pesquise tendências de 'roupas fitness' na região de SP nos últimos 90 dias e me entregue 5 insights com 3 links confiáveis."\
"Compare 'CRM para clínicas' e 'ERP para clínicas' focando em custo-benefício e me mande um resumo objetivo."

---

### 4.4 Agente SDR (Business/Premium)

- Qualificação de leads, **recepção humanizada**, perguntas de perfil e **marcação automática** de reuniões no Google Calendar.
- Envio de e‑mails de confirmação e follow‑ups (quando habilitado).

**Fluxo do SDR (visual):**

```
Lead chega no WhatsApp
   ↓
Coleta rápida: nome, telefone, empresa, interesse, urgência, orçamento
   ↓
Qualificação: fit (alto/médio/baixo) e próxima ação
   ↓
Oferta: reunião de 20 min OU orçamento resumido
   ↓
Agendamento automático (Meu Agente / Google Calendar)
   ↓
Confirmação e lembrete (WhatsApp + e‑mail)
```

**Mensagens humanizadas (exemplos):**\
"Oi, Ana! Sou do Meu Agente. Vi seu interesse em uma demo — te ajudo rapidinho."\
"Para te direcionar melhor: qual objetivo principal e para quando você precisa?"\
"Consigo quinta às 10:30 ou sexta às 14:00. Qual horário funciona?"\
"Perfeito. Fechei quinta às 10:30 por Google Meet. Te enviei a confirmação e o link aqui no WhatsApp e no seu e‑mail."\
"Se preferir, preparo um orçamento enxuto com base no que você descreveu. Quer receber ainda hoje?"



---

### 4.5 Agente de Marketing (Google Ads) (Business/Premium)

- Análises de campanhas, relatório de termos, **sugestões de otimização**.
- Rotinas de alerta (ex.: gasto diário, queda brusca de CTR).

**Exemplos de mensagens no WhatsApp:**\
"Analise minha campanha de Google Ads 'Tráfego – Outubro' e me diga 3 termos negativos para adicionar."\
"Porque meu gasto diário está estourando na metade do dia?"\
"Compare a última semana com a anterior e me envie 5 insights rápidos com links dos relatórios."

---

### 4.6 Agente de Agendamento (Business/Premium)

- Cria e gerencia compromissos no **Google Calendar e/ou app Meu Agente**, manuseia arquivos no **Google Drive**, cria tarefas no **Google Tasks** e envia lembretes no WhatsApp.

**Exemplos de mensagens no WhatsApp:**\
"Marque uma reunião com o João amanhã às 15:00 no Google Meet e envie o link para ele e para mim."\
"Crie uma tarefa no Google Tasks: 'Enviar proposta para Maria' com prazo sexta às 17:00."\
"Anexe o arquivo 'Proposta\_v3.pdf' do Drive na reunião de segunda às 10:00."

---

### 4.7 Agente de Dev (Business/Premium)

- Suporte em múltiplas linguagens, **debugging** e sugestões de melhoria.
- Respeita limites de confidencialidade e logs.

**Exemplos de mensagens no WhatsApp:**\
"Revise meu endpoint `/api/checkout`; estou recebendo erro 500 quando envio `customerId` vazio."\
"Otimize esta query Postgres que ficou lenta ao filtrar por `created_at` no último mês."\
"Sugira testes unitários para o módulo de cobrança e me mostre exemplos de casos de borda."

---

### 4.8 Agente de Vídeo – Google Veo 3 (Business/Premium)

- Geração de vídeos a partir de prompts/roteiros alinhados ao branding do cliente.
- Entregáveis: clipes curtos (cotas por plano), arquivos mp4.

**Exemplos de mensagens no WhatsApp:**\
"Crie um vídeo de 30s em 1080x1920 com o roteiro: 'Bem‑vindo ao Meu Agente...' e me envie duas variações."\
"Adapte este roteiro para clínicas odontológicas e gere um vídeo curto para stories."\
"Monte um storyboard com 6 cenas e legendas e depois exporte o MP4 final."

---

### 4.9 Agentes Premium adicionais

- **Agente de Confirmação:** entra em contato diariamente, nos horários pré‑definidos, com os leads agendados no Google Calendar do dia para confirmar presença; realiza varredura diária no Google Tasks e lembra tarefas pendentes.
- **Agente de Resumo de Grupos:** envia resumo diário dos grupos do WhatsApp escolhidos pelo cliente com os pontos mais relevantes das últimas 24h. *Requer consentimento e observância das regras do grupo.*
- **Agente de Remarketing:** identifica contatos que já interagiram no histórico do WhatsApp e dispara mensagens de reengajamento com base em funil pré‑definido. *Fora da janela de 24h, usa templates aprovados; requer opt‑in e respeito a políticas do canal.*
- **Agente de Follow‑up:** localiza contatos inativos por período configurável (minutos, horas, dias, meses, anos) e aciona lembretes conforme regra. *Mensagens proativas seguem a política de templates e opt‑in.*
- **Backups diários off‑site:** cópias armazenadas diariamente em local distinto da infraestrutura principal, com política 3‑2‑1 e testes periódicos de restauração.

> **Camada avançada de pesquisa e extração no plano Premium:** Agente Web Search e Agente de Scrape e Extract operam com **recursos aprofundados** e maior cobertura **exclusivamente em fontes permitidas e/ou APIs oficiais**, mantendo conformidade com termos de uso e legislação vigente.

---



## 5) Uso Diário (Fluxos no WhatsApp)

**Como falar com o Meu Agente**\
Escreva normalmente, como você falaria com alguém no WhatsApp. Abaixo, exemplos práticos (copiar e colar) por tipo de agente.

**Financeiro**

- "Registra uma entrada de R\$ 1.200,00 na categoria Assinaturas — Plano Business — com data 01/10/2025."
- "Quero registrar uma saída de R\$ 320,00 em Marketing, descrição 'Impulsionamento Instagram', hoje às 14:40."
- "Exporta um CSV do período de 01/09/2025 a 30/09/2025 somente com as categorias Marketing e Operação."

**Web Search (Pesquisa)**

- "Busque 3 pousadas em Fortaleza com potencial de vendas para o meu produto e me envie nomes, sites e telefones."
- "Pesquise concorrentes de 'açaí delivery' em Curitiba e me traga 5 insights com 3 links confiáveis."
- "Compare 'CRM para clínicas' e 'ERP para clínicas' focando em custo‑benefício e me mande um resumo objetivo."

**Scrape/Extract (Fontes Permitidas/APIs)**

- "Faça o scrape do site exemplo.com e me envie os contatos comerciais (nome, e‑mail e telefone) em CSV."
- "Busque no portal de dados abertos de Curitiba o dataset de aluguel residencial de 2024 e me mande um CSV filtrado por bairro."
- "Use a API 'imoveis\_publicos' e traga título, preço e bairro (até 200 itens) em JSON."

**Agendamento**

- "Marque uma reunião com o João amanhã às 15:00 no Google Meet e envie o link para ele e para mim."
- "Crie uma tarefa no Google Tasks: 'Enviar proposta para Maria' com prazo sexta às 17:00."
- "Anexe o arquivo 'Proposta\_v3.pdf' do Drive na reunião de segunda às 10:00."

**SDR (Qualificação e Reunião/Orçamento)**

- "Qualifique este lead: Ana, 11 99999‑9999, interessada em demo — me diga o fit e o próximo passo."
- "Ofereça dois horários (qui 10:30 ou sex 14:00) e, se ela aceitar, marque a reunião e envie confirmação."
- "Com base na conversa, monte um orçamento enxuto e me envie para revisão."

**Vídeo (Veo 3)**

- "Crie um vídeo de 30s em 1080x1920 com o roteiro: 'Bem‑vindo ao Meu Agente...' e me envie duas variações."
- "Adapte este roteiro para clínicas odontológicas e gere um vídeo curto para stories."
- "Monte um storyboard com 6 cenas e legendas e depois exporte o MP4 final."

---



## 6) Integrações e Requisitos Técnicos

- **WhatsApp Business** para envio/recebimento e mensagens.
- **Google Workspace**: Calendar, Drive, Tasks, Gmail (OAuth, escopos mínimos).
- **Formatos de exportação**: CSV/JSON/PDF (conforme agente).
- **Ambiente**: infraestrutura gerenciada (cloud), logs e monitoramento.

---



## 7) Segurança, Privacidade e Conformidade

- **LGPD**: definição de bases legais por finalidade; canal do **Encarregado (DPO)**; direitos do titular; políticas de retenção e descarte.
- **Consentimento e opt‑out**: registro do opt‑in; **SAIR**/"pare" como palavra de parada.
- **Scraping**: respeito a termos de uso.
- **Backups**: política **3‑2‑1** com testes de restauração periódicos.

---



## 8) Suporte e Backups

- **Suporte:** **sem suporte (Free e Básico)**; **24/7 prioritário** (Business/Premium).

- **Backups:** **indisponível no Free e no Básico**; **off‑site diário incluído no Premium**. No Business (padrão) não há; pode ser contratado como **add‑on**.

---



## 9) Boas Práticas e Limites do Canal

- Evite excesso de disparos (risco de queda de qualidade). Priorize segmentação.
- Para grupos, observe regras internas e consentimento dos participantes.
- Configure **opt‑out** claro e automático.

---



## 10) Métricas e Relatórios

- **Vendas:** conversão por etapa, no‑show de reuniões, ticket médio — com exportação e download pela dashboard em **.CSV** e **.PDF** *(apenas planos pagos)*.
- **Marketing:** CTR de templates, taxa de opt-in/opt-out, ROI de campanhas.
- **Operações:** lançamentos financeiros por período/categoria, tarefas concluídas.

Relatórios entregues via painel e/ou arquivos (CSV/PDF).

---



## 11) Perguntas Frequentes (FAQ)

**1. Posso usar o Meu Agente sem número próprio?**\
Sim, no **Free** e no **Básico** o atendimento ocorre na infraestrutura do Meu Agente.

**2. O que muda no Business/Premium?**\
Número WhatsApp dedicado, **implantação inclusa**, suporte 24/7 e sub‑agentes adicionais. O Premium inclui automações e integrações avançadas e governança ampliada.

**3. Como funcionam as mensagens proativas?**\
Fora de 24h, somente com **template aprovado** e opt‑in do contato.

**4. Há taxa de manutenção?**\
Sim, **R\$ 149,00/h**, quando solicitada (ajustes de modelos, reconfigurações, treinamentos).

**5. Vocês fazem scraping de sites que proíbem?**\
Não. Trabalhamos apenas com **APIs oficiais** e **fontes permitidas**.

---

### \*Observações Comerciais Finais

- Os limites de consumo (ex.: execuções de busca/extração, minutos de vídeo) e integrações específicas são detalhados na **Proposta Comercial** de cada cliente.
- Ajustes fora de escopo são tratados como **add‑ons** sob demanda.

