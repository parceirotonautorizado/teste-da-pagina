/* ===== SIMULADOR ===== */
var PLANS = {
    maq: {
      promo:  { label:'Período Promocional', pix:0,
        d1:{ mv:{ deb:0.57, cre:{1:0.57,2:3.97,3:3.97,4:4.97,5:5.97,6:6.97,7:7.97,8:7.97,9:7.97,10:7.97,11:7.97,12:7.97,13:14.87,14:14.87,15:14.87,16:14.87,17:14.87,18:14.87} },
                 oa:{ deb:2.57, cre:{1:4.34,2:7.02,3:7.58,4:8.38,5:9.38,6:10.38,7:10.98,8:11.38,9:12.38,10:12.88,11:13.74,12:13.78,13:14.87,14:15.51,15:16.15,16:16.79,17:17.43,18:18.07} } },
        d0:{ mv:{ deb:0.57, cre:{1:0.57,2:3.97,3:3.97,4:4.97,5:5.97,6:6.97,7:7.97,8:7.97,9:7.97,10:7.97,11:7.97,12:7.97,13:14.87,14:14.87,15:14.87,16:14.87,17:14.87,18:14.87} },
                 oa:{ deb:2.57, cre:{1:4.34,2:7.02,3:7.58,4:8.38,5:9.38,6:10.38,7:10.98,8:11.38,9:12.38,10:12.88,11:13.74,12:13.78,13:14.87,14:15.51,15:16.15,16:16.79,17:17.43,18:18.07} } } },
      ate3:   { label:'Até R$ 3 mil', pix:0,
        d1:{ mv:{ deb:1.69, cre:{1:3.86,2:9.86,3:11.24,4:12.59,5:13.92,6:15.22,7:16.5,8:17.76,9:18.99,10:20.19,11:20.39,12:20.39,13:21.03,14:21.67,15:22.31,16:22.95,17:23.59,18:24.23} },
                 oa:{ deb:2.98, cre:{1:5.15,2:11.3,3:12.68,4:14.03,5:15.36,6:16.66,7:17.94,8:19.2,9:20.43,10:21.78,11:22.64,12:22.68,13:23.32,14:23.96,15:24.6,16:25.24,17:25.88,18:26.52} } },
        d0:{ mv:{ deb:1.98, cre:{1:4.86,2:10.86,3:12.24,4:13.59,5:14.92,6:16.22,7:17.5,8:18.76,9:19.99,10:21.19,11:21.39,12:21.39,13:22.03,14:22.67,15:23.31,16:23.95,17:24.59,18:25.23} },
                 oa:{ deb:3.27, cre:{1:6.15,2:12.3,3:13.68,4:15.03,5:16.36,6:17.66,7:18.94,8:20.2,9:21.43,10:22.78,11:23.64,12:23.68,13:24.32,14:24.96,15:25.6,16:26.24,17:26.88,18:27.52} } } },
      t3a6:   { label:'De R$ 3 mil a R$ 6 mil', pix:0,
        d1:{ mv:{ deb:1.39, cre:{1:3.34,2:7.29,3:8.35,4:9.23,5:10.1,6:10.85,7:10.9,8:10.95,9:11,10:11.05,11:11.73,12:12.38,13:13.02,14:13.66,15:14.3,16:14.94,17:15.58,18:16.22} },
                 oa:{ deb:2.68, cre:{1:4.63,2:8.73,3:9.79,4:10.67,5:11.54,6:12.29,7:12.34,8:12.39,9:12.44,10:12.64,11:13.98,12:14.67,13:15.31,14:15.95,15:16.59,16:17.23,17:17.87,18:18.51} } },
        d0:{ mv:{ deb:1.43, cre:{1:3.36,2:7.38,3:8.97,4:9.63,5:10.5,6:11.18,7:12.19,8:13.04,9:13.07,10:13.12,11:13.17,12:13.22,13:13.86,14:14.5,15:15.14,16:15.78,17:16.42,18:17.06} },
                 oa:{ deb:2.72, cre:{1:4.65,2:8.82,3:10.41,4:11.07,5:11.94,6:12.62,7:13.63,8:14.48,9:14.51,10:14.71,11:15.42,12:15.51,13:16.15,14:16.79,15:17.43,16:18.07,17:18.71,18:19.35} } } },
      t6a10:  { label:'De R$ 6 mil a R$ 10 mil', pix:0,
        d1:{ mv:{ deb:1.32, cre:{1:3.25,2:6.69,3:7.76,4:8.64,5:9.51,6:10.37,7:10.87,8:10.92,9:10.97,10:11.02,11:11.7,12:12.35,13:12.99,14:13.63,15:14.27,16:14.91,17:15.55,18:16.19} },
                 oa:{ deb:2.61, cre:{1:4.54,2:8.13,3:9.2,4:10.08,5:10.95,6:11.81,7:12.31,8:12.36,9:12.41,10:12.61,11:13.95,12:14.64,13:15.28,14:15.92,15:16.56,16:17.2,17:17.84,18:18.48} } },
        d0:{ mv:{ deb:1.34, cre:{1:3.31,2:7.18,3:8.56,4:9.44,5:10.31,6:11.17,7:12,8:12.5,9:12.55,10:12.58,11:12.61,12:12.66,13:13.3,14:13.94,15:14.58,16:15.22,17:15.86,18:16.5} },
                 oa:{ deb:2.63, cre:{1:4.6,2:8.62,3:10,4:10.88,5:11.75,6:12.61,7:13.44,8:13.94,9:13.99,10:14.17,11:14.86,12:14.95,13:15.59,14:16.23,15:16.87,16:17.51,17:18.15,18:18.79} } } },
      t10a30: { label:'De R$ 10 mil a R$ 30 mil', pix:0,
        d1:{ mv:{ deb:1.22, cre:{1:3.02,2:5.38,3:6.11,4:7.84,5:8.56,6:9.27,7:9.98,8:10.68,9:10.94,10:10.99,11:11.67,12:11.73,13:12.37,14:13.01,15:13.65,16:14.29,17:14.93,18:15.57} },
                 oa:{ deb:2.51, cre:{1:4.31,2:6.82,3:7.55,4:9.28,5:10,6:10.71,7:11.42,8:12.12,9:12.38,10:12.58,11:13.92,12:14.02,13:14.66,14:15.3,15:15.94,16:16.58,17:17.22,18:17.86} } },
        d0:{ mv:{ deb:1.25, cre:{1:3.05,2:6.59,3:8.19,4:8.89,5:9.76,6:11.1,7:11.68,8:11.73,9:11.78,10:11.83,11:11.88,12:11.95,13:12.59,14:13.23,15:13.87,16:14.51,17:15.15,18:15.79} },
                 oa:{ deb:2.54, cre:{1:4.34,2:8.03,3:9.63,4:10.33,5:11.2,6:12.54,7:13.12,8:13.17,9:13.22,10:13.42,11:14.13,12:14.24,13:14.88,14:15.52,15:16.16,16:16.8,17:17.44,18:18.08} } } },
      t30p:   { label:'Acima de R$ 30 mil', pix:0,
        d1:{ mv:{ deb:1.19, cre:{1:2.85,2:5.33,3:6.06,4:7.79,5:8.51,6:9.22,7:9.93,8:10.63,9:10.91,10:10.96,11:11.46,12:11.51,13:12.15,14:12.79,15:13.43,16:14.07,17:14.71,18:15.35} },
                 oa:{ deb:2.48, cre:{1:4.14,2:6.77,3:7.5,4:9.23,5:9.95,6:10.66,7:11.37,8:12.07,9:12.35,10:12.55,11:13.71,12:13.8,13:14.44,14:15.08,15:15.72,16:16.36,17:17,18:17.64} } },
        d0:{ mv:{ deb:1.22, cre:{1:2.91,2:6.54,3:8.14,4:8.84,5:9.71,6:10.79,7:10.84,8:10.89,9:10.94,10:10.99,11:11.63,12:11.73,13:12.37,14:13.01,15:13.65,16:14.29,17:14.93,18:15.57} },
                 oa:{ deb:2.51, cre:{1:4.2,2:7.98,3:9.58,4:10.28,5:11.15,6:12.23,7:12.28,8:12.33,9:12.38,10:12.58,11:13.88,12:14.02,13:14.66,14:15.3,15:15.94,16:16.58,17:17.22,18:17.86} } } }
    },
    tap: {
      tapton: { label:'Taxa única TapTon', pix:0,
        d1:{ mv:{ deb:0.79, cre:{1:3.05,2:5.75,3:6.55,4:8.29,5:8.55,6:8.65,7:9.95,8:10.09,9:10.79,10:11.49,11:12.19,12:12.29} },
                 oa:{ deb:1.98, cre:{1:4.24,2:6.94,3:7.74,4:9.48,5:9.74,6:9.84,7:11.14,8:11.28,9:11.98,10:12.68,11:13.38,12:13.48} } },
        d0:{ mv:{ deb:0.87, cre:{1:3.08,2:5.79,3:6.59,4:8.39,5:8.59,6:8.69,7:9.99,8:10.19,9:10.85,10:11.55,11:12.25,12:12.35} },
                 oa:{ deb:2.06, cre:{1:4.27,2:6.98,3:7.78,4:9.58,5:9.78,6:9.88,7:11.18,8:11.38,9:12.04,10:12.74,11:13.44,12:13.54} } } }
    }
  };
  
  var VM=[{id:'promo',label:'Período Promocional'},{id:'ate3',label:'Até R$ 3 mil'},{id:'t3a6',label:'De R$ 3 mil a R$ 6 mil'},{id:'t6a10',label:'De R$ 6 mil a R$ 10 mil'},{id:'t10a30',label:'De R$ 10 mil a R$ 30 mil'},{id:'t30p',label:'Acima de R$ 30 mil'}];
  var VT=[{id:'tapton',label:'Taxa única TapTon'}];
  var RO=[{id:'d1',label:'1 dia útil'},{id:'d0',label:'Na hora'}];
  var BO=[{id:'mv',label:'Mastercard e Visa'},{id:'oa',label:'Elo e Amex'}];
  var S={product:'maq',tier:'promo',recv:'d1',band:'mv',amount:100,selInst:12,parcOpen:false};
  
  function fR(r){return r.toFixed(2).replace('.',',')+'%';}
  function fM(n){return 'R$\u00a0'+n.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});}
  function calcRecv(r){return S.amount*(1-r/100);}
  function getPD(){return PLANS[S.product][S.tier][S.recv][S.band];}
  function getPix(){return PLANS[S.product][S.tier].pix;}
  function getParcKeys(){var cre=getPD().cre;return Object.keys(cre).map(Number).filter(function(k){return k>=2;}).sort(function(a,b){return a-b;});}
  function getMaxInst(){var k=getParcKeys();return k[k.length-1];}
  
  var curDD=null;
  function closeAll(){
    document.querySelectorAll('.dropdown').forEach(function(d){d.classList.remove('open');});
    document.querySelectorAll('.chevron').forEach(function(c){c.classList.remove('open');});
    document.querySelectorAll('.select-row').forEach(function(r){r.setAttribute('aria-expanded','false');});
    document.getElementById('backdrop')&&document.getElementById('backdrop').classList.remove('open');
    curDD=null;
  }
  function toggleDD(ddId,chevId,evt){
    if(evt)evt.stopPropagation();
    if(curDD===ddId){closeAll();return;}
    closeAll();curDD=ddId;
    document.getElementById(ddId).classList.add('open');
    document.getElementById(chevId).classList.add('open');
    var row=document.getElementById(ddId).closest('.select-row');
    if(row)row.setAttribute('aria-expanded','true');
    var bd=document.getElementById('backdrop');
    if(bd)bd.classList.add('open');
  }
  function handleKeyDD(e,ddId,chevId){
    if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleDD(ddId,chevId,e);}}
  
  function buildDD(id,opts,cur,fn){
    var el=document.getElementById(id);
    if(!el)return;
    el.innerHTML=opts.map(function(o){
      return '<div class="dd-option'+(o.id===cur?' selected':'')+'" role="option" aria-selected="'+(o.id===cur)+'" tabindex="0" onclick="event.stopPropagation();'+fn+'(\''+o.id+'\')" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();event.stopPropagation();'+fn+'(\''+o.id+'\')}">'
        +'<span class="dd-radio"><span class="dd-dot"></span></span>'+o.label+'</div>';
    }).join('');
  }
  
  function setProduct(p){
    S.product=p;S.tier=p==='tap'?'tapton':'promo';S.parcOpen=false;S.selInst=12;
    document.querySelectorAll('.tab-btn').forEach(function(b,i){
      var active=['maq','tap'][i]===p;
      b.classList.toggle('active',active);
      b.setAttribute('aria-selected',active);
    });
    document.getElementById('panel-title').textContent=p==='tap'?'TapTon':'Maquininhas';
    var rowV=document.getElementById('row-vendas');
    if(rowV)rowV.style.display=p==='tap'?'none':'';
    closeAll();render();
  }
  function setVendas(id){
    S.tier=id;S.parcOpen=false;
    var opts=S.product==='tap'?VT:VM;
    var found=opts.find(function(o){return o.id===id;});
    var el=document.getElementById('val-v');
    if(el&&found)el.textContent=found.label;
    closeAll();render();
  }
  function setRecv(id){
    S.recv=id;
    var found=RO.find(function(o){return o.id===id;});
    var el=document.getElementById('val-r');
    if(el&&found)el.textContent=found.label;
    closeAll();render();
  }
  function setBand(id){
    S.band=id;
    var found=BO.find(function(o){return o.id===id;});
    var el=document.getElementById('val-b');
    if(el&&found)el.textContent=found.label;
    closeAll();render();
  }
  function selectInst(n){S.selInst=n;render();}
  function toggleParcelas(){S.parcOpen=!S.parcOpen;if(S.parcOpen){var mx=getMaxInst();if(S.selInst>mx)S.selInst=mx;}render();}
  
  function syncSlider(v){
    var sl=document.getElementById('amt-sl');
    if(!sl)return;
    var c=Math.min(Math.max(Math.round(v),1),10000);
    sl.value=c;sl.style.setProperty('--rng',((c-1)/(10000-1)*100).toFixed(3)+'%');
  }
  function updateAmountDisplay(){
    var inp=document.getElementById('amt-inp');
    if(inp)inp.value='R$ '+S.amount.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
  }
  
  var inp=document.getElementById('amt-inp');
  if(inp){
    inp.addEventListener('focus',function(){
      this.value=S.amount>0?S.amount.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}):'';
      var self=this;setTimeout(function(){self.select();},0);
    });
    inp.addEventListener('input',function(){
      var raw=this.value.replace(/[^\d.,]/g,'').replace(',','.');
      var parts=raw.split('.');
      if(parts.length>2)raw=parts[0]+'.'+parts.slice(1).join('');
      var num=parseFloat(raw)||0;
      S.amount=Math.min(num,10000);
      syncSlider(S.amount);render();
    });
    inp.addEventListener('blur',function(){
      if(S.amount<1)S.amount=1;
      updateAmountDisplay();syncSlider(S.amount);render();
    });
  }
  var sl=document.getElementById('amt-sl');
  if(sl){
    sl.addEventListener('input',function(){
      var v=Number(this.value);S.amount=v;
      this.style.setProperty('--rng',((v-1)/(10000-1)*100).toFixed(3)+'%');
      updateAmountDisplay();render();
    });
  }
  
  function render(){
    var opts=S.product==='tap'?VT:VM;
    buildDD('dd-v',opts,S.tier,'setVendas');
    buildDD('dd-r',RO,S.recv,'setRecv');
    buildDD('dd-b',BO,S.band,'setBand');
    var pd=getPD(),pix=getPix(),deb=pd.deb,cre1=pd.cre[1];
    var pKeys=getParcKeys(),maxN=pKeys[pKeys.length-1];
    if(S.selInst>maxN)S.selInst=maxN;
    var selN=S.selInst,selRate=pd.cre[selN];
    var pillsHTML=pKeys.map(function(n){return '<button class="parc-pill'+(n===selN?' active':'')+'" onclick="selectInst('+n+')">'+n+'x</button>';}).join('');
    var chevCls=S.parcOpen?' open':'';
    var html='';
    html+='<div class="result-row"><div class="res-left"><div class="res-type">Pix</div><div class="res-rate">'+fR(pix)+'</div></div><div class="res-right"><div class="res-recv-label">Você recebe</div><div class="res-recv-value">'+fM(calcRecv(pix))+'</div></div></div>';
    html+='<div class="result-row"><div class="res-left"><div class="res-type">Débito</div><div class="res-rate">'+fR(deb)+'</div></div><div class="res-right"><div class="res-recv-label">Você recebe</div><div class="res-recv-value">'+fM(calcRecv(deb))+'</div></div></div>';
    html+='<div class="result-row"><div class="res-left"><div class="res-type">Crédito</div><div class="res-rate">'+fR(cre1)+'</div></div><div class="res-right"><div class="res-recv-label">Você recebe</div><div class="res-recv-value">'+fM(calcRecv(cre1))+'</div></div></div>';
    html+='<div class="result-row clickable" onclick="toggleParcelas()" role="button" tabindex="0" aria-expanded="'+S.parcOpen+'" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();toggleParcelas();}">';
    html+='<div class="res-left"><div class="res-type">Crédito '+selN+'x<svg class="chevron'+chevCls+'" style="width:13px;height:13px;flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 9l8 6 8-6"/></svg></div><div class="res-rate">'+fR(selRate)+'</div></div>';
    html+='<div class="res-right"><div class="res-recv-label">Você recebe</div><div class="res-recv-value">'+fM(calcRecv(selRate))+'</div></div></div>';
    html+='<div class="parc-expand'+(S.parcOpen?' open':'')+'">';
    html+='<span class="parc-header-label">Escolha o número de parcelas:</span>';
    html+='<div class="parc-pills">'+pillsHTML+'</div>';
    html+='<div class="parc-result"><div><div class="pr-label">Taxa '+selN+'x</div><div class="pr-rate">'+fR(selRate)+'</div></div><div class="pr-right"><div class="pr-label">Você recebe</div><div class="pr-recv">'+fM(calcRecv(selRate))+'</div></div></div></div>';
    var rr=document.getElementById('res-rows');
    if(rr)rr.innerHTML=html;
  }
  
  // INIT simulador
  (function(){
    var s=document.getElementById('amt-sl');
    if(s)s.style.setProperty('--rng',((100-1)/(10000-1)*100).toFixed(3)+'%');
    render();
  })();
  
  // Fechar dropdowns ao clicar fora
  document.addEventListener('click',function(e){
    if(!e.target.closest('.select-row')&&!e.target.closest('.dropdown'))closeAll();
  });
  
  /* ===== FAQ ===== */
  function toggleFaq(btn){
    var item=btn.closest('.faq-item');
    var isOpen=item.classList.contains('aberto');
    var resp=btn.nextElementSibling;
    if(isOpen){
      item.classList.remove('aberto');
      btn.setAttribute('aria-expanded','false');
      resp.hidden=true;
    } else {
      item.classList.add('aberto');
      btn.setAttribute('aria-expanded','true');
      resp.hidden=false;
    }
  }
  
  /* ===== RECEBIMENTO ===== */
  function selecionarRecebimento(el){
    document.querySelectorAll('.card-recebimento').forEach(function(c){
      c.classList.remove('ativo');
      c.setAttribute('aria-pressed','false');
    });
    el.classList.add('ativo');
    el.setAttribute('aria-pressed','true');
  }
  function handleKeyBtn(e,el){
    if(e.key==='Enter'||e.key===' '){e.preventDefault();selecionarRecebimento(el);}
  }
  
  /* ===== STICKY CTA ===== */
  (function(){
    var hero=document.getElementById('hero');
    var cta=document.getElementById('sticky-cta');
    if(!hero||!cta)return;
    var obs=new IntersectionObserver(function(entries){
      var visible=entries[0].isIntersecting;
      cta.style.display=visible?'none':'flex';
      cta.setAttribute('aria-hidden',visible?'true':'false');
    },{threshold:0.1});
    obs.observe(hero);
  })();
  
  /* ===== COOKIES ===== */
  (function(){
    var banner=document.getElementById('cookie-banner');
    if(!banner)return;
    var consent=localStorage.getItem('cookie-consent');
    if(!consent)banner.classList.add('visible');
  
    function saveCookies(analytics,marketing){
      localStorage.setItem('cookie-consent',JSON.stringify({analytics:analytics,marketing:marketing,ts:Date.now()}));
      banner.classList.remove('visible');
    }
    document.getElementById('cookie-btn-aceitar').addEventListener('click',function(){saveCookies(true,true);});
    document.getElementById('cookie-btn-rejeitar').addEventListener('click',function(){saveCookies(false,false);});
    document.getElementById('cookie-btn-salvar').addEventListener('click',function(){
      saveCookies(
        document.getElementById('cookie-analiticos').checked,
        document.getElementById('cookie-marketing').checked
      );
    });
  
    // Re-abrir via links do footer
    var linkCookies=document.getElementById('link-preferencias-cookies');
    if(linkCookies)linkCookies.addEventListener('click',function(e){e.preventDefault();banner.classList.add('visible');});
  })();