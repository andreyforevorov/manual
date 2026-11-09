(function () {

  function cb(code) {
    return `<div class="code-block-wrapper"><pre class="code-block">${code}</pre><button class="copy-btn">Копировать</button></div>`;
  }

  function step(n, body) {
    return `<div class="step-item"><div class="step-num">${n}</div><div class="step-body">${body}</div></div>`;
  }

  function ban(t) {
    return `<div class="alert-danger"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span>${t}</span></div>`;
  }

  function note(t) {
    return `<div class="alert-purple"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg><span>${t}</span></div>`;
  }

  function sec(label, iconPath, body) {
    return `<div class="pe-section">
      <div class="pe-section-label">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg>
        ${label}
      </div>
      ${body}
    </div>`;
  }

  var programs = [
    {
      id: 'prog-everything',
      name: 'Everything',
      short: 'Мгновенный поиск файлов на компьютере',
      tag: 'Файловый поиск',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
      how: `Обращается напрямую к MFT (Master File Table) - главной файловой таблице NTFS. В MFT хранится оглавление всех файлов на диске, поэтому результаты появляются мгновенно. Важно: не показывает удаленные файлы, только существующие на диске.`,
      guide: `
        ${sec('Поиск читов по регулярному выражению', '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
          cb('ext:.exe;.jar;.zip;.rar regex:(impact|wurst|bleach[-_]?hack|aristois|huzuni|skill[-_]?client|nodus|inertia|ares|sigma|meteor|BetterHitReg|atomic|zamorozka|liquid[-_]?bounce|nurik|nursultan|celestial|calestial|celka|expensive|neverhook|excellent|wexside|wild|minced|deadcode|akrien|future|dreampool|vape|infinity|squad|no[-_]?rules|konas|zeus[-_]?client|rich[-_]?client|ghost[-_]?client|rusher[-_]?hack|thunder[-_]?hack|moon[-_]?hack|winner|nova|exire|doomsday|nightware|ricardo|extazyy|troxill|arbuz|dauntiblyat|rename[-_]?me[-_]?please|edit[-_]?me|takker|faker|xameleon|fuze[-_]?client|wise[-_]?folder|net[-_]?limiter|feather|delta|eclipse|venus|jex|hakari|hush|hach|rogalik|catlavan|haruka|wissend|fluger|sperma|vortex|newcode|astra|britva|bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|crystal|lowdurabilityswitcher|optimizer|viabackwards|viaforge|viaproxy|hitbox|elytra|through|mob|auto|place|health|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass)')
        )}
        ${sec('Поиск подозрительных .jar по размеру', '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
          cb('size:2263|size:5266|size:6515|size:6770|size:6778|size:7016|size:7218|size:7803|size:7891|size:9327|size:10283|size:10605|size:10958|size:11554|size:16541|size:17308|size:17339|size:18180|size:18527|size:18587|size:18734|size:19266|size:20578|size:20583|size:20639|size:20883|size:21161|size:21234|size:21664|size:22036|size:22861|size:26247|size:27546|size:27809|size:28084|size:28439|size:29304|size:29567|size:30279|size:31549|size:31607|size:34449|size:34669|size:35971|size:35993|size:38149|size:39017|size:39321|size:40142|size:42782|size:47159|size:48242|size:50828|size:51212|size:52426|size:54088|size:59381|size:62782|size:65316|size:65486|size:65765|size:66659|size:67491|size:68794|size:69757|size:72334|size:74105|size:80751|size:88896|size:95530|size:98811|size:100523|size:100799|size:101297|size:101571|size:101703|size:102297|size:102733|size:103761|size:104954|size:105623|size:105672|size:112386|size:120640|size:138417|size:143006|size:143597|size:143600|size:147329|size:147873|size:151762|size:153937|size:156722|size:156779|size:166677|size:169718|size:173698|size:183634|size:183651|size:192156|size:202720|size:257482|size:263070|size:267746|size:274865|size:300286|size:334588|size:343169|size:350629|size:409616|size:410358|size:517248|size:519731|size:532826|size:539151|size:556494|size:597406|size:636621|size:640838|size:878781|size:925493|size:1077149|size:1165063|size:1181556|size:1444714|size:1471429|size:1569093|size:1822841|size:3113569|size:3425801|size:3541075|size:3541138|size:3642292|size:3684385|size:4642998|size:5630483|size:7052171|size:7059952|size:22258750|size:25704986|size:26179274|size:26691896 *.jar')
        )}
        ${sec('Поиск Vec.dll', '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
          cb('size:30720 utf8content:net/minecraft/client/entity/player/ClientPlayerEntity|net/minecraft/util/math/AxisAlignedBB')
        )}
        ${sec('Поиск DoomsDay .jar', '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
          cb('ext:jar size:21kb-10mb content:"l.png" content:"mcmod.info"')
        )}
        ${sec('Поиск Cheat Loader по размеру', '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
          cb('.exe size:12mb-25mb')
        )}
        ${note('Не все найденное в Everything является читом - требуется визуальная проверка каждого результата.')}
      `
    },
    {
      id: 'prog-shellbag',
      name: 'ShellBag',
      short: 'Просмотр удаленных папок в системе',
      tag: 'Форензика',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
      how: `Когда пользователь открывает папку, Windows запоминает её вид в реестре (ветки USRCLASS.DAT и NTUSER.DAT) - это называется ShellBag. При удалении папки запись в реестре не удаляется и остается навсегда.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Снизу нажимаем кнопку <strong>"Анализ"</strong>.')}
          ${step(2, 'После загрузки нажимаем <strong>"Показать все"</strong> в правом верхнем углу и выбираем <strong>"Удаленные файлы"</strong>.')}
          ${step(3, 'Смотрим, когда и какие папки удалялись.')}
        </div>
        ${ban('Если перед проверкой или менее месяца назад удалялись папки с названиями читов - <strong>Бан.</strong>')}
      `
    },
    {
      id: 'prog-lastactivityview',
      name: 'LastActivityView',
      short: 'Журнал активности и запусков файлов в Windows',
      tag: 'Журнал активности',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      how: `Считывает системные логи: Prefetch, журналы событий Windows (Event Viewer), реестр и минидампы, формируя единый хронологический список всех запущенных файлов.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Проверяем, не запускался ли <span class="mono">CMD</span> перед проверкой (возможный .bat для очистки следов).')}
          ${step(2, 'Смотрим время запуска <span class="mono">Process Hacker</span> / <span class="mono">System Informer</span>. Если совпадает с моментом игры - подозрение на инжект.')}
          ${step(3, 'Проверяем время запуска <span class="mono">Python</span>. Совпадение с запуском игры - признак Python-инжектора.')}
          ${step(4, 'Нажимаем <span class="kbd-inline">Ctrl + F</span> и ищем: <span class="mono">Nursultan</span>, <span class="mono">Celestial</span>, <span class="mono">Wexside</span> и другие имена читов.')}
        </div>
      `
    },
    {
      id: 'prog-browserdownloadsview',
      name: 'BrowserDownloadsView',
      short: 'История загрузок из всех браузеров на ПК',
      tag: 'Браузер',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      how: `Браузеры (Chrome, Edge, Firefox) записывают историю скачиваний в внутренние базы SQLite в AppData. Утилита напрямую читает эти базы. Даже если файл удален с диска, запись в базе браузера остается до ручной очистки истории.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Сортируем по столбцу <strong>Web Page URL</strong>.')}
          ${step(2, 'Ищем файлы, скачивавшиеся с сайтов читов (<span class="mono">doomsdayclient.com</span>, <span class="mono">liminarclient.fun</span>, <span class="mono">systemdlc.com</span> и другие).')}
          ${step(3, 'Ищем файлы с именами читов или подозрительными расширениями <span class="mono">.dll</span>, <span class="mono">.jar</span>.')}
        </div>
        ${ban('Загрузка файла с сайта чита или с названием чита - <strong>Бан.</strong>')}
      `
    },
    {
      id: 'prog-processhacker',
      name: 'Process Hacker 2 / System Informer',
      short: 'Глубокий анализ RAM, потоков и дескрипторов',
      tag: 'Анализ памяти',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      how: `Работает через собственный драйвер ядра, что позволяет напрямую читать память любого процесса, видеть загруженные .dll, скрытые потоки и открытые хендлы (Handles) - в обход системных ограничений.`,
      guide: `
        ${sec('Проверка DLL-инжектов', '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
          `<div class="step-list">
            ${step(1, 'ПКМ на <span class="mono">javaw.exe</span> - <strong>Miscellaneous - Inject DLL</strong>.')}
            ${step(2, 'Смотрим путь. Не в Документах - подозрительно. Меняем фильтр на <span class="mono">All files (*.*)</span>.')}
            ${step(3, 'Проверяем <span class="mono">.pdf</span>, <span class="mono">.png</span>, <span class="mono">.txt</span>, <span class="mono">.svg</span> через Блокнот на заголовок <span class="mono">MZ</span>.')}
          </div>
          ${ban('Файл начинается с заголовка <span class="mono">MZ</span> - скрытая DLL (Manual Map инжект). <strong>Бан.</strong>')}`
        )}
        ${sec('Проверка выгруженных модулей', '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
          `<p class="manual-text"><strong>ПКМ по javaw.exe - Miscellaneous - Unloaded modules.</strong> Ищем DLL со странными именами или путями из <span class="mono">Temp</span> / <span class="mono">Downloads</span>.</p>`
        )}
        ${sec('Поиск строк в памяти (Strings)', '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
          `<div class="step-list">
            ${step(1, 'Дважды кликаем по <span class="mono">javaw.exe</span> - <strong>Memory - Strings...</strong>')}
            ${step(2, '<span class="mono">Minimum length: 4</span>, все галочки (<span class="mono">Detect Unicode</span>, <span class="mono">Private</span>, <span class="mono">Image</span>, <span class="mono">Mapped</span>).')}
            ${step(3, '<strong>Filter - Contains (case-insensitive)</strong> - вводим сигнатуры:')}
          </div>
          <div class="gc-ext-row" style="margin-top:8px;">
            <span class="ultra-filter-tag">TriggerBot</span>
            <span class="ultra-filter-tag">AimAssist</span>
            <span class="ultra-filter-tag">KillAura</span>
            <span class="ultra-filter-tag">Scaffold</span>
            <span class="ultra-filter-tag">Velocity</span>
            <span class="ultra-filter-tag">ESP</span>
          </div>`
        )}
      `
    },
    {
      id: 'prog-journaltrace',
      name: 'JournalTrace',
      short: 'Все операции на диске: создание, изменение, удаление',
      tag: 'USN Journal',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      how: `Читает скрытый системный журнал USN Journal ($UsnJrnl) NTFS. Windows непрерывно пишет туда все операции с файлами на низком уровне. Записи остаются даже после безвозвратного удаления файлов.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Нажимаем <strong>Drive - Select</strong> (выбираем <span class="mono">C:\\</span>), затем <strong>Drive - Scan</strong>.')}
          ${step(2, 'Переходим в <strong>Layout - Data Grid</strong>.')}
          ${step(3, 'В поиске по очереди вводим маски:')}
        </div>
        <div class="gc-ext-row" style="margin:8px 0;">
          <span class="gc-format-tag">.jar</span>
          <span class="gc-format-tag">.exe</span>
          <span class="gc-format-tag">.bat</span>
          <span class="gc-format-tag">.dll</span>
          <span class="gc-format-tag">.pdf</span>
          <span class="gc-format-tag">.svg</span>
          <span class="gc-format-tag">.png</span>
        </div>
        ${ban('Файлы с названиями читов, удалявшиеся перед проверкой - <strong>Бан за чистку.</strong>')}
        ${note('Ищем файлы с рандомными именами (набор символов без смысла) - признак маскировки.')}
      `
    },
    {
      id: 'prog-usbdrivelog',
      name: 'USBDriveLog',
      short: 'Список всех флешек и внешних дисков, подключавшихся к ПК',
      tag: 'USB-история',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="10" rx="1"/><path d="M12 12v8"/><path d="M8 20h8"/><circle cx="12" cy="7" r="1"/></svg>`,
      how: `Считывает скрытые ключи реестра и журналы событий Windows, показывая имя устройства, серийный номер, точное время подключения и отключения каждого USB-накопителя.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Просматриваем список всех когда-либо подключавшихся устройств с датами.')}
          ${step(2, 'Проверяем, не вынималась ли флешка непосредственно перед проверкой.')}
          ${step(3, 'Если флешка отключалась перед проверкой - просим вставить её обратно и проверяем содержимое.')}
        </div>
        ${ban('Отказ вставить флешку для проверки - <strong>Бан за отказ.</strong>')}
      `
    },
    {
      id: 'prog-bamparser',
      name: 'BAMParser',
      short: 'Записи службы BAM (Background Activity Moderator)',
      tag: 'Реестр / BAM',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      how: `При каждом запуске любого .exe файла служба BAM фиксирует его полный путь и время запуска в специальной ветке реестра. Записи сохраняются даже после удаления файла с диска.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Листаем список вниз, обращаем внимание на программы, помеченные <strong>красным</strong> (файлы удалены с диска).')}
          ${step(2, 'Проверяем дату последнего запуска для подозрительных записей.')}
          ${step(3, 'Ставим галочку <strong>"Not Signed Only"</strong> для фильтрации неподписанных файлов.')}
        </div>
        ${ban('Удаленный файл с названием чита, запускавшийся перед проверкой - <strong>Бан за чистку.</strong>')}
      `
    },
    {
      id: 'prog-executedprogramslist',
      name: 'ExecutedProgramsList',
      short: 'Все исполняемые файлы и скрипты, запускавшиеся в системе',
      tag: 'История запусков',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      how: `Извлекает данные из реестра и журналов Prefetch для восстановления полной истории запусков. Показывает даже удаленный софт, от которого остались следы в системных логах.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Сортируем по столбцу <strong>File Last Modified</strong> (нажимаем 2 раза).')}
          ${step(2, 'Расширяем колонку <strong>Executed File</strong> до полной ширины.')}
          ${step(3, 'Ищем подозрительные файлы и <span class="mono">.bat</span> скрипты, запускавшиеся перед проверкой.')}
        </div>
        ${ban('Найден <span class="mono">.bat</span> скрипт очистки следов - <strong>Бан.</strong>')}
      `
    },
    {
      id: 'prog-winprefetchview',
      name: 'WinPrefetchView',
      short: 'Анализ файлов Prefetch и истории запусков',
      tag: 'Prefetch',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      how: `Windows создает .pf файлы в C:\\Windows\\Prefetch для ускорения запуска программ, фиксируя время запусков и задействованные библиотеки. История сохраняется даже после удаления приложений.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Сортируем по столбцу <strong>Time Executed</strong>.')}
          ${step(2, 'Проверяем подозрительные записи с датой перед проверкой.')}
          ${step(3, 'Фильтруем по метке <strong>Show Unsigned</strong> - неподписанные файлы подозрительны.')}
          ${step(4, 'Нажимаем <span class="kbd-inline">Ctrl + F</span> и вводим названия читов.')}
        </div>
      `
    },
    {
      id: 'prog-prefetchviewpp',
      name: 'PrefetchView++',
      short: 'Углубленный анализ Prefetch с просмотром DLL',
      tag: 'Prefetch+',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      how: `Расширенная версия анализатора Prefetch. Позволяет просматривать список задействованных DLL внутри каждого .pf файла, что полезно для выявления инжектов через загруженные библиотеки.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Сортируем по <strong>Time Executed</strong>.')}
          ${step(2, 'Дважды кликаем по подозрительному <span class="mono">.pf</span> файлу.')}
          ${step(3, 'Просматриваем список всех загружавшихся DLL-библиотек внутри процесса.')}
          ${step(4, 'Ищем DLL из нестандартных папок (<span class="mono">Temp</span>, <span class="mono">Downloads</span>, <span class="mono">AppData</span>).')}
        </div>
      `
    },
    {
      id: 'prog-recentfilesview',
      name: 'RecentFilesView',
      short: 'Список недавно открывавшихся файлов в системе',
      tag: 'Recent Files',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`,
      how: `Собирает информацию из папки Recent, ссылок LNK и разделов реестра быстрого доступа. Показывает файлы, которые пользователь открывал в последнее время.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Сортируем по <strong>Filename</strong> (1 раз).')}
          ${step(2, 'Сортируем по <strong>Modified Time</strong> (2 раза).')}
          ${step(3, 'Проверяем файлы со странными названиями, особенно <span class="mono">.dll</span> библиотеки.')}
          ${step(4, 'Ищем следы открытия файлов и папок с названиями читов.')}
        </div>
      `
    },
    {
      id: 'prog-regscanner',
      name: 'RegScanner',
      short: 'Глубокое сканирование реестра Windows',
      tag: 'Реестр',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      how: `Позволяет быстро искать ключевые слова, строки и значения во всем реестре целиком с фильтрацией по времени изменения записей.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Используем поле <strong>Find String</strong>.')}
          ${step(2, 'Вписываем названия запрещенного ПО и читов.')}
          ${step(3, 'Вводим имена файлов с расширениями <span class="mono">.exe</span>, <span class="mono">.jar</span>, <span class="mono">.zip</span>.')}
          ${step(4, 'Фильтруем по дате изменения - ищем записи, появившиеся перед проверкой.')}
        </div>
      `
    },
    {
      id: 'prog-bytecodeviewer',
      name: 'ByteCode Viewer',
      short: 'Декомпилятор и анализатор .jar файлов',
      tag: 'Декомпилятор',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
      how: `Открывает .jar файл и восстанавливает его исходный код на Java с помощью нескольких декомпиляторов (Procyon, CFR, Fernflower). Позволяет читать код даже без исходников.`,
      guide: `
        <div class="step-list">
          ${step(1, 'Перетаскиваем подозрительный <span class="mono">.jar</span> в окно программы.')}
          ${step(2, 'Выбираем декомпилятор в правой панели (рекомендуется Procyon).')}
          ${step(3, 'Ищем в дереве классов имена <span class="mono">Module</span>, <span class="mono">Cheat</span>, <span class="mono">Hack</span>, <span class="mono">Inject</span>.')}
          ${step(4, 'Проверяем код на запрещенные методы:')}
        </div>
        <div class="gc-ext-row" style="margin-top:8px;margin-bottom:10px;">
          <span class="ultra-filter-tag">expand()</span>
          <span class="ultra-filter-tag">attackEntity()</span>
          <span class="ultra-filter-tag">setSpeed()</span>
          <span class="ultra-filter-tag">sendChatMessage()</span>
          <span class="ultra-filter-tag">Reflection.invoke()</span>
        </div>
        ${note('Обфусцированный код (нечитаемые имена переменных, зашифрованные строки) сам по себе является подозрительным признаком.')}
      `
    },
  ];

  function renderCard(p) {
    return `
      <div class="pcard" id="${p.id}">
        <button class="pcard-trigger" aria-expanded="false">
          <div class="pcard-trigger-left">
            <div class="pcard-icon">${p.icon}</div>
            <div class="pcard-info">
              <span class="pcard-name">${p.name}</span>
              <span class="pcard-short">${p.short}</span>
            </div>
          </div>
          <div class="pcard-trigger-right">
            <span class="pcard-tag">${p.tag}</span>
            <div class="pcard-chevron">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
        </button>
        <div class="pcard-body">
          <div class="pcard-how">
            <div class="pcard-section-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              Как работает
            </div>
            <p class="manual-text">${p.how}</p>
          </div>
          <div class="pcard-divider"></div>
          <div class="pcard-guide">
            <div class="pcard-section-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              Как проверять
            </div>
            ${p.guide}
          </div>
        </div>
      </div>
    `;
  }

  function initCards(container) {
    container.querySelectorAll('.pcard-trigger').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.pcard');
        var isOpen = card.classList.contains('open');
        container.querySelectorAll('.pcard.open').forEach(function (c) {
          c.classList.remove('open');
          c.querySelector('.pcard-trigger').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          card.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          setTimeout(function () {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 60);
        }
      });
    });
  }

  function render() {
    var container = document.getElementById('tab-programs');
    if (!container) { setTimeout(render, 80); return; }

    container.innerHTML = `
      <div class="programs-wrapper">
        <div class="programs-header">
          <span class="manual-eyebrow">- СПРАВОЧНИК СОФТА -</span>
          <h1 class="manual-title">Инструменты проверки</h1>
          <p class="manual-subtitle">Полная база утилит для проверки на читы, анализа памяти, реестра и поиска скрытых файлов с готовыми фильтрами.</p>
        </div>
        <div class="programs-count-row">
          <span class="programs-count-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            ${programs.length} утилит в базе
          </span>
          <span class="programs-count-badge" style="background:transparent;border-color:rgba(255,255,255,0.06);color:var(--text-dim);">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            Нажмите на карточку для раскрытия
          </span>
        </div>
        <div class="programs-cards-grid">${programs.map(renderCard).join('')}</div>
      </div>
    `;

    initCards(container);
  }

  window.openProgram = function (progId) {
    switchTab('tab-programs');
    setTimeout(function () {
      var el = document.getElementById('prog-' + progId);
      if (!el) el = document.getElementById(progId);
      if (!el) return;
      var card = el.classList.contains('pcard') ? el : el.closest('.pcard');
      if (!card) return;
      var container = document.getElementById('tab-programs');
      if (container) {
        container.querySelectorAll('.pcard.open').forEach(function (c) {
          c.classList.remove('open');
          c.querySelector('.pcard-trigger').setAttribute('aria-expanded', 'false');
        });
      }
      card.classList.add('open');
      var trigger = card.querySelector('.pcard-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
      setTimeout(function () {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('prog-highlight');
        setTimeout(function () { card.classList.remove('prog-highlight'); }, 4500);
      }, 180);
    }, 160);
  };

  render();
})();
