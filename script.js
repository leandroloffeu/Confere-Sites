// Lista base de sites pornográficos conhecidos
let adultSites = [
    // Principais plataformas de vídeo
    { name: 'Site 01', url: 'https://www.pornhub.com' },
    { name: 'Site 02', url: 'https://www.xvideos.com' },
    { name: 'Site 03', url: 'https://www.xhamster.com' },
    { name: 'Site 04', url: 'https://www.redtube.com' },
    { name: 'Site 05', url: 'https://www.youporn.com' },
    { name: 'Site 06', url: 'https://www.tube8.com' },
    { name: 'Site 07', url: 'https://www.spankwire.com' },
    { name: 'Site 08', url: 'https://www.beeg.com' },
    { name: 'Site 09', url: 'https://www.tnaflix.com' },
    { name: 'Site 10', url: 'https://www.4tube.com' },
    { name: 'Site 11', url: 'https://www.drtuber.com' },
    { name: 'Site 12', url: 'https://www.porn.com' },
    { name: 'Site 13', url: 'https://www.sunporno.com' },
    { name: 'Site 14', url: 'https://www.pornmd.com' },
    { name: 'Site 15', url: 'https://www.porniq.com' },
    { name: 'Site 16', url: 'https://www.xnxx.com' },
    { name: 'Site 17', url: 'https://www.youjizz.com' },
    { name: 'Site 18', url: 'https://www.keezmovies.com' },
    { name: 'Site 19', url: 'https://www.extremetube.com' },
    { name: 'Site 20', url: 'https://www.spankbang.com' },
    { name: 'Site 21', url: 'https://www.nuvid.com' },
    { name: 'Site 22', url: 'https://www.pornoxo.com' },
    { name: 'Site 23', url: 'https://www.porn300.com' },
    { name: 'Site 24', url: 'https://www.pornhd.com' },
    { name: 'Site 25', url: 'https://www.pornotube.com' },
    { name: 'Site 26', url: 'https://www.porntube.com' },
    { name: 'Site 27', url: 'https://www.pornhubpremium.com' },
    { name: 'Site 28', url: 'https://www.xhamsterpremium.com' },
    
    // Sites premium e estúdios
    { name: 'Site 29', url: 'https://www.brazzers.com' },
    { name: 'Site 30', url: 'https://www.realitykings.com' },
    { name: 'Site 31', url: 'https://www.bangbros.com' },
    { name: 'Site 32', url: 'https://www.naughtyamerica.com' },
    { name: 'Site 33', url: 'https://www.mofos.com' },
    { name: 'Site 34', url: 'https://www.twistys.com' },
    { name: 'Site 35', url: 'https://www.babes.com' },
    { name: 'Site 36', url: 'https://www.men.com' },
    { name: 'Site 37', url: 'https://www.onlyfans.com' },
    { name: 'Site 38', url: 'https://www.chaturbate.com' },
    { name: 'Site 39', url: 'https://www.myfreecams.com' },
    { name: 'Site 40', url: 'https://www.livejasmin.com' },
    
    // Mais plataformas
    { name: 'Site 41', url: 'https://www.pornhub.org' },
    { name: 'Site 42', url: 'https://www.xhamster.one' },
    { name: 'Site 43', url: 'https://www.xnxx.tv' },
    { name: 'Site 44', url: 'https://www.xvideos.red' },
    { name: 'Site 45', url: 'https://www.pornhub.net' },
    { name: 'Site 46', url: 'https://www.xhamster2.com' },
    { name: 'Site 47', url: 'https://www.xvideos2.com' },
    { name: 'Site 48', url: 'https://www.redtube.net' },
    { name: 'Site 49', url: 'https://www.youporn2.com' },
    { name: 'Site 50', url: 'https://www.tube8.net' },
    
    // Sites adicionais conhecidos
    { name: 'Site 51', url: 'https://www.pornhub.tv' },
    { name: 'Site 52', url: 'https://www.xhamster.tv' },
    { name: 'Site 53', url: 'https://www.xvideos.tv' },
    { name: 'Site 54', url: 'https://www.redtube.tv' },
    { name: 'Site 55', url: 'https://www.youporn.tv' },
    { name: 'Site 56', url: 'https://www.tube8.tv' },
    { name: 'Site 57', url: 'https://www.pornhub.io' },
    { name: 'Site 58', url: 'https://www.xhamster.io' },
    { name: 'Site 59', url: 'https://www.xvideos.io' },
    { name: 'Site 60', url: 'https://www.redtube.io' }
];

// Elementos DOM
const testAllBtn = document.getElementById('testAllBtn');
const clearBtn = document.getElementById('clearBtn');
const exportBtn = document.getElementById('exportBtn');
const resultsDiv = document.getElementById('results');
const totalCount = document.getElementById('totalCount');
const accessibleCount = document.getElementById('accessibleCount');
const blockedCount = document.getElementById('blockedCount');
const testingCount = document.getElementById('testingCount');
const loadingStatusDiv = document.getElementById('loadingStatus');

let testResults = [];
let isTesting = false;
let sitesLoaded = false;

// URLs das listas públicas do GitHub
const GITHUB_LISTS = [
    {
        name: 'StevenBlack Hosts',
        url: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/porn/hosts',
        type: 'hosts'
    },
    {
        name: 'Anti-Porn HOSTS File',
        url: 'https://raw.githubusercontent.com/4skinSkywalker/Anti-Porn-HOSTS-File/master/HOSTS.txt',
        type: 'hosts',
        // URLs alternativas caso a principal não funcione
        altUrls: [
            'https://raw.githubusercontent.com/4skinSkywalker/Anti-Porn-HOSTS-File/main/HOSTS.txt',
            'https://raw.githubusercontent.com/4skinSkywalker/Anti-Porn-HOSTS-File/master/hosts.txt'
        ]
    }
];

// Função para normalizar domínio
function normalizeDomain(domain) {
    return domain.toLowerCase().replace(/^www\./, '').trim();
}

// Função para extrair apenas o domínio de uma URL
function getDomain(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace(/^www\./, '');
    } catch (e) {
        return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
    }
}

// Função para processar arquivo hosts e extrair domínios
function processHostsFile(text) {
    const domains = new Set(); // Usa Set para evitar duplicatas
    
    const lines = text.split('\n');
    lines.forEach(line => {
        line = line.trim();
        // Ignora comentários e linhas vazias
        if (!line || line.startsWith('#')) return;
        
        // Formato hosts: 0.0.0.0 domain.com ou 127.0.0.1 domain.com
        const parts = line.split(/\s+/).filter(p => p);
        if (parts.length >= 2) {
            const domain = parts[1];
            // Remove comentários inline
            const cleanDomain = domain.split('#')[0].trim();
            if (cleanDomain && cleanDomain.includes('.') && !cleanDomain.match(/^\d+\.\d+\.\d+\.\d+$/)) {
                domains.add(normalizeDomain(cleanDomain));
            }
        } else if (parts.length === 1 && parts[0].includes('.')) {
            // Pode ser apenas um domínio por linha
            const domain = parts[0].split('#')[0].trim();
            if (domain && !domain.match(/^\d+\.\d+\.\d+\.\d+$/)) {
                domains.add(normalizeDomain(domain));
            }
        }
    });
    
    return Array.from(domains);
}

// Função para atualizar status de carregamento
function updateLoadingStatus(message, isError = false) {
    if (loadingStatusDiv) {
        loadingStatusDiv.innerHTML = `<span style="color: ${isError ? '#dc3545' : '#667eea'};">${message}</span>`;
    }
}

// Função para buscar listas do GitHub e adicionar à lista de sites
async function loadSitesFromGitHub() {
    if (sitesLoaded) return;
    
    updateLoadingStatus('📥 Carregando listas do GitHub...');
    
    const existingDomains = new Set(adultSites.map(site => normalizeDomain(getDomain(site.url))));
    let newSitesCount = 0;
    let loadedLists = 0;
    
    for (const list of GITHUB_LISTS) {
        try {
            updateLoadingStatus(`📥 Carregando ${list.name}...`);
            
            // Tenta a URL principal e URLs alternativas se disponíveis
            const urlsToTry = [list.url, ...(list.altUrls || [])];
            let success = false;
            
            for (const url of urlsToTry) {
                try {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 10000);
                    
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: { 'Accept': 'text/plain' },
                        signal: controller.signal,
                        mode: 'cors'
                    });
                    
                    clearTimeout(timeoutId);
                    
                    if (response.ok) {
                        const text = await response.text();
                        const domains = processHostsFile(text);
                        
                        // Adiciona apenas domínios novos (limitado a 200 por lista para não sobrecarregar)
                        let added = 0;
                        for (const domain of domains.slice(0, 200)) {
                            if (!existingDomains.has(domain)) {
                                existingDomains.add(domain);
                                adultSites.push({
                                    name: `Site ${String(adultSites.length + 1).padStart(2, '0')}`,
                                    url: `https://www.${domain}`
                                });
                                added++;
                                newSitesCount++;
                            }
                        }
                        
                        loadedLists++;
                        success = true;
                        console.log(`✅ Carregados ${added} sites de ${list.name}`);
                        break; // Sucesso, não precisa tentar outras URLs
                    }
                } catch (fetchError) {
                    // Continua para próxima URL
                    continue;
                }
            }
            
            if (!success) {
                console.log(`⚠️ Não foi possível carregar ${list.name}`);
            }
        } catch (error) {
            console.log(`⚠️ Erro ao carregar ${list.name}:`, error.message);
        }
    }
    
    sitesLoaded = true;
    if (newSitesCount > 0) {
        updateLoadingStatus(`✅ ${newSitesCount} novos sites adicionados de ${loadedLists} lista(s)`);
        console.log(`📋 Total de ${newSitesCount} novos sites adicionados das listas do GitHub`);
        updateStats();
    } else {
        updateLoadingStatus(`✅ Listas carregadas (nenhum site novo encontrado)`);
    }
}

// Função para testar acessibilidade de um site
async function testSite(site) {
    return new Promise((resolve) => {
        let resolved = false;
        const timeout = setTimeout(() => {
            if (!resolved) {
                resolved = true;
                resolve({ ...site, status: 'blocked', accessible: false });
            }
        }, 8000);

        // Estratégia 1: Fetch com no-cors
        const fetchController = new AbortController();
        const fetchTimeout = setTimeout(() => {
            fetchController.abort();
        }, 6000);
        
        fetch(site.url, { 
            method: 'HEAD', 
            mode: 'no-cors',
            cache: 'no-cache',
            signal: fetchController.signal
        })
        .then(() => {
            clearTimeout(timeout);
            clearTimeout(fetchTimeout);
            if (!resolved) {
                resolved = true;
                resolve({ ...site, status: 'accessible', accessible: true });
            }
        })
        .catch((error) => {
            clearTimeout(fetchTimeout);
            if (resolved) return;
            
            // Estratégia 2: Tentar iframe
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.style.width = '1px';
            iframe.style.height = '1px';
            iframe.style.position = 'absolute';
            iframe.style.left = '-9999px';
            
            let iframeTimeout = setTimeout(() => {
                if (iframe.parentNode) {
                    document.body.removeChild(iframe);
                }
                if (!resolved) {
                    resolved = true;
                    clearTimeout(timeout);
                    resolve({ ...site, status: 'blocked', accessible: false });
                }
            }, 6000);

            iframe.onload = () => {
                clearTimeout(iframeTimeout);
                clearTimeout(timeout);
                if (!resolved) {
                    resolved = true;
                    resolve({ ...site, status: 'accessible', accessible: true });
                }
                if (iframe.parentNode) {
                    document.body.removeChild(iframe);
                }
            };

            iframe.onerror = () => {
                clearTimeout(iframeTimeout);
                if (!resolved) {
                    resolved = true;
                    clearTimeout(timeout);
                    resolve({ ...site, status: 'blocked', accessible: false });
                }
                if (iframe.parentNode) {
                    document.body.removeChild(iframe);
                }
            };

            document.body.appendChild(iframe);
            iframe.src = site.url;
        });
    });
}

// Função para testar todos os sites
async function testAllSites() {
    if (isTesting) return;
    
    isTesting = true;
    testAllBtn.disabled = true;
    testAllBtn.textContent = 'Verificando...';
    testResults = [];
    resultsDiv.innerHTML = '';
    
    // Inicializa todos os sites como "testing"
    adultSites.forEach(site => {
        testResults.push({ ...site, status: 'testing', accessible: null });
    });
    
    updateStats();
    renderResults();
    
    // Testa cada site sequencialmente
    for (let i = 0; i < adultSites.length; i++) {
        const result = await testSite(adultSites[i]);
        testResults[i] = result;
        updateStats();
        renderResults();
        
        // Pequeno delay entre testes
        await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    isTesting = false;
    testAllBtn.disabled = false;
    testAllBtn.textContent = 'Verificar Todos os Sites';
}

// Função para atualizar estatísticas
function updateStats() {
    const total = testResults.length || adultSites.length;
    const accessible = testResults.filter(r => r.status === 'accessible').length;
    const blocked = testResults.filter(r => r.status === 'blocked').length;
    const testing = testResults.filter(r => r.status === 'testing').length;
    
    totalCount.textContent = total;
    accessibleCount.textContent = accessible;
    blockedCount.textContent = blocked;
    testingCount.textContent = testing;
}

// Função para renderizar resultados
function renderResults() {
    if (testResults.length === 0) {
        resultsDiv.innerHTML = '<p class="placeholder">Clique em "Verificar Todos os Sites" para começar</p>';
        return;
    }
    
    resultsDiv.innerHTML = testResults.map((site, index) => {
        const domain = getDomain(site.url);
        let statusBadge = '';
        let icon = '';
        
        if (site.status === 'testing') {
            statusBadge = '<span class="status-badge status-testing">Testando</span>';
            icon = '<div class="spinner"></div>';
        } else if (site.status === 'accessible') {
            statusBadge = '<span class="status-badge status-accessible">Acessível</span>';
            icon = '<svg class="check-icon" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>';
        } else {
            statusBadge = '<span class="status-badge status-blocked">Bloqueado</span>';
            icon = '<svg class="x-icon" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>';
        }
        
        return `
            <div class="site-item ${site.status}">
                <div class="site-info">
                    <div class="site-name">${site.name}</div>
                    <div class="site-url">${domain}</div>
                </div>
                <div class="site-status">
                    ${icon}
                    ${statusBadge}
                </div>
            </div>
        `;
    }).join('');
}

// Função para limpar resultados
function clearResults() {
    testResults = [];
    updateStats();
    renderResults();
}

// Função para gerar lista de sites acessíveis
function generateAccessibleList() {
    // Filtra apenas sites acessíveis
    const accessibleSites = testResults.filter(site => site.status === 'accessible');
    
    if (accessibleSites.length === 0) {
        alert('Nenhum site acessível encontrado. Execute a verificação primeiro.');
        return;
    }
    
    // Gera lista formatada
    let listText = `LISTA DE SITES ACESSÍVEIS\n`;
    listText += `Gerado em: ${new Date().toLocaleString('pt-BR')}\n`;
    listText += `Total de sites acessíveis: ${accessibleSites.length}\n\n`;
    listText += `SITES:\n`;
    listText += `${'='.repeat(50)}\n\n`;
    
    accessibleSites.forEach((site, index) => {
        const domain = getDomain(site.url);
        listText += `${String(index + 1).padStart(3, '0')}. ${domain}\n`;
        listText += `    URL: ${site.url}\n`;
        listText += `    Nome: ${site.name}\n\n`;
    });
    
    // Adiciona lista apenas de domínios (uma por linha)
    listText += `\n${'='.repeat(50)}\n`;
    listText += `LISTA APENAS DE DOMÍNIOS (um por linha):\n`;
    listText += `${'='.repeat(50)}\n\n`;
    accessibleSites.forEach(site => {
        const domain = getDomain(site.url);
        listText += `${domain}\n`;
    });
    
    // Cria modal para exibir e copiar
    showListModal(listText, accessibleSites.length);
}

// Função para exibir modal com a lista
function showListModal(listText, count) {
    // Remove modal existente se houver
    const existingModal = document.getElementById('listModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Cria modal
    const modal = document.createElement('div');
    modal.id = 'listModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>📋 Lista de Sites Acessíveis</h2>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p class="modal-info">Total: <strong>${count} sites acessíveis</strong></p>
                <textarea id="listTextarea" class="list-textarea" readonly>${listText}</textarea>
                <div class="modal-actions">
                    <button id="copyBtn" class="btn btn-primary">📋 Copiar Lista</button>
                    <button id="downloadBtn" class="btn btn-success">💾 Baixar como TXT</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Event listeners do modal
    const closeBtn = modal.querySelector('.modal-close');
    const copyBtn = modal.querySelector('#copyBtn');
    const downloadBtn = modal.querySelector('#downloadBtn');
    const textarea = modal.querySelector('#listTextarea');
    
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    copyBtn.addEventListener('click', async () => {
        try {
            // Tenta usar a API moderna do Clipboard
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(listText);
            } else {
                // Fallback para método antigo
                textarea.select();
                document.execCommand('copy');
            }
            copyBtn.textContent = '✅ Copiado!';
            setTimeout(() => {
                copyBtn.textContent = '📋 Copiar Lista';
            }, 2000);
        } catch (error) {
            // Se falhar, seleciona o texto para o usuário copiar manualmente
            textarea.select();
            copyBtn.textContent = '⚠️ Selecione e copie manualmente';
            setTimeout(() => {
                copyBtn.textContent = '📋 Copiar Lista';
            }, 3000);
        }
    });
    
    downloadBtn.addEventListener('click', () => {
        const blob = new Blob([listText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sites_acessiveis_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        downloadBtn.textContent = '✅ Baixado!';
        setTimeout(() => {
            downloadBtn.textContent = '💾 Baixar como TXT';
        }, 2000);
    });
    
    // Seleciona todo o texto automaticamente
    textarea.select();
}

// Event listeners
testAllBtn.addEventListener('click', testAllSites);
clearBtn.addEventListener('click', clearResults);
exportBtn.addEventListener('click', generateAccessibleList);

// Inicialização
loadSitesFromGitHub().then(() => {
    updateStats();
    renderResults();
});
