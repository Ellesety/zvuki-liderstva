// ========================================
// EDITABLE PROJECT CONTENT
// ========================================
const PROJECT = {
  // MAIN AMBIENT SOUND: plays after the user clicks "НАЧАТЬ ПУТЕШЕСТВИЕ", quietly under every story
  ambient: "assets/audio/ambient.mp3",             // ADD AUDIO FILE HERE
  ambientTitle: "Главный эмбиент",                  // CHANGE THIS TEXT
  ambientVolume: 0.5,                               // 0.1 (quiet) ... 1 (as loud as story sounds)
  aboutText: "Этот проект создан как попытка исследовать лидерство через историю, звук и интерактивный storytelling.", // CHANGE THIS TEXT
  meta: {
    "Авторы": "[ADD AUTHOR NAMES]",            // CHANGE THIS TEXT
    "Программа": "[ADD PROGRAM NAME]",         // CHANGE THIS TEXT
    "Дата": "[ADD DATE]",                      // CHANGE THIS TEXT
    "Ссылки": "[ADD LINKS]"                    // CHANGE THIS TEXT
  },
  sources: [ "[ADD SOURCE]", "[ADD SOURCE]", "[ADD SOURCE]" ], // books, archives, articles, audio, images
  qualities: ["АДАПТАЦИЯ","ВИДЕНИЕ","СМЕЛОСТЬ","ОТВЕТСТВЕННОСТЬ","СПОСОБНОСТЬ ОБЪЕДИНЯТЬ"]
};

const STORIES = [
  {
    id: "yohanan", era: "ДРЕВНОСТЬ",
    leader: "Йоханан бен Закай",
    year: "70 г. н. э.",                          // CHANGE THIS TEXT
    bg: "#1a1210", glow: "rgba(200,90,30,.30)",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_La_distruzione_del_tempio_di_Gerusalemme_-Francesco_Hayez_-_gallerie_Accademia_Venice.jpg/960px-%28Venice%29_La_distruzione_del_tempio_di_Gerusalemme_-Francesco_Hayez_-_gallerie_Accademia_Venice.jpg",
    imageAlt: "Разрушение Иерусалимского храма",
    imageSource: "https://commons.wikimedia.org/wiki/File:%28Venice%29_La_distruzione_del_tempio_di_Gerusalemme_-Francesco_Hayez_-_gallerie_Accademia_Venice.jpg",
    audio: "assets/audio/yohanan.mp3",             // ADD AUDIO FILE HERE
    audioTitle: "Далёкий город, огонь, шёпот, изучение текста",
    hook: "Представьте, что центр вашей цивилизации разрушен. Что вы будете спасать первым?",
    context: "Во время Иудейской войны Иерусалим и Второй Храм были разрушены (70 г. н. э.). Привычный мир древней Иудеи рухнул. Но рабби Йоханан бен Закай совершает невероятное: под видом покойника его в гробу тайком выносят из осажденного города прямо в римский лагерь к полководцу Веспасиану. Он предсказал тому императорскую власть, за что попросил лишь об одном — пощадить город Явне и его мудрецов. Там бен Заккай создал новый духовный и судебный центр. Бен Закай сделал гениальный лидерский шаг — перенес центр еврейской жизни из разрушенного здания Храма в Книгу, Учение и Молитву. И заменил жертвоприношения \"служением сердца\". В знак глубокого национального траура по утраченному Храму на любые музыкальные инструменты и песнопения был наложен строгий запрет. Все псалмы читались исполнялись без инструментов — а капелла.",
    note: "",
    dilemma: "Храма больше нет. Общине нужен способ продолжать жить. Что вы делаете?",
    options: [
      { text: "Пытаюсь любой ценой восстановить прежний порядок", quality: "СМЕЛОСТЬ",
        explain: "Это подход, ориентированный на возвращение утраченного. Он требует решимости, но в условиях разрушения может не иметь опоры. [ADD SOURCE]" },
      { text: "Создаю новый центр, где сохранится изучение и общая жизнь", quality: "АДАПТАЦИЯ",
        explain: "Этот подход близок к тому, как традиция описывает Явне: идентичность сохраняется через изучение и общину, а не только через здание. [SOURCE NEEDED]" },
      { text: "Собираю людей и договариваюсь о новых общих правилах", quality: "СПОСОБНОСТЬ ОБЪЕДИНЯТЬ",
        explain: "Это подход, где главное — удержать общность. Историки по-разному оценивают роль Явне; добавьте источники. [ADD SOURCE]" }
    ],
    quality: "АДАПТАЦИЯ",
    qualityText: "Сохранить главное, изменив форму.",
    verse: "И мы принесем [слова] уст наших вместо тельцов» (Осия 14:3)",
    verseSource: "",
    quote: "", quoteSource: ""
  },
  {
    id: "herzl", era: "СИОНИЗМ",
    leader: "Теодор Герцль",
    year: "1896–1897",
    bg: "#14161a", glow: "rgba(120,150,190,.28)",
    image: "assets/images/herzl.jpg",             // ADD IMAGE HERE
    imageAlt: "Портрет или архивное фото. [ADD IMAGE + CREDIT]",
    audio: "assets/audio/herzl.mp3",              // ADD AUDIO FILE HERE
    audioTitle: "Венское кафе, страницы, пишущая машинка",
    hook: "Как убедить людей в том, чего ещё не существует?",
    context: "В 1896 году вышла книга Герцля «Еврейское государство», а в 1897 в Базеле прошёл Первый сионистский конгресс. [SOURCE NEEDED: подтвердить даты и детали по источнику]",
    note: "Подробности личных обстоятельств Герцля добавляйте только из проверенных источников.",
    dilemma: "У вас есть идея, но нет государства, армии и денег. С чего начать?",
    options: [
      { text: "Изложить идею письменно и сделать её публичной", quality: "ВИДЕНИЕ",
        explain: "Подход, где лидер сначала создаёт язык и образ будущего. Герцль действительно опубликовал программную работу. [ADD SOURCE]" },
      { text: "Созвать людей из разных стран на общий съезд", quality: "СПОСОБНОСТЬ ОБЪЕДИНЯТЬ",
        explain: "Подход, где идея становится движением через встречу. Такой формат был у Базельского конгресса. [ADD SOURCE]" },
      { text: "Искать поддержки у влиятельных политиков", quality: "СМЕЛОСТЬ",
        explain: "Подход дипломатический: он требует риска и терпения. Конкретные встречи Герцля указывайте только по источникам. [SOURCE NEEDED]" }
    ],
    quality: "ВИДЕНИЕ",
    qualityText: "Увидеть будущее раньше, чем оно станет реальностью.",
    quote: "[ADD VERIFIED QUOTE]", quoteSource: "[ADD SOURCE]"
  },
  {
    id: "ben-gurion", era: "1948",
    leader: "Давид Бен-Гурион",
    year: "1948",
    bg: "#18130e", glow: "rgba(210,170,80,.28)",
    image: "assets/images/ben-gurion.jpg",       // ADD IMAGE HERE
    imageAlt: "Архивное фото 1948 года. [ADD IMAGE + CREDIT]",
    audio: "assets/audio/ben-gurion.mp3",        // ADD AUDIO FILE HERE
    audioTitle: "Радио, помехи, голоса, толпа",
    hook: "Что делать, если решать нужно сейчас, а последствия неизвестны?",
    context: "14 мая 1948 года была провозглашена независимость Израиля; Бен-Гурион возглавлял Еврейское агентство и временное правительство. [SOURCE NEEDED: проверить формулировки и контекст]",
    note: "Ход обсуждений накануне декларации описывайте только по документам.",
    dilemma: "Времени мало, риски велики, мнения расходятся. Как вы решите?",
    options: [
      { text: "Действовать сейчас, принимая риск", quality: "СМЕЛОСТЬ",
        explain: "Подход, где решительность ценится выше полной уверенности. [ADD SOURCE]" },
      { text: "Взвесить последствия и взять на себя ответственность за исход", quality: "ОТВЕТСТВЕННОСТЬ",
        explain: "Подход, где лидер связывает решение с его ценой для людей. [ADD SOURCE]" },
      { text: "Добиваться, чтобы решение поддержало как можно больше людей", quality: "СПОСОБНОСТЬ ОБЪЕДИНЯТЬ",
        explain: "Подход, где легитимность важна так же, как скорость. [ADD SOURCE]" }
    ],
    quality: "ОТВЕТСТВЕННОСТЬ",
    qualityText: "Решать, зная, что цена решения ляжет на других.",
    quote: "[ADD VERIFIED QUOTE]", quoteSource: "[ADD SOURCE]"
  }
];

// Extra timeline eras without a story yet (optional, shown as "скоро")
const EXTRA_ERAS = ["СРЕДНЕВЕКОВЬЕ", "ХАСИДИЗМ", "СОВРЕМЕННОСТЬ"]; // CHANGE THIS TEXT

// Quiz: each answer adds a point to a quality. Edit freely.
const QUIZ = [
  { q: "Перед вами неизвестность. Ваш первый шаг?", a: [
    ["Пойму, что важно сохранить", "АДАПТАЦИЯ"], ["Представлю, каким должно быть будущее", "ВИДЕНИЕ"],
    ["Начну действовать", "СМЕЛОСТЬ"], ["Оценю, кого это затронет", "ОТВЕТСТВЕННОСТЬ"] ] },
  { q: "В команде разногласия. Что вы сделаете?", a: [
    ["Найду общую цель", "СПОСОБНОСТЬ ОБЪЕДИНЯТЬ"], ["Предложу новый формат работы", "АДАПТАЦИЯ"],
    ["Возьму решение на себя", "ОТВЕТСТВЕННОСТЬ"], ["Покажу картину будущего", "ВИДЕНИЕ"] ] },
  { q: "Что для вас важнее в лидере?", a: [
    ["Смелость идти первым", "СМЕЛОСТЬ"], ["Умение объединять", "СПОСОБНОСТЬ ОБЪЕДИНЯТЬ"],
    ["Готовность отвечать за итог", "ОТВЕТСТВЕННОСТЬ"], ["Гибкость", "АДАПТАЦИЯ"] ] },
  { q: "Проект провалился. Что дальше?", a: [
    ["Пересоберу план под новые условия", "АДАПТАЦИЯ"], ["Напомню людям, зачем мы начали", "ВИДЕНИЕ"],
    ["Признаю ошибку и отвечу за неё", "ОТВЕТСТВЕННОСТЬ"], ["Соберу команду заново", "СПОСОБНОСТЬ ОБЪЕДИНЯТЬ"] ] }
];
const PROFILES = {
  "АДАПТАЦИЯ": "Вы чаще обращаете внимание на то, что важно сохранить, когда условия меняются.",
  "ВИДЕНИЕ": "Вы чаще обращаете внимание на долгосрочное видение.",
  "СМЕЛОСТЬ": "Вы чаще обращаете внимание на готовность действовать и рисковать.",
  "ОТВЕТСТВЕННОСТЬ": "Вы чаще обращаете внимание на цену решений для людей.",
  "СПОСОБНОСТЬ ОБЪЕДИНЯТЬ": "Вы чаще обращаете внимание на общность и общие цели."
};

// ========================================
// ENGINE (you normally do not need to edit below)
// ========================================
const $ = (s, r = document) => r.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
const esc = s => String(s).replace(/[&<>\"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---- Audio controller ----
const Sound = {
  audio: new Audio(), amb: new Audio(), on: true, title: "Тишина", status: null,
  pauseButton: null, storyReady: false, storyPaused: false,
  ambStarted: false, vol: 0.7, ducked: false, fadeT: null,
  ambTarget() { return Math.min(1, this.vol * PROJECT.ambientVolume); },
  updateStoryButton() {
    if (!this.pauseButton) return;
    this.pauseButton.disabled = !this.storyReady;
    this.pauseButton.textContent = this.audio.paused
      ? "▶ ПРОДОЛЖИТЬ ЗВУК ЭПОХИ"
      : "⏸ ПАУЗА ЗВУКА ЭПОХИ";
  },
  toggleStory() {
    if (!this.on || !this.storyReady || !this.audio.src || this.audio.ended) return;
    if (this.audio.paused) {
      this.storyPaused = false;
      this.duck(true);
      this.resume();
    } else {
      this.audio.pause();
      this.storyPaused = true;
      this.duck(false);
    }
    this.updateStoryButton();
  },
  fadeAmb(to, done) {
    clearInterval(this.fadeT);
    this.fadeT = setInterval(() => {
      const d = to - this.amb.volume;
      if (Math.abs(d) < 0.03) { this.amb.volume = to; clearInterval(this.fadeT); if (done) done(); }
      else this.amb.volume = Math.max(0, Math.min(1, this.amb.volume + Math.sign(d) * 0.03));
    }, 60);
  },
  // Ambient fades out while an era sound plays, then fades back in when the era sound ends or is paused
  duck(on) {
    if (on === this.ducked) return;
    this.ducked = on;
    if (on) { this.fadeAmb(0, () => { if (this.ducked) this.amb.pause(); }); return; }
    if (!this.on || !this.ambStarted || !this.amb.src) return;
    if (this.amb.paused) { this.amb.volume = 0; const p = this.amb.play(); if (p && p.catch) p.catch(() => {}); }
    this.fadeAmb(this.ambTarget());
  },
  startAmbient() {
    if (this.ambStarted) return;
    this.ambStarted = true;
    const base = PROJECT.ambient.replace(/\.[^./]+$/, "");
    const q = [PROJECT.ambient, ...["mp3", "wav", "ogg", "m4a"].map(e => base + "." + e).filter(x => x !== PROJECT.ambient)];
    const tryNext = () => { if (!q.length) { this.ambOk = false; this.ui(); return; } this.amb.src = q.shift(); if (this.on) { const p = this.amb.play(); if (p && p.catch) p.catch(() => {}); } };
    this.amb.onerror = tryNext; this.amb.loop = true; this.ambOk = true;
    this.setVol(this.vol); tryNext(); this.ui();
  },
  setVol(v) { this.vol = v; this.audio.volume = v; if (!this.ducked) { clearInterval(this.fadeT); this.amb.volume = this.ambTarget(); } },
  init() {
    this.audio.loop = false; this.audio.volume = 0.7; // era sounds play once, then the ambient returns
    this.audio.addEventListener("playing", () => {
      this.storyReady = true;
      this.duck(true);
      this.updateStoryButton();
    });
    this.audio.addEventListener("pause", () => this.updateStoryButton());
    this.audio.addEventListener("ended", () => {
      this.storyReady = false;
      this.duck(false);
      this.updateStoryButton();
    });
    this.audio.addEventListener("error", () => this.next());
    $("#soundToggle").onclick = () => this.toggle();
    $("#playPause").onclick = () => {
      const paused = this.audio.paused && (this.amb.paused || !this.amb.src);
      if (paused) {
        if (this.audio.src && !this.audio.ended && !this.storyPaused) this.resume();
        if (this.amb.src && !this.ducked) this.amb.play().catch(() => {});
      } else {
        this.audio.pause();
        this.amb.pause();
      }
      this.ui();
    };
    $("#volume").oninput = e => this.setVol(+e.target.value);
    this.amb.onplay = this.amb.onpause = () => this.ui();
    this.audio.onplay = this.audio.onpause = () => { this.ui(); this.updateStoryButton(); };
  },
  play(src, title, statusEl, pauseButton) {
    this.startAmbient();
    this.storyPaused = false;
    this.status = statusEl;
    this.pauseButton = pauseButton || null;
    this.storyReady = false;
    this.updateStoryButton();
    if (statusEl) statusEl.textContent = "";
    this.title = title;
    // Tries the file you set, then the same name with other extensions (mp3, wav, ogg, m4a)
    const base = src.replace(/\.[^./]+$/, "");
    this.queue = [src, ...["mp3", "wav", "ogg", "m4a"].map(e => base + "." + e).filter(x => x !== src)];
    this.next();
  },
  next() {
    if (!this.queue || !this.queue.length) return this.fail();
    this.audio.src = this.queue.shift();
    if (!this.on) { this.ui(); return; }
    this.resume();
  },
  resume() {
    const p = this.audio.play();
    if (p && p.catch) p.catch(e => { if (e && e.name === "NotAllowedError") return; /* browser waits for a click */ });
  },
  fail() {
    // If the ambient is playing, keep showing it in the small player; the message stays inside the story panel
    this.title = (this.ambStarted && this.ambOk) ? "Тишина" : "Audio file not added yet";
    this.duck(false);
    if (this.status) this.status.textContent = "Audio file not added yet";
    this.storyReady = false;
    this.updateStoryButton();
    this.ui();
  },
  toggle() {
    this.on = !this.on;
    if (!this.on) { this.audio.pause(); this.amb.pause(); }
    else {
      if (this.audio.src && !this.audio.ended && !this.storyPaused) this.resume();
      if (this.ambStarted && this.amb.src && !this.ducked) this.amb.play().catch(() => {});
    }
    this.ui();
  },
  ui() {
    const playing = this.on && ((!this.audio.paused && !this.audio.error) || (!this.amb.paused && !this.amb.error));
    document.body.classList.toggle("playing", playing);
    const b = $("#soundToggle");
    b.textContent = this.on ? "🔊 SOUND ON" : "🔇 SOUND OFF";
    b.setAttribute("aria-pressed", this.on);
    $("#nowPlaying").textContent = (this.title === "Тишина" && this.ambStarted && this.ambOk) ? PROJECT.ambientTitle : this.title;
  }
};

// ---- Build page ----
function build() {
  $("#aboutText").textContent = PROJECT.aboutText;
  $("#aboutMeta").innerHTML = Object.entries(PROJECT.meta).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("");
  $("#sourceList").innerHTML = PROJECT.sources.map(s => `<li>${esc(s)}</li>`).join("");
  $("#qualities").innerHTML = PROJECT.qualities.map(q => `<li>${esc(q)}</li>`).join("");
  $(".bigwave").innerHTML = Array.from({ length: 48 }, (_, i) => `<i style="animation-delay:${(i % 12) * .12}s"></i>`).join("");

  const nav = $("#eraNav"), tl = $("#timeline");
  const playStory = (story, section) => {
    const player = $(".player", section);
    player.classList.add("open");
    Sound.play(story.audio, story.audioTitle, $(".status", section), $(".story-pause", section));
  };

  STORIES.forEach((s, i) => {
    const b = el("button", "", esc(s.era)); b.dataset.id = s.id;
    b.onclick = () => { const section = $("#" + s.id); section.scrollIntoView(); playStory(s, section); };
    nav.append(b);

    const sec = el("article", "story era"); sec.id = s.id; sec.dataset.era = s.id;
    sec.innerHTML = `<div class="wrap">
      <span class="year">${esc(s.era)} · ${esc(s.year)}</span>
      <h2 class="reveal">${esc(s.leader)}</h2>
      <p class="hook reveal">${esc(s.hook)}</p>
      <div class="fig reveal"><span>${esc(s.imageAlt)}${s.imageSource ? `<br><a href="${esc(s.imageSource)}" target="_blank" rel="noopener noreferrer">Wikimedia Commons — фото Didier Descouens, CC BY-SA 4.0</a>` : ""}</span><img src="${esc(s.image)}" alt="${esc(s.imageAlt)}" loading="lazy"></div>
      <p class="reveal">${esc(s.context)}</p>
      ${s.note ? `<p class="note reveal">${esc(s.note)}</p>` : ""}
      ${s.verse ? `<blockquote class="quote verse reveal">${esc(s.verse)}<br><small>${esc(s.verseSource || "")}</small></blockquote>` : ""}
      <button class="btn reveal listen">▶ СЛУШАТЬ ЭПОХУ</button>
      <div class="player" role="region" aria-label="Аудио: ${esc(s.leader)}">
        <strong>${esc(s.audioTitle)}</strong>
        <div class="status" aria-live="polite"></div>
        <button class="btn story-pause" type="button" disabled>⏸ ПАУЗА ЗВУКА ЭПОХИ</button>
      </div>
      <h3 class="reveal" style="font-weight:400;font-size:1.6rem;margin-top:48px">${esc(s.dilemma)}</h3>
      <p class="reveal" style="color:var(--mut)">Что бы вы сделали?</p>
      <div class="options"></div>
      <div class="result" aria-live="polite"></div>
    </div>`;
    const img = $("img", sec); img.onerror = () => img.remove();
    $(".listen", sec).onclick = () => playStory(s, sec);
    $(".story-pause", sec).onclick = () => Sound.toggleStory();
    s.options.forEach(o => {
      const ob = el("button", "opt reveal", esc(o.text));
      ob.onclick = () => {
        $(".opt", sec).forEach(x => x.classList.remove("chosen")); ob.classList.add("chosen");
        const next = STORIES[i + 1];
        const r = $(".result", sec);
        r.innerHTML = `<p><em>Этот выбор показывает один из возможных подходов к лидерству.</em></p>
          <p>${esc(o.explain)}</p>
          <p class="note">Лидерское качество этой эпохи:</p>
          <div class="quality">${esc(s.quality)}</div><p>${esc(s.qualityText)}</p>
          ${s.quote ? `<blockquote class="quote">${esc(s.quote)}<br><small>${esc(s.quoteSource)}</small></blockquote>` : ""}
          <button class="btn primary next">ПЕРЕЙТИ К СЛЕДУЮЩЕЙ ЭПОХЕ →</button>`;
        r.classList.add("open");
        $(".next", r).onclick = () => {
          if (next) { const nextSection = $("#" + next.id); nextSection.scrollIntoView(); playStory(next, nextSection); }
          else $("#final").scrollIntoView();
        };
      };
      $(".options", sec).append(ob);
    });
    tl.append(sec);
  });
  EXTRA_ERAS.forEach(e => { const b = el("button", "", esc(e)); b.disabled = true; b.style.opacity = .4; b.title = "Скоро"; nav.append(b); });
  const fb = el("button", "", "ФИНАЛ"); fb.dataset.id = "final"; fb.onclick = () => $("#final").scrollIntoView(); nav.append(fb);
}
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// ---- Quiz ----
let qi = 0, score = {};
function quiz() {
  const box = $("#quiz");
  if (qi >= QUIZ.length) {
    const top = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
    box.innerHTML = `<div class="quality">${esc(top)}</div><p>${esc(PROFILES[top])}</p><p class="note">Это не оценка, а описание вашего текущего акцента.</p><button class="btn" id="again">ПРОЙТИ ЕЩЁ РАЗ</button>`;
    $("#again").onclick = () => { qi = 0; score = {}; quiz(); };
    return;
  }
  const q = QUIZ[qi];
  box.innerHTML = `<h3 style="font-weight:400;font-size:1.5rem">${qi + 1}/${QUIZ.length}. ${esc(q.q)}</h3><div class="q-opts"></div>`;
  q.a.forEach(([t, k]) => {
    const b = el("button", "opt", esc(t));
    b.onclick = () => { score[k] = (score[k] || 0) + 1; qi++; quiz(); };
    $(".q-opts", box).append(b);
  });
}

// ---- Scroll: reveal, active era, progress, parallax ----
function observe() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("seen"); $(".fig", e.target)?.classList.add("seen"); }
  }), { threshold: .15 });
  $$(".reveal, .fig").forEach(n => io.observe(n));

  const eio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const s = STORIES.find(x => x.id === e.target.id);
    document.body.dataset.era = e.target.id;
    const root = document.documentElement.style;
    root.setProperty("--bg", s ? s.bg : "#14110f");
    root.setProperty("--glow", s ? s.glow : "rgba(193,39,45,.25)");
    $$("#eraNav button").forEach(b => b.classList.toggle("on", b.dataset.id === e.target.id));
  }), { threshold: .4 });
  $$(".story, .final").forEach(n => eio.observe(n));

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  addEventListener("scroll", () => {
    const h = document.documentElement;
    $("#progress").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  }, { passive: true });
  if (!reduce) addEventListener("scroll", () => {
    $$(".fig img").forEach(im => { const r = im.parentElement.getBoundingClientRect(); im.style.objectPosition = `50% ${50 + (r.top / innerHeight - .5) * 20}%`; });
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  build(); quiz(); observe(); Sound.init(); Sound.ui();
  $("#startBtn").onclick = () => {
    Sound.startAmbient();
    $("#timeline").scrollIntoView({ behavior: "smooth" });
  };
});
