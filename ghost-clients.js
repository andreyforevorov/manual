(function () {

  var clients = [
    { id: 'gc-cortex',    name: 'Cortex Client',       type: 'DLC / Inject',  ready: true  },
    { id: 'gc-mhub',      name: 'Mhub Client',         type: 'DLC / Inject',  ready: true  },
    { id: 'gc-wayne',     name: 'WayneDLC',             type: 'DLC / Inject',  ready: true  },
    { id: 'gc-aurora',    name: 'AuroraDLC',            type: 'DLC / Inject',  ready: true  },
    { id: 'gc-doomsday',  name: 'DoomsDay Client',      type: 'Internal',      ready: true  },
    { id: 'gc-liminar',   name: 'Liminar Client',       type: 'Internal',      ready: true  },
    { id: 'gc-systemdlc', name: 'SystemDLC',            type: 'DLC / Inject',  ready: true  },
    { id: 'gc-custom',    name: 'Самописные (.jar/.dll)', type: 'Custom',      ready: true  },
  ];

  function progPill(id, label) {
    return `<button class="prog-pill" onclick="openProgram('${id}')">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
      ${label}
    </button>`;
  }

  function banAlert(text) {
    return `<div class="alert-danger">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <span>${text}</span>
    </div>`;
  }

  function infoAlert(text) {
    return `<div class="alert-purple">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      <span>${text}</span>
    </div>`;
  }

  function codeBlock(code) {
    return `<div class="code-block-wrapper"><pre class="code-block">${code}</pre><button class="copy-btn">Копировать</button></div>`;
  }

  function stepItem(num, body) {
    return `<div class="step-item"><div class="step-num">${num}</div><div class="step-body">${body}</div></div>`;
  }

  function gcHeader(name, type, botTag, formats, tools) {
    var toolPills = tools.map(function(t) { return progPill(t.id, t.label); }).join('');
    return `
      <div class="gc-header">
        <div class="gc-header-top">
          <div class="gc-header-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><path d="M12 2a10 10 0 1 0 10 10"/><path d="m15 9 3-3"/><path d="m18 6 3-3"/></svg>
          </div>
          <div>
            <h2 class="gc-title">${name}</h2>
            <div class="gc-meta-row">
              <span class="gc-type-badge">${type}</span>
              <span class="gc-bot"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>${botTag}</span>
            </div>
          </div>
        </div>
        <div class="gc-formats">
          <span class="gc-formats-label">Форматы файлов:</span>
          ${formats.map(function(f) { return `<span class="gc-format-tag">${f}</span>`; }).join('')}
        </div>
        <div class="gc-tools-row">
          <span class="gc-tools-label">Инструменты:</span>
          <div class="level-prog-pills">${toolPills}</div>
        </div>
      </div>
    `;
  }

  var panels = {};

  panels['gc-cortex'] = `
    ${gcHeader('Cortex Client', 'Internal - DLC', '@cortexclient_bot',
      ['.jar', '.zip', '.pdf', '.png', '.txt', '.svg'],
      [
        { id: 'lastactivityview', label: 'LastActivityView' },
        { id: 'processhacker',    label: 'Process Hacker 2' },
        { id: 'journaltrace',     label: 'JournalTrace'     },
        { id: 'everything',       label: 'Everything'       },
      ]
    )}

    <div class="gc-how-card">
      <div class="gc-how-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        Как работает
      </div>
      <p class="manual-text">Скачивается через Telegram-бот <span class="mono">@cortexclient_bot</span> в виде маскированных файлов весом до 20 МБ. Без SafeMode оставляет в памяти строки <span class="mono">AimAssist</span> и <span class="mono">TriggerBot</span>. Инжектится в фоновые процессы через любой инжектор, после чего открывает лоудер.</p>
      <div class="gc-target-procs">
        <span class="gc-target-label">Процессы-жертвы:</span>
        <div class="gc-proc-row">
          <span class="gc-proc-tag">notepad</span>
          <span class="gc-proc-tag">Telegram</span>
          <span class="gc-proc-tag">Discord</span>
          <span class="gc-proc-tag">Chrome</span>
          <span class="gc-proc-tag">Notepad++</span>
          <span class="gc-proc-tag">Process Hacker</span>
          <span class="gc-proc-tag">System Informer</span>
        </div>
      </div>
    </div>

    <div class="gc-methods-title">Метод нахождения</div>

    <div class="gc-method-block">
      <div class="gc-method-num">1</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка сетевого трафика системных приложений</div>
        <p class="manual-text">Открываем <strong>Параметры сети - Использование данных</strong>. Процессы-жертвы (<span class="mono">notepad</span>, <span class="mono">Process Hacker</span> и другие) не должны расходовать интернет. Если у этих приложений идет сетевой трафик - подозрение на инжект.</p>
        ${infoAlert('Сам по себе трафик у системных приложений - ещё не повод для бана, нужно подтверждение другими методами.')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">2</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Анализ времени запусков в LastActivityView</div>
        <p class="manual-text">Смотрим, когда синхронно запускались <span class="mono">javaw.exe</span>, <span class="mono">processhacker.exe</span> / <span class="mono">systeminformer.exe</span> и <span class="mono">cmd.exe</span>. Совпадение времени - признак инжекта. Если <span class="mono">cmd</span> запускалась перед проверкой - проверяем её историю через файл:</p>
        ${codeBlock('ConsoleHost_history.txt')}
        <p class="manual-text" style="margin-top:8px;">Ищем этот файл через <strong>Everything</strong>.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">3</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка DLL-инжектов в Process Hacker 2</div>
        <div class="step-list">
          ${stepItem(1, 'Находим процесс <span class="mono">javaw.exe</span> с наибольшим потреблением памяти.')}
          ${stepItem(2, 'ПКМ - <strong>Miscellaneous - Inject DLL</strong> - смотрим на путь папки.')}
          ${stepItem(3, 'Если путь <strong>не в Документах</strong> - знак на инжект. В правом нижнем углу меняем фильтр на <span class="mono">All files (*.*)</span> и проверяем файлы с расширениями <span class="mono">.pdf</span>, <span class="mono">.png</span>, <span class="mono">.txt</span>, <span class="mono">.svg</span>.')}
          ${stepItem(4, 'Открываем подозрительный файл через Блокнот. Если текст начинается с байтов <span class="mono">MZ</span> - это скрытая DLL.')}
        </div>
        ${banAlert('Если файл начинается с заголовка <span class="mono">MZ</span> (кроме .exe) - это 100% Manual Map инжект. <strong>Бан.</strong>')}
        ${infoAlert('Для подтверждения можно попробовать заинжектить подозрительный файл во второй Minecraft - модуль DLL обязан начинаться с PE-заголовка MZ.')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">4</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Анализ файловой истории в JournalTrace</div>
        <p class="manual-text">Вводим в поиск маски расширений и смотрим, что изменялось, удалялось или переименовывалось:</p>
        <div class="gc-ext-row" style="margin-top:8px;">
          <span class="gc-format-tag">.pdf</span>
          <span class="gc-format-tag">.png</span>
          <span class="gc-format-tag">.svg</span>
          <span class="gc-format-tag">.txt</span>
        </div>
        <p class="manual-text" style="margin-top:8px;">Найденные файлы проверяем через Блокнот на наличие заголовка <span class="mono">MZ</span>.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">5</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка .bat файлов</div>
        <p class="manual-text">Если <span class="mono">.bat</span> файл запускался перед проверкой - кликаем <strong>ПКМ - Show more information</strong>, переходим по пути, открываем в Блокноте и проверяем на скрипты очистки системы.</p>
        ${banAlert('Если обнаружен скрипт очистки следов - <strong>Бан за чистку.</strong>')}
      </div>
    </div>
  `;

  panels['gc-mhub'] = `
    ${gcHeader('Mhub Client', 'Internal - DLC', '@mhub_download_bot',
      ['.jar', '.zip', '.pdf', '.png', '.txt', '.svg'],
      [
        { id: 'lastactivityview', label: 'LastActivityView' },
        { id: 'processhacker',    label: 'Process Hacker 2' },
        { id: 'journaltrace',     label: 'JournalTrace'     },
        { id: 'everything',       label: 'Everything'       },
      ]
    )}

    <div class="gc-how-card">
      <div class="gc-how-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        Как работает
      </div>
      <p class="manual-text">Скачивается через Telegram-бот <span class="mono">@mhub_download_bot</span> в виде маскированных файлов. Инжектится в процессы через внешний лоудер.</p>
      <div class="gc-target-procs">
        <span class="gc-target-label">Процессы-жертвы:</span>
        <div class="gc-proc-row">
          <span class="gc-proc-tag">notepad</span>
          <span class="gc-proc-tag">Telegram</span>
          <span class="gc-proc-tag">Discord</span>
          <span class="gc-proc-tag">Chrome</span>
          <span class="gc-proc-tag">Notepad++</span>
          <span class="gc-proc-tag">Process Hacker</span>
        </div>
      </div>
    </div>

    <div class="alert-purple">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      <span>Алгоритм поиска <strong>полностью идентичен Cortex Client</strong>. Методы обнаружения, утилиты и признаки - те же самые.</span>
    </div>

    <div class="gc-methods-title">Метод нахождения</div>

    <div class="gc-method-block">
      <div class="gc-method-num">1</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка сетевого трафика системных приложений</div>
        <p class="manual-text">Открываем <strong>Параметры сети - Использование данных</strong>. Системные приложения (<span class="mono">notepad</span>, <span class="mono">Process Hacker</span>) не должны расходовать интернет. Трафик у них - подозрение на инжект.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">2</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Анализ времени запусков в LastActivityView</div>
        <p class="manual-text">Ищем синхронный запуск <span class="mono">javaw.exe</span>, <span class="mono">processhacker.exe</span> / <span class="mono">systeminformer.exe</span> и <span class="mono">cmd.exe</span>. Проверяем историю CMD через файл:</p>
        ${codeBlock('ConsoleHost_history.txt')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">3</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка DLL-инжектов в Process Hacker 2</div>
        <div class="step-list">
          ${stepItem(1, 'ПКМ на <span class="mono">javaw.exe</span> - <strong>Miscellaneous - Inject DLL</strong>.')}
          ${stepItem(2, 'Меняем фильтр на <span class="mono">All files (*.*)</span>, ищем <span class="mono">.pdf</span>, <span class="mono">.png</span>, <span class="mono">.txt</span>, <span class="mono">.svg</span> в подозрительных папках.')}
          ${stepItem(3, 'Открываем через Блокнот. Заголовок <span class="mono">MZ</span> = скрытая DLL.')}
        </div>
        ${banAlert('Файл с заголовком <span class="mono">MZ</span> (не .exe) - <strong>Бан за Manual Map инжект.</strong>')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">4</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Сканирование JournalTrace и проверка .bat файлов</div>
        <p class="manual-text">В <strong>JournalTrace</strong> ищем операции с файлами <span class="mono">.pdf</span>, <span class="mono">.png</span>, <span class="mono">.svg</span>, <span class="mono">.txt</span>. Найденные файлы проверяем через Блокнот на <span class="mono">MZ</span>.</p>
        <p class="manual-text" style="margin-top:8px;">Для <span class="mono">.bat</span> файлов: <strong>ПКМ - Show more information</strong> - открываем в Блокноте, проверяем на скрипты чистки.</p>
        ${banAlert('Скрипт очистки следов в .bat файле - <strong>Бан.</strong>')}
      </div>
    </div>
  `;

  panels['gc-wayne'] = `
    ${gcHeader('WayneDLC', 'Internal - DLC', '@waynedlcbot',
      ['.exe', '.dll'],
      [
        { id: 'lastactivityview', label: 'LastActivityView' },
        { id: 'processhacker',    label: 'Process Hacker 2' },
        { id: 'journaltrace',     label: 'JournalTrace'     },
        { id: 'everything',       label: 'Everything'       },
      ]
    )}

    <div class="gc-how-card">
      <div class="gc-how-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        Как работает
      </div>
      <p class="manual-text">Скачивается через Telegram-бот <span class="mono">@waynedlcbot</span> в виде исполняемого файла <span class="mono">.exe</span>. При запуске открывает лоудер, сама загрузка чита идет через <span class="mono">.dll</span>.</p>
    </div>

    <div class="gc-methods-title">Метод нахождения</div>

    <div class="gc-method-block">
      <div class="gc-method-num">1</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Анализ LastActivityView</div>
        <p class="manual-text">Запускаем <strong>LastActivityView</strong> и ищем подозрительные записи о запуске файлов. Ориентируемся на время - совпадение запуска стороннего <span class="mono">.exe</span> с запуском игры подозрительно.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">2</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка папки загрузок Telegram и JournalTrace</div>
        <div class="step-list">
          ${stepItem(1, 'Проверяем стандартную папку загрузок <strong>Telegram Desktop</strong> - именно туда летят файлы из ботов. Ищем подозрительные <span class="mono">.exe</span> файлы.')}
          ${stepItem(2, 'Если папка пуста - запускаем <strong>JournalTrace</strong> и ищем перемещавшиеся или переименованные <span class="mono">.exe</span> файлы.')}
        </div>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">3</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Поиск сигнатур в памяти Telegram</div>
        <div class="step-list">
          ${stepItem(1, 'Если файлы не найдены - запускаем <span class="mono">Telegram.exe</span> (если был выключен, сворачиваем в трей).')}
          ${stepItem(2, 'Открываем <strong>Process Hacker 2</strong> - дважды кликаем по процессу <span class="mono">Telegram.exe</span> - вкладка <strong>Memory - Strings...</strong>')}
          ${stepItem(3, 'Ставим <span class="mono">Minimum length: 4</span>, отмечаем все галочки.')}
          ${stepItem(4, 'Внизу: <strong>Filter - case-insensitive</strong>, вводим:')}
        </div>
        ${codeBlock('@waynedlcbot')}
        <p class="manual-text" style="margin-top:8px;">При наличии строк с упоминанием <span class="mono">Download</span> - проверяем указанный файл.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">4</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Поиск через Everything по размеру файла</div>
        <p class="manual-text">Вбиваем в <strong>Everything</strong> команду поиска <span class="mono">.exe</span> файлов в диапазоне веса лоудера:</p>
        ${codeBlock('*.exe size:27mb..33mb')}
      </div>
    </div>
  `;

  panels['gc-aurora'] = `
    ${gcHeader('AuroraDLC', 'Internal - DLC', '@auroradlc_robot',
      ['.dll', '.jar', '.py'],
      [
        { id: 'lastactivityview', label: 'LastActivityView' },
        { id: 'processhacker',    label: 'Process Hacker 2' },
        { id: 'everything',       label: 'Everything'       },
      ]
    )}

    <div class="gc-how-card">
      <div class="gc-how-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        Как работает
      </div>
      <p class="manual-text">Скачивается через Telegram-бот <span class="mono">@auroradlc_robot</span>. Три варианта запуска:</p>
      <div class="gc-variants">
        <div class="gc-variant-item">
          <span class="gc-format-tag">.dll</span>
          <span class="manual-text">Файл инжектится напрямую в процесс <span class="mono">javaw.exe</span></span>
        </div>
        <div class="gc-variant-item">
          <span class="gc-format-tag">.jar</span>
          <span class="manual-text">Java-загрузчик, запускается через CMD командой <span class="mono">java -jar</span></span>
        </div>
        <div class="gc-variant-item">
          <span class="gc-format-tag">.py</span>
          <span class="manual-text">Python-скрипт, подгружает <span class="mono">.dll</span> в память процесса игры через <span class="mono">ctypes</span> / <span class="mono">pymem</span></span>
        </div>
      </div>
    </div>

    <div class="gc-methods-title">Метод нахождения</div>

    <div class="gc-method-block">
      <div class="gc-method-num">1</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка .dll модулей через Process Hacker 2</div>
        <div class="step-list">
          ${stepItem(1, 'Открываем <span class="mono">javaw.exe</span> - <strong>Miscellaneous - Inject DLL</strong> - проверяем папки на наличие <span class="mono">.dll</span> файлов.')}
          ${stepItem(2, 'Для проверки запускаем второй экземпляр Minecraft, инжектим подозрительную DLL и смотрим на изменение главного меню.')}
        </div>
        ${banAlert('Если главное меню изменилось после инжекта - <strong>Бан.</strong>')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">2</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка Java-jar-загрузчиков</div>
        <p class="manual-text">Проверяем историю команд CMD в файле <span class="mono">ConsoleHost_history.txt</span> - ищем через <strong>Everything</strong>:</p>
        ${codeBlock('ConsoleHost_history.txt')}
        <p class="manual-text" style="margin-top:8px;">Ищем команды вида <span class="mono">java -jar &lt;filename&gt;.jar</span> с подозрительными именами файлов.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">3</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка Python-загрузчика через LastActivityView</div>
        <p class="manual-text">Отслеживаем запуск интерпретатора Python (<span class="mono">python.exe</span>, <span class="mono">pythonw.exe</span>) через <strong>LastActivityView</strong>. Совпадение по времени запуска с игрой - подозрительный знак.</p>
        ${infoAlert('Если Python запускался одновременно с <span class="mono">javaw.exe</span> - высокая вероятность Python-инжектора.')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">4</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Анализ буфера обмена и памяти cbdhsvc / explorer.exe</div>
        <div class="step-list">
          ${stepItem(1, 'Нажимаем <span class="kbd-inline">Win + V</span> - если история включена, ищем зашифрованные строки.')}
          ${stepItem(2, 'Если выключена: открываем <strong>Process Hacker 2</strong>, находим <span class="mono">svchost.exe</span> со службой <span class="mono">cbdhsvc</span> или процесс <span class="mono">explorer.exe</span>.')}
          ${stepItem(3, 'Дважды кликаем - <strong>Memory - Strings...</strong> (<span class="mono">Minimum length: 4</span>, все галочки).')}
          ${stepItem(4, 'Нажимаем <strong>Filter - Contains (case-insensitive)</strong> и по очереди проверяем:')}
        </div>
        ${codeBlock('exec(\neval(\nimport\n__import__\nctypes\nwindll\npymem\nurllib\nrequests\nhttpx\nbase64\nb64decode\ngetattr')}
      </div>
    </div>
  `;

  panels['gc-doomsday'] = `
    ${gcHeader('DoomsDay Client', 'Internal - DLC', 'doomsdayclient.com',
      ['.jar'],
      [
        { id: 'lastactivityview',    label: 'LastActivityView'    },
        { id: 'processhacker',       label: 'Process Hacker 2'   },
        { id: 'everything',          label: 'Everything'         },
        { id: 'browserdownloadsview', label: 'BrowserDownloadsView' },
      ]
    )}

    <div class="gc-how-card">
      <div class="gc-how-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        Как работает
      </div>
      <p class="manual-text">Скачивается с официального сайта <span class="mono">doomsdayclient.com</span> в виде <span class="mono">.jar</span> файла. При открытии запускает лоудер, внедряющий код в <span class="mono">javaw.exe</span> через ShellCode, после чего подчищает за собой следы на диске.</p>
    </div>

    <div class="gc-methods-title">Метод нахождения</div>

    <div class="gc-method-block">
      <div class="gc-method-num">1</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка загрузок браузера через BrowserDownloadsView</div>
        <p class="manual-text">Открываем <strong>BrowserDownloadsView</strong> и ищем <span class="mono">.jar</span> файлы, скачанные с домена <span class="mono">doomsdayclient.com</span>.</p>
        <p class="manual-text" style="margin-top:6px;">Если в загрузках пусто - проверяем через <strong>JournalTrace</strong> файлы <span class="mono">.jar</span>, изменявшиеся или удалявшиеся перед проверкой.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">2</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Анализ Private WS - opengl32.dll / glfw.dll / jvm.dll</div>
        <div class="step-list">
          ${stepItem(1, 'Открываем <strong>Process Hacker 2</strong> - свойства <span class="mono">javaw.exe</span> - вкладка <strong>Memory</strong>.')}
          ${stepItem(2, 'Листаем вниз, пока в столбце <strong>Type</strong> не пойдут регионы типа <span class="mono">Image</span>. Находим модули <span class="mono">opengl32.dll</span>, <span class="mono">glfw.dll</span>, <span class="mono">jvm.dll</span>.')}
          ${stepItem(3, 'Раскрываем ветку модуля, находим секцию с правами <span class="mono">RX</span> и смотрим столбец <strong>Private WS</strong>.')}
        </div>
        <div class="ultra-verdict-row" style="margin-top:10px;">
          <div class="alert-success" style="flex:1;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span><strong>Норма:</strong> <span class="mono">Private WS = 0 B</span> при отсутствии оверлеев Discord / OBS.</span>
          </div>
          <div class="alert-danger" style="flex:1;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span><strong>Детект:</strong> Если оверлеев нет, а <span class="mono">Private WS</span> равен <span class="mono">4 kB</span>, <span class="mono">8 kB</span> или больше - признак патчинга памяти (Inline Hook) и последующего восстановления байтов.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">3</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка подмены расширений через историю CMD</div>
        <p class="manual-text">Игроки могут маскировать <span class="mono">.jar</span> под расширения <span class="mono">.sys</span>, <span class="mono">.rar</span> и запускать через CMD командой <span class="mono">java -jar &lt;имя_файла&gt;</span>. Ищем через <strong>Everything</strong>:</p>
        ${codeBlock('ConsoleHost_history.txt')}
        <p class="manual-text" style="margin-top:8px;">Открываем файл и ищем строки вида <span class="mono">java -jar</span> с подозрительными именами файлов.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">4</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Поиск через Everything по сигнатуре содержимого</div>
        <p class="manual-text">Вбиваем в <strong>Everything</strong> сигнатурный запрос для поиска <span class="mono">.jar</span> файлов по внутренним ресурсам:</p>
        ${codeBlock('ext:jar size:21kb-10mb content:"l.png" content:"mcmod.info"')}
      </div>
    </div>
  `;

  panels['gc-liminar'] = `
    ${gcHeader('Liminar Client (Free)', 'Internal - DLC', 'liminarclient.fun',
      ['.exe', '.dll'],
      [
        { id: 'lastactivityview',    label: 'LastActivityView'    },
        { id: 'processhacker',       label: 'Process Hacker 2'   },
        { id: 'browserdownloadsview', label: 'BrowserDownloadsView' },
      ]
    )}

    <div class="gc-how-card">
      <div class="gc-how-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        Как работает
      </div>
      <p class="manual-text">Скачивается с сайта <span class="mono">liminarclient.fun</span> в виде <span class="mono">.exe</span> файла. При запуске активирует лоудер, загружающий <span class="mono">.dll</span> с читом. Оставляет в памяти строки <span class="mono">AimAssist</span> и <span class="mono">TriggerBot</span>.</p>
    </div>

    <div class="gc-methods-title">Метод нахождения</div>

    <div class="gc-method-block">
      <div class="gc-method-num">1</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка загрузок браузера</div>
        <p class="manual-text">Открываем <strong>BrowserDownloadsView</strong> и ищем <span class="mono">.exe</span> файлы, скачанные с сайта <span class="mono">liminarclient.fun</span>.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">2</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Поиск строк-сигнатур в памяти javaw.exe</div>
        <div class="step-list">
          ${stepItem(1, 'Открываем <strong>Process Hacker 2</strong> - свойства <span class="mono">javaw.exe</span> - вкладка <strong>Memory</strong> - кнопка <strong>Strings...</strong>')}
          ${stepItem(2, 'Ставим <span class="mono">Minimum length: 4</span>, отмечаем все галочки.')}
          ${stepItem(3, 'Нажимаем <strong>Filter - Contains (case-insensitive)</strong> и по очереди вводим:')}
        </div>
        <div class="gc-ext-row" style="margin-top:8px;">
          <span class="ultra-filter-tag">AimAssist</span>
          <span class="ultra-filter-tag">TriggerBot</span>
          <span class="ultra-filter-tag">KillAura</span>
          <span class="ultra-filter-tag">Scaffold</span>
        </div>
        ${banAlert('Если строки <span class="mono">AimAssist</span> или <span class="mono">TriggerBot</span> найдены в памяти игры - <strong>Бан.</strong>')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">3</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка истории запусков и JournalTrace</div>
        <p class="manual-text">Проверяем запуски в <strong>LastActivityView</strong> - ищем запуск <span class="mono">.exe</span> файла с совпадением по времени с запуском игры.</p>
        <p class="manual-text" style="margin-top:6px;">В <strong>JournalTrace</strong> сканируем измененные или удаленные <span class="mono">.exe</span> и <span class="mono">.dll</span> файлы.</p>
      </div>
    </div>
  `;

  panels['gc-systemdlc'] = `
    ${gcHeader('SystemDLC', 'Internal - DLC', 'systemdlc.com',
      ['.py', '.txt', '.png'],
      [
        { id: 'lastactivityview',    label: 'LastActivityView'    },
        { id: 'processhacker',       label: 'Process Hacker 2'   },
        { id: 'browserdownloadsview', label: 'BrowserDownloadsView' },
        { id: 'everything',          label: 'Everything'         },
      ]
    )}

    <div class="gc-how-card">
      <div class="gc-how-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        Как работает
      </div>
      <p class="manual-text">Скачивается с сайта <span class="mono">systemdlc.com</span>. Распространяется в виде Python-загрузчика либо маскируется под файлы <span class="mono">.txt</span>, <span class="mono">.png</span> и т.д. Python-загрузчик не оставляет файлов на диске и внедряется через ShellCode напрямую в <span class="mono">javaw.exe</span>.</p>
    </div>

    <div class="gc-methods-title">Метод нахождения - Python-загрузчик</div>

    <div class="gc-method-block">
      <div class="gc-method-num">1</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка сетевого трафика фоновых утилит</div>
        <p class="manual-text">Открываем <strong>Параметры сети - Использование данных</strong>. Проверяем трафик у <span class="mono">notepad</span>, <span class="mono">Process Hacker</span> и других системных приложений. Такие программы не должны расходовать интернет.</p>
        ${infoAlert('Сетевой трафик у системных приложений без причины - подозрение на инжект. Подтверждаем другими методами.')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">2</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка времени запуска Python в LastActivityView</div>
        <p class="manual-text">Открываем <strong>LastActivityView</strong> и ищем запуски <span class="mono">python.exe</span> или <span class="mono">pythonw.exe</span>. Совпадение времени запуска Python с запуском игры - подозрительный знак.</p>
        ${infoAlert('Если Python запускался одновременно с <span class="mono">javaw.exe</span> - высокая вероятность бесфайлового Python-инжектора.')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">3</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка истории браузера через Regedit и Process Hacker 2</div>
        <div class="step-list">
          ${stepItem(1, 'Открываем Regedit по пути для определения установленных браузеров:')}
        </div>
        ${codeBlock('HKEY_LOCAL_MACHINE\\SOFTWARE\\Clients\\StartMenuInternet')}
        <div class="step-list" style="margin-top:8px;">
          ${stepItem(2, 'Открываем найденные браузеры и проверяем историю посещений - ищем сайт <span class="mono">systemdlc.com</span>.')}
          ${stepItem(3, 'Альтернативно: в <strong>Process Hacker 2</strong> открываем процесс браузера (<span class="mono">chrome.exe</span>, <span class="mono">msedge.exe</span>) - <strong>Memory - Strings...</strong> - в фильтре вводим <span class="mono">systemdlc</span>, чтобы проверить факт посещения сайта до перезагрузки ПК.')}
        </div>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">4</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Сканирование памяти cbdhsvc на зашифрованные скрипты</div>
        <div class="step-list">
          ${stepItem(1, 'В <strong>Process Hacker 2</strong> находим <span class="mono">svchost.exe</span> со службой <span class="mono">cbdhsvc</span>.')}
          ${stepItem(2, 'Дважды кликаем - <strong>Memory - Strings...</strong> (<span class="mono">Minimum length: 4</span>, все галочки).')}
          ${stepItem(3, '<strong>Filter - Contains (case-insensitive)</strong> и по очереди проверяем:')}
        </div>
        ${codeBlock('exec(\neval(\nimport\n__import__\nctypes\nwindll\npymem\nurllib\nrequests\nhttpx\nbase64\nb64decode\ngetattr')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">5</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка ConsoleHost_history.txt через Everything</div>
        <p class="manual-text">Ищем через <strong>Everything</strong> файл истории командной строки:</p>
        ${codeBlock('ConsoleHost_history.txt')}
        <p class="manual-text" style="margin-top:8px;">Открываем файл и ищем строки вида <span class="mono">python script.py</span> или другие запуски Python-скриптов перед проверкой.</p>
      </div>
    </div>
  `;

  panels['gc-custom'] = `
    <div class="gc-header">
      <div class="gc-header-top">
        <div class="gc-header-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <div>
          <h2 class="gc-title">Самописные читы (.jar / .dll)</h2>
          <div class="gc-meta-row">
            <span class="gc-type-badge">Custom / Private</span>
          </div>
        </div>
      </div>
      <div class="gc-tools-row">
        <span class="gc-tools-label">Инструменты:</span>
        <div class="level-prog-pills">
          ${progPill('processhacker', 'Process Hacker 2')}
          ${progPill('browserdownloadsview', 'BrowserDownloadsView')}
          ${progPill('lastactivityview', 'LastActivityView')}
          ${progPill('everything', 'Everything')}
          ${progPill('bytecodeviewer', 'ByteCode Viewer')}
        </div>
      </div>
    </div>

    ${infoAlert('Раздел посвящен поиску приватных, самописных или кастомных читов, не входящих в публичные базы сигнатур.')}

    <div class="gc-methods-title">Часть А - Поиск самописных .jar читов</div>

    <div class="gc-method-block">
      <div class="gc-method-num">1</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка через HOLYCHECK</div>
        <p class="manual-text">Переходим в папку <span class="mono">mods</span> и загружаем подозрительные файлы на сайт <span class="mono">mods.holyworld.me</span> для автоматической сверки по базам хешей и сигнатур.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">2</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Глубокий анализ в декомпиляторе ByteCode Viewer</div>
        <p class="manual-text">Открываем подозрительный мод в <strong>ByteCode Viewer</strong> и ищем запрещенные методы и паттерны:</p>
        <div class="code-block-wrapper mt-8"><pre class="code-block"><span class="ide-comment">// Пример проверки сигнатур в самописном .jar</span>
<span class="ide-kw">public class</span> <span class="ide-cls">CustomCheatModule</span> {
  <span class="ide-kw">public void</span> <span class="ide-fn">onUpdate</span>() {
    <span class="ide-comment-bad">// Детект кастомного автоатакера / триггербота</span>
    <span class="ide-kw">if</span> (mc.objectMouseOver != <span class="ide-num">null</span>) {
      mc.playerController.<span class="ide-fn-bad">attackEntity</span>(mc.thePlayer, target);
    }
  }
}</pre><button class="copy-btn">Копировать</button></div>
        <div class="alert-purple" style="margin-top:10px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span><strong>Что искать в коде:</strong> методы <span class="mono">expand()</span>, <span class="mono">attackEntity()</span>, <span class="mono">setSpeed()</span>, <span class="mono">sendChatMessage()</span> с нестандартными аргументами, а также обращения к <span class="mono">Reflection.invoke()</span>.</span>
        </div>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">3</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Поиск строк-сигнатур в памяти процесса</div>
        <div class="step-list">
          ${stepItem(1, 'Открываем <strong>Process Hacker 2</strong> - свойства <span class="mono">javaw.exe</span> - вкладка <strong>Memory</strong> - кнопка <strong>Strings...</strong>')}
          ${stepItem(2, 'Ставим <span class="mono">Minimum length: 4</span>, отмечаем все галочки.')}
          ${stepItem(3, '<strong>Filter - Contains (case-insensitive)</strong> - ищем сигнатуры:')}
        </div>
        <div class="gc-ext-row" style="margin-top:8px;">
          <span class="ultra-filter-tag">TriggerBot</span>
          <span class="ultra-filter-tag">AimAssist</span>
          <span class="ultra-filter-tag">KillAura</span>
          <span class="ultra-filter-tag">Scaffold</span>
          <span class="ultra-filter-tag">Velocity</span>
          <span class="ultra-filter-tag">ESP</span>
          <span class="ultra-filter-tag">Hitbox</span>
        </div>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">4</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка источников скачивания</div>
        <p class="manual-text">Открываем <strong>BrowserDownloadsView</strong> и проверяем скачанные файлы по источникам - ищем загрузки с GitHub, Funpay, Discord и других площадок, с которых распространяются приватные читы.</p>
      </div>
    </div>

    <div class="gc-methods-title" style="margin-top:8px;">Часть Б - Поиск самописных .dll читов</div>

    <div class="gc-method-block">
      <div class="gc-method-num">1</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка BrowserDownloadsView и инжект-папки</div>
        <p class="manual-text">Открываем <strong>BrowserDownloadsView</strong> и ищем скачанные <span class="mono">.dll</span> файлы.</p>
        <p class="manual-text" style="margin-top:6px;">В <strong>Process Hacker 2</strong>: ПКМ на <span class="mono">javaw.exe</span> - <strong>Miscellaneous - Inject DLL</strong> - проверяем содержимое открывшейся папки на наличие <span class="mono">.dll</span> файлов.</p>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">2</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка выгруженных модулей (Unloaded Modules)</div>
        <p class="manual-text">В <strong>Process Hacker 2</strong> кликаем ПКМ по <span class="mono">javaw.exe</span> - <strong>Miscellaneous - Unloaded modules</strong>.</p>
        <p class="manual-text" style="margin-top:6px;">Ищем подозрительные выгруженные DLL-библиотеки со странными именами или путями из <span class="mono">Temp</span> / <span class="mono">Downloads</span>.</p>
        ${banAlert('Подозрительная DLL из нестандартной папки в списке выгруженных модулей - признак инжекта. <strong>Проверяем и при подтверждении баним.</strong>')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">3</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка хендлов (Handles) к процессу игры</div>
        <p class="manual-text">В главном окне <strong>Process Hacker 2</strong>: <strong>Hacker - Find Handles or DLLs</strong> (<span class="kbd-inline">Ctrl + F</span>).</p>
        <p class="manual-text" style="margin-top:6px;">Вводим <span class="mono">javaw.exe</span> и нажимаем <strong>Search</strong>. Ищем хендлы от процессов <span class="mono">chrome.exe</span>, <span class="mono">Discord.exe</span>, <span class="mono">notepad.exe</span> и других нестандартных программ.</p>
        ${banAlert('Хендл к <span class="mono">javaw.exe</span> от неизвестного процесса или программы из <span class="mono">Temp</span> - признак внешнего инжекта. <strong>Бан.</strong>')}
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">4</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Поиск строк-сигнатур в памяти javaw.exe</div>
        <div class="step-list">
          ${stepItem(1, 'Открываем <strong>Process Hacker 2</strong> - свойства <span class="mono">javaw.exe</span> - <strong>Memory - Strings...</strong> (<span class="mono">Minimum length: 4</span>, все галочки).')}
          ${stepItem(2, '<strong>Filter - Contains</strong> - ищем сигнатуры <span class="mono">TriggerBot</span>, <span class="mono">AimAssist</span>, <span class="mono">KillAura</span> и другие имена модулей.')}
        </div>
      </div>
    </div>

    <div class="gc-method-block">
      <div class="gc-method-num">5</div>
      <div class="gc-method-content">
        <div class="gc-method-head">Проверка истории запусков и ConsoleHost_history.txt</div>
        <p class="manual-text">В <strong>LastActivityView</strong> ищем запуск <span class="mono">cmd.exe</span> перед проверкой. Если нашли - проверяем историю команд через <strong>Everything</strong>:</p>
        ${codeBlock('ConsoleHost_history.txt')}
        <p class="manual-text" style="margin-top:8px;">Ищем скрипты очистки следов или команды инжекта.</p>
        ${banAlert('Скрипт очистки следов в истории CMD - <strong>Бан за чистку.</strong>')}
      </div>
    </div>
  `;

  function renderSidebar() {
    return clients.map(function(c, i) {
      return `<button class="ghost-nav-btn${i === 0 ? ' active' : ''}" data-gc="${c.id}">
        <div class="ghost-nav-dot${c.ready ? '' : ' ghost-nav-dot-dim'}"></div>
        <div class="ghost-nav-info">
          <span class="ghost-nav-name">${c.name}</span>
          <span class="ghost-nav-type">${c.type}</span>
        </div>
        ${!c.ready ? '<span class="ghost-nav-soon">Скоро</span>' : ''}
      </button>`;
    }).join('');
  }

  function render() {
    var container = document.getElementById('tab-ghost');
    if (!container) { setTimeout(render, 80); return; }

    container.innerHTML = `
      <div class="ghost-wrapper">
        <div class="ghost-page-header">
          <span class="manual-eyebrow">- БАЗА ДАННЫХ -</span>
          <h1 class="manual-title">Ghost-клиенты</h1>
          <p class="manual-subtitle">Cortex, Mhub, WayneDLC, AuroraDLC, DoomsDay, Liminar, SystemDLC и самописные читы. Методики обнаружения каждого.</p>
        </div>
        <div class="ghost-layout">
          <div class="ghost-sidebar">
            <div class="ghost-sidebar-label">Выбери клиент</div>
            ${renderSidebar()}
          </div>
          <div class="ghost-detail" id="ghost-detail-view">
            ${panels['gc-cortex']}
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.ghost-nav-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        container.querySelectorAll('.ghost-nav-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var gcId = btn.getAttribute('data-gc');
        var detail = document.getElementById('ghost-detail-view');
        if (detail && panels[gcId]) {
          detail.innerHTML = panels[gcId];
          detail.scrollTop = 0;
        }
      });
    });
  }

  render();
})();
