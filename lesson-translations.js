/* Multilingual lesson display for کودک سالم.
   This file is designed to load AFTER app.js. */
const lessonTranslations = {
  wudu:{
    fa:{title:"آموزش وضو",description:"با گام‌های ساده با ترتیب کلی وضو آشنا شو.",steps:["۱. نیت در دل و گفتن بسم‌الله","۲. شستن دست‌ها، دهان و بینی","۳. شستن صورت و دست‌ها تا آرنج","۴. مسح سر و شستن پاها تا قوزک"]},
    ps:{title:"د اوداسه زده کړه",description:"د اوداسه له عمومي ترتیب سره په ساده پړاوونو کې بلد شه.",steps:["۱. په زړه کې نیت وکړه او بسم الله ووایه.","۲. لاسونه، خوله او پوزه ووینځه.","۳. مخ او لاسونه تر څنګلو پورې ومینځه.","۴. د سر مسح وکړه او پښې تر بجلکو پورې ومینځه."]},
    en:{title:"Learning Wudu",description:"Learn the general order of ablution through simple steps.",steps:["1. Make the intention in your heart and say Bismillah.","2. Wash your hands, mouth, and nose.","3. Wash your face and arms up to the elbows.","4. Wipe your head and wash your feet up to the ankles."]}
  },
  prayer:{
    fa:{title:"آشنایی با نماز",description:"با آمادگی و مراحل کلی نماز آشنا شو.",steps:["۱. پاکی، پوشش مناسب و رو به قبله بودن","۲. نیت در دل و تکبیر آغاز نماز","۳. قرائت، رکوع و سجده با آرامش","۴. نشستن پایانی و سلام"]},
    ps:{title:"له لمانځه سره پېژندنه",description:"د لمانځه له چمتووالي او عمومي پړاوونو سره بلد شه.",steps:["۱. پاکوالی، مناسب لباس او قبلې ته مخ کول.","۲. په زړه کې نیت او د لمانځه د پیل تکبیر.","۳. قرائت، رکوع او سجده په ارامۍ ترسره کړه.","۴. په پای کې کېنه او سلام وګرځوه."]},
    en:{title:"Getting to Know Prayer",description:"Learn how to prepare for prayer and its general steps.",steps:["1. Be clean, wear suitable clothing, and face the Qibla.","2. Make the intention in your heart and begin with the opening takbir.","3. Recite, bow, and prostrate calmly.","4. Sit at the end and say the closing salam."]}
  },
  pillars:{
    fa:{title:"پنج رکن اسلام",description:"با پنج رکن اسلام و معنی سادهٔ هر کدام آشنا شو.",steps:["۱. شهادتین","۲. برپا داشتن نماز","۳. پرداخت زکات برای افراد واجد شرایط","۴. روزهٔ ماه رمضان","۵. حج برای فرد دارای استطاعت"]},
    ps:{title:"د اسلام پنځه بناوې",description:"د اسلام پنځه بناوې او د هرې یوې ساده معنا زده کړه.",steps:["۱. شهادتین ویل.","۲. لمونځ کول.","۳. د شرایطو پوره کوونکو لپاره زکات ورکول.","۴. د رمضان میاشتې روژه نیول.","۵. د وس لرونکي کس لپاره حج کول."]},
    en:{title:"The Five Pillars of Islam",description:"Learn the five pillars of Islam and what each means.",steps:["1. The declaration of faith.","2. Performing prayer.","3. Giving zakat when eligible.","4. Fasting during Ramadan.","5. Hajj for those who are able."]}
  },
  "jafari-wudu":{
    fa:{title:"وضو در فقه جعفری",description:"آشنایی مقدماتی با ترتیب وضو در فقه جعفری؛ محتوای نهایی باید بازبینی شود.",steps:["۱. نیت وضو برای اطاعت از خدا؛ نیت در دل است.","۲. شستن صورت از بالا به پایین.","۳. شستن دست راست و سپس دست چپ از آرنج تا نوک انگشتان.","۴. با رطوبت باقی‌ماندهٔ دست، جلوی سر را مسح کن.","۵. با همان رطوبت روی پای راست و سپس پای چپ را مسح کن؛ در روش معمول جعفری پاها شسته نمی‌شوند.","برای جزئیات از مرجع معتبر و آموزگار آگاه بیاموز."]},
    ps:{title:"د جعفري فقه له مخې اودس",description:"د جعفري فقه له مخې د اوداسه له ترتیب سره لومړنۍ پېژندنه؛ محتوا دې کارپوه وڅېړي.",steps:["۱. د خدای د اطاعت لپاره په زړه کې نیت وکړه.","۲. مخ له پورته څخه ښکته ومینځه.","۳. لومړی ښی او بیا کیڼ لاس له څنګل څخه د ګوتو تر څوکو ومینځه.","۴. د لاس په پاتې لندبل د سر مخکینۍ برخه مسح کړه.","۵. په هماغه لندبل د ښي او بیا د کیڼې پښې پر سر مسح وکړه؛ په معمول جعفري طریقه کې پښې نه مینځل کېږي.","د جزئیاتو لپاره له باوري عالم او ښوونکي څخه زده کړه."]},
    en:{title:"Wudu in Ja'fari Jurisprudence",description:"An introductory lesson on Ja'fari ablution; a qualified reviewer should check the final content.",steps:["1. Intend in your heart to perform wudu in obedience to God.","2. Wash the face from top to bottom.","3. Wash the right hand, then the left, from elbows to fingertips.","4. Use the remaining moisture on your hand to wipe the front of your head.","5. With that moisture, wipe the top of the right foot and then the left; in the usual Ja'fari method, the feet are wiped, not washed.","Learn details from a trusted qualified teacher."]}
  },
  "jafari-prayer":{
    fa:{title:"آموزش نماز در فقه جعفری",description:"مراحل پایهٔ نماز در فقه جعفری؛ برای یادگیری عملی از آموزگار آگاه کمک بگیر.",steps:["۱. پاکی، پوشش مناسب و رو به قبله بودن را بررسی کن.","۲. نیت نماز در دل است؛ سپس تکبیرةالاحرام را بگو.","۳. قرائت را مطابق آموزش معتبر فقه جعفری انجام بده.","۴. رکوع کن و با آرامش بایست.","۵. دو سجدهٔ هر رکعت را درست انجام بده.","۶. تشهد و سلام را مطابق آموزش معتبر به‌جا بیاور.","جزئیات باید توسط کارشناس فقه جعفری بازبینی شوند."]},
    ps:{title:"د جعفري فقه له مخې د لمانځه زده کړه",description:"د لمانځه بنسټیز پړاوونه؛ د عملي زده کړې لپاره له پوه ښوونکي مرسته وغواړه.",steps:["۱. پاکوالی، مناسب لباس او قبلې ته مخ کول وګوره.","۲. نیت په زړه کې وي؛ بیا تکبیرةالاحرام ووایه.","۳. قرائت د جعفري فقهې له باوري لارښوونې سره سم ترسره کړه.","۴. رکوع وکړه او په ارامۍ بېرته ودرېږه.","۵. د هر رکعت دوه سجدې په سمه طریقه ترسره کړه.","۶. تشهد او سلام د باوري لارښوونې له مخې ادا کړه.","جزئیات دې د جعفري فقهې کارپوه وڅېړي."]},
    en:{title:"Prayer in Ja'fari Jurisprudence",description:"Learn basic prayer steps in the Ja'fari tradition. Ask a qualified teacher for practical guidance.",steps:["1. Check cleanliness, suitable clothing, and that you face the Qibla.","2. The intention is in the heart; then say the opening takbir.","3. Recite according to trusted Ja'fari guidance.","4. Bow, then stand calmly again.","5. Perform the two prostrations of each prayer unit correctly.","6. Perform tashahhud and salam according to trusted guidance.","A qualified Ja'fari reviewer should check detailed rulings before publication."]}
  },
  "jafari-pillars":{
    fa:{title:"ارکان نماز و اصول دین در فقه جعفری",description:"شناخت مقدماتی ارکان نماز و اصول اعتقادی در مذهب جعفری.",steps:["اصول دین در آموزش رایج جعفری: توحید، عدل، نبوت، امامت و معاد.","از ارکان نماز: نیت، تکبیرةالاحرام، قیام مرتبط، رکوع و دو سجدهٔ هر رکعت.","احکام ترک یا افزودن سهوی و عمدی تفصیلی است؛ این فهرست فتوا نیست.","این درس باید توسط عالم آگاه به فقه جعفری بازبینی شود."]},
    ps:{title:"د جعفري فقه له مخې د لمانځه ارکان او د دین اصول",description:"په جعفري مذهب کې د لمانځه د ارکانو او عقیدوي اصولو لومړنۍ پېژندنه.",steps:["د دین اصول: توحید، عدل، نبوت، امامت او معاد.","د لمانځه له ارکانو څخه نیت، تکبیرةالاحرام، اړوند قیام، رکوع او دوه سجدې دي.","د تېروتنې یا قصدي پرېښودلو او زیاتولو احکام تفصیلي دي؛ دا لېست فتوا نه ده.","دا درس دې د جعفري فقهې عالم وڅېړي."]},
    en:{title:"Prayer Essentials and Principles of Faith in Ja'fari Tradition",description:"An introductory overview of prayer essentials and beliefs in the Ja'fari tradition.",steps:["Commonly taught principles: divine unity, divine justice, prophethood, imamate, and resurrection.","Commonly listed prayer essentials include intention, the opening takbir, relevant standing postures, bowing, and two prostrations in each unit.","Detailed rulings apply to omissions or additions; this list is not a religious ruling.","A qualified Ja'fari scholar should review this lesson."]}
  },
  apple:{
    fa:{title:"یک سیب، سه زبان",description:"نام یک میوه را در فارسی، پشتو و انگلیسی تمرین کن.",steps:["فارسی: سیب 🍎","پشتو: مڼه 🍎","English: Apple 🍎"]},
    ps:{title:"یوه مڼه، درې ژبې",description:"د یوې مېوې نوم په پښتو، فارسي او انګلیسي کې زده کړه.",steps:["پښتو: مڼه 🍎","فارسي: سیب 🍎","English: Apple 🍎"]},
    en:{title:"One Apple, Three Languages",description:"Practice a fruit name in Persian, Pashto, and English.",steps:["English: Apple 🍎","Persian: سیب 🍎","Pashto: مڼه 🍎"]}
  },
  numbers:{
    fa:{title:"بازی با عددها",description:"با بازی عددهای کوچک را بشمار و بشناس.",steps:["۱ — یک ☝️","۲ — دو ✌️","۳ — سه 🤟","آفرین! از یک تا سه بشمار."]},
    ps:{title:"له شمېرو سره لوبه",description:"د لوبې له لارې کوچنۍ شمېرې وشمېره او وپېژنه.",steps:["۱ — یو ☝️","۲ — دوه ✌️","۳ — درې 🤟","آفرین! له یوه تر درې پورې وشمېره."]},
    en:{title:"Number Game",description:"Count and recognize small numbers through play.",steps:["1 — One ☝️","2 — Two ✌️","3 — Three 🤟","Great job! Count from one to three."]}
  },
  kindness:{
    fa:{title:"مهربانی و همکاری",description:"با یک داستان کوتاه مهربانی و کمک به دیگران را تمرین کن.",steps:["به حرف دوستت گوش بده.","اسباب‌بازی را نوبتی استفاده کن.","وقتی کسی کمک می‌خواهد، با بزرگ‌تر مورداعتماد صحبت کن."]},
    ps:{title:"مهرباني او همکاري",description:"د یوې لنډې کیسې له لارې مهرباني او مرسته تمرین کړه.",steps:["د خپل ملګري خبرو ته غوږ ونیسه.","لوبتکه په وار وار وکاروئ.","که څوک مرستې ته اړتیا ولري، له یوه باوري مشر سره خبرې وکړه."]},
    en:{title:"Kindness and Cooperation",description:"Practice kindness and helping others through a short story.",steps:["Listen to your friend.","Take turns using the toy.","If someone needs help, talk to a trusted adult."]}
  }
};

function koodakGetText(lesson, lang) {
  const translated = lessonTranslations[lesson.id] && lessonTranslations[lesson.id][lang];
  return translated || {title:lesson.title, description:lesson.description, steps:lesson.steps || []};
}

/* Replace the existing display functions without changing the rest of app.js. */
renderLessons = function(filter="all") {
  const lang = document.querySelector("#lang").value;
  const categoryNamesByLang = {
    fa:{religion:"آموزش دینی",language:"زبان‌ها",science:"علوم و ریاضی",life:"مهارت‌های زندگی"},
    ps:{religion:"دیني زده کړې",language:"ژبې",science:"ساینس او ریاضي",life:"د ژوند مهارتونه"},
    en:{religion:"Religious learning",language:"Languages",science:"Science & Math",life:"Life skills"}
  };
  const names = categoryNamesByLang[lang] || categoryNamesByLang.fa;
  const visible = lessons.filter(l => l.active && (filter==="all" || l.category===filter));
  document.querySelector("#lessonGrid").innerHTML = visible.length ? visible.map((l,i) => {
    const t = koodakGetText(l,lang);
    const duration = lang==="en" ? "min" : lang==="ps" ? "دقیقې" : "دقیقه";
    const age = lang==="en" ? "years" : lang==="ps" ? "کلن" : "سال";
    return `<article class="lesson-card ${colors[i%colors.length]}"><div class="lesson-top"><span class="lesson-icon">${l.emoji||emojiMap[l.category]||"📘"}</span><span class="tag">${escapeHtml(l.age)} ${age}</span></div><h3>${escapeHtml(t.title)}</h3><p>${escapeHtml(t.description)}</p><div class="lesson-foot"><span>⏱ ${l.duration||5} ${duration} · ${escapeHtml(names[l.category]||l.category)}</span><button class="round" data-open-lesson="${escapeHtml(l.id)}" aria-label="${lang==="en"?"Start lesson":lang==="ps"?"درس پیل کړئ":"شروع درس"}">←</button></div></article>`;
  }).join("") : `<p class="muted">${lang==="en"?"No lessons are available in this category yet.":lang==="ps"?"په دې برخه کې لا درس نشته.":"در این دسته فعلاً درسی وجود ندارد."}</p>`;
  document.querySelectorAll("[data-open-lesson]").forEach(b=>b.onclick=()=>openLesson(b.dataset.openLesson));
};

openLesson = function(id) {
  const lesson = lessons.find(x=>x.id===id);
  if(!lesson) return;
  const lang = document.querySelector("#lang").value;
  const t = koodakGetText(lesson,lang);
  currentLesson=id;
  document.querySelector("#lessonEmoji").textContent=lesson.emoji||"🌟";
  document.querySelector("#lessonTitle").textContent=t.title;
  document.querySelector("#lessonDescription").textContent=t.description;
  document.querySelector("#lessonSteps").innerHTML=t.steps.map(s=>`<div class="step">${escapeHtml(s)}</div>`).join("");
  const practice={
    fa:{title:"🎯 تمرین کوچک:",language:"نام واژه را با صدای بلند تکرار کن.",other:"هر مرحله را به ترتیب با کمک والد یا آموزگار مرور کن."},
    ps:{title:"🎯 کوچنی تمرین:",language:"د کلمې نوم په لوړ غږ تکرار کړه.",other:"هر پړاو د مور، پلار یا ښوونکي په مرسته بیا وګوره."},
    en:{title:"🎯 Quick Practice:",language:"Repeat the word aloud.",other:"Review each step with a parent or teacher."}
  }[lang] || {title:"🎯 تمرین کوچک:",language:"نام واژه را تکرار کن.",other:"هر مرحله را مرور کن."};
  document.querySelector("#quizBox").innerHTML=`<b>${practice.title}</b> ${lesson.category==="language"?practice.language:practice.other}`;
  document.querySelector("#lessonDialog").showModal();
};

/* Refresh lessons whenever the language selector changes. */
document.querySelector("#lang").addEventListener("change", () => {
  renderLessons();
  if (typeof renderAdminTable === "function") renderAdminTable();
});
renderLessons();
if (typeof renderAdminTable === "function") renderAdminTable();
