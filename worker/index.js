const API = "https://www.themealdb.com/api/json/v1/1";

const page = String.raw`<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f8f7f2">
  <title>My Daily Meal — receitas com o que você tem</title>
  <style>
    :root{font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;color:#20352c;background:#f8f7f2;font-synthesis:none;text-rendering:optimizeLegibility}
    *{box-sizing:border-box}body{margin:0;min-width:320px}button,input,select{font:inherit}button{cursor:pointer}
    .shell{max-width:1180px;margin:auto;padding:0 26px}.top{height:76px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e6e8de}
    .brand{display:flex;align-items:center;gap:11px;color:#183d2e;font-size:18px;font-weight:800;letter-spacing:-.04em}.brand-mark{width:36px;height:36px;border-radius:12px;background:#2b684a;color:white;display:grid;place-items:center;font-size:20px}
    nav{display:flex;gap:8px}.nav-btn{border:0;background:transparent;color:#607368;padding:10px 14px;border-radius:10px;font-weight:700}.nav-btn.active,.nav-btn:hover{background:#e8eee5;color:#214b34}
    .hero{padding:55px 0 30px;display:grid;grid-template-columns:1.2fr .8fr;gap:36px;align-items:center}.eyebrow{color:#65836a;text-transform:uppercase;letter-spacing:.14em;font-size:12px;font-weight:800}.hero h1{font-size:clamp(36px,5vw,58px);line-height:1.02;letter-spacing:-.06em;margin:14px 0 15px;color:#193c2d;max-width:650px}.hero p{font-size:18px;line-height:1.55;color:#62746a;max-width:590px;margin:0}.hero-card{background:#e7efe4;border-radius:24px;padding:25px;min-height:170px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}.hero-card:before,.hero-card:after{content:"";position:absolute;border-radius:50%;background:#d0e2cf}.hero-card:before{width:155px;height:155px;right:18px;top:-48px}.hero-card:after{width:105px;height:105px;left:27px;bottom:-44px}.plate{position:relative;z-index:1;width:132px;height:132px;border:11px solid #fff;border-radius:50%;background:radial-gradient(circle at 45% 43%,#e8ab55 0 11%,transparent 12%),radial-gradient(circle at 61% 59%,#709655 0 16%,transparent 17%),radial-gradient(circle at 41% 64%,#d36945 0 18%,transparent 19%),#f5eee0;box-shadow:0 10px 25px #2b50311c}
    .panel{background:white;border:1px solid #e7e9e1;border-radius:20px;padding:24px;box-shadow:0 12px 30px #193c2d08}.search-panel{margin:0 auto 30px}.panel-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.panel h2{font-size:22px;letter-spacing:-.035em;margin:0 0 6px;color:#1e3f30}.muted{color:#76857b;line-height:1.5;margin:0}.search-row{display:flex;gap:10px;margin-top:20px}.input-wrap{position:relative;flex:1}.input-wrap input,.catalog-search{width:100%;border:1px solid #dfe5dc;border-radius:12px;padding:13px 15px;background:#fbfcf9;color:#1e3f30;outline:none}.input-wrap input:focus,.catalog-search:focus{border-color:#6b9a72;box-shadow:0 0 0 3px #dcebdd}.primary{border:0;border-radius:12px;background:#2b684a;color:white;font-weight:800;padding:12px 20px}.primary:hover{background:#20583c}.secondary{border:1px solid #dce4db;border-radius:10px;background:#fff;color:#335544;font-weight:700;padding:10px 13px}.secondary:hover{background:#f2f6f0}.small{font-size:14px;padding:8px 11px}.selected{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;min-height:4px}.chip{display:inline-flex;align-items:center;gap:8px;background:#e7efe5;color:#2f5c3f;border-radius:999px;padding:7px 11px;font-size:14px;font-weight:700}.chip button{border:0;background:transparent;color:#56725b;padding:0;font-size:18px;line-height:1}.suggestions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}.suggestion{background:#fff;border:1px solid #e0e7dc;border-radius:999px;padding:7px 11px;color:#526a58;font-size:14px}.suggestion:hover{background:#f2f6f0}.controls{display:flex;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid #edf0ea;margin-top:20px;padding-top:18px}.mode{display:flex;gap:5px;background:#f1f3ed;padding:4px;border-radius:11px}.mode button{border:0;background:transparent;padding:8px 11px;border-radius:8px;color:#65756a;font-size:14px;font-weight:700}.mode button.on{background:white;color:#2b684a;box-shadow:0 1px 4px #193c2d16}.result-top{display:flex;justify-content:space-between;align-items:center;gap:16px;margin:24px 0 14px}.result-top h2{margin:0;font-size:23px;letter-spacing:-.04em}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-bottom:44px}.meal-card{border:1px solid #e5e9e2;background:white;border-radius:17px;overflow:hidden;transition:transform .2s,box-shadow .2s}.meal-card:hover{transform:translateY(-2px);box-shadow:0 12px 25px #1c402d12}.meal-img{width:100%;aspect-ratio:1.65;object-fit:cover;background:#edf1e9;display:block}.meal-body{padding:15px}.meal-title{font-size:17px;font-weight:800;line-height:1.3;color:#203d2e;margin:0 0 7px}.meta{font-size:13px;color:#75847a;display:flex;gap:8px;align-items:center;flex-wrap:wrap}.match{font-size:12px;background:#edf5eb;color:#3b7047;border-radius:99px;padding:5px 8px;font-weight:800}.meal-actions{display:flex;align-items:center;justify-content:space-between;margin-top:14px}.heart{font-size:20px;border:0;background:none;color:#91a096;padding:4px}.heart.saved{color:#b54b46}.empty{padding:38px;text-align:center;background:#fff;border:1px dashed #cfd9ce;border-radius:16px;color:#68796e;grid-column:1/-1}.empty strong{display:block;color:#2c4e39;margin-bottom:6px;font-size:17px}.hidden{display:none!important}.catalog{margin:24px 0 50px}.tabs{display:flex;gap:8px;flex-wrap:wrap;margin:19px 0}.tab{border:1px solid #e1e7df;background:white;color:#63766a;border-radius:999px;padding:9px 14px;font-size:14px;font-weight:700}.tab.active{background:#2b684a;border-color:#2b684a;color:white}.catalog-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:11px}.catalog-item{display:flex;align-items:center;gap:11px;background:white;border:1px solid #e8ebe5;border-radius:13px;padding:9px 11px;min-width:0}.catalog-item img{width:48px;height:48px;object-fit:cover;border-radius:9px;background:#f1f4ee}.catalog-name{font-weight:700;color:#365440;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.catalog-sub{font-size:12px;color:#8b978d;margin-top:3px}.catalog-search{max-width:380px}.notice{background:#f0f4ed;border-radius:12px;padding:12px 14px;color:#5b7161;font-size:13px;line-height:1.5;margin-top:17px}.status{font-size:13px;color:#708074;display:flex;align-items:center;gap:7px}.dot{width:8px;height:8px;background:#9aab9c;border-radius:50%}.dot.good{background:#4f925a}.dot.busy{background:#d49647;animation:pulse 1s infinite alternate}@keyframes pulse{to{opacity:.35}}.footer{padding:21px 0 35px;border-top:1px solid #e6e8de;color:#748278;font-size:13px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}.footer a{color:#42694d}.modal{position:fixed;inset:0;background:#13251c9e;display:grid;place-items:center;padding:20px;z-index:5}.dialog{background:white;width:min(720px,100%);max-height:90vh;overflow:auto;border-radius:20px;position:relative}.dialog-img{width:100%;max-height:310px;object-fit:cover;display:block}.dialog-content{padding:24px}.dialog h2{margin:0 0 6px;color:#203d2f}.dialog-close{position:absolute;right:13px;top:13px;border:0;background:white;width:38px;height:38px;border-radius:50%;font-size:22px;color:#334b3a}.dialog h3{margin:20px 0 8px;font-size:16px}.ingredient-list{display:flex;gap:7px;flex-wrap:wrap}.detail-ing{background:#f0f4ed;color:#4c6651;border-radius:8px;padding:7px 9px;font-size:14px}.instructions{white-space:pre-line;line-height:1.65;color:#5b6c60}.pager{display:flex;justify-content:center;margin:20px}.error{color:#a43d34}.skeleton{background:linear-gradient(90deg,#f1f3ee,#f8f9f6,#f1f3ee);background-size:200% 100%;animation:shine 1.2s infinite;height:210px;border-radius:17px}@keyframes shine{to{background-position:-200% 0}}
    @media(max-width:850px){.hero{grid-template-columns:1fr .45fr;gap:15px}.hero-card{min-height:145px}.plate{width:110px;height:110px}.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.catalog-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
    @media(max-width:600px){.shell{padding:0 16px}.top{height:auto;min-height:68px;align-items:flex-start;padding:14px 0;gap:10px;flex-direction:column}.brand{font-size:17px}.nav-btn{padding:8px 10px;font-size:14px}.hero{padding:34px 0 22px;grid-template-columns:1fr}.hero-card{display:none}.hero h1{font-size:40px}.hero p{font-size:16px}.panel{padding:18px}.search-row{flex-direction:column}.search-row .primary{width:100%}.controls{align-items:flex-start;flex-direction:column}.mode{width:100%}.mode button{flex:1}.cards{grid-template-columns:1fr}.meal-img{aspect-ratio:1.9}.result-top{align-items:flex-start;flex-direction:column}.catalog-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.catalog-item{padding:8px}.catalog-item img{width:38px;height:38px}.catalog-name{font-size:13px}.panel-head{flex-direction:column}.footer{flex-direction:column}}
  </style>
</head>
<body>
  <div class="shell">
    <header class="top">
      <div class="brand"><span class="brand-mark">✳</span> my daily meal</div>
      <nav aria-label="Navegação principal"><button class="nav-btn active" data-view="finder">Encontrar receitas</button><button class="nav-btn" data-view="catalog">Explorar catálogo</button></nav>
    </header>
    <main id="finder">
      <section class="hero"><div><div class="eyebrow">Sua cozinha, novas possibilidades</div><h1>O que tem na sua cozinha hoje?</h1><p>Escolha os ingredientes que você já tem e encontre receitas que combinam com eles. Simples, rápido e sem desperdiçar comida.</p></div><div class="hero-card" aria-hidden="true"><div class="plate"></div></div></section>
      <section class="panel search-panel">
        <div class="panel-head"><div><h2>Monte sua busca</h2><p class="muted">Adicione ingredientes e veja quais receitas pode preparar.</p></div><div class="status" id="sync-status"><span class="dot"></span><span>Preparando catálogo…</span></div></div>
        <div class="search-row"><div class="input-wrap"><input id="ingredient-search" type="search" placeholder="Digite para encontrar um ingrediente…" autocomplete="off" aria-label="Buscar ingrediente"></div><button class="primary" id="search-btn">Buscar receitas</button></div>
        <div id="suggestions" class="suggestions" aria-live="polite"></div><div id="selected" class="selected"></div>
        <div class="controls"><div class="mode" role="group" aria-label="Como combinar os ingredientes"><button class="on" data-mode="all">Usar todos</button><button data-mode="any">Usar qualquer um</button></div><span class="muted" id="mode-help">Mostra receitas que usam todos os ingredientes selecionados.</span></div>
        <div class="notice">As receitas e imagens são fornecidas pela <a href="https://www.themealdb.com/" target="_blank" rel="noreferrer">TheMealDB</a>. Confira a receita completa para ver ingredientes adicionais e medidas.</div>
      </section>
      <section id="results-section" class="hidden"><div class="result-top"><div><h2 id="results-title">Receitas para você</h2><p id="results-subtitle" class="muted"></p></div></div><div id="results" class="cards"></div></section>
    </main>
    <main id="catalog-view" class="catalog hidden">
      <div class="eyebrow">Base TheMealDB</div><h1 style="font-size:clamp(32px,4vw,44px);letter-spacing:-.05em;margin:10px 0;color:#193c2d">Explore o catálogo</h1><p class="muted">Pratos, ingredientes, categorias e cozinhas reunidos em um só lugar.</p>
      <section class="panel" style="margin-top:22px"><div class="panel-head"><div><h2 id="catalog-heading">Todos os pratos</h2><p id="catalog-count" class="muted"></p></div><div class="status" id="catalog-status"></div></div><div class="tabs"><button class="tab active" data-kind="meals">Pratos</button><button class="tab" data-kind="ingredients">Ingredientes</button><button class="tab" data-kind="categories">Categorias</button><button class="tab" data-kind="areas">Cozinhas</button></div><input id="catalog-search" class="catalog-search" type="search" placeholder="Filtrar esta lista…" aria-label="Filtrar catálogo"><div id="catalog-list" class="catalog-grid" style="margin-top:18px"></div><div class="pager"><button id="load-more" class="secondary hidden">Carregar mais</button></div></section>
      <section class="panel" style="margin-top:16px"><div class="panel-head"><div><h2>Atualizar catálogo</h2><p class="muted">Sincroniza ingredientes, categorias, cozinhas e pratos da API oficial.</p></div><button id="sync-btn" class="secondary">Sincronizar agora</button></div><p id="sync-message" class="muted" style="margin-top:12px"></p></section>
      <div class="notice">Créditos: dados e imagens de receitas da <a href="https://www.themealdb.com/" target="_blank" rel="noreferrer">TheMealDB</a>. Usamos os endpoints oficiais da API; nenhum conteúdo é obtido por raspagem do site.</div>
    </main>
    <footer class="footer"><span>My Daily Meal · receitas com o que você tem</span><span>Dados e imagens: <a href="https://www.themealdb.com/" target="_blank" rel="noreferrer">TheMealDB</a></span></footer>
  </div>
  <div id="modal-root"></div>
  <script>
  (()=>{
    const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
    const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    let ingredients=[],selected=[],mode='all',currentKind='meals',pageOffset=0,pageLimit=48,catalogTotal=0,favorites=new Set();
    async function api(path,opts={}){const r=await fetch(path,{headers:{'content-type':'application/json'},...opts});const d=await r.json().catch(()=>({error:'Resposta inválida'}));if(!r.ok)throw new Error(d.error||'Não foi possível concluir a solicitação.');return d}
    function setStatus(text,state=''){const el=$('#sync-status');el.innerHTML='<span class="dot '+state+'"></span><span>'+esc(text)+'</span>'}
    async function loadIngredients(){try{const d=await api('/api/ingredients?limit=1200');ingredients=d.items||[];setStatus(ingredients.length?ingredients.length+' ingredientes disponíveis':'Catálogo ainda não sincronizado',ingredients.length?'good':'');renderSuggestions();if(!ingredients.length)$('#suggestions').innerHTML='<span class="muted">Abra “Explorar catálogo” e sincronize para começar.</span>'; }catch(e){setStatus('Catálogo indisponível');}}
    function renderSelected(){const box=$('#selected');box.innerHTML=selected.map(x=>'<span class="chip">'+esc(x.name)+'<button aria-label="Remover '+esc(x.name)+'" data-remove="'+esc(x.id)+'">×</button></span>').join('');box.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{selected=selected.filter(i=>i.id!==b.dataset.remove);renderSelected();renderSuggestions()})}
    function renderSuggestions(){const q=$('#ingredient-search').value.trim().toLocaleLowerCase('pt-BR');const found=ingredients.filter(i=>i.name.toLocaleLowerCase('pt-BR').includes(q)&&!selected.some(s=>s.id===i.id)).slice(0,9);$('#suggestions').innerHTML=found.map(i=>'<button class="suggestion" data-add="'+esc(i.id)+'">＋ '+esc(i.name)+'</button>').join('');$('#suggestions').querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>{const ing=ingredients.find(i=>i.id===b.dataset.add);if(ing){selected.push(ing);renderSelected();renderSuggestions();$('#ingredient-search').value='';$('#ingredient-search').focus()}})}
    $('#ingredient-search').addEventListener('input',renderSuggestions);$$('[data-mode]').forEach(b=>b.onclick=()=>{mode=b.dataset.mode;$$('[data-mode]').forEach(x=>x.classList.toggle('on',x===b));$('#mode-help').textContent=mode==='all'?'Mostra receitas que usam todos os ingredientes selecionados.':'Mostra receitas que usam pelo menos um ingrediente selecionado.'});
    function mealCard(m){const fav=favorites.has(String(m.id));return '<article class="meal-card"><img class="meal-img" loading="lazy" src="'+esc(m.thumbnail_url||'')+'" alt=""><div class="meal-body"><h3 class="meal-title">'+esc(m.name)+'</h3><div class="meta"><span>'+esc(m.category||'Receita')+'</span><span>·</span><span>'+esc(m.area||'Internacional')+'</span><span class="match">'+Number(m.match_count||0)+' em comum</span></div><div class="meal-actions"><button class="secondary small" data-detail="'+esc(m.id)+'">Ver receita</button><button class="heart '+(fav?'saved':'')+'" data-fav="'+esc(m.id)+'" aria-label="'+(fav?'Remover dos favoritos':'Adicionar aos favoritos')+'">'+(fav?'♥':'♡')+'</button></div></div></article>'}
    function bindMealActions(root){root.querySelectorAll('[data-detail]').forEach(b=>b.onclick=()=>showMeal(b.dataset.detail));root.querySelectorAll('[data-fav]').forEach(b=>b.onclick=async()=>{const id=b.dataset.fav;try{if(favorites.has(id)){await api('/api/favorites',{method:'DELETE',body:JSON.stringify({mealId:id})});favorites.delete(id)}else{await api('/api/favorites',{method:'POST',body:JSON.stringify({mealId:id})});favorites.add(id)};b.classList.toggle('saved',favorites.has(id));b.textContent=favorites.has(id)?'♥':'♡'}catch(e){alert(e.message)}})}
    async function loadFavorites(){try{const d=await api('/api/favorites');favorites=new Set((d.items||[]).map(x=>String(x.id)))}catch{}}
    async function findMeals(){if(!selected.length){$('#results-section').classList.remove('hidden');$('#results-title').textContent='Comece escolhendo ingredientes';$('#results-subtitle').textContent='Adicione um ou mais ingredientes acima para encontrar receitas.';$('#results').innerHTML='<div class="empty"><strong>Sua próxima receita começa aqui.</strong>Escolha ingredientes da lista para ver combinações possíveis.</div>';return}$('#results-section').classList.remove('hidden');$('#results-title').textContent='Procurando receitas…';$('#results-subtitle').textContent='';$('#results').innerHTML='<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>';try{const d=await api('/api/recipes/search',{method:'POST',body:JSON.stringify({ingredientIds:selected.map(x=>x.id),mode})});$('#results-title').textContent=d.items.length?d.total+' receitas encontradas':'Nenhuma combinação desta vez';$('#results-subtitle').textContent=mode==='all'?'Receitas com todos os ingredientes escolhidos.':'Receitas com qualquer um dos ingredientes escolhidos, priorizando mais combinações.';$('#results').innerHTML=d.items.length?d.items.map(mealCard).join(''):'<div class="empty"><strong>Não encontramos receitas com essa combinação.</strong>Tente “Usar qualquer um” ou remova um ingrediente.</div>';bindMealActions($('#results'))}catch(e){$('#results-title').textContent='A busca não foi concluída';$('#results-subtitle').textContent=e.message;$('#results').innerHTML=''}}
    $('#search-btn').onclick=findMeals;$('#ingredient-search').addEventListener('keydown',e=>{if(e.key==='Enter'){const first=$('#suggestions [data-add]');if(first)first.click();else findMeals()}});
    async function showMeal(id){try{const m=await api('/api/meals/'+encodeURIComponent(id));const ings=m.ingredients||[];$('#modal-root').innerHTML='<div class="modal" role="presentation"><article class="dialog" role="dialog" aria-modal="true" aria-labelledby="meal-name"><button class="dialog-close" aria-label="Fechar">×</button><img class="dialog-img" src="'+esc(m.thumbnail_url||'')+'" alt=""><div class="dialog-content"><h2 id="meal-name">'+esc(m.name)+'</h2><p class="muted">'+esc(m.category||'')+' · '+esc(m.area||'')+'</p><h3>Ingredientes e medidas</h3><div class="ingredient-list">'+ings.map(i=>'<span class="detail-ing">'+esc(i.measure||'')+' '+esc(i.name)+'</span>').join('')+'</div><h3>Modo de preparo</h3><p class="instructions">'+esc(m.instructions||'A API não informa o modo de preparo para esta receita.')+'</p><p><a href="https://www.themealdb.com/meal/'+encodeURIComponent(m.id)+'" target="_blank" rel="noreferrer">Ver na TheMealDB</a>'+(m.youtube_url?' · <a href="'+esc(m.youtube_url)+'" target="_blank" rel="noreferrer">Assistir vídeo</a>':'')+'</p></div></article></div>';$('#modal-root .dialog-close').onclick=()=>$('#modal-root').innerHTML='';$('#modal-root .modal').onclick=e=>{if(e.target.classList.contains('modal'))$('#modal-root').innerHTML=''}}catch(e){alert(e.message)}}
    $$('.nav-btn').forEach(b=>b.onclick=()=>{const catalog=b.dataset.view==='catalog';$('#finder').classList.toggle('hidden',catalog);$('#catalog-view').classList.toggle('hidden',!catalog);$$('.nav-btn').forEach(x=>x.classList.toggle('active',x===b));if(catalog)loadCatalog(true)});
    const kindLabels={meals:'Todos os pratos',ingredients:'Todos os ingredientes',categories:'Categorias',areas:'Cozinhas'};
    $$('.tab').forEach(b=>b.onclick=()=>{$$('.tab').forEach(x=>x.classList.toggle('active',x===b));currentKind=b.dataset.kind;loadCatalog(true)});$('#catalog-search').addEventListener('input',()=>loadCatalog(true));
    function catalogItem(x){if(currentKind==='meals')return '<article class="catalog-item"><img loading="lazy" src="'+esc(x.thumbnail_url||'')+'" alt=""><div style="min-width:0"><div class="catalog-name">'+esc(x.name)+'</div><div class="catalog-sub">'+esc(x.category||'')+' · '+esc(x.area||'')+'</div></div></article>';if(currentKind==='ingredients')return '<article class="catalog-item"><img loading="lazy" src="'+esc(x.thumbnail_url||'')+'" alt=""><div style="min-width:0"><div class="catalog-name">'+esc(x.name)+'</div></div></article>';return '<article class="catalog-item"><div style="width:38px;height:38px;border-radius:50%;background:#e8efe4;color:#426e4b;display:grid;place-items:center;font-weight:800">'+esc((x.name||'?').slice(0,1).toUpperCase())+'</div><div style="min-width:0"><div class="catalog-name">'+esc(x.name)+'</div>'+(x.description?'<div class="catalog-sub">'+esc(x.description.slice(0,90))+'</div>':'')+'</div></article>'}
    async function loadCatalog(reset){if(reset)pageOffset=0;$('#catalog-heading').textContent=kindLabels[currentKind];const search=$('#catalog-search').value.trim();try{const d=await api('/api/catalog?kind='+currentKind+'&offset='+pageOffset+'&limit='+pageLimit+'&search='+encodeURIComponent(search));catalogTotal=d.total;$('#catalog-count').textContent=d.total+' registros';$('#catalog-status').textContent='Atualizado da base local';const list=$('#catalog-list');list.innerHTML=reset?d.items.map(catalogItem).join(''):list.innerHTML+d.items.map(catalogItem).join('');pageOffset+=d.items.length;$('#load-more').classList.toggle('hidden',pageOffset>=catalogTotal);if(!d.items.length)list.innerHTML='<div class="empty">Nenhum item encontrado.</div>'}catch(e){$('#catalog-status').innerHTML='<span class="error">'+esc(e.message)+'</span>';$('#catalog-list').innerHTML='<div class="empty">A sincronização ainda não foi feita.</div>'}}
    $('#load-more').onclick=()=>loadCatalog(false);
    async function syncAll(){const btn=$('#sync-btn'),msg=$('#sync-message');btn.disabled=true;btn.textContent='Sincronizando…';msg.textContent='Preparando listas de referência…';setStatus('Atualizando catálogo','busy');try{let init=await api('/api/sync',{method:'POST',body:JSON.stringify({action:'start'})}),runId=init.runId,cursor=init.nextLetter,done=false,total=init.recordsSeen||0;while(!done){msg.textContent='Receitas sincronizadas: '+total+' · letra '+(cursor||'finalizando');const d=await api('/api/sync',{method:'POST',body:JSON.stringify({action:'batch',runId,cursor})});total=d.recordsSeen;cursor=d.nextLetter;done=d.done}msg.textContent='Catálogo atualizado: '+total+' receitas processadas.';setStatus('Catálogo atualizado','good');await loadIngredients();await loadCatalog(true)}catch(e){msg.innerHTML='<span class="error">'+esc(e.message)+'</span>';setStatus('Falha na sincronização')}finally{btn.disabled=false;btn.textContent='Sincronizar agora'}}
    $('#sync-btn').onclick=syncAll;
    async function init(){await loadFavorites();await loadIngredients();try{const d=await api('/api/stats');if(d.meals===0)setStatus('Sincronize o catálogo para começar');else setStatus(d.meals+' pratos · catálogo pronto','good')}catch{}}
    init();
  })();
  </script>
</body>
</html>`;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "private, no-store" } });
}

function slug(s) { return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

async function db(env, query, params = []) {
  if (!env.DATABASE_URL) throw new Error("DATABASE_URL não está configurada no Site.");
  const connection = env.DATABASE_URL;
  const parsed = new URL(connection);
  const endpoint = `https://${parsed.hostname}/sql`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", "Neon-Connection-String": connection, "Neon-Raw-Text-Output": "true", "Neon-Array-Mode": "true" },
    body: JSON.stringify({ query, params }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.message || `Erro ao consultar o banco (${response.status}).`);
  const fields = result.fields || [];
  return (result.rows || []).map(row => Object.fromEntries(fields.map((field, i) => [field.name, parseValue(row[i], field.dataTypeID)])));
}

function parseValue(value, oid) {
  if (value == null) return null;
  if ([20, 21, 23, 700, 701, 1700].includes(Number(oid))) return Number(value);
  if (Number(oid) === 16) return value === true || value === "t" || value === "true";
  if ([114, 3802].includes(Number(oid))) { try { return typeof value === "string" ? JSON.parse(value) : value; } catch { return value; } }
  return value;
}

async function requestJson(url) {
  const response = await fetch(url, { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`TheMealDB respondeu com ${response.status}.`);
  return response.json();
}

async function getStats(env) {
  const [counts] = await db(env, `SELECT (SELECT count(*) FROM meals) AS meals, (SELECT count(*) FROM ingredients) AS ingredients, (SELECT count(*) FROM categories) AS categories, (SELECT count(*) FROM areas) AS areas`);
  const [last] = await db(env, `SELECT finished_at, status FROM sync_runs ORDER BY id DESC LIMIT 1`);
  return { ...counts, lastSync: last?.finished_at || null, syncStatus: last?.status || "not_started" };
}

async function syncStart(env) {
  const data = await Promise.all([
    requestJson(`${API}/list.php?i=list`), requestJson(`${API}/categories.php`), requestJson(`${API}/list.php?a=list`),
  ]);
  const [ingredientData, categoryData, areaData] = data;
  const categories=(categoryData.categories||[]).map(x=>({id:String(x.idCategory),name:x.strCategory,description:x.strCategoryDescription||null,thumbnail_url:x.strCategoryThumb||null,source_data:x}));
  const areaRecords=new Map();
  for(const area of areaData.meals||[]){const name=String(area.strArea||"").trim();if(!name)continue;if(!areaRecords.has(name))areaRecords.set(name,[]);areaRecords.get(name).push(area)}
  const areas=[...areaRecords].map(([name,records])=>({id:name,name,source_data:records.length===1?records[0]:{strArea:name,sourceRecords:records}}));
  const ingredients=(ingredientData.meals||[]).map(x=>({id:String(x.idIngredient),name:x.strIngredient,description:x.strDescription||null,thumbnail_url:x.strThumb||`https://www.themealdb.com/images/ingredients/${encodeURIComponent(x.strIngredient)}.png`,source_data:x}));
  await db(env,`INSERT INTO categories(id,name,description,thumbnail_url,source_data,updated_at)
    SELECT x.id,x.name,x.description,x.thumbnail_url,x.source_data,now() FROM jsonb_to_recordset($1::jsonb) AS x(id text,name text,description text,thumbnail_url text,source_data jsonb)
    ON CONFLICT(id) DO UPDATE SET name=EXCLUDED.name,description=EXCLUDED.description,thumbnail_url=EXCLUDED.thumbnail_url,source_data=EXCLUDED.source_data,updated_at=now()`,[JSON.stringify(categories)]);
  await db(env,`INSERT INTO areas(id,name,source_data,updated_at)
    SELECT x.id,x.name,x.source_data,now() FROM jsonb_to_recordset($1::jsonb) AS x(id text,name text,source_data jsonb)
    ON CONFLICT(id) DO UPDATE SET name=EXCLUDED.name,source_data=EXCLUDED.source_data,updated_at=now()`,[JSON.stringify(areas)]);
  await db(env,`INSERT INTO ingredients(id,name,description,thumbnail_url,source_data,updated_at)
    SELECT x.id,x.name,x.description,x.thumbnail_url,x.source_data,now() FROM jsonb_to_recordset($1::jsonb) AS x(id text,name text,description text,thumbnail_url text,source_data jsonb)
    ON CONFLICT(name) DO UPDATE SET id=EXCLUDED.id,description=EXCLUDED.description,thumbnail_url=EXCLUDED.thumbnail_url,source_data=EXCLUDED.source_data,updated_at=now()`,[JSON.stringify(ingredients)]);
  const run = await db(env, `INSERT INTO sync_runs(source,status,records_seen,next_cursor) VALUES('TheMealDB','running',0,'a') RETURNING id,next_cursor`);
  return { runId: run[0].id, nextLetter: run[0].next_cursor, recordsSeen: 0 };
}

function extractMeal(meal) {
  const ingredients=[];
  for(let i=1;i<=20;i++){const name=String(meal[`strIngredient${i}`]||"").trim();if(name)ingredients.push({name,position:i,measure:String(meal[`strMeasure${i}`]||"").trim()})}
  return {
    id:String(meal.idMeal),name:meal.strMeal||"",category_name:meal.strCategory||null,area_name:meal.strArea||meal.strCountry||null,
    instructions:meal.strInstructions||null,thumbnail_url:meal.strMealThumb||null,tags:meal.strTags?meal.strTags.split(",").map(x=>x.trim()).filter(Boolean):[],
    source_url:meal.strSource||null,youtube_url:meal.strYoutube||null,creative_commons_confirmed:meal.strCreativeCommonsConfirmed?meal.strCreativeCommonsConfirmed.toLowerCase()==="yes":null,
    ingredients,source_data:meal,
  };
}

async function syncLetter(env, runId, letter) {
  const payload=await requestJson(`${API}/search.php?f=${encodeURIComponent(letter)}`);
  const meals=(payload.meals||[]).map(extractMeal);
  if(meals.length){
    const categoryNames=[...new Set(meals.map(m=>m.category_name).filter(Boolean))];
    const areaNames=[...new Set(meals.map(m=>m.area_name).filter(Boolean))];
    await db(env,`INSERT INTO categories(id,name) SELECT 'category-'||x.slug,x.name FROM (SELECT DISTINCT t.value AS name,regexp_replace(lower(t.value),'[^a-z0-9]+','-','g') AS slug FROM jsonb_array_elements_text($1::jsonb) AS t(value)) x ON CONFLICT(name) DO NOTHING`,[JSON.stringify(categoryNames)]);
    await db(env,`INSERT INTO areas(id,name) SELECT t.value,t.value FROM jsonb_array_elements_text($1::jsonb) AS t(value) ON CONFLICT(name) DO NOTHING`,[JSON.stringify(areaNames)]);
    const uniqueIngredients=[...new Map(meals.flatMap(m=>m.ingredients.map(x=>[x.name.toLocaleLowerCase(),x.name])).map(x=>x)).values()];
    const extraIngredients=uniqueIngredients.map(name=>({id:`meal-${slug(name)}`,name,thumbnail_url:`https://www.themealdb.com/images/ingredients/${encodeURIComponent(name)}.png`}));
    await db(env,`INSERT INTO ingredients(id,name,thumbnail_url) SELECT x.id,x.name,x.thumbnail_url FROM jsonb_to_recordset($1::jsonb) AS x(id text,name text,thumbnail_url text) ON CONFLICT(name) DO NOTHING`,[JSON.stringify(extraIngredients)]);
    await db(env,`INSERT INTO meals(id,name,category_id,area_id,instructions,thumbnail_url,tags,source_url,youtube_url,creative_commons_confirmed,source_data,updated_at)
      SELECT x.id,x.name,(SELECT c.id FROM categories c WHERE lower(c.name)=lower(x.category_name) LIMIT 1),(SELECT a.id FROM areas a WHERE lower(a.name)=lower(x.area_name) LIMIT 1),x.instructions,x.thumbnail_url,x.tags,x.source_url,x.youtube_url,x.creative_commons_confirmed,x.source_data,now()
      FROM jsonb_to_recordset($1::jsonb) AS x(id text,name text,category_name text,area_name text,instructions text,thumbnail_url text,tags text[],source_url text,youtube_url text,creative_commons_confirmed boolean,source_data jsonb)
      ON CONFLICT(id) DO UPDATE SET name=EXCLUDED.name,category_id=EXCLUDED.category_id,area_id=EXCLUDED.area_id,instructions=EXCLUDED.instructions,thumbnail_url=EXCLUDED.thumbnail_url,tags=EXCLUDED.tags,source_url=EXCLUDED.source_url,youtube_url=EXCLUDED.youtube_url,creative_commons_confirmed=EXCLUDED.creative_commons_confirmed,source_data=EXCLUDED.source_data,updated_at=now()`,[JSON.stringify(meals)]);
    const rels=meals.map(m=>({meal_id:m.id,ingredients:m.ingredients}));
    await db(env,`DELETE FROM meal_ingredients WHERE meal_id IN (SELECT jsonb_array_elements_text($1::jsonb))`,[JSON.stringify(meals.map(m=>m.id))]);
    await db(env,`WITH parsed AS (
        SELECT x.meal_id,i.name,i.position,i.measure FROM jsonb_to_recordset($1::jsonb) AS x(meal_id text,ingredients jsonb)
        CROSS JOIN LATERAL jsonb_to_recordset(x.ingredients) AS i(name text,position smallint,measure text)
      ) INSERT INTO meal_ingredients(meal_id,ingredient_id,position,measure)
        SELECT p.meal_id,ing.id,p.position,coalesce(p.measure,'') FROM parsed p JOIN ingredients ing ON lower(ing.name)=lower(p.name)
        ON CONFLICT(meal_id,ingredient_id,position) DO UPDATE SET measure=EXCLUDED.measure`,[JSON.stringify(rels)]);
  }
  const next=String.fromCharCode(letter.charCodeAt(0)+1);const done=letter==='z';
  await db(env,`UPDATE sync_runs SET records_seen=records_seen+$2,next_cursor=$3,finished_at=CASE WHEN $4 THEN now() ELSE finished_at END,status=CASE WHEN $4 THEN 'completed' ELSE 'running' END WHERE id=$1`,[runId,meals.length,done?null:next,done]);
  const [run]=await db(env,`SELECT records_seen FROM sync_runs WHERE id=$1`,[runId]);
  return {recordsSeen:run?.records_seen||0,nextLetter:done?null:next,done};
}

async function handleApi(request, env, url) {
  const path=url.pathname;
  if(request.method==='GET'&&path==='/api/health')return json({ok:true});
  if(request.method==='GET'&&path==='/api/stats')return json(await getStats(env));
  if(request.method==='GET'&&path==='/api/ingredients'){
    const limit=Math.min(1200,Math.max(1,Number(url.searchParams.get('limit')||500)));
    const items=await db(env,`SELECT id,name,thumbnail_url FROM ingredients ORDER BY name LIMIT $1`,[limit]);return json({items});
  }
  if(request.method==='POST'&&path==='/api/recipes/search'){
    const body=await request.json();const ids=[...new Set((body.ingredientIds||[]).map(String))].slice(0,20);const mode=body.mode==='any'?'any':'all';
    if(!ids.length)return json({items:[],total:0});
    const rows=await db(env,`SELECT m.id,m.name,m.thumbnail_url,c.name AS category,a.name AS area,count(DISTINCT mi.ingredient_id)::int AS match_count
      FROM meals m JOIN meal_ingredients mi ON mi.meal_id=m.id LEFT JOIN categories c ON c.id=m.category_id LEFT JOIN areas a ON a.id=m.area_id
      WHERE mi.ingredient_id IN (SELECT jsonb_array_elements_text($1::jsonb)) GROUP BY m.id,c.name,a.name
      HAVING $2='any' OR count(DISTINCT mi.ingredient_id)=$3
      ORDER BY match_count DESC,m.name LIMIT 120`,[JSON.stringify(ids),mode,ids.length]);
    const [totalRow]=await db(env,`SELECT count(*)::int AS total FROM (
      SELECT m.id FROM meals m JOIN meal_ingredients mi ON mi.meal_id=m.id
      WHERE mi.ingredient_id IN (SELECT jsonb_array_elements_text($1::jsonb)) GROUP BY m.id
      HAVING $2='any' OR count(DISTINCT mi.ingredient_id)=$3
    ) matched`,[JSON.stringify(ids),mode,ids.length]);
    return json({items:rows,total:totalRow?.total||0,mode});
  }
  if(request.method==='GET'&&path.startsWith('/api/meals/')){
    const id=decodeURIComponent(path.slice('/api/meals/'.length));const [m]=await db(env,`SELECT m.id,m.name,m.instructions,m.thumbnail_url,m.source_url,m.youtube_url,c.name AS category,a.name AS area FROM meals m LEFT JOIN categories c ON c.id=m.category_id LEFT JOIN areas a ON a.id=m.area_id WHERE m.id=$1`,[id]);
    if(!m)return json({error:'Receita não encontrada'},404);
    m.ingredients=await db(env,`SELECT i.name,mi.measure FROM meal_ingredients mi JOIN ingredients i ON i.id=mi.ingredient_id WHERE mi.meal_id=$1 ORDER BY mi.position`,[id]);return json(m);
  }
  if(request.method==='GET'&&path==='/api/catalog'){
    const kind=url.searchParams.get('kind')||'meals',search=`%${(url.searchParams.get('search')||'').slice(0,80)}%`,offset=Math.max(0,Number(url.searchParams.get('offset')||0)),limit=Math.min(100,Math.max(1,Number(url.searchParams.get('limit')||48)));
    const queries={
      meals:[`SELECT m.id,m.name,m.thumbnail_url,c.name AS category,a.name AS area FROM meals m LEFT JOIN categories c ON c.id=m.category_id LEFT JOIN areas a ON a.id=m.area_id WHERE m.name ILIKE $1 ORDER BY m.name OFFSET $2 LIMIT $3`,`SELECT count(*)::int AS total FROM meals WHERE name ILIKE $1`],
      ingredients:[`SELECT id,name,thumbnail_url,description FROM ingredients WHERE name ILIKE $1 ORDER BY name OFFSET $2 LIMIT $3`,`SELECT count(*)::int AS total FROM ingredients WHERE name ILIKE $1`],
      categories:[`SELECT id,name,thumbnail_url,description FROM categories WHERE name ILIKE $1 ORDER BY name OFFSET $2 LIMIT $3`,`SELECT count(*)::int AS total FROM categories WHERE name ILIKE $1`],
      areas:[`SELECT id,name FROM areas WHERE name ILIKE $1 ORDER BY name OFFSET $2 LIMIT $3`,`SELECT count(*)::int AS total FROM areas WHERE name ILIKE $1`],
    };
    if(!queries[kind])return json({error:'Tipo de catálogo inválido'},400);
    const [items,count]=await Promise.all([db(env,queries[kind][0],[search,offset,limit]),db(env,queries[kind][1],[search])]);return json({items,total:count[0]?.total||0});
  }
  if(request.method==='GET'&&path==='/api/favorites'){
    return json({items:await db(env,`SELECT m.id,m.name,m.thumbnail_url FROM favorites f JOIN meals m ON m.id=f.meal_id ORDER BY f.created_at DESC LIMIT 200`)});
  }
  if(request.method==='POST'&&path==='/api/favorites'){
    const {mealId}=await request.json();if(!mealId)return json({error:'Receita inválida'},400);await db(env,`INSERT INTO favorites(meal_id) VALUES($1) ON CONFLICT(meal_id) DO NOTHING`,[String(mealId)]);return json({ok:true});
  }
  if(request.method==='DELETE'&&path==='/api/favorites'){
    const {mealId}=await request.json();await db(env,`DELETE FROM favorites WHERE meal_id=$1`,[String(mealId)]);return json({ok:true});
  }
  if(request.method==='POST'&&path==='/api/sync'){
    const body=await request.json();if(body.action==='start')return json(await syncStart(env));
    if(body.action==='batch'&&body.runId&&/^[a-z]$/.test(body.cursor||''))return json(await syncLetter(env,Number(body.runId),body.cursor));
    return json({error:'Solicitação de sincronização inválida'},400);
  }
  return json({error:'Rota não encontrada'},404);
}

export default {
  async fetch(request, env) {
    const url=new URL(request.url);
    try {
      if(url.pathname.startsWith('/api/'))return await handleApi(request,env,url);
      if(url.pathname==='/'||url.pathname==='/index.html')return new Response(page,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});
      return new Response('Não encontrado',{status:404});
    } catch(error) {
      return json({error:error?.message||'Erro inesperado'},500);
    }
  }
};
