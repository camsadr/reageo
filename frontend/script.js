document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos DOM
    const regionsOverlay = document.getElementById('regions-overlay');
    const brazilMap = document.getElementById('brazil-map');
    const modal = document.getElementById('region-modal');
    const closeButton = document.querySelector('.close-button');
    const modalRegionName = document.getElementById('modal-region-name');
    const modalEventType = document.getElementById('modal-event-type');
    const modalProbability = document.getElementById('modal-probability');
    const modalLastEvent = document.getElementById('modal-last-event');
    const modalPreventionLink = document.getElementById('modal-prevention-link');

    // Variável para armazenar os dados das regiões (buscados apenas uma vez)
    let allRegionsData = [];

    // --- Funções de Lógica Principal ---

    /**
     * Busca os dados das regiões da API Flask.
     * Chamada apenas uma vez na inicialização.
     */
    async function fetchRegionsData() {
        console.log('Fetching regions data from API...');
        try {
            const response = await fetch('/api/regioes');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            allRegionsData = await response.json();
            console.log('Regions data fetched:', allRegionsData);
            // Após buscar os dados, posiciona os pontos (se o mapa já estiver pronto)
            positionRegionsOnMap();
        } catch (error) {
            console.error('Error fetching regions data:', error);
        }
    }

    /**
     * Posiciona (ou reposiciona) os pontos das regiões no mapa.
     * Chamada na carga inicial e ao redimensionar a janela.
     */
    function positionRegionsOnMap() {
        console.log('Positioning regions on map...');
        // Garante que o mapa esteja carregado e os dados das regiões existam
        if (!brazilMap.complete || allRegionsData.length === 0) {
            console.log('Map not ready or no region data. Skipping positioning.');
            return;
        }

        const mapRect = brazilMap.getBoundingClientRect(); // Dimensões atuais da imagem do mapa
        const mapWidth = mapRect.width;
        const mapHeight = mapRect.height;

        // Alinha o overlay dos pontos exatamente sobre a imagem do mapa
        regionsOverlay.style.width = `${mapWidth}px`;
        regionsOverlay.style.height = `${mapHeight}px`;
        regionsOverlay.style.position = 'absolute';
        regionsOverlay.style.top = `${brazilMap.offsetTop}px`;
        regionsOverlay.style.left = `${brazilMap.offsetLeft}px`;
        console.log(`Overlay positioned at: Top=${brazilMap.offsetTop}px, Left=${brazilMap.offsetLeft}px, Size=${mapWidth}x${mapHeight}px`);

        regionsOverlay.innerHTML = ''; // Limpa os pontos existentes antes de recriar

        allRegionsData.forEach(region => {
            let topPercent, leftPercent;

            // Coordenadas em porcentagem para cada região
            // Estas são as coordenadas que você ajustou:
            if (region.nome.includes('Sul')) {
                topPercent = 83.2;
                leftPercent = 43.4;
            } else if (region.nome.includes('Nordeste')) {
                topPercent = 24.3;
                leftPercent = 71.2;
            } else if (region.nome.includes('Centro-Oeste')) {
                topPercent = 42.6;
                leftPercent = 38.8;
            } else {
                // Fallback para qualquer outra região não mapeada
                topPercent = 50;
                leftPercent = 50;
            }

            // Converte porcentagem para pixel e centraliza o ponto (tamanho do ponto é 30px, então subtrai 15px)
            const x = (leftPercent / 100) * mapWidth;
            const y = (topPercent / 100) * mapHeight;

            const point = document.createElement('div');
            point.classList.add('region-point');
            point.style.left = `${x - 15}px`; // Subtrai 15px (metade de 30px)
            point.style.top = `${y - 15}px`; // Subtrai 15px (metade de 30px)

            // Define a cor e o texto do ponto com base na probabilidade
            if (region.probabilidade >= 75) {
                point.classList.add('prob-high');
            } else if (region.probabilidade >= 50) {
                point.classList.add('prob-medium');
            } else {
                point.classList.add('prob-low');
            }
            point.textContent = `${region.probabilidade}%`;
            point.dataset.regionId = region.id; // Armazena o ID da região

            // Adiciona o evento de clique para mostrar os detalhes
            point.addEventListener('click', () => showRegionDetails(region));

            regionsOverlay.appendChild(point);
        });
    }

    /**
     * Exibe o modal com os detalhes da região clicada.
     * @param {object} region - Objeto com os dados da região.
     */
    function showRegionDetails(region) {
        modalRegionName.textContent = region.nome;
        modalEventType.textContent = region.tipo_evento;
        modalProbability.textContent = `${region.probabilidade}% de chance`;
        modalLastEvent.textContent = region.ultimo_evento;
        modalPreventionLink.href = `prevencao.html?type=${encodeURIComponent(region.tipo_evento.toLowerCase())}`;
        modal.style.display = 'flex'; // Exibe o modal
        console.log('Modal displayed for region:', region.nome);
    }

    // --- Event Listeners e Inicialização ---

    // Fecha o modal ao clicar no botão 'x'
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        console.log('Modal closed by button.');
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            console.log('Modal closed by clicking outside.');
        }
    });

    // Event listener para redimensionamento da janela: reposiciona os pontos
    window.addEventListener('resize', () => {
        console.log('Window resized. Repositioning points.');
        // Um debounce poderia ser adicionado aqui para evitar recalcular muitas vezes
        // em um redimensionamento rápido, mas para MVP não é essencial.
        positionRegionsOnMap();
    });

    // Quando a imagem do mapa carregar (pode ser na primeira vez ou se não estiver no cache)
    brazilMap.onload = () => {
        console.log('Brazil map onload event fired. Initiating positioning.');
        positionRegionsOnMap();
    };

    // Chamada inicial para buscar os dados das regiões
    fetchRegionsData();

    // Se o mapa já estiver completo (carregado do cache), posiciona os pontos imediatamente
    if (brazilMap.complete) {
        console.log('Brazil map already complete on DOMContentLoaded. Initiating positioning.');
        positionRegionsOnMap();
    }
});