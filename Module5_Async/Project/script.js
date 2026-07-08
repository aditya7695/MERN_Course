// cofigurations
const CONFIG = {
    DEBOUNCE_MS: 400,
    TIMEOUT_MS: 3500,
    SOURCES: ['A', 'B', 'C']
}

// state
const STATE = {
    currentMode: 'parallel',
    activeRequestId: 0,
    abortController: null,
    debounceTimer: null,
    totalSearches: 0,
    cancelRequests: 0,
    isSearching: false 
}

// utility functions
function setStatus(message, type = 'info'){
    const el = document.getElementById('status');
    el.textContent = message;
    el.className = `status ${type}`
}

function updateMatrics(){
    document.getElementById('totalSearches').textContent = STATE.totalSearches;
    document.getElementById('cancelledCount').textContent = STATE.cancelRequests;
}

function rederSource(sourceId, status, data={}){
    const sourceEl =  document.querySelector(`[data-source="${sourceId}"]`);
    sourceEl.className = `source ${status}`;

    const statusMap = {
        loading: `<div class="loading-text">🔁 Loading... (${Math.round(Math.random()*1000 + 500)}ms)</div>`,
        success: `<div class="status-text success">✅ Success (${data.duration || 0}ms)</div>` + 
            (data.results || []).map(r => `<div class="result-item">
                <div class="result-title">${r.title}</div>
                <div class="result-meta">${r.meta}</div>
            </div>`).join(''),
        error: `<div class="status-text error">❌ ${data.message || 'API Error'}</div>`,
        timeout: `<div class="status-text timeout">⏰ Request timed out</div>`,
        cancelled: `<div class="status-text">🔄️ Cancelled (newer serach actice)</div>`
    }
    sourceEl.innerHTML =  `<h3>Source ${sourceId}</h3> ${statusMap[status] || '<div class="placeholder">Ready</div>'}`
}

const  debounceSearch = (function(){
    return function(query){
        clearTimeout(STATE.debounceTimer);
        STATE.debounceTimer = setTimeout(() => {
            if(query.trim()) executeSearch(query.trim());
        }, CONFIG.DEBOUNCE_MS);
    }
})


// API SIMULATION
function simulateApi (sourceId, query, requestId, signal){
    return new Promise((resolve, reject)=>{
        const delay = 800 + Math.random() * 4000;    //800 - 4800 ms
        const willFail = Math.random() < 0.25;  //25% chance of the promise to fail
        const timeout = setTimeout(()=>{
            if(signal.aborted) return reject(new DOMException('AbortError'));
            if(willFail){
                return reject(new Error(`Source ${sourceId} services unavailable`));
            }else{
                const results = [
                    {
                        title: `${query} Guide (${sourceId})`,
                        meta: 'Documentation'
                    },
                    {
                        title: `${query} Tutorial (${sourceId})`,
                        meta: 'Step-by-step'
                    }
                ]
                resolve({sourceId, results, duration: delay, requestId});
            }
        }, delay);
        signal.addEventlistner('abort', ()=>{
            clearTimeout(timeout,{once: true}); 
        })
    })
}

function withTimeout(promise, ms){
    const timeoutPromise = new Promise((_, reject)=>{
        setTimeout(()=>reject(new Error('Timeout')), ms)
    })
    return Promise.race([promise, timeoutPromise]);
}