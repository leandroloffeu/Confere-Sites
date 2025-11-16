// Exemplo de configuração de API para lista de sites bloqueados
// Copie este arquivo para api-config.js e configure sua API

// Opção 1: API que retorna JSON com lista de domínios
const API_CONFIG = {
    // URL da sua API
    url: 'https://sua-api.com/api/blocked-sites',
    
    // Método HTTP
    method: 'GET',
    
    // Headers opcionais
    headers: {
        'Accept': 'application/json',
        // 'Authorization': 'Bearer SEU_TOKEN_AQUI' // Se necessário
    },
    
    // Função para processar a resposta da API
    // A API deve retornar um JSON com um dos formatos abaixo:
    // { domains: ['site1.com', 'site2.com'] }
    // { sites: ['site1.com', 'site2.com'] }
    // { blocked: ['site1.com', 'site2.com'] }
    // Ou um array simples: ['site1.com', 'site2.com']
    processResponse: (data) => {
        // Se a API retorna um objeto com propriedade 'domains'
        if (data.domains && Array.isArray(data.domains)) {
            return data.domains;
        }
        // Se a API retorna um objeto com propriedade 'sites'
        if (data.sites && Array.isArray(data.sites)) {
            return data.sites;
        }
        // Se a API retorna um objeto com propriedade 'blocked'
        if (data.blocked && Array.isArray(data.blocked)) {
            return data.blocked;
        }
        // Se a API retorna um array diretamente
        if (Array.isArray(data)) {
            return data;
        }
        // Retorna array vazio se não conseguir processar
        return [];
    }
};

// Para usar esta configuração, descomente e ajuste no script.js:
/*
async function fetchBlockedSitesList() {
    try {
        const response = await fetch(API_CONFIG.url, {
            method: API_CONFIG.method,
            headers: API_CONFIG.headers
        });
        
        if (response.ok) {
            const data = await response.json();
            const domains = API_CONFIG.processResponse(data);
            blockedSitesList = domains.map(domain => normalizeDomain(domain));
            apiLoaded = true;
            updateApiStatus(true);
            return true;
        } else {
            throw new Error('API não disponível');
        }
    } catch (error) {
        console.log('Erro ao buscar API, usando lista local');
        // Usa lista local como fallback
        // ... código de fallback
    }
}
*/

