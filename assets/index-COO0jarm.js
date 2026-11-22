(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const e of t.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&o(e)}).observe(document,{childList:!0,subtree:!0});function d(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(n){if(n.ep)return;n.ep=!0;const t=d(n);fetch(n.href,t)}})();const g="modulepreload",f=function(r,l){return new URL(r,l).href},u={},y=function(l,d,o){let n=Promise.resolve();if(d&&d.length>0){const e=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),v=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(d.map(s=>{if(s=f(s,o),s in u)return;u[s]=!0;const c=s.endsWith(".css"),b=c?'[rel="stylesheet"]':"";if(!!o)for(let p=e.length-1;p>=0;p--){const h=e[p];if(h.href===s&&(!c||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${b}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":g,c||(a.as="script"),a.crossOrigin="",a.href=s,v&&a.setAttribute("nonce",v),document.head.appendChild(a),c)return new Promise((p,h)=>{a.addEventListener("load",p),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}function t(e){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=e,window.dispatchEvent(i),!i.defaultPrevented)throw e}return n.then(e=>{for(const i of e||[])i.status==="rejected"&&t(i.reason);return l().catch(t)})},m=`<div id="breakTip" hidden style="position:fixed; inset-inline:var(--sp-3); bottom:var(--sp-4); z-index:40; background:var(--sun); color:var(--sun-ink); border-radius:var(--r-lg); padding:var(--sp-3) var(--sp-4); display:flex; gap:var(--sp-2); align-items:center; box-shadow:0 12px 34px rgba(42,37,32,.22)">
  <p style="flex:1 1 auto; margin:0; font-size:var(--fs-md); font-weight:700; line-height:1.5">مضت ١٢ دقيقة… يدك تستحق استراحة قصيرة. نكمل بعد قليل؟</p>
  <button class="btn" id="breakOk" type="button" style="flex:none">حسنًا</button>
</div>
`,w=`<section class="screen" id="scWorlds">
  <div class="card" style="background:var(--sky); border-color:transparent; padding:var(--sp-4); display:flex; flex-direction:column; gap:var(--sp-2)">
    <div class="row">
      <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r="25" fill="var(--surface)"></circle>
        <path d="M11 34C19 34 19 17 27 17c7 0 7 13 14 13" fill="none" stroke="var(--peach-ink)" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 7"></path>
        <path d="M38 38l3-10 5 5z" fill="var(--mint-ink)"></path>
      </svg>
      <div style="min-width:0">
        <h1 style="font-size:var(--fs-3xl); letter-spacing:.5px">مَسار</h1>
        <p style="font-size:var(--fs-md); font-weight:700">كل حرفٍ… مَسار</p>
      </div>
      <div class="spacer"></div>
      <span class="pill"><b id="wPts">٠</b> نقطة</span>
    </div>
    <p style="font-size:var(--fs-md); line-height:1.6">اختر عالمك… وفيه نتعلّم الحروف من حكاياته.</p>
  </div>
  <div class="grid2" id="worldGrid"></div>
  <div class="spacer"></div>
  <div class="grid3">
    <button class="btn" id="wGal" type="button">جوائزي</button>
    <button class="btn" id="wVoice" type="button">الصوت</button>
    <button class="btn" id="wAdult" type="button">ولي الأمر</button>
  </div>
</section>
`,k=`<section class="screen" id="scHome">
  <div class="card hm-hero" id="homeHero">
    <div class="row">
      <span class="hm-avatar" id="homeAvatar" aria-hidden="true"></span>
      <div style="min-width:0">
        <p class="hm-hello" id="homeHello">أهلًا!</p>
        <h1 id="homeWorld" class="hm-world">عالم الفضاء</h1>
        <p class="note hm-guide" id="homeGuide">مرشدك: نجمة</p>
      </div>
      <div class="spacer"></div>
      <div class="ring" role="img" aria-label="نقاطي">
        <svg width="74" height="74" viewBox="0 0 74 74">
          <circle cx="37" cy="37" r="31" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="9"></circle>
          <circle id="ringArc" cx="37" cy="37" r="31" fill="none" stroke="var(--mint-ink)" stroke-width="9" stroke-linecap="round" stroke-dasharray="195" stroke-dashoffset="195"></circle>
        </svg>
        <b id="ptsNum">٠</b>
      </div>
    </div>
    <div class="hm-goal">
      <svg class="float" width="40" height="40" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
        <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
        <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
        <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
      </svg>
      <p>اجمع <b id="toGo">١٠</b> نقاط لتكسب <b>جوهرة</b> جديدة!</p>
      <button class="btn hm-mini" id="changeWorld" type="button">تغيير العالم</button>
    </div>
  </div>

  <button class="tile hm-letter" id="tLetters" type="button">
    <span class="ic hm-glyph"><span class="naskh" id="homeGlyph">ن</span></span>
    <span style="min-width:0"><small class="hm-k">رحلتي مع الحروف</small><h3 id="curLetterNote">حرفك الآن: النون</h3><small>اضغط لتختار حرفًا آخر</small></span>
    <span class="done" style="background:var(--sun-ink)" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 6l6 6-6 6"></path></svg></span>
  </button>

  <div class="hm-jhead">
    <h2 id="journeyTitle">رحلة حرف النون</h2>
    <span class="pill" id="journeyCount">٠ من ٧</span>
  </div>
  <div class="hm-jbar" aria-hidden="true"><i id="journeyBar"></i></div>
  <div class="journey" id="journey">
  <button class="tile t-mint" id="tStory" type="button">
    <span class="ic"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--mint-ink)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h7v15H4zM13 5h7v15h-7z"></path></svg></span>
    <span style="min-width:0"><h3>القصة</h3><small>كوكب النون — +٢</small></span>
    <span class="done" id="dStory" hidden><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4 10-10"></path></svg></span>
  </button>

  <button class="tile t-peach" id="tWrite" type="button">
    <span class="ic"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--peach-ink)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16z"></path><path d="M14 5l3 3"></path></svg></span>
    <span style="min-width:0"><h3 id="tWriteTitle">اكتب النون</h3><small>بإصبعك أو بالقلم مع القبضة — +٦</small></span>
    <span class="done" id="dWrite" hidden><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4 10-10"></path></svg></span>
  </button>

  <button class="tile t-lilac" id="tGripW" type="button">
    <span class="ic"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--lilac-ink)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19L17 7"></path><rect x="9" y="8.5" width="6" height="4" rx="1.6" transform="rotate(-45 12 10.5)"></rect><path d="M5 19l-1 2 2-1"></path><path d="M18 14c1.5 0 2.5 1 2.5 2.5S19.5 19 18 19"></path></svg></span>
    <span style="min-width:0"><h3 id="tGripWTitle">اكتب بالقبضة الذكية</h3><small>صفحة مسطّرة — ٣ مرّات — وقراءات يدك — +٤</small></span>
    <span class="done" id="dGripW" hidden><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4 10-10"></path></svg></span>
  </button>

  <button class="tile t-lilac" id="tPic" type="button">
    <span class="ic"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--lilac-ink)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M3 14l5-4 4 3 3-2 6 5"></path><circle cx="9" cy="8.5" r="1.4"></circle></svg></span>
    <span style="min-width:0"><h3>القصة المصوّرة</h3><small>كلمات فيها نون — رسوم متحركة — +٣</small></span>
    <span class="done" id="dPic" hidden><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4 10-10"></path></svg></span>
  </button>

  <button class="tile t-sky" id="tAir" type="button">
    <span class="ic"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--sky-ink)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8c0 7 14 7 14 0"></path><path d="M12 3v3M7 4l1 2M17 4l-1 2"></path></svg></span>
    <span style="min-width:0"><h3>الكتابة في الهواء</h3><small>بذراعك — ٣ مرات — +٣</small></span>
    <span class="done" id="dAir" hidden><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4 10-10"></path></svg></span>
  </button>

  <button class="tile t-lilac" id="tGate" type="button">
    <span class="ic"><span class="naskh" style="font-size:var(--fs-2xl)">ب ن</span></span>
    <span style="min-width:0"><h3>بوابة التمييز</h3><small>نفرّق بالحركة لا بالعين — +٣</small></span>
    <span class="done" id="dGate" hidden><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4 10-10"></path></svg></span>
  </button>

  <button class="tile t-sun" id="tWord" type="button">
    <span class="ic"><span class="naskh" style="font-size:var(--fs-xl)">نجمة</span></span>
    <span style="min-width:0"><h3>بطاقات النون</h3><small>أين تسكن النون؟ ثم اكتبها — +٨</small></span>
    <span class="done" id="dWord" hidden><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4 10-10"></path></svg></span>
  </button>

  <button class="tile t-sky" id="tEx" type="button">
    <span class="ic"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--sky-ink)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 10v4M18 10v4M4 12h2M18 12h2M8 8h8v8H8z"></path></svg></span>
    <span style="min-width:0"><h3>تماريني</h3><small>تمارين ليدك يختارها القياس — +٢</small></span>
  </button>
  </div>

  <p class="note" id="letterOnly" hidden>القصة والقصة المصوّرة وبوابة التمييز والكلمة مكتوبة لحرف النون الآن — بقيّة المراحل تعمل مع حرفك المختار.</p>

  <div class="grid2">
    <button class="btn" id="tGal" type="button">غرفة جواهري</button>
    <button class="btn" id="tAdult" type="button">لوحة ولي الأمر</button>
  </div>

  <div class="spacer"></div>
  <div class="row">
    <button class="btn icon" id="soundBtn" type="button" aria-pressed="true" aria-label="كتم الصوت">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 9v6h3l5 4V5L7 9H4z"></path><path d="M17 9c1.3 1.6 1.3 4.4 0 6"></path></svg>
    </button>
    <button class="btn" id="tVoice" type="button" style="flex:1 1 auto">اختيار صوت نجمة</button>
  </div>
  <p class="note" id="voiceNote">صوت نجمة تسجيل طبيعي الآن. الإعدادات للجمل القليلة غير المسجّلة.</p>
</section>
`,x=`<section class="screen" id="scVoice" data-aud="parent" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <h2 style="font-size:var(--fs-xl)">صوت نجمة</h2>
  </header>

  <div class="grid3">
    <button class="btn" id="vpKid" type="button">صوت طفل</button>
    <button class="btn" id="vpCalm" type="button">صوت هادئ</button>
    <button class="btn" id="vpTeach" type="button">صوت معلمة</button>
  </div>

  <div class="card" style="display:flex; flex-direction:column; gap:var(--sp-3)">
    <div style="display:flex; flex-direction:column; gap:var(--sp-2)">
      <label for="voiceSel">الصوت المتاح في جهازك</label>
      <select id="voiceSel"></select>
      <p class="note" id="voiceHint"></p>
    </div>
    <div style="display:flex; flex-direction:column; gap:var(--sp-1)">
      <label for="rateR">السرعة — <span id="rateV">٠٫٧٥</span></label>
      <input type="range" id="rateR" min="0.5" max="1.1" step="0.05" value="0.75">
    </div>
    <div style="display:flex; flex-direction:column; gap:var(--sp-1)">
      <label for="pitchR">نعومة الصوت — <span id="pitchV">١٫٤</span></label>
      <input type="range" id="pitchR" min="0.8" max="2" step="0.1" value="1.4">
    </div>
    <button class="btn wide" id="voiceTest" type="button">اسمع التجربة</button>
  </div>

  <div class="card" style="background:var(--mint); border-color:transparent; display:flex; flex-direction:column; gap:var(--sp-2)">
    <b style="font-size:var(--fs-sm)">الصوت الطبيعي مُدمج ✓</b>
    <p style="font-size:var(--fs-xs); line-height:1.65">أكثر من سبعين جملة مسجّلة بصوت عربي طبيعي: حكايات الفضاء والبحار والديناصورات والغابة، والتصحيح أثناء الكتابة، وبوابة التمييز، والنطق بالحركات، والكتابة في الهواء والكلمة، والمكافآت. التسجيلات تُحمَّل من الشبكة عند أول تشغيل ثم يحفظها المتصفّح، فإن انقطع الإنترنت قبل تحميلها نطق الجهاز الجملة بصوته الآلي — والإعدادات أعلاه تضبط ذلك الصوت الاحتياطي والجمل غير المسجّلة.</p>
  </div>
  <div class="spacer"></div>
  <button class="btn primary wide back2" type="button">تمّ</button>
</section>
`,z=`<section class="screen" id="scStory" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 id="storyTitle" style="font-size:var(--fs-xl)">الصاروخ والكوكب</h2><p class="note">حكاية… وفيها نتعلّم النون</p></div>
    <div class="spacer"></div>
    <span class="pill" id="scnNum">١ / ٦</span>
  </header>
  <div id="storyWrap"><canvas id="storyPad" role="img" aria-label="لوحة القصة — مسار الحرف يُرسم مع أحداث الحكاية"></canvas></div>
  <div class="coach good" id="storyCoach">
    <svg class="float" width="46" height="46" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="storyText" aria-live="polite" style="font-size:var(--fs-md); line-height:1.6"></p>
    <span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
  </div>
  <div class="spacer"></div>
  <div class="seg">
    <button class="btn" id="replayStory" type="button">أعد السماع</button>
    <button class="btn primary" id="storyNext" type="button" style="font-size:var(--fs-lg)">ثم؟</button>
  </div>
</section>
`,M=`<section class="screen" id="scShape" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <h2 style="font-size:var(--fs-xl)">هكذا نرسم النون</h2>
  </header>
  <div class="card" style="padding:var(--sp-3)">
    <svg viewBox="0 0 334 240" style="display:block; width:100%; height:auto" role="img" aria-label="مسار رسم النون: نبدأ من النقطة الخضراء، ننزل في قوس عميق، نصعد، ثم نضع النقطة في الأعلى">
      <line x1="20" y1="190" x2="314" y2="190" stroke="var(--line)" stroke-width="3"></line>
      <path d="M248 106C248 190 86 190 86 106" fill="none" stroke="var(--peach)" stroke-width="30" stroke-linecap="round"></path>
      <path d="M248 106C248 190 86 190 86 106" fill="none" stroke="var(--peach-ink)" stroke-width="4.5" stroke-linecap="round" stroke-dasharray="2 12"></path>
      <circle cx="248" cy="106" r="19" fill="var(--mint-ink)"></circle>
      <text x="248" y="113" font-size="18" fill="#fff" text-anchor="middle" font-family="Cairo,sans-serif" font-weight="700">١</text>
      <circle cx="86" cy="106" r="19" fill="var(--lilac-ink)"></circle>
      <text x="86" y="113" font-size="18" fill="#fff" text-anchor="middle" font-family="Cairo,sans-serif" font-weight="700">٢</text>
      <path d="M165 42l7 17 19 1-14 12 4 19-16-10-16 10 4-19-14-12 19-1z" fill="var(--sun)"></path>
      <text x="165" y="22" font-size="15" fill="var(--ink)" text-anchor="middle" font-family="Cairo,sans-serif" font-weight="700">٣ — النجمة فوق</text>
    </svg>
  </div>
  <div class="card row" style="gap:var(--sp-3); background:var(--mint); border-color:transparent">
    <span class="naskh" style="font-size:var(--fs-5xl); line-height:1">نـ</span>
    <p style="font-size:var(--fs-md); line-height:1.6">انزل في الحفرة العميقة… اصعد… ثم ضع النجمة فوق.</p>
  </div>
  <div class="spacer"></div>
  <div class="seg">
    <button class="btn" id="shapeToAir" type="button">في الهواء</button>
    <button class="btn primary" id="shapeToWrite" type="button" style="font-size:var(--fs-md)">أكتب الآن</button>
  </div>
</section>
`,B=`<section class="screen" id="scAir" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 style="font-size:var(--fs-xl)">اكتب في الهواء</h2><p class="note">قف وارفع ذراعك وتابع النجمة</p></div>
    <div class="spacer"></div>
    <span class="pill" id="airReps">٠ / ٣</span>
  </header>
  <div id="airWrap"><canvas id="airPad" role="img" aria-label="لوحة الكتابة في الهواء — نجمة تتحرّك على مسار الحرف ليتبعها الطفل بذراعه"></canvas></div>
  <div class="coach good" id="airCoach">
    <svg width="38" height="38" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="airText" aria-live="polite">تابع النجمة بذراعك… انزل ثم اصعد</p>
    <span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
  </div>
  <div class="spacer"></div>
  <button class="btn primary wide" id="airRepBtn" type="button">رسمتها في الهواء!</button>
</section>
`,A=`<section class="screen" id="scWrite" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 style="font-size:var(--fs-lg)" id="wTitle">اكتب النون</h2><p class="note" id="writeSub">بإصبعك أو بالقلم</p></div>
    <div class="spacer"></div>
    <button class="btn icon" id="soundBtn2" type="button" aria-pressed="true" aria-label="كتم الصوت">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 9v6h3l5 4V5L7 9H4z"></path><path d="M17 9c1.3 1.6 1.3 4.4 0 6"></path></svg>
    </button>
  </header>

  <button class="btn wide" id="gripBtn" type="button" aria-pressed="false" style="font-size:var(--fs-md)">وضع القلم الإلكتروني <small style="font-weight:600; opacity:.7">(قراءة الضغط والميل)</small></button>
  <div class="seg">
    <button class="btn" id="g0" type="button" aria-pressed="true">مسار</button>
    <button class="btn" id="g1" type="button" aria-pressed="false">نقاط</button>
    <button class="btn" id="g2" type="button" aria-pressed="false">بلا</button>
  </div>

  <div id="padWrap"><canvas id="pad" role="img" aria-label="لوحة كتابة الحرف — تتبّع المسار بإصبعك أو بالقلم"></canvas></div>

  <div class="coach" id="coach">
    <svg width="38" height="38" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="coachText" aria-live="polite">ابدأ من النقطة الخضراء… وانزل في الحفرة</p>
    <span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
  </div>

  <div class="card" id="gripPanel" hidden style="padding:var(--sp-3)">
    <div class="row" style="margin-bottom:var(--sp-2)"><b style="font-size:var(--fs-md)">قراءة القبضة الآن</b><div class="spacer"></div><span class="note" id="gripSrc"></span><button class="btn icon" id="writeGripBtn" type="button" aria-label="إعداد القبضة الذكية" style="flex:none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"></path></svg></button></div>
    <div class="meters">
      <div class="meter" id="mrForce" hidden><em>قوّة العضلات</em><i><b id="mtForce"></b></i><u id="vlForce">—</u></div>
      <div class="meter"><em>قبضة اليد</em><i><b id="mtGrip"></b></i><u id="vlGrip">—</u></div>
      <div class="meter"><em>زاوية القلم</em><i><b id="mtAng"></b></i><u id="vlAng">—</u></div>
      <div class="meter"><em>مستوى التوتر</em><i><b id="mtTen"></b></i><u id="vlTen">—</u></div>
      <div class="meter"><em>الرجفة</em><i><b id="mtTre"></b></i><u id="vlTre">—</u></div>
      <div class="meter"><em>التحكم بالقلم</em><i><b id="mtCtl"></b></i><u id="vlCtl">—</u></div>
    </div>
  </div>

  <div class="chips" id="writeChips">
    <div class="chip"><b id="mAcc">—</b><span>دقة المسار</span></div>
    <div class="chip"><b id="mCov">٠٪</b><span>اكتمال</span></div>
    <div class="chip"><b id="mLift">٠</b><span>رفع القلم</span></div>
    <div class="chip"><b id="mPress">—</b><span>الضغط</span></div>
  </div>

  <div class="seg">
    <button class="btn" id="undoBtn" type="button" aria-label="تراجع خطوة واحدة"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10a6 6 0 0 1 0 12h-3"></path></svg> تراجع</button>
    <button class="btn" id="clearBtn" type="button">امسح</button>
    <button class="btn primary" id="doneBtn" type="button" style="font-size:var(--fs-md)">تمّ</button>
  </div>
</section>
`,C=`<section class="screen" id="scGate" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 style="font-size:var(--fs-lg)">بوابة التمييز</h2><p class="note">نفرّق بين الحرفين بحركة اليد</p></div>
    <div class="spacer"></div>
    <span class="pill" id="gateScore">٠ / ٣</span>
  </header>

  <div class="card" style="background:var(--lilac); border-color:transparent; display:flex; gap:var(--sp-3); align-items:center">
    <button class="btn icon" id="gateSay" type="button" aria-label="اسمع الصوت مرة أخرى" style="background:var(--surface); border-color:transparent">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--lilac-ink)" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 9v6h3l5 4V5L7 9H4z"></path><path d="M17 9c1.3 1.6 1.3 4.4 0 6"></path></svg>
    </button>
    <p style="font-size:var(--fs-md); font-weight:700; line-height:1.5; flex:1 1 auto; min-width:0">اسمع الصوت… ثم اكتب الحرف الذي سمعته</p>
  </div>

  <div id="gateWrap"><canvas id="gatePad" role="img" aria-label="لوحة بوابة التمييز — اكتب الحرف الذي سمعته ثم ضع نقطته"></canvas></div>

  <div class="coach good" id="gateCoach">
    <svg width="38" height="38" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="gateText" aria-live="polite">الحفرة العميقة = نون — الحفرة الضحلة = باء</p>
    <span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
  </div>

  <div class="seg">
    <button class="btn" id="gateUndo" type="button" aria-label="تراجع خطوة واحدة"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10a6 6 0 0 1 0 12h-3"></path></svg> تراجع</button>
    <button class="btn" id="gateClear" type="button">امسح</button>
    <button class="btn primary" id="gateCheck" type="button" style="font-size:var(--fs-md)">حكمت!</button>
  </div>
  <p class="note">النقطة: اضغط فوق الحرف أو تحته بعد رسم الحفرة.</p>
</section>
`,T=`<section class="screen" id="scWord" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 style="font-size:var(--fs-lg)">بطاقات النون</h2><p class="note" id="wordSub">البطاقة ١ من ٦</p></div>
    <div class="spacer"></div>
    <div class="nc-dots" id="ncDots" aria-hidden="true"></div>
  </header>

  <div class="nc-card" id="ncCard">
    <div class="nc-pic" id="ncPic"></div>
    <p class="nc-word naskh" id="ncWord" aria-live="polite"></p>
    <p class="nc-form" id="ncForm" hidden></p>
  </div>

  <div class="coach good" id="wordCoach">
    <svg width="38" height="38" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="wordText" aria-live="polite">أين تسكن النون؟</p>
    <span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
  </div>

  <!-- ١) أين النون؟ -->
  <div class="nc-opts" id="ncAsk" role="group" aria-label="أين النون في الكلمة؟">
    <button class="btn nc-opt" type="button" data-pos="init"><b class="naskh">نـ</b><span>في أوّلها</span></button>
    <button class="btn nc-opt" type="button" data-pos="mid"><b class="naskh">ـنـ</b><span>في وسطها</span></button>
    <button class="btn nc-opt" type="button" data-pos="fin"><b class="naskh">ن</b><span>في آخرها</span></button>
  </div>

  <!-- ٢) اكتب النون كما في الكلمة -->
  <div id="wordWrap" hidden><canvas id="wordPad" role="img" aria-label="لوحة كتابة النون"></canvas></div>
  <div class="seg" id="ncWriteBtns" hidden>
    <button class="btn" id="wordUndo" type="button" aria-label="تراجع خطوة واحدة"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10a6 6 0 0 1 0 12h-3"></path></svg> تراجع</button>
    <button class="btn" id="wordClear" type="button">امسح</button>
  </div>

  <button class="btn primary wide" id="wordNext" type="button" hidden>البطاقة التالية</button>

  <!-- ٣) النهاية -->
  <div class="card nc-end" id="ncEnd" hidden>
    <div class="nc-stars" id="ncStars" aria-hidden="true"></div>
    <h3 id="ncEndTitle">أحسنت!</h3>
    <p class="note" id="ncEndNote"></p>
    <div class="seg">
      <button class="btn" id="ncAgain" type="button">جولة جديدة</button>
      <button class="btn primary back2" type="button">إلى الرحلة</button>
    </div>
  </div>
</section>
`,S=`<section class="screen" id="scResult" hidden>
  <header class="scr-head">
    <svg class="pop" width="52" height="52" viewBox="0 0 150 150" aria-hidden="true">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <h2 style="font-size:var(--fs-2xl)" id="resTitle">نونة جميلة!</h2>
    <div class="spacer"></div>
    <span class="naskh" id="resGlyph" style="font-size:var(--fs-4xl)">ن</span>
  </header>
  <div class="stars" id="stars"></div>
  <div class="card" style="background:var(--mint); border-color:transparent; display:flex; flex-direction:column; gap:var(--sp-1)">
    <b style="font-size:var(--fs-md)">نجمة تقول لك</b>
    <p id="resAdvice" style="font-size:var(--fs-md); line-height:1.6"></p>
  </div>
  <div class="card" id="resQual" hidden style="padding:var(--sp-3)">
    <b style="font-size:var(--fs-md); display:block; margin-bottom:var(--sp-2)">درجة الخط</b>
    <div class="meters">
      <div class="meter"><em>انتظام الحجم</em><i><b id="qSize"></b></i><u id="qSizeV">—</u></div>
      <div class="meter"><em>الثبات على السطر</em><i><b id="qBase"></b></i><u id="qBaseV">—</u></div>
      <div class="meter"><em>التباعد</em><i><b id="qGap"></b></i><u id="qGapV">—</u></div>
      <div class="meter"><em>دقة الحروف</em><i><b id="qAcc"></b></i><u id="qAccV">—</u></div>
    </div>
  </div>
  <div class="chips" id="resChips">
    <div class="chip"><b id="rAcc">—</b><span>دقة المسار</span></div>
    <div class="chip"><b id="rCov">—</b><span>اكتمال</span></div>
    <div class="chip"><b id="rLift">—</b><span>رفع القلم</span></div>
    <div class="chip"><b id="rTime">—</b><span>الزمن</span></div>
  </div>
  <div class="spacer"></div>
  <div class="card" id="resGrip" hidden style="padding:var(--sp-3)">
    <b style="font-size:var(--fs-md); display:block; margin-bottom:var(--sp-2)">قياس يدك في هذه المحاولة</b>
    <div class="meters">
      <div class="meter"><em>قبضة اليد</em><i><b id="rsGrip"></b></i><u id="rsGripV">—</u></div>
      <div class="meter"><em>التحكم بالقلم</em><i><b id="rsCtl"></b></i><u id="rsCtlV">—</u></div>
      <div class="meter"><em>مستوى التوتر</em><i><b id="rsTen"></b></i><u id="rsTenV">—</u></div>
      <div class="meter"><em>الرجفة</em><i><b id="rsTre"></b></i><u id="rsTreV">—</u></div>
    </div>
    <button class="btn wide" id="resExBtn" type="button" style="margin-top:var(--sp-3)">تمارين تقوّي يدي</button>
  </div>

  <div class="seg">
    <button class="btn" id="againBtn" type="button">مرة أخرى</button>
    <button class="btn primary" id="sayBtn" type="button" style="font-size:var(--fs-md)">هيا ننطقها</button>
  </div>
  <button class="btn wide" id="homeBtn" type="button">إلى خريطة عالمي</button>
</section>
`,j=`<section class="screen" id="scSay" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 style="font-size:var(--fs-xl)">اسمع… ثم ردّد</h2><p class="note">كتبتها، والآن ننطقها معًا</p></div>
  </header>

  <div class="card" style="display:flex; flex-direction:column; align-items:center; gap:var(--sp-2); padding:var(--sp-5)">
    <span class="naskh" id="sayGlyph" style="font-size:var(--fs-5xl); line-height:1.2">نون</span>
    <span id="sayName" style="font-size:var(--fs-lg); font-weight:800; color:var(--peach-ink)">نون</span>
    <span class="note" id="sayTip">اضغط «اسمع» ثم ردّد خلف نجمة</span>
  </div>

  <div class="seg" id="harRow" role="group" aria-label="الحركات">
    <button class="btn" id="h1" type="button" aria-pressed="false" style="font-family:var(--naskh); font-size:var(--fs-3xl)">نَ</button>
    <button class="btn" id="h2" type="button" aria-pressed="false" style="font-family:var(--naskh); font-size:var(--fs-3xl)">نُ</button>
    <button class="btn" id="h3" type="button" aria-pressed="false" style="font-family:var(--naskh); font-size:var(--fs-3xl)">نِ</button>
    <button class="btn" id="h4" type="button" aria-pressed="false" style="font-family:var(--naskh); font-size:var(--fs-3xl)">نْ</button>
  </div>

  <div class="coach good" id="sayCoach">
    <svg class="float" width="38" height="38" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
        <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
        <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
        <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
      </svg>
    <p id="sayText" aria-live="polite">نون… ردّد خلفي</p>
    <span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
  </div>

  <div class="spacer"></div>
  <div class="seg">
    <button class="btn" id="sayHear" type="button">اسمع مرة أخرى</button>
    <button class="btn primary" id="sayDone" type="button" style="font-size:var(--fs-md)">ردّدتها!</button>
  </div>
</section>
`,G=`<section class="screen" id="scEx" hidden>
  <header class="scr-head">
    <button class="btn icon exBack" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 id="exTitle" style="font-size:var(--fs-xl)">تماريني</h2><p class="note" id="exSub">اختارها قياس يدك</p></div>
    <div class="spacer"></div>
    <span class="pill" id="exPts" hidden><b id="exPtsN">١٠</b> نقاط</span>
  </header>

  <div class="card" style="background:var(--mint); border-color:transparent; display:flex; gap:var(--sp-3); align-items:flex-start">
    <svg class="float" width="40" height="40" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="exWhyText" style="font-size:var(--fs-md); line-height:1.6; flex:1 1 auto; min-width:0"></p>
  </div>

  <div id="exList" style="display:flex; flex-direction:column; gap:var(--sp-2)"></div>
  <div class="spacer"></div>
  <p class="note">شاهد الحركة… ثم قلّدها. العرض متحرك هنا، ويمكن استبداله بفيديو حقيقي لاحقًا.</p>
</section>
`,P=`<section class="screen" id="scExDo" hidden>
  <header class="scr-head">
    <button class="btn icon exListBack" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 id="doName" style="font-size:var(--fs-lg)">—</h2><p class="note" id="doAim">—</p></div>
    <div class="spacer"></div>
    <b id="doLeft" style="font-size:var(--fs-xl); font-variant-numeric:tabular-nums">٢٠</b>
  </header>

  <div id="doWrap" style="position:relative; flex:1 1 auto; min-height:220px; background:var(--sunk); border-radius:var(--r); overflow:hidden">
    <canvas id="doPad" role="img" aria-label="عرض متحرك لتمرين اليد يقلّده الطفل"></canvas>
    <video id="doVid" hidden playsinline muted loop preload="auto" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover"></video>
  </div>
  <div class="timerbar"><i id="doFill"></i></div>

  <div class="card" style="padding:var(--sp-3)">
    <ol id="doSteps" style="margin:0; padding-inline-start:var(--sp-5); display:flex; flex-direction:column; gap:var(--sp-2); font-size:var(--fs-md); line-height:1.55"></ol>
  </div>

  <div class="spacer"></div>
  <button class="btn primary wide" id="doDone" type="button">قلّدتها!</button>
</section>
`,L=`<section class="screen" id="scLetters" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt">
      <h2 style="font-size:var(--fs-xl)">عالم الحروف</h2>
      <p class="note">اختر الحرف الذي تبدأ رحلتك معه</p>
    </div>
  </header>

  <div class="card" style="background:var(--mint); border-color:transparent; display:flex; gap:var(--sp-3); align-items:flex-start">
    <svg class="float" width="40" height="40" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="letText" aria-live="polite" style="font-size:var(--fs-md); line-height:1.6; flex:1 1 auto; min-width:0">كل حرف له نفس الرحلة: القصة، الهواء، الكتابة، النطق، والتمارين.</p>
  </div>

  <div id="letGrid" style="display:grid; grid-template-columns:repeat(4, minmax(0,1fr)); gap:var(--sp-2)"></div>
  <p class="note">الحروف الباهتة قيد التجهيز — مسار حركتها يُرسم حرفًا حرفًا.</p>
  <div class="spacer"></div>
</section>
`,E=`<section class="screen" id="scPic" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt">
      <h2 style="font-size:var(--fs-xl)">القصة المصوّرة</h2>
      <p class="note" id="picSub">كلمات فيها نون… شاهد واستمع</p>
    </div>
    <div class="spacer"></div>
    <button class="btn icon" id="picHear" type="button" aria-label="اسمع مرة أخرى"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 9v6h3l5 4V5L7 9H4z"></path><path d="M17 9c1.3 1.6 1.3 4.4 0 6"></path></svg></button>
  </header>

  <div id="picWrap" style="position:relative; flex:1 1 auto; min-height:230px; background:var(--sunk); border-radius:var(--r); overflow:hidden">
    <canvas id="picPad" role="img" aria-label="لوحة القصة المصوّرة — رسم متحرك للكلمة الحالية" style="position:absolute; inset:0; width:100%; height:100%"></canvas>
  </div>

  <div class="card" style="text-align:center; padding:var(--sp-3) var(--sp-4)">
    <p class="naskh" id="picWord" style="font-size:var(--fs-4xl); line-height:1.5; margin:0"></p>
    <p class="note" id="picWhere" style="margin:var(--sp-1) 0 0"></p>
  </div>

  <div class="card" style="background:var(--mint); border-color:transparent; display:flex; gap:var(--sp-3); align-items:flex-start">
    <svg class="float" width="40" height="40" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="picText" aria-live="polite" style="font-size:var(--fs-md); line-height:1.65; flex:1 1 auto; min-width:0"></p>
  </div>

  <div class="row" id="picDots" style="justify-content:center; gap:var(--sp-2)" aria-hidden="true"></div>

  <div class="seg">
    <button class="btn" id="picPrev" type="button">السابقة</button>
    <button class="btn primary" id="picNext" type="button" style="font-size:var(--fs-md)">التالية</button>
  </div>
</section>
`,V=`<section class="screen" id="scGift" hidden>
  <h2 style="font-size:var(--fs-2xl)">جوهرة جديدة!</h2>
  <div class="card" style="flex:1 1 auto; display:flex; align-items:center; justify-content:center; background:var(--sunk); border-color:transparent">
    <div class="pop" id="giftBox" style="width:190px; max-width:70%; aspect-ratio:1/1; border-radius:var(--r-xl); display:flex; align-items:center; justify-content:center">
      <svg width="104" height="104" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M30 14h40l18 22-38 50-38-50z" fill="#FFFFFF" fill-opacity="0.55"></path>
        <path d="M30 14 18 36h64L70 14z" fill="#FFFFFF" fill-opacity="0.35"></path>
        <path d="M30 14h40l18 22-38 50-38-50z" fill="none" stroke="#2A2520" stroke-width="4" stroke-linejoin="round"></path>
        <path d="M18 36h64M30 14 50 86 70 14M18 36 50 86 82 36" fill="none" stroke="#2A2520" stroke-width="3" stroke-linejoin="round"></path>
      </svg>
    </div>
  </div>
  <p style="text-align:center; font-size:var(--fs-3xl); font-weight:800" id="giftPts">الجوهرة ١</p>
  <p style="text-align:center; font-size:var(--fs-md)" id="giftName">في غرفة جواهرك</p>
  <p class="note" style="text-align:center" id="giftGrow">كل ١٠ نقاط = جوهرة واحدة</p>
  <button class="btn primary wide" id="giftNext" type="button">الآن مساحتي</button>
</section>
`,W=`<section class="screen" id="scExpress" hidden>
  <h2 style="font-size:var(--fs-2xl)">مساحتك… أنت النجم</h2>
  <div class="grid3">
    <button class="tile t-lilac" id="exTale" type="button" style="flex-direction:column; text-align:center; gap:var(--sp-2)">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--lilac-ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h7v15H4zM13 5h7v15h-7z"></path></svg>
      <span><h3 style="font-size:var(--fs-md)">أحكي حكاية</h3></span>
    </button>
    <button class="tile t-mint" id="exSong" type="button" style="flex-direction:column; text-align:center; gap:var(--sp-2)">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--mint-ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V6l10-2v12"></path><circle cx="6.5" cy="18" r="2.5"></circle><circle cx="16.5" cy="16" r="2.5"></circle></svg>
      <span><h3 style="font-size:var(--fs-md)">أغنّي</h3></span>
    </button>
    <button class="tile t-peach" id="exDraw" type="button" style="flex-direction:column; text-align:center; gap:var(--sp-2)">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--peach-ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l4-1 11-11-3-3L5 16z"></path><circle cx="18" cy="6" r="2"></circle></svg>
      <span><h3 style="font-size:var(--fs-md)">أرسم</h3></span>
    </button>
  </div>

  <div class="card" id="talePanel" hidden style="display:flex; flex-direction:column; gap:var(--sp-3)">
    <b style="font-size:var(--fs-md)">احكِ حكاية فيها هذه الثلاثة</b>
    <div class="grid3">
      <div class="card" style="text-align:center; background:var(--sunk); border-color:transparent"><svg width="38" height="38" viewBox="0 0 34 34" fill="var(--sun)" aria-hidden="true"><path d="M17 2l4 10 11 1-8 7 2 11-9-6-9 6 2-11-8-7 11-1z"></path></svg><div style="font-size:var(--fs-md); font-weight:700">نجمة</div></div>
      <div class="card" style="text-align:center; background:var(--sunk); border-color:transparent"><svg width="38" height="38" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="19" r="12" fill="var(--lilac-ink)"></circle></svg><div style="font-size:var(--fs-md); font-weight:700">كوكب</div></div>
      <div class="card" style="text-align:center; background:var(--sunk); border-color:transparent"><div class="naskh" style="font-size:var(--fs-3xl); line-height:1.2">ن</div><div style="font-size:var(--fs-md); font-weight:700">النون</div></div>
    </div>
    <button class="btn primary wide" id="taleDone" type="button">حكيتها!</button>
  </div>

  <div class="card" id="songPanel" hidden style="display:flex; flex-direction:column; gap:var(--sp-3)">
    <b style="font-size:var(--fs-md)">أغنية النون</b>
    <p class="naskh" style="font-size:var(--fs-lg); line-height:2">نونٌ نونٌ كالقاربِ<br>فيها نجمٌ في الأعلى<br>أنزلُ… أصعدُ… ثم أضعْ<br>نجمتي فوقَ القاربِ</p>
    <button class="btn wide" id="songPlay" type="button">اسمعها أولًا</button>
    <button class="btn primary wide" id="songDone" type="button">غنّيتها!</button>
  </div>

  <div class="card" id="drawPanel" hidden style="display:flex; flex-direction:column; gap:var(--sp-2); flex:1 1 auto; min-height:0">
    <b style="font-size:var(--fs-md)">ارسم ما تحب</b>
    <div id="drawWrap"><canvas id="drawPad" role="img" aria-label="لوحة رسم حرة للطفل"></canvas></div>
    <div class="row" style="flex-wrap:wrap; gap:var(--sp-2)" id="swatches"></div>
    <div class="seg">
      <button class="btn" id="drawUndo" type="button" aria-label="تراجع خطوة واحدة"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10a6 6 0 0 1 0 12h-3"></path></svg> تراجع</button>
    <button class="btn" id="drawClear" type="button">امسح</button>
      <button class="btn primary" id="drawSave" type="button" style="font-size:var(--fs-md)">احفظ رسمتي</button>
    </div>
  </div>

  <div class="spacer"></div>
  <button class="btn wide" id="exSkip" type="button">لاحقًا… إلى الخريطة</button>
</section>
`,_=`<section class="screen" id="scGal" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <h2 style="font-size:var(--fs-xl)">غرفة جواهري</h2>
    <div class="spacer"></div>
    <span class="pill"><b id="galPts">٠</b> نقطة</span>
  </header>
  <b style="font-size:var(--fs-md)">جواهري</b>
  <div class="gal" id="galStickers"></div>
  <div class="empty" id="noStickers">
    <svg width="46" height="46" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" aria-hidden="true">
      <path d="M30 14h40l18 22-38 50-38-50z"></path><path d="M18 36h64M30 14 50 86 70 14"></path>
    </svg>
    <b>لا جواهر بعد</b>
    <p>كل ١٠ نقاط تعطيك جوهرة. ابدأ بالقصة أو بكتابة حرفك، وستظهر أول جوهرة هنا.</p>
  </div>
  <b style="font-size:var(--fs-md); margin-top:var(--sp-1)">رسوماتي</b>
  <div class="gal" id="galDraws"></div>
  <div class="empty" id="noDraws">
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 15l5-4 4 3 3-2 6 5"></path><circle cx="9" cy="9" r="1.4"></circle>
    </svg>
    <b>لا رسومات بعد</b>
    <p>بعد كل مكافأة تجد مساحتك: تحكي، أو تغنّي، أو ترسم — وما ترسمه يُحفظ هنا.</p>
  </div>
  <div class="spacer"></div>
  <button class="btn primary wide back2" type="button">إلى الخريطة</button>
</section>
`,F=`<section class="screen" id="scAdult" data-aud="parent" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <h2 style="font-size:var(--fs-xl)">لوحة ولي الأمر</h2>
  </header>
  <div class="card" style="display:flex; flex-direction:column; gap:var(--sp-3)">
    <b style="font-size:var(--fs-sm)">هذه الصفحة للكبار</b>
    <p style="font-size:var(--fs-sm); line-height:1.6">للمتابعة، اختر ناتج: <b id="gateQ">٤ × ٣</b></p>
    <div class="grid3" id="adultOpts"></div>
    <p class="note">هذا السؤال يمنع الطفل من فتح صفحة التقارير بالخطأ.</p>
  </div>
  <div class="spacer"></div>
</section>
`,N=`<section class="screen" id="scReport" data-aud="parent" hidden>
  <header class="scr-head">
    <button class="btn icon back" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 style="font-size:var(--fs-xl)">تقرير التقدّم</h2><p class="note" id="repSub">—</p></div>
  </header>

  <div id="printHead" hidden style="margin-bottom:var(--sp-3)">
    <b style="font-size:var(--fs-md)" id="printName">—</b>
    <p class="note" id="printDate" style="margin:var(--sp-1) 0 0">—</p>
  </div>

  <div class="card" id="kidsCard" style="display:flex; flex-direction:column; gap:var(--sp-2)">
    <b style="font-size:var(--fs-sm)">ملفات الأطفال</b>
    <div id="kidsList" style="display:flex; flex-wrap:wrap; gap:var(--sp-2)"></div>
    <div style="display:flex; gap:var(--sp-2)">
      <input id="kidName" type="text" placeholder="اسم الطفل" style="flex:1 1 auto; min-width:0; padding:var(--sp-3) var(--sp-3); border-radius:var(--r-sm); border:1.5px solid var(--line); background:var(--surface); color:var(--ink); font-family:inherit; font-size:var(--fs-sm)">
      <button class="btn" id="kidAdd" type="button" style="flex:none">إضافة</button>
      <button class="btn" id="kidRename" type="button" style="flex:none">تسمية</button>
    </div>
    <button class="btn" id="kidDel" type="button">حذف ملف الطفل الحالي</button>
    <p class="note">بيانات كل طفل محفوظة وحدها على هذا الجهاز، وتبديل الطفل يبدّل التقرير والنقاط والتقدّم كاملة.</p>
  </div>

  <div class="card" id="settingsCard" style="display:flex; flex-direction:column; gap:var(--sp-2)">
    <b style="font-size:var(--fs-sm)">إعدادات</b>
    <button class="btn" id="leftyBtn" type="button" aria-pressed="false">وضع الطفل الأعسر: مُطفأ</button>
    <p class="note">يعكس موضع فقاعة المدرّب وأزرار الإجراء إلى جهة اليد اليسرى، ويضبط زاوية القلم المرجعية على ٤٨° بدل ٥٥°.</p>

    <label for="fitPad">مساحة الكتابة</label>
    <select id="fitPad">
      <option value="s">صغيرة</option>
      <option value="m" selected>متوسطة</option>
      <option value="l">كبيرة</option>
    </select>

    <label for="fitStroke">سُمك المسار</label>
    <select id="fitStroke">
      <option value="thin">رفيع</option>
      <option value="mid" selected>متوسط</option>
      <option value="thick">عريض</option>
    </select>

    <label for="fitTol">سماحية الدقة</label>
    <select id="fitTol">
      <option value="easy">متساهل — يقبل الخروج عن المسار</option>
      <option value="mid" selected>متوسط</option>
      <option value="strict">دقيق — يطلب خطًا قريبًا من المسار</option>
    </select>
    <p class="note">السماحية تغيّر ما يُحتسب «على المسار»، فترفع أو تخفض الدقة المعروضة. ابدئي متساهلة مع الطفل الجديد.</p>

    <button class="btn" id="motionBtn" type="button" aria-pressed="true">الحركة والرسوم المتحركة: مفعّلة</button>
    <button class="btn" id="repPrint" type="button">طباعة التقرير / حفظ PDF</button>
  </div>

  <div class="chips">
    <div class="chip"><b id="repSessions">٠</b><span>جلسة</span></div>
    <div class="chip"><b id="repAcc">—</b><span>متوسط الدقة</span></div>
    <div class="chip"><b id="repLift">—</b><span>رفع القلم</span></div>
    <div class="chip"><b id="repPts">٠</b><span>النقاط</span></div>
  </div>

  <div class="card">
    <b style="font-size:var(--fs-sm); display:block; margin-bottom:var(--sp-3)">دقة الكتابة في آخر الجلسات</b>
    <div class="bars" id="repBars"></div>
    <p class="note" id="repBarsNote" style="margin-top:var(--sp-6)">لا جلسات بعد.</p>
  </div>

  <div class="card">
    <b style="font-size:var(--fs-sm); display:block; margin-bottom:var(--sp-2)">مهام أُنجزت</b>
    <div id="repTasks" style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:var(--sp-2)"></div>
    <p class="note" style="margin-top:var(--sp-2)">هذه مهام أنهاها الطفل، وليست درجات إتقان. الدرجات أدناه تأتي من أداء مقيس فقط.</p>
  </div>

  <div class="card">
    <b style="font-size:var(--fs-sm); display:block; margin-bottom:var(--sp-2)">البوابات الثلاث — من أداء مقيس</b>
    <div class="meters">
      <div class="meter"><em>الصوت</em><i><b id="gVoice"></b></i><u id="gVoiceV">—</u></div>
      <div class="meter"><em>الشكل</em><i><b id="gShape"></b></i><u id="gShapeV">—</u></div>
      <div class="meter"><em>الحركة</em><i><b id="gMotor"></b></i><u id="gMotorV">—</u></div>
    </div>
    <p class="note" style="margin-top:var(--sp-2)">كل حرف يُقاس في ثلاث بوابات مستقلة: ربط الصوت بالشكل (بوابة الديسلكسيا)، تمييز الشكل عن شبيهه، وإنتاج الحركة باليد (بوابة الديسجرافيا). الصوت والشكل من بوابة التمييز، والحركة من دقة الكتابة واكتمالها. الضغط على زر «ردّدتها» أو «أنهيت» لا يرفع أي بوابة.</p>
  </div>

  <div class="card" id="repGripCard">
    <div class="row" style="margin-bottom:var(--sp-2)">
      <b style="font-size:var(--fs-sm)">قراءات القبضة (آخر جلسة)</b>
      <div class="spacer"></div>
      <button class="btn" id="repGripBtn" type="button" style="font-size:var(--fs-xs); padding:6px 12px">القبضة الذكية</button>
    </div>
    <p class="note" id="repGripSrc" style="margin:0 0 var(--sp-2)"></p>
    <div class="meters">
      <div class="meter"><em>قبضة اليد</em><i><b id="rgGrip"></b></i><u id="rgGripV">—</u></div>
      <div class="meter"><em>زاوية القلم</em><i><b id="rgAng"></b></i><u id="rgAngV">—</u></div>
      <div class="meter"><em>مستوى التوتر</em><i><b id="rgTen"></b></i><u id="rgTenV">—</u></div>
      <div class="meter"><em>الرجفة</em><i><b id="rgTre"></b></i><u id="rgTreV">—</u></div>
      <div class="meter"><em>التحكم بالقلم</em><i><b id="rgCtl"></b></i><u id="rgCtlV">—</u></div>
    </div>
    <p class="note" style="margin-top:var(--sp-2)">هذه القراءات <b>مقارنة بجلسات الطفل السابقة</b> لا بمعيار مرجعي لعمره. السهم يقارن آخر جلسة بمتوسط آخر ثلاث جلسات: ↑ ارتفاع، ↓ انخفاض، ↔ ثبات. و«مستوى التوتر» مؤشر حركي مستخرج من الضغط والرجفة، وليس قياسًا نفسيًا ولا تشخيصًا.</p>
  </div>

  <div class="card" style="background:var(--mint); border-color:transparent">
    <b style="font-size:var(--fs-sm); display:block; margin-bottom:var(--sp-2)">توصيات هذا الأسبوع</b>
    <p id="repTips" style="font-size:var(--fs-sm); line-height:1.7"></p>
  </div>

  <p class="note">كل الأرقام هنا مؤشرات تدريب على الحركة واللغة داخل التطبيق، وليست تشخيصًا طبيًا. البيانات محفوظة على هذا الجهاز وحده.</p>
  <div class="spacer"></div>
  <div class="seg">
    <button class="btn" id="repReset" type="button">حذف البيانات</button>
    <button class="btn primary back2" type="button" style="font-size:var(--fs-md)">تمّ</button>
  </div>
</section>
`,R=`<section class="screen" id="scGrip" hidden>
  <div class="row">
    <button class="btn icon gripBack" type="button" aria-label="رجوع">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg>
    </button>
    <div style="min-width:0">
      <h2 style="font-size:21px">القبضة الذكية</h2>
      <p class="note" id="gripSub">نوصّل القبضة بالتطبيق، ثم نعايرها على يدك.</p>
    </div>
    <div class="spacer"></div>
    <span class="pill" id="gripBatt" hidden>البطارية <b id="gripBattN">—</b></span>
  </div>

  <div class="card" id="gripCoach" style="background:var(--mint); border-color:transparent; display:flex; gap:11px; align-items:flex-start">
    <svg class="float" width="40" height="40" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="gripCoachText" aria-live="polite" style="font-size:15px; line-height:1.6; flex:1 1 auto; min-width:0">شبّك القبضة على قلمك، وشغّلها، ثم اضغط «ابحث عن القبضة».</p>
  </div>

  <!-- ١. الربط -->
  <div class="card" id="gripPair">
    <div class="row" style="align-items:center; gap:10px">
      <span class="dot" id="gripDot" aria-hidden="true" style="width:13px;height:13px;border-radius:50%;background:var(--line);flex:none"></span>
      <b id="gripStateText">غير موصولة</b>
      <div class="spacer"></div>
      <span class="note" id="gripDevName"></span>
    </div>
    <div class="seg" style="margin-top:10px">
      <button class="btn primary" id="gripFind" type="button">ابحث عن القبضة</button>
      <button class="btn" id="gripUsb" type="button">قبضة بسلك USB</button>
      <button class="btn" id="gripTry" type="button">تجربة بلا قبضة</button>
    </div>
    <p class="note" id="gripCaps" hidden style="margin-top:8px"></p>
    <p class="note" id="gripNoBt" hidden style="margin-top:8px">
      هذا المتصفّح لا يفتح البلوتوث. استعمل Chrome على أندرويد أو على الحاسب،
      أو اضغط «تجربة بلا قبضة» لترى الشاشة كما ستعمل.
    </p>
    <p class="note" id="gripNoUsb" hidden style="margin-top:8px">
      قراءة السلك تحتاج Chrome أو Edge على الحاسب (أو أندرويد مع وصلة USB-OTG).
    </p>
  </div>

  <!-- ٢. المعايرة -->
  <div class="card" id="gripCal" hidden>
    <b>المعايرة — خطوتان</b>
    <p class="note" style="margin:6px 0 10px">كل يد مختلفة. نقيس مدى يدك أنت، فتصبح كل الأرقام بعدها عنك لا عن غيرك.</p>
    <ol id="gripSteps" style="margin:0; padding-inline-start:20px; line-height:1.9">
      <li id="gripStep1">ضع القبضة على الطاولة وارفع يدك — <b id="gripStep1S">بالانتظار</b></li>
      <li id="gripStep2">امسك القلم واضغط بكل قوّتك ثلاث ثوانٍ — <b id="gripStep2S">بالانتظار</b></li>
    </ol>
    <div class="seg" style="margin-top:10px">
      <button class="btn" id="gripZero" type="button">١. صفّر</button>
      <button class="btn" id="gripMax" type="button">٢. اضغط بقوّة</button>
    </div>
    <p class="note" id="gripCalDate" hidden style="margin-top:8px"></p>
  </div>

  <!-- ٣. القراءة الحيّة -->
  <div class="card" id="gripLiveCard" hidden>
    <b>ما تقرأه القبضة الآن</b>
    <div id="gripWrap" style="position:relative; height:150px; margin:10px 0; background:var(--sunk); border-radius:var(--r); overflow:hidden">
      <canvas id="gripPad" style="position:absolute; inset:0; width:100%; height:100%"></canvas>
    </div>
    <div class="meters" id="gripMeters">
      <div class="meter"><em>قوّة العضلات</em><i><b id="mGForceBar"></b></i><u id="mGForceVal">—</u></div>
      <div class="meter"><em>المسكة الثلاثية</em><i><b id="mGTriBar"></b></i><u id="mGTriVal">—</u></div>
      <div class="meter"><em>زاوية القلم</em><i><b id="mGAngBar"></b></i><u id="mGAngVal">—</u></div>
      <div class="meter"><em>شدّ اليد</em><i><b id="mGTenBar"></b></i><u id="mGTenVal">—</u></div>
      <div class="meter"><em>ثبات اليد</em><i><b id="mGCtlBar"></b></i><u id="mGCtlVal">—</u></div>
    </div>
    <p class="note" id="gripLink" style="margin-top:8px"></p>
  </div>

  <div class="spacer"></div>
  <div class="seg">
    <button class="btn" id="gripOff" type="button" hidden>افصل</button>
    <button class="btn primary" id="gripGo" type="button" style="font-size:18px" hidden>هيّا نكتب!</button>
  </div>
</section>
`,D=`<section class="screen" id="scGripW" hidden>
  <header class="scr-head">
    <button class="btn icon gwBack" type="button" aria-label="رجوع"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 6l6 6-6 6"></path></svg></button>
    <div class="scr-head__txt"><h2 style="font-size:var(--fs-lg)" id="gwTitle">اكتب النون بالقبضة الذكية</h2><p class="note" id="gwSub">نلبس القبضة… ثم نكتب في صفحة بيضاء</p></div>
    <div class="spacer"></div>
    <span class="pill" id="gwTry" style="white-space:nowrap;flex:none" hidden>١ / ٣</span>
  </header>

  <div class="coach" id="gwCoach">
    <svg width="38" height="38" viewBox="0 0 150 150" aria-hidden="true" style="flex:none">
      <circle cx="75" cy="75" r="70" fill="var(--mascot)"></circle>
      <circle cx="56" cy="66" r="9" fill="#2A2520"></circle><circle cx="96" cy="66" r="9" fill="#2A2520"></circle>
      <path d="M54 96c12 12 30 12 42 0" fill="none" stroke="#2A2520" stroke-width="6" stroke-linecap="round"></path>
    </svg>
    <p id="gwText" aria-live="polite">حاول بنفسك.</p>
    <span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
  </div>

  <!-- ١) التجهيز: رسم متحرّك يُري الطفل كيف يستعمل القبضة، بلا تعليمات منطوقة -->
  <div id="gwPrep" class="gw-prep">
    <div class="card gw-hand" role="img" aria-label="رسم متحرّك: القبضة تُلبس على القلم، ثم تمسكه ثلاثة أصابع، ثم يكتب القلم">
      <svg viewBox="0 0 240 170" width="100%" height="190" aria-hidden="true">
        <!-- الصفحة والحرف الذي يُكتب في المشهد الثالث -->
        <rect x="14" y="112" width="212" height="50" rx="10" fill="#FFFFFF"></rect>
        <line x1="22" y1="146" x2="218" y2="146" stroke="#9FB6D8" stroke-width="1.5"></line>
        <path class="gwa-ink" d="M76 126 C76 144 60 152 46 150 C30 148 22 138 24 126" fill="none" stroke="#1E2746" stroke-width="4" stroke-linecap="round" pathLength="100"></path>
        <!-- القلم والقبضة والأصابع تتحرّك معًا -->
        <g class="gwa-hand">
          <g transform="rotate(-38 120 70)">
            <rect x="52" y="62" width="150" height="15" rx="7.5" fill="#F2C14E"></rect>
            <path d="M52 62 L34 69.5 L52 77 Z" fill="#E8D3A8"></path>
            <path d="M40 67 L34 69.5 L40 72 Z" fill="#2A2520"></path>
            <g class="gwa-grip">
              <rect x="64" y="57" width="42" height="25" rx="10" fill="var(--lilac-ink)"></rect>
              <circle class="gwa-led" cx="98" cy="64" r="3.4" fill="#8FE3BA"></circle>
            </g>
            <g class="gwa-fingers">
              <ellipse class="gwa-f1" cx="80" cy="52" rx="14" ry="8.5" fill="#E9B48A"></ellipse>
              <ellipse class="gwa-f2" cx="93" cy="54" rx="13" ry="8" fill="#E2A97E"></ellipse>
              <ellipse class="gwa-f3" cx="84" cy="88" rx="13" ry="8" fill="#D9A07A"></ellipse>
              <path class="gwa-palm" d="M108 44 C130 34 156 40 162 58 C166 72 150 92 128 92 C116 92 106 86 100 80" fill="#E9B48A"></path>
            </g>
          </g>
        </g>
      </svg>
      <div class="gwa-steps" aria-hidden="true"><i></i><i></i><i></i></div>
    </div>
    <div class="gw-link" id="gwS3">
      <span class="gw-linkic" aria-hidden="true"></span>
      <small id="gwLink">غير موصولة</small>
      <div class="spacer"></div>
      <button class="btn" id="gwConnect" type="button">وصّل</button>
      <button class="btn" id="gwSim" type="button">تجربة</button>
    </div>
    <p class="note" id="gwNoGrip" hidden>بلا قبضة نقرأ ما يرسله القلم الإلكتروني فقط، فتبقى بعض القراءات «غير مقيسة».</p>
    <button class="btn primary wide" id="gwStart" type="button" style="font-size:var(--fs-md)">ابدأ الكتابة</button>
    <button class="btn wide gw-paperbtn" id="gwPaper" type="button" hidden>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"></path><path d="M15 3v4h4"></path><path d="M9 12h7M9 16h5"></path></svg>
      أكتب على ورقة
    </button>
  </div>

  <!-- ٢) الكتابة في صفحة بيضاء، ثلاث مرّات، والقراءات حيّة -->
  <div id="gwWrite" hidden class="gw-write">
    <div class="sg-bar" id="gwBadge">
      <span class="sg-logo" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="30" height="30"><rect x="3" y="13" width="26" height="6" rx="3" transform="rotate(-35 16 16)" fill="#F2C14E"></rect><rect x="9" y="11" width="11" height="10" rx="4" transform="rotate(-35 16 16)" fill="currentColor"></rect><circle cx="16.5" cy="13.6" r="1.6" fill="#8FE3BA"></circle></svg>
      </span>
      <span class="sg-name"><b>Smart Grip</b><small id="gwLive"><i class="sg-dot"></i>تقرأ يدك الآن</small></span>
      <div class="spacer"></div>
      <span class="sg-eval" id="gwEval" aria-live="polite"><small>تقييم فوري</small><b id="gwStars">☆☆☆</b></span>
    </div>
    <div class="gw-top">
      <div class="gw-model" aria-label="الحرف المطلوب"><span class="naskh" id="gwGlyph">ن</span><small>انظر… ثم اكتب</small></div>
      <div class="gw-thumbs" aria-label="محاولاتك">
        <canvas id="gwT0" width="72" height="72"></canvas><canvas id="gwT1" width="72" height="72"></canvas><canvas id="gwT2" width="72" height="72"></canvas>
      </div>
    </div>
    <div id="gwWrap"><canvas id="gwPad" role="img" aria-label="صفحة مسطّرة — اكتب الحرف بالقلم"></canvas></div>
    <div class="card gw-meters idle" id="gwMeters">
      <div class="row" style="margin-bottom:var(--sp-2)"><b style="font-size:var(--fs-sm)">قراءات القياس</b><div class="spacer"></div><span class="note" id="gwSrc"></span></div>
      <div class="meters">
        <div class="meter"><em>التحكّم بالقلم</em><i><b id="gwmCtl"></b></i><u id="gwvCtl">—</u></div>
        <div class="meter"><em>قبضة اليد</em><i><b id="gwmGrip"></b></i><u id="gwvGrip">—</u></div>
        <div class="meter"><em>نسبة التوتر</em><i><b id="gwmTen"></b></i><u id="gwvTen">—</u></div>
        <div class="meter"><em>زاوية القلم</em><i><b id="gwmAng"></b></i><u id="gwvAng">—</u></div>
      </div>
    </div>
    <div class="gw-rate" id="gwRate" hidden role="group" aria-labelledby="gwRateQ">
      <p id="gwRateQ">كيف خرج الحرف على الورقة؟</p>
      <div class="gw-rate__row">
        <button class="btn" type="button" data-shape="90"><b aria-hidden="true">★★★</b>جميل</button>
        <button class="btn" type="button" data-shape="72"><b aria-hidden="true">★★</b>جيد</button>
        <button class="btn" type="button" data-shape="45"><b aria-hidden="true">★</b>يحتاج تدريبًا</button>
      </div>
    </div>
    <div class="seg" id="gwBtns">
      <button class="btn" id="gwClear" type="button">امسح</button>
      <button class="btn primary" id="gwDone" type="button" style="font-size:var(--fs-md)">انتهيت</button>
    </div>
  </div>

  <!-- ٣) النتيجة: هل أتقن الحرف؟ -->
  <div id="gwRes" hidden class="gw-res">
    <div class="card" style="text-align:center">
      <div class="naskh" id="gwResGlyph" style="font-size:64px; line-height:1.1">ن</div>
      <h3 id="gwResTitle" style="font-size:var(--fs-xl)">أتقنت الحرف!</h3>
      <p id="gwResLine" style="margin-top:var(--sp-1)"></p>
    </div>
    <div class="card" style="padding:var(--sp-3)">
      <b style="font-size:var(--fs-sm); display:block; margin-bottom:var(--sp-2)">قراءات القبضة في المحاولات الثلاث</b>
      <table class="gw-table" id="gwTable"></table>
      <p class="note" id="gwResSrc" style="margin-top:var(--sp-2)"></p>
    </div>
    <div class="card" id="gwDrillCard" hidden style="background:var(--mint); border-color:transparent">
      <b>تمرين يقوّي يدك قبل المرّة القادمة</b>
      <p id="gwDrillWhy" class="note" style="margin:var(--sp-1) 0 var(--sp-2)"></p>
      <button class="btn" id="gwDrill" type="button">افتح التمرين</button>
    </div>
    <div class="seg">
      <button class="btn" id="gwAgain" type="button">نعيدها</button>
      <button class="btn primary" id="gwHome" type="button">إلى الخريطة</button>
    </div>
  </div>
</section>
`,H=`<section class="screen wl" id="scWelcome" hidden>
  <div class="wl-hero">
    <svg class="wl-logo" width="76" height="76" viewBox="0 0 52 52" aria-hidden="true">
      <circle cx="26" cy="26" r="25" fill="var(--surface)"></circle>
      <path d="M11 34C19 34 19 17 27 17c7 0 7 13 14 13" fill="none" stroke="var(--peach-ink)" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 7"></path>
      <path d="M38 38l3-10 5 5z" fill="var(--mint-ink)"></path>
    </svg>
    <h1 class="wl-title">مَسار</h1>
    <p class="wl-tag">كل حرفٍ… مَسار</p>
  </div>

  <div class="card wl-card">
    <label class="wl-label" for="wlName">ما اسمك؟</label>
    <input type="text" id="wlName" maxlength="20" autocomplete="off" placeholder="اكتب اسمك هنا" enterkeyhint="done">

    <p class="wl-label" id="wlGLabel">أنت…</p>
    <div class="wl-pick" role="radiogroup" aria-labelledby="wlGLabel">
      <button class="wl-opt" id="wlBoy" type="button" role="radio" aria-checked="false" data-g="boy">
        <svg viewBox="0 0 120 120" width="92" height="92" aria-hidden="true">
          <circle cx="60" cy="60" r="56" fill="var(--sky)"></circle>
          <path d="M28 104c4-18 18-26 32-26s28 8 32 26" fill="var(--sky-ink)"></path>
          <circle cx="60" cy="54" r="24" fill="#EAB68C"></circle>
          <path d="M36 50c0-16 12-24 25-24 14 0 23 9 23 22-6-6-14-9-24-9-9 0-17 4-24 11z" fill="#3A2A1E"></path>
          <circle cx="51" cy="57" r="3" fill="#2A2520"></circle><circle cx="69" cy="57" r="3" fill="#2A2520"></circle>
          <path d="M52 67c5 4 11 4 16 0" fill="none" stroke="#2A2520" stroke-width="3" stroke-linecap="round"></path>
        </svg>
        <b>ولد</b>
      </button>
      <button class="wl-opt" id="wlGirl" type="button" role="radio" aria-checked="false" data-g="girl">
        <svg viewBox="0 0 120 120" width="92" height="92" aria-hidden="true">
          <circle cx="60" cy="60" r="56" fill="var(--peach)"></circle>
          <path d="M28 104c4-18 18-26 32-26s28 8 32 26" fill="var(--peach-ink)"></path>
          <path d="M33 60c0-20 12-34 27-34s27 14 27 34v24H33z" fill="#3A2A1E"></path>
          <circle cx="60" cy="56" r="23" fill="#EAB68C"></circle>
          <path d="M37 52c3-14 12-20 23-20s20 6 23 20c-8-7-15-10-23-10s-15 3-23 10z" fill="#3A2A1E"></path>
          <circle cx="83" cy="36" r="7" fill="var(--peach-ink)"></circle>
          <circle cx="51" cy="58" r="3" fill="#2A2520"></circle><circle cx="69" cy="58" r="3" fill="#2A2520"></circle>
          <path d="M52 68c5 4 11 4 16 0" fill="none" stroke="#2A2520" stroke-width="3" stroke-linecap="round"></path>
        </svg>
        <b>بنت</b>
      </button>
    </div>
  </div>

  <div class="spacer"></div>
  <button class="btn primary wide" id="wlGo" type="button" disabled>هيا نبدأ</button>
</section>
`,O=[w,k,x,z,M,B,A,C,T,S,j,G,P,L,E,V,W,_,F,N,R,D,H];function q(){document.body.insertAdjacentHTML("beforeend",m);const r=document.createElement("div");r.id="app",r.innerHTML=O.join(`
`),document.body.appendChild(r)}document.documentElement.setAttribute("lang","ar");document.documentElement.setAttribute("dir","rtl");q();y(()=>import("./boot-Ci7NsqSY.js"),[],import.meta.url);
