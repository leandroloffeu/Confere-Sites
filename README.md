# Verificador de Acesso a Sites

Ferramenta web discreta para verificar se sua conexão de internet permite acessar determinados sites e apresentar uma lista desses sites.

## Como Usar

1. Abra o arquivo `index.html` em seu navegador
2. Clique no botão "Testar Todos os Sites"
3. Aguarde enquanto a ferramenta verifica cada site
4. Veja os resultados mostrando quais sites estão acessíveis e quais estão bloqueados

## Funcionalidades

- ✅ **Lista expandida** - Testa **60+ sites** da categoria adulta
- ✅ **Integração com API de lista de bloqueio** - Compara sites testados com lista de bloqueio
- ✅ **Verificação de Serviços DNS** - Verifica se sites são bloqueados por **AdGuard DNS**, **Cloudflare** e **OpenDNS FamilyShield**
- ✅ **Detecção inteligente** - Identifica sites que estão na lista de bloqueio mas estão acessíveis na sua rede
- ✅ **Cobertura completa** - Inclui principais plataformas, estúdios premium e sites de webcam
- ✅ Mostra status em tempo real (Testando, Acessível, Bloqueado)
- ✅ Estatísticas visuais (Total, Acessíveis, Bloqueados)
- ✅ Interface discreta e moderna
- ✅ Nomes genéricos para maior privacidade
- ✅ Funciona completamente no navegador (sem servidor necessário)
- ✅ Múltiplas estratégias de teste para maior precisão

## Nota Importante

Esta ferramenta é útil para:
- Verificar se há filtros de conteúdo ativos na sua rede
- Testar políticas de firewall
- Diagnosticar problemas de conectividade
- Verificar restrições de ISP ou governo

## Tecnologias

- HTML5
- CSS3 (com gradientes e animações)
- JavaScript (ES6+)

## APIs Integradas

A ferramenta **já vem com APIs públicas integradas** que são tentadas automaticamente:

### APIs Públicas Ativas (Listas de Firewall):
1. **StevenBlack Hosts** - Lista usada em Pi-hole e firewalls
   - Formato: Hosts file
   - Fonte: `github.com/StevenBlack/hosts`
   - Usado em: Pi-hole, pfSense, roteadores

2. **AdGuard Adult Filter** - Filtro de conteúdo adulto do AdGuard
   - Formato: AdBlock rules
   - Fonte: `github.com/AdguardTeam/AdguardFilters`
   - Usado em: AdGuard, uBlock Origin, AdBlock

3. **Shalla Blacklist** - Lista usada em SquidGuard e firewalls
   - Formato: Domains list
   - Fonte: `github.com/shallalist/Shalla-Blacklists`
   - Usado em: SquidGuard, pfSense, firewalls corporativos

4. **OISD Blocklist** - Lista curada para Pi-hole e AdGuard
   - Formato: Hosts file
   - Fonte: `github.com/StevenBlack/hosts`
   - Usado em: Pi-hole, AdGuard, roteadores

### Listas Adicionais Disponíveis (Desabilitadas por padrão):
- URLhaus, Firebog, AdAway, Dan Pollock Hosts, EasyList, Peter Lowe List
- Podem ser habilitadas editando `script.js` e mudando `enabled: false` para `enabled: true`

A ferramenta tenta essas APIs automaticamente (em ordem de prioridade) e usa a primeira que estiver disponível. Se nenhuma funcionar, usa uma lista local atualizada com 60+ sites conhecidos.

## Verificação de Serviços DNS

A ferramenta verifica se os sites são bloqueados pelos seguintes serviços DNS de bloqueio:

1. **AdGuard DNS** - Serviço DNS que bloqueia anúncios, rastreadores e conteúdo adulto
2. **Cloudflare for Families** - DNS da Cloudflare que bloqueia malware e conteúdo adulto
3. **OpenDNS FamilyShield** - Serviço DNS da Cisco que bloqueia conteúdo adulto

Para cada site testado, a ferramenta mostra:
- Se o site é bloqueado por cada serviço DNS
- Quais serviços DNS bloqueiam o site
- Se o site não é bloqueado por nenhum dos serviços

Esta informação ajuda a entender se usar esses serviços DNS na sua rede bloquearia o acesso aos sites testados.

### API Customizada (Opcional)

Você também pode configurar sua própria API:

1. Abra o arquivo `script.js`
2. Localize a variável `CUSTOM_API_URL` na função `fetchBlockedSitesList()`
3. Defina a URL da sua API: `const CUSTOM_API_URL = 'https://sua-api.com/api/blocked-sites';`
4. A API deve retornar JSON no formato:
   ```json
   {
     "domains": ["site1.com", "site2.com"]
   }
   ```
   Ou um array simples:
   ```json
   ["site1.com", "site2.com"]
   ```

A API customizada tem prioridade sobre as APIs públicas.

## Aviso Legal

Esta ferramenta é apenas para fins de teste e diagnóstico de rede. O uso é de responsabilidade do usuário.

