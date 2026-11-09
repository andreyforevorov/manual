(function () {

  var topics = [
    { id: 'th-arch',     label: 'Архитектура и кольца защиты',   ready: true  },
    { id: 'th-proc',     label: 'Процессы, потоки и модули',      ready: true  },
    { id: 'th-mem',      label: 'Виртуальная память и RWX',       ready: true  },
    { id: 'th-shell',    label: 'Shellcode и драйверы',           ready: true  },
    { id: 'th-inject',   label: 'Инжекты и хуки',                 ready: true  },
    { id: 'th-jvm',      label: 'JVM, моды и агенты',             ready: true  },
    { id: 'th-strings',  label: 'Поиск строк (Strings)',          ready: true  },
    { id: 'th-mask',     label: 'Маскировка и хеши',              ready: true  },
    { id: 'th-decopm',   label: 'Декомпиляция и паттерны',        ready: true  },
  ];

  var panels = {};

  panels['th-arch'] = `
    <div class="th-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Архитектура Windows и кольца защиты</h2>
        <p class="th-panel-sub">Как ОС изолирует процессы и почему Ring 0 дает полный контроль</p>
      </div>
    </div>

    <div class="alert-purple">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      <span>Windows разделяет аппаратные ресурсы и защищает процессы друг от друга с помощью <strong>аппаратных колец защиты процессора</strong> (Protection Rings). Современные x86-64 CPU поддерживают кольца от 0 до 3, но Windows использует только два.</span>
    </div>

    <div class="th-rings-diagram">
      <div class="th-ring th-ring-outer">
        <div class="th-ring-label">
          <span class="th-ring-name">User Mode</span>
          <span class="th-ring-num">Ring 3</span>
        </div>
        <div class="th-ring-items">
          <span class="th-ring-item">javaw.exe</span>
          <span class="th-ring-item">chrome.exe</span>
          <span class="th-ring-item">discord.exe</span>
          <span class="th-ring-item">user32.dll</span>
          <span class="th-ring-item">kernelbase.dll</span>
          <span class="th-ring-item">ntdll.dll</span>
        </div>
      </div>
      <div class="th-ring-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
        <span>Syscalls</span>
      </div>
      <div class="th-ring th-ring-inner">
        <div class="th-ring-label">
          <span class="th-ring-name">Kernel Mode</span>
          <span class="th-ring-num">Ring 0</span>
        </div>
        <div class="th-ring-items">
          <span class="th-ring-item th-ring-item-kernel">ntoskrnl.exe</span>
          <span class="th-ring-item th-ring-item-kernel">hal.dll</span>
          <span class="th-ring-item th-ring-item-kernel">Драйверы .sys</span>
        </div>
      </div>
    </div>

    <div class="th-cards-2col">
      <div class="th-info-card">
        <div class="th-info-card-head">
          <div class="th-info-badge th-badge-green">Ring 3</div>
          <span class="th-info-title">User Mode</span>
        </div>
        <p class="manual-text">Пользовательское пространство. Здесь работают обычные приложения - браузеры, игры, <span class="mono">javaw.exe</span>, системные службы и антивирусы пользовательского уровня.</p>
        <ul class="manual-list" style="margin-top:8px;">
          <li>Нет прямого доступа к физическому железу</li>
          <li>Нет доступа к памяти других процессов</li>
          <li>Для любых операций обязателен Syscall через <span class="mono">ntdll.dll</span></li>
          <li>Подсистемы: <span class="mono">user32.dll</span>, <span class="mono">kernelbase.dll</span>, <span class="mono">ntdll.dll</span></li>
        </ul>
      </div>
      <div class="th-info-card">
        <div class="th-info-card-head">
          <div class="th-info-badge th-badge-red">Ring 0</div>
          <span class="th-info-title">Kernel Mode</span>
        </div>
        <p class="manual-text">Пространство ядра <span class="mono">ntoskrnl.exe</span> и драйверы <span class="mono">.sys</span>. Код здесь выполняется с максимальными привилегиями.</p>
        <ul class="manual-list" style="margin-top:8px;">
          <li>Прямой доступ ко всей физической RAM</li>
          <li>Чтение и запись памяти любого процесса напрямую</li>
          <li>Обход всех проверок безопасности User Mode</li>
          <li>Именно здесь работают Kernel-mode читы</li>
        </ul>
      </div>
    </div>

    <div class="th-callout">
      <div class="th-callout-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div>
        <div class="th-callout-title">Практическое значение для проверки</div>
        <p class="manual-text">User Mode читы (Ghost-клиенты, инжекторы) видны в Process Hacker через анализ памяти, хендлов и строк. Kernel Mode читы обходят эти методы и требуют использования специализированного драйвера - именно поэтому они намного сложнее для обнаружения.</p>
      </div>
    </div>
  `;

  panels['th-proc'] = `
    <div class="th-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Процессы, потоки и модули</h2>
        <p class="th-panel-sub">Внутренняя структура запущенных программ в Windows</p>
      </div>
    </div>

    <div class="th-concept-blocks">

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">01</div>
          <div>
            <h3 class="th-concept-title">Процесс (Process)</h3>
            <p class="th-concept-sub">Изолированный контейнер ресурсов</p>
          </div>
        </div>
        <p class="manual-text">Сам по себе процесс не выполняет код - он лишь <strong>владеет ресурсами</strong>:</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Адресное пространство</span>
            <span class="th-prop-val">Изолированное виртуальное адресное пространство (128 ТБ на x64)</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Handle Table</span>
            <span class="th-prop-val">Таблица дескрипторов - ссылки на файлы, ключи реестра, другие процессы</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">PEB</span>
            <span class="th-prop-val">Process Environment Block - структура в памяти со списком загруженных модулей</span>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">02</div>
          <div>
            <h3 class="th-concept-title">Поток (Thread)</h3>
            <p class="th-concept-sub">Единица исполнения кода внутри процесса</p>
          </div>
        </div>
        <p class="manual-text">Код исполняется только в потоках. У каждого потока есть:</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Call Stack</span>
            <span class="th-prop-val">Стек вызовов - цепочка вызванных функций с их локальными переменными</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Context (регистры)</span>
            <span class="th-prop-val">Набор состояний регистров CPU, включая RIP/EIP - указатель текущей инструкции</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Start Address</span>
            <span class="th-prop-val">Адрес функции, с которой поток стартовал. Аномальный адрес - признак инжекта</span>
          </div>
        </div>
        <div class="alert-purple" style="margin-top:10px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span>В Process Hacker вкладка <strong>Threads</strong> показывает Start Address каждого потока. Поток с голым шестнадцатеричным адресом без имени модуля (<span class="mono">0x000001A4F003C0</span>) - признак Thread Hijacking или APC Injection.</span>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">03</div>
          <div>
            <h3 class="th-concept-title">Модули (Modules / DLL)</h3>
            <p class="th-concept-sub">PE-файлы, загруженные в адресное пространство процесса</p>
          </div>
        </div>
        <p class="manual-text">Модули - это исполняемые файлы в формате PE <span class="mono">Portable Executable</span>, загруженные в адресное пространство процесса.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">PEB_LDR_DATA</span>
            <span class="th-prop-val">Связный список всех загруженных модулей внутри PEB. Именно его читает Process Hacker для вкладки Modules</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">LoadLibraryA инжект</span>
            <span class="th-prop-val">DLL регистрируется в PEB - видна в списке модулей, тип памяти MEM_IMAGE</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Manual Map инжект</span>
            <span class="th-prop-val">DLL не регистрируется в PEB - не видна в списке модулей, живет в MEM_PRIVATE</span>
          </div>
        </div>
      </div>

    </div>
  `;

  panels['th-mem'] = `
    <div class="th-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><path d="M7 2v20"/><path d="M17 2v20"/><path d="M2 12h20"/><path d="M2 7h5"/><path d="M2 17h5"/><path d="M17 17h5"/><path d="M17 7h5"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Виртуальная память, регионы и права доступа</h2>
        <p class="th-panel-sub">Как устроено адресное пространство процесса и почему RWX - красный флаг</p>
      </div>
    </div>

    <p class="manual-text">На 64-битной Windows каждому процессу выделяется <strong>изолированное виртуальное адресное пространство</strong> (128 ТБ для User Mode), разделенное на страницы по 4 КБ, объединенные в регионы памяти.</p>

    <div class="th-section-title">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v4H4z"/><path d="M4 12h16v4H4z"/></svg>
      Типы памяти (Type)
    </div>

    <table class="styled-table">
      <thead>
        <tr>
          <th>Тип</th>
          <th>Значение</th>
          <th>Что означает</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="mono">MEM_IMAGE</span></td>
          <td>Image</td>
          <td>Память, куда спроецирован PE-файл с диска (.exe или .dll). Привязан к файлу.</td>
        </tr>
        <tr>
          <td><span class="mono">MEM_MAPPED</span></td>
          <td>Mapped</td>
          <td>Спроецированные в память файлы данных (Memory-Mapped Files).</td>
        </tr>
        <tr>
          <td><span class="mono">MEM_PRIVATE</span></td>
          <td>Private</td>
          <td>Приватная память процесса, не привязанная к файлам. Куча (Heap), стек, JIT-код JVM, а также память выделенная через VirtualAllocEx при инжекте.</td>
        </tr>
      </tbody>
    </table>

    <div class="th-section-title" style="margin-top:20px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      Права доступа к страницам (Protection)
    </div>

    <table class="styled-table">
      <thead>
        <tr>
          <th>Флаг</th>
          <th>Чтение</th>
          <th>Запись</th>
          <th>Исполнение</th>
          <th>Значение</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="mono">R</span></td>
          <td><span style="color:var(--green);">да</span></td>
          <td><span style="color:var(--red);">нет</span></td>
          <td><span style="color:var(--red);">нет</span></td>
          <td>Только чтение. Типично для секций данных .rdata</td>
        </tr>
        <tr>
          <td><span class="mono">RW</span></td>
          <td><span style="color:var(--green);">да</span></td>
          <td><span style="color:var(--green);">да</span></td>
          <td><span style="color:var(--red);">нет</span></td>
          <td>Обычная память данных: куча, стек, .data секции</td>
        </tr>
        <tr>
          <td><span class="mono">RX</span></td>
          <td><span style="color:var(--green);">да</span></td>
          <td><span style="color:var(--red);">нет</span></td>
          <td><span style="color:var(--green);">да</span></td>
          <td>Исполняемый код. Нормально для .text секций .dll и .exe</td>
        </tr>
        <tr style="background:rgba(239,68,68,0.06);">
          <td><span class="mono" style="color:#fca5a5;font-weight:700;">RWX</span></td>
          <td><span style="color:var(--green);">да</span></td>
          <td><span style="color:var(--green);">да</span></td>
          <td><span style="color:var(--green);">да</span></td>
          <td style="color:#fca5a5;">Все сразу - нарушение принципа DEP. Главный маркер инжекта</td>
        </tr>
      </tbody>
    </table>

    <div class="th-callout" style="margin-top:16px;">
      <div class="th-callout-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
      </div>
      <div>
        <div class="th-callout-title">Почему RWX - главный маркер</div>
        <p class="manual-text">Действует принцип <strong>Write XOR Execute (DEP)</strong>: то, куда записали код, не должно быть исполняемым. Наличие региона <span class="mono">MEM_PRIVATE</span> с правами <span class="mono">RWX</span> почти всегда указывает либо на работу JIT-компилятора JVM, либо на грубый инжект шеллкода или ManualMap DLL, где разработчик не сменил права с RWX на RX после записи кода.</p>
      </div>
    </div>

    <div class="th-section-title" style="margin-top:20px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      Copy-on-Write (CoW) - след снятого хука
    </div>
    <p class="manual-text">Когда чит патчит байты исполняемой секции (<span class="mono">MEM_IMAGE</span> + <span class="mono">RX</span>), ядро Windows создает приватную копию измененной страницы. После того как чит возвращает оригинальные байты, приватная копия остается - её размер отражается в столбце <strong>Private WS</strong>. Ненулевое значение <span class="mono">Private WS</span> у секции <span class="mono">RX</span> модуля <span class="mono">opengl32.dll</span> или <span class="mono">glfw.dll</span> при отсутствии оверлеев - детект снятого Inline Hook.</p>
  `;

  panels['th-shell'] = `
    <div class="th-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Shellcode и драйверы (Ring 0)</h2>
        <p class="th-panel-sub">Позиционно-независимый код и Kernel-mode читы</p>
      </div>
    </div>

    <div class="th-concept-blocks">

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">01</div>
          <div>
            <h3 class="th-concept-title">Shellcode</h3>
            <p class="th-concept-sub">Позиционно-независимый машинный код</p>
          </div>
        </div>
        <p class="manual-text">Шеллкод - это фрагмент скомпилированного машинного кода (набор байтов инструкций процессора), являющийся <strong>позиционно-независимым (PIC - Position Independent Code)</strong>.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Нет жестких адресов</span>
            <span class="th-prop-val">Шеллкод не содержит абсолютных адресов функций - он сам находит их в памяти</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Поиск через PEB</span>
            <span class="th-prop-val">Шеллкод парсит структуру PEB для поиска kernel32.dll и нужных API функций</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Нет файла на диске</span>
            <span class="th-prop-val">Существует только в памяти - в выделенном регионе MEM_PRIVATE (RWX или RX)</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Признак в памяти</span>
            <span class="th-prop-val">Регион MEM_PRIVATE без привязки к файлу (пустой столбец Use) с правами RWX или RX</span>
          </div>
        </div>
        <div class="alert-purple" style="margin-top:10px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span>Python-загрузчики читов (SystemDLC, AuroraDLC) передают шеллкод через буфер обмена или сеть, запускают его через <span class="mono">ctypes.windll</span> или <span class="mono">pymem</span>, не создавая файлов на диске.</span>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">02</div>
          <div>
            <h3 class="th-concept-title">Kernel-mode драйверы (.sys)</h3>
            <p class="th-concept-sub">Ring 0 - максимальные привилегии</p>
          </div>
        </div>
        <p class="manual-text">Драйверы Kernel-mode работают в Ring 0 с максимальными привилегиями:</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Прямой доступ к RAM</span>
            <span class="th-prop-val">Могут читать и записывать память javaw.exe напрямую через физические адреса</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Обход User Mode API</span>
            <span class="th-prop-val">Не используют стандартные Windows API - обходят все проверки пользовательского уровня</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Скрытность</span>
            <span class="th-prop-val">Не оставляют хендлов в таблице процесса игры, не видны в Process Hacker стандартными методами</span>
          </div>
        </div>

      </div>

    </div>
  `;

  panels['th-inject'] = `
    <div class="th-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Методы внедрения кода - инжекты и хуки</h2>
        <p class="th-panel-sub">Как читы попадают в процесс игры и как это детектируется</p>
      </div>
    </div>

    <div class="th-section-title">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
      Сравнение методов инжекта
    </div>

    <table class="styled-table">
      <thead>
        <tr>
          <th>Параметр</th>
          <th>LoadLibraryA Injection</th>
          <th>Manual Map Injection</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Принцип работы</td>
          <td>В процессе выделяется память, пишется путь к .dll, через <span class="mono">CreateRemoteThread</span> вызывается <span class="mono">LoadLibraryA</span></td>
          <td>Инжектор сам читает байты .dll, выделяет <span class="mono">MEM_PRIVATE</span>, копирует секции, правит релокации и IAT вручную</td>
        </tr>
        <tr>
          <td>Связь с диском</td>
          <td>Требует .dll файла на диске</td>
          <td>Может инжектить байты из памяти или сети без файла</td>
        </tr>
        <tr>
          <td>Следы в PEB</td>
          <td>Модуль регистрируется в PEB, виден в списке Modules</td>
          <td>Модуль отсутствует в PEB, не виден в стандартном списке</td>
        </tr>
        <tr>
          <td>Тип памяти</td>
          <td><span class="mono">MEM_IMAGE</span></td>
          <td><span class="mono">MEM_PRIVATE</span></td>
        </tr>
        <tr>
          <td>Права памяти</td>
          <td><span class="mono">RX</span> для секции кода</td>
          <td><span class="mono">RWX</span> (грубый) или <span class="mono">RX</span> (аккуратный)</td>
        </tr>
        <tr>
          <td>Детект в PH2</td>
          <td>Виден во вкладке Modules</td>
          <td>Обнаруживается только через Memory - анализ MEM_PRIVATE регионов</td>
        </tr>
        <tr>
          <td>Заголовок MZ</td>
          <td>Есть (MEM_IMAGE)</td>
          <td><span style="color:#fca5a5;font-weight:600;">Есть в начале региона MEM_PRIVATE - 100% детект</span></td>
        </tr>
      </tbody>
    </table>

    <div class="th-section-title" style="margin-top:24px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      Хуки (Hooking)
    </div>

    <div class="th-concept-blocks">

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">01</div>
          <div>
            <h3 class="th-concept-title">Inline Hook</h3>
            <p class="th-concept-sub">Перехват вызова функции через jmp-инструкцию</p>
          </div>
        </div>
        <p class="manual-text">Чит патчит несколько первых байт функции-жертвы, вставляя инструкцию <span class="mono">jmp</span> на свой код. Когда игра вызывает функцию рендера - управление перехватывается.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Цели</span>
            <span class="th-prop-val">opengl32.dll, glfw.dll, jvm.dll - функции рендера и виртуальной машины</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Self-Destruct</span>
            <span class="th-prop-val">При выключении чит восстанавливает оригинальные байты</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">CoW-след</span>
            <span class="th-prop-val">Патчинг страницы создает приватную копию - Private WS становится ненулевым</span>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">02</div>
          <div>
            <h3 class="th-concept-title">IAT Hook</h3>
            <p class="th-concept-sub">Перехват через таблицу импортов</p>
          </div>
        </div>
        <p class="manual-text">Чит подменяет указатель функции в Import Address Table (IAT) процесса. Игра вызывает адрес из IAT - попадает на код чита.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Метод обнаружения</span>
            <span class="th-prop-val">Сравнение адресов в IAT с реальными адресами экспортируемых функций в .dll</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Преимущество</span>
            <span class="th-prop-val">Не трогает исполняемый код - не оставляет CoW-следов</span>
          </div>
        </div>
      </div>

    </div>

    <div class="th-callout">
      <div class="th-callout-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      </div>
      <div>
        <div class="th-callout-title">Цепочка детекта в Process Hacker 2</div>
        <p class="manual-text">LoadLibraryA - вкладка Modules. Manual Map - вкладка Memory, регион MEM_PRIVATE + заголовок MZ. Inline Hook (снятый) - столбец Private WS у RX-секции opengl32.dll. Шеллкод - регион MEM_PRIVATE с пустым Use и правами RWX или RX.</p>
      </div>
    </div>
  `;

  panels['th-jvm'] = `
    <div class="th-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Внутреннее устройство JVM, модов и агентов</h2>
        <p class="th-panel-sub">Как Java-моды попадают в игру и чем отличаются агенты от обычных модов</p>
      </div>
    </div>

    <div class="th-concept-blocks">

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">01</div>
          <div>
            <h3 class="th-concept-title">Байт-код и .jar архивы</h3>
            <p class="th-concept-sub">Базовая единица кода Java</p>
          </div>
        </div>
        <p class="manual-text">Программы на Java компилируются в байт-код (<span class="mono">.class</span> файлы), упаковываемые в ZIP-архивы с расширением <span class="mono">.jar</span>. JVM читает байт-код и исполняет его через JIT-компилятор.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">.class файл</span>
            <span class="th-prop-val">Скомпилированный байт-код одного класса Java. Читается JVM напрямую</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">.jar архив</span>
            <span class="th-prop-val">ZIP-архив с набором .class файлов и метаданными (MANIFEST.MF)</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">JIT-компиляция</span>
            <span class="th-prop-val">JVM компилирует байт-код в машинный код прямо во время выполнения - это порождает регионы MEM_PRIVATE + RWX</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">String Pool</span>
            <span class="th-prop-val">Пул строк в куче JVM. Строки читов (AimAssist, TriggerBot) остаются тут даже после выгрузки</span>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">02</div>
          <div>
            <h3 class="th-concept-title">ClassLoader и трансформеры (Mixins)</h3>
            <p class="th-concept-sub">Изменение логики игры в памяти на лету</p>
          </div>
        </div>
        <p class="manual-text">В модифицированных клиентах (Forge, Fabric) загрузчик классов пропускает байты через <strong>трансформеры Mixins</strong>, изменяя логику игры прямо в памяти - без изменения файлов на диске.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Mixin</span>
            <span class="th-prop-val">Механизм внедрения кода в уже загруженный класс игры на уровне байт-кода через ASM</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Без следов на диске</span>
            <span class="th-prop-val">Трансформация происходит в памяти - модифицированного .class файла на диске не существует</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Детект</span>
            <span class="th-prop-val">Декомпиляция .jar мода через ByteCode Viewer и поиск @Mixin-аннотаций с целевыми классами игры</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Легитимность</span>
            <span class="th-prop-val">Mixins используют и честные моды - важно смотреть на целевые классы и вносимые изменения</span>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">03</div>
          <div>
            <h3 class="th-concept-title">Attach API, JNI и JVMTI</h3>
            <p class="th-concept-sub">Нативный мост между .dll и Java</p>
          </div>
        </div>
        <p class="manual-text">Механизмы отладки и нативные мосты обеспечивают полный доступ к объектам и классам игры из нативного кода.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">JNI_GetCreatedJavaVMs</span>
            <span class="th-prop-val">Функция из jvm.dll. Нативный чит вызывает её для получения указателя на JVM и доступа к объектам игры</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">JVMTI</span>
            <span class="th-prop-val">Java Virtual Machine Tool Interface - API для инструментирования: замена байт-кода классов в runtime</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Attach API</span>
            <span class="th-prop-val">Позволяет подключить Java-агент к уже запущенной JVM без перезапуска игры</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Детект в PH2</span>
            <span class="th-prop-val">Анализ хендлов к jvm.dll и поиск вызовов JNI_GetCreatedJavaVMs в памяти подозрительных процессов</span>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">04</div>
          <div>
            <h3 class="th-concept-title">Перевод .jar в .dll</h3>
            <p class="th-concept-sub">Упаковка байт-кода в нативный модуль</p>
          </div>
        </div>
        <p class="manual-text">Техника упаковки Java-читов в нативную DLL для усложнения обнаружения:</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Embedded .jar</span>
            <span class="th-prop-val">Байты .jar упаковываются в массив внутри C++ кода: <span class="mono">unsigned char jar_bytes[]</span></span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">AOT-компиляция</span>
            <span class="th-prop-val">GraalVM Native Image компилирует Java-код прямо в нативный машинный код (.exe или .dll)</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Детект</span>
            <span class="th-prop-val">В строках памяти (.dll) ищем сигнатуры PK (ZIP-заголовок) или байты cafebabe (заголовок .class)</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Проверка через PH2</span>
            <span class="th-prop-val">Memory - Strings... по области MEM_PRIVATE: фильтр по словам net/minecraft и com/mojang</span>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">05</div>
          <div>
            <h3 class="th-concept-title">Аргументы запуска JVM</h3>
            <p class="th-concept-sub">Флаги командной строки как следы загрузки агента</p>
          </div>
        </div>
        <p class="manual-text">В Process Hacker вкладка <strong>General</strong> процесса <span class="mono">javaw.exe</span> показывает полную командную строку запуска. Обращаем внимание на подозрительные флаги:</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key" style="color:#fca5a5;">-javaagent:path/to/file.jar</span>
            <span class="th-prop-val">Загрузка Java-агента при старте JVM. Агент может трансформировать любые классы игры</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key" style="color:#fca5a5;">-Xbootclasspath/a:...</span>
            <span class="th-prop-val">Добавление .jar в системный загрузчик классов - наивысший приоритет при загрузке</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">-XX:+DisableAttachMechanism</span>
            <span class="th-prop-val">Отключение Attach API. Присутствие этого флага - признак попытки защититься от отладчиков</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Норма</span>
            <span class="th-prop-val">Стандартные флаги Minecraft: -Xmx, -Xms, -XX:+UseG1GC, -Djava.library.path</span>
          </div>
        </div>
      </div>

    </div>
  `;

  panels['th-strings'] = `
    <div class="th-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Работа с памятью и поиск строк (Strings)</h2>
        <p class="th-panel-sub">Как Process Hacker читает память и почему строки читов остаются после выгрузки</p>
      </div>
    </div>

    <div class="th-concept-blocks">

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">01</div>
          <div>
            <h3 class="th-concept-title">Как работает поиск строк</h3>
            <p class="th-concept-sub">Алгоритм сканирования памяти</p>
          </div>
        </div>
        <p class="manual-text">Инструмент <strong>Strings</strong> в Process Hacker последовательно читает регионы памяти (<span class="mono">Private</span>, <span class="mono">Image</span>, <span class="mono">Mapped</span>) и ищет непрерывные цепочки печатных символов ASCII или Unicode длиной от 4 символов, заканчивающиеся нулевым байтом <span class="mono">\0</span>.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Galochka Private</span>
            <span class="th-prop-val">Сканирует MEM_PRIVATE - приватную кучу JVM, буферы, JIT-скомпилированный код</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Galochka Image</span>
            <span class="th-prop-val">Сканирует MEM_IMAGE - секции данных .dll и .exe загруженных модулей</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Galochka Mapped</span>
            <span class="th-prop-val">Сканирует MEM_MAPPED - файлы, спроецированные в память</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Detect Unicode</span>
            <span class="th-prop-val">Ищет строки в формате UTF-16LE (2 байта на символ) - нужно для строк в .NET и некоторых нативных читах</span>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">02</div>
          <div>
            <h3 class="th-concept-title">Почему строки остаются в памяти</h3>
            <p class="th-concept-sub">Heap JVM и Garbage Collector</p>
          </div>
        </div>
        <p class="manual-text">Строки хранятся в куче JVM (Heap) и пуле строк (String Pool). Даже после выгрузки чита или выполнения Self-Destruct байты строк физически лежат в памяти до тех пор, пока <strong>Сборщик мусора (GC)</strong> не перезапишет этот регион новыми данными.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">String Pool</span>
            <span class="th-prop-val">Строковые литералы из .class файлов интернируются в пул - живут пока жив ClassLoader</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">GC не гарантирован</span>
            <span class="th-prop-val">GC может не запуститься во время проверки - старые строки остаются видимы в памяти</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Практика</span>
            <span class="th-prop-val">Строки AimAssist, TriggerBot часто находятся даже если чит уже выгружен или перезапущен</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Контрмера читера</span>
            <span class="th-prop-val">Зашифрованные строки (XOR, Base64) - раскрываются только в runtime, сложнее находить</span>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">03</div>
          <div>
            <h3 class="th-concept-title">Эффективные фильтры для поиска</h3>
            <p class="th-concept-sub">Что вводить в строку Filter - Contains</p>
          </div>
        </div>
        <div class="th-section-title" style="padding:0;margin-bottom:4px;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Сигнатуры модулей читов
        </div>
        <div class="gc-ext-row" style="margin-bottom:12px;">
          <span class="ultra-filter-tag">TriggerBot</span>
          <span class="ultra-filter-tag">AimAssist</span>
          <span class="ultra-filter-tag">KillAura</span>
          <span class="ultra-filter-tag">Scaffold</span>
          <span class="ultra-filter-tag">Velocity</span>
          <span class="ultra-filter-tag">ESP</span>
          <span class="ultra-filter-tag">Hitbox</span>
          <span class="ultra-filter-tag">AutoClicker</span>
        </div>
        <div class="th-section-title" style="padding:0;margin-bottom:4px;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          Python-инжекторы (в cbdhsvc / explorer.exe)
        </div>
        <div class="gc-ext-row" style="margin-bottom:12px;">
          <span class="ultra-filter-tag">exec(</span>
          <span class="ultra-filter-tag">eval(</span>
          <span class="ultra-filter-tag">ctypes</span>
          <span class="ultra-filter-tag">windll</span>
          <span class="ultra-filter-tag">pymem</span>
          <span class="ultra-filter-tag">base64</span>
          <span class="ultra-filter-tag">b64decode</span>
        </div>
        <div class="th-section-title" style="padding:0;margin-bottom:4px;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          Сетевые ключи Ghost-клиентов
        </div>
        <div class="gc-ext-row">
          <span class="ultra-filter-tag">@cortexclient_bot</span>
          <span class="ultra-filter-tag">@waynedlcbot</span>
          <span class="ultra-filter-tag">systemdlc</span>
          <span class="ultra-filter-tag">liminarclient</span>
          <span class="ultra-filter-tag">doomsdayclient</span>
        </div>
      </div>

    </div>
  `;

  panels['th-mask'] = `
    <div class="th-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Маскировка файлов и работа хешей</h2>
        <p class="th-panel-sub">Как читы скрывают своё присутствие и почему расширение не защищает</p>
      </div>
    </div>

    <div class="th-concept-blocks">

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">01</div>
          <div>
            <h3 class="th-concept-title">Подмена расширений файлов</h3>
            <p class="th-concept-sub">Расширение - это просто подсказка, не сигнатура</p>
          </div>
        </div>
        <p class="manual-text">Системному загрузчику Windows (<span class="mono">LoadLibraryA</span>) всё равно на расширение файла - он смотрит только на первые байты содержимого.</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">PE-заголовок MZ</span>
            <span class="th-prop-val">Байты <span class="mono">4D 5A</span> (ASCII: "MZ") в начале файла - признак исполняемого PE-формата (.exe или .dll)</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Маскировка</span>
            <span class="th-prop-val">Переименование чит-файла .dll в .pdf, .pnf, .txt, .svg не мешает его инжекту через LoadLibraryA</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Детект</span>
            <span class="th-prop-val">Открываем подозрительный файл в Блокноте - если начинается с "MZ" вместо текста, это скрытая DLL</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">ZIP-заголовок</span>
            <span class="th-prop-val">Байты <span class="mono">50 4B</span> ("PK") в начале = ZIP/JAR-архив, независимо от расширения</span>
          </div>
        </div>

        <div class="th-section-title" style="margin-top:4px;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v4H4z"/><path d="M4 12h16v4H4z"/></svg>
          Заголовки форматов файлов
        </div>
        <table class="styled-table">
          <thead><tr><th>Формат</th><th>Байты (HEX)</th><th>ASCII</th><th>Признак</th></tr></thead>
          <tbody>
            <tr><td><span class="mono">.exe / .dll</span></td><td><span class="mono">4D 5A</span></td><td><span class="mono">MZ</span></td><td style="color:#fca5a5;">PE-исполняемый файл</td></tr>
            <tr><td><span class="mono">.jar / .zip</span></td><td><span class="mono">50 4B 03 04</span></td><td><span class="mono">PK..</span></td><td>ZIP-архив (норма для .jar)</td></tr>
            <tr><td><span class="mono">.class</span></td><td><span class="mono">CA FE BA BE</span></td><td><span class="mono">....CAFE BABE</span></td><td>Байт-код Java</td></tr>
            <tr><td><span class="mono">.pdf</span></td><td><span class="mono">25 50 44 46</span></td><td><span class="mono">%PDF</span></td><td>Настоящий PDF-документ</td></tr>
          </tbody>
        </table>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">02</div>
          <div>
            <h3 class="th-concept-title">Смена хеша (Hash Changer / Byte Pumper)</h3>
            <p class="th-concept-sub">Обход сигнатурных баз без перекомпиляции</p>
          </div>
        </div>
        <p class="manual-text">Изменение хеша файла без перекомпиляции путем добавления мусорных данных:</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Overlay для .dll / .exe</span>
            <span class="th-prop-val">Добавление мусорных байтов в конец файла (область Overlay) - хеш MD5/SHA меняется, функционал остается</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">ZIP Comment для .jar</span>
            <span class="th-prop-val">Изменение комментария в конце ZIP-архива меняет хеш файла без изменения .class байт-кода внутри</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Детект .jar</span>
            <span class="th-prop-val">При форензике .jar проверяем хеши вложенных .class файлов или анализируем сам код через декомпилятор</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">HOLYCHECK</span>
            <span class="th-prop-val">Сервис mods.holyworld.me сверяет хеши по базе - Byte Pumper генерирует новый хеш, не попадающий в базу</span>
          </div>
        </div>
        <div class="alert-purple" style="margin-top:10px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span>Именно поэтому при обнаружении подозрительного мода недостаточно проверки только по хешу - необходима декомпиляция и анализ кода в ByteCode Viewer.</span>
        </div>
      </div>

    </div>
  `;

  panels['th-decopm'] = `
    <div class="th-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Декомпиляция .jar, обфускация и паттерны</h2>
        <p class="th-panel-sub">Как читать декомпилированный код и что в нём искать</p>
      </div>
    </div>

    <div class="th-concept-blocks">

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">01</div>
          <div>
            <h3 class="th-concept-title">Обфускация кода</h3>
            <p class="th-concept-sub">Намеренное усложнение читаемости кода</p>
          </div>
        </div>
        <p class="manual-text">Обфускаторы (ProGuard, Stringer, Skidfuscator) применяют несколько техник для сокрытия логики:</p>
        <div class="th-prop-grid">
          <div class="th-prop">
            <span class="th-prop-key">Переименование классов</span>
            <span class="th-prop-val">Классы и методы переименовываются в a, b, c или нечитаемые последовательности: IllIlIIllI</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Шифрование строк</span>
            <span class="th-prop-val">Строки шифруются через XOR или Base64, расшифровываются только в runtime при вызове</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">InvokeDynamic</span>
            <span class="th-prop-val">Вызовы методов скрываются через инструкцию invokedynamic - имя метода не видно статически</span>
          </div>
          <div class="th-prop">
            <span class="th-prop-key">Признак обфускации</span>
            <span class="th-prop-val">Нечитаемые имена классов и методов при нормальных (легитимных) модах - причина для углубленной проверки</span>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">02</div>
          <div>
            <h3 class="th-concept-title">Паттерн 1 - Увеличение хитбоксов</h3>
            <p class="th-concept-sub">Расширение AxisAlignedBB для упрощения попаданий</p>
          </div>
        </div>
        <p class="manual-text">Чит расширяет границы коллизий (<span class="mono">AxisAlignedBB</span>) цели, делая хитбокс игрока больше реального.</p>
        <div class="ide-window">
          <div class="ide-titlebar">
            <div class="ide-dots">
              <span class="ide-dot ide-dot-red"></span>
              <span class="ide-dot ide-dot-yellow"></span>
              <span class="ide-dot ide-dot-green"></span>
            </div>
            <span class="ide-filename">HitboxModule.java - ByteCode Viewer</span>
            <div class="ide-legend">
              <span class="ide-legend-item"><span class="ide-legend-dot" style="background:#ef4444;"></span>Чит-паттерн</span>
              <span class="ide-legend-item"><span class="ide-legend-dot" style="background:#10b981;"></span>Норма</span>
            </div>
          </div>
          <div class="ide-body">
            <div class="ide-line"><span class="ide-ln">1</span><span class="ide-code"><span class="ide-kw">public class</span> <span class="ide-cls">HitboxModule</span> <span class="ide-kw">extends</span> <span class="ide-cls">Module</span> {</span></div>
            <div class="ide-line ide-line-ok"><span class="ide-ln">2</span><span class="ide-code">  <span class="ide-kw">private float</span> defaultExpand = <span class="ide-num">0.0f</span>; <span class="ide-comment-ok">// НОРМА - стандартный BB игрока</span></span></div>
            <div class="ide-line ide-line-bad"><span class="ide-ln">3</span><span class="ide-code">  <span class="ide-kw">private float</span> hitboxExpand = <span class="ide-num">0.35f</span>; <span class="ide-comment-bad">// ЧИТ - расширение хитбокса</span></span></div>
            <div class="ide-line"><span class="ide-ln">4</span><span class="ide-code"></span></div>
            <div class="ide-line"><span class="ide-ln">5</span><span class="ide-code">  <span class="ide-kw">public void</span> <span class="ide-fn">onBoundingBox</span>(<span class="ide-cls">BoundingBoxEvent</span> e) {</span></div>
            <div class="ide-line ide-line-bad"><span class="ide-ln">6</span><span class="ide-code">    <span class="ide-comment-bad">// ЧИТ - увеличение AABB без физики</span></span></div>
            <div class="ide-line ide-line-bad"><span class="ide-ln">7</span><span class="ide-code">    e.<span class="ide-fn">setBoundingBox</span>(e.<span class="ide-fn">getBoundingBox</span>().<span class="ide-fn-bad">expand</span>(hitboxExpand));</span></div>
            <div class="ide-line"><span class="ide-ln">8</span><span class="ide-code">  }</span></div>
            <div class="ide-line"><span class="ide-ln">9</span><span class="ide-code">}</span></div>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">03</div>
          <div>
            <h3 class="th-concept-title">Паттерн 2 - TriggerBot / KillAura</h3>
            <p class="th-concept-sub">Автоматическая атака при наведении на игрока</p>
          </div>
        </div>
        <p class="manual-text">Чит автоматически атакует цель при попадании прицела на игрока без нажатия кнопки мыши.</p>
        <div class="ide-window">
          <div class="ide-titlebar">
            <div class="ide-dots">
              <span class="ide-dot ide-dot-red"></span>
              <span class="ide-dot ide-dot-yellow"></span>
              <span class="ide-dot ide-dot-green"></span>
            </div>
            <span class="ide-filename">TriggerBotModule.java - ByteCode Viewer</span>
            <div class="ide-legend">
              <span class="ide-legend-item"><span class="ide-legend-dot" style="background:#ef4444;"></span>Чит-паттерн</span>
              <span class="ide-legend-item"><span class="ide-legend-dot" style="background:#10b981;"></span>Норма</span>
            </div>
          </div>
          <div class="ide-body">
            <div class="ide-line"><span class="ide-ln">1</span><span class="ide-code"><span class="ide-kw">public class</span> <span class="ide-cls">TriggerBotModule</span> <span class="ide-kw">extends</span> <span class="ide-cls">Module</span> {</span></div>
            <div class="ide-line"><span class="ide-ln">2</span><span class="ide-code">  <span class="ide-kw">public void</span> <span class="ide-fn">onUpdate</span>() {</span></div>
            <div class="ide-line ide-line-bad"><span class="ide-ln">3</span><span class="ide-code">    <span class="ide-comment-bad">// ЧИТ - автоатака при наведении на EntityPlayer</span></span></div>
            <div class="ide-line ide-line-bad"><span class="ide-ln">4</span><span class="ide-code">    <span class="ide-kw">if</span> (mc.objectMouseOver != <span class="ide-num">null</span> &&</span></div>
            <div class="ide-line ide-line-bad"><span class="ide-ln">5</span><span class="ide-code">        mc.objectMouseOver.entityHit <span class="ide-kw">instanceof</span> <span class="ide-cls">EntityPlayer</span>) {</span></div>
            <div class="ide-line ide-line-bad"><span class="ide-ln">6</span><span class="ide-code">      mc.playerController.<span class="ide-fn-bad">attackEntity</span>(mc.thePlayer, target);</span></div>
            <div class="ide-line"><span class="ide-ln">7</span><span class="ide-code">    }</span></div>
            <div class="ide-line"><span class="ide-ln">8</span><span class="ide-code">  }</span></div>
            <div class="ide-line"><span class="ide-ln">9</span><span class="ide-code">}</span></div>
          </div>
        </div>
      </div>

      <div class="th-concept">
        <div class="th-concept-header">
          <div class="th-concept-num">04</div>
          <div>
            <h3 class="th-concept-title">Ключевые методы для поиска</h3>
            <p class="th-concept-sub">Сигнатуры в коде, указывающие на читерский функционал</p>
          </div>
        </div>
        <table class="styled-table">
          <thead>
            <tr><th>Метод / паттерн</th><th>Где встречается</th><th>Признак</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="mono">expand(float)</span></td>
              <td>BoundingBox, AABB</td>
              <td style="color:#fca5a5;">Расширение хитбокса</td>
            </tr>
            <tr>
              <td><span class="mono">attackEntity(player, target)</span></td>
              <td>playerController</td>
              <td style="color:#fca5a5;">TriggerBot / KillAura</td>
            </tr>
            <tr>
              <td><span class="mono">setSpeed(float)</span></td>
              <td>MovementInput, motionX/Z</td>
              <td style="color:#fca5a5;">Спид-хак / изменение скорости</td>
            </tr>
            <tr>
              <td><span class="mono">sendChatMessage(String)</span></td>
              <td>thePlayer, GuiScreen</td>
              <td style="color:#fca5a5;">Авто-команды, чит-интерфейс</td>
            </tr>
            <tr>
              <td><span class="mono">Reflection.invoke()</span></td>
              <td>Любой класс</td>
              <td style="color:#fca5a5;">Скрытый вызов методов через рефлексию</td>
            </tr>
            <tr>
              <td><span class="mono">@Mixin(target = "...")</span></td>
              <td>Аннотации классов</td>
              <td>Модификация целевого класса (норма для модов, подозрительно для анонимных)</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  `;

  var stubTopics = ['th-jvm', 'th-strings', 'th-mask', 'th-decopm'];
  stubTopics.forEach(function (id) {
    var topic = topics.find(function (t) { return t.id === id; });
    panels[id] = panels[id] || `
      <div class="gc-stub">
        <div class="gc-stub-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h3 class="gc-stub-title">${topic ? topic.label : id}</h3>
        <p class="gc-stub-desc">Этот раздел будет добавлен во второй части.</p>
      </div>
    `;
  });

  function renderSidebar() {
    return `<div class="th-sidebar-label">Выбери тему</div>` +
      topics.map(function (t, i) {
        return `<button class="th-nav-btn${i === 0 ? ' active' : ''}" data-th="${t.id}">
          <div class="th-nav-dot${t.ready ? '' : ' th-nav-dot-dim'}"></div>
          <span class="th-nav-label">${t.label}</span>
          ${!t.ready ? '<span class="ghost-nav-soon">Скоро</span>' : ''}
        </button>`;
      }).join('');
  }

  function render() {
    var container = document.getElementById('tab-theory');
    if (!container) { setTimeout(render, 80); return; }

    container.innerHTML = `
      <div class="theory-wrapper">
        <div class="ghost-page-header">
          <span class="manual-eyebrow">- ТЕХНИЧЕСКАЯ БАЗА -</span>
          <h1 class="manual-title">Теория и память</h1>
          <p class="manual-subtitle">Архитектура Ring 3 / Ring 0, регионы памяти RWX, шеллкод, хуки, JVM, маскировка MZ и декомпиляция кода.</p>
        </div>
        <div class="theory-layout">
          <div class="theory-sidebar">${renderSidebar()}</div>
          <div class="theory-detail" id="theory-detail-view">
            ${panels['th-arch']}
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.th-nav-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('.th-nav-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var thId = btn.getAttribute('data-th');
        var detail = document.getElementById('theory-detail-view');
        if (detail && panels[thId]) {
          detail.innerHTML = panels[thId];
          detail.scrollTop = 0;
        }
      });
    });
  }

  render();
})();
