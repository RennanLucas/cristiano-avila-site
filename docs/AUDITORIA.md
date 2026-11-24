# Validação antes de produção

## Regressão
- npm ci; npx tsc --noEmit; npm run build; npm audit --omit=dev.
- Conferir home, especialidades, contato, blog, unidades e as quatro páginas locais; verificar 404 e redirects.
- Validar teclado, foco, contraste, zoom 200%, redução de movimento, largura 320–1920 px, Safari e Chrome.
- Verificar Lighthouse mobile, CLS, LCP, INP e console de erros.
- Conferir telefone e destino dos links WhatsApp sem enviar mensagens de teste reais.

## Google Ads e privacidade
A configuração CSP atual restringe scripts e conexões externas. Não liberar domínios de publicidade nem ativar tags sem definir finalidade, verificar as políticas aplicáveis a saúde, atualizar a política de privacidade e implementar consentimento adequado. Não enviar nome, telefone, texto de WhatsApp, condição clínica, páginas que revelem condições de saúde ou identificadores sensíveis a plataformas publicitárias. Não criar remarketing baseado em saúde. Um clique no WhatsApp não comprova contato ou consulta agendada. Confirmar a configuração da ação de conversão com o responsável antes de habilitar qualquer medição.

## Dependências
Migrar Next.js para versão suportada em uma branch separada, alinhando React, tipos, ESLint e TypeScript, regenerando o lockfile via npm e testando alterações de APIs. Não editar manualmente o lockfile nem usar npm audit fix --force sem revisar o diff.
