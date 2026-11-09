(function () {
  function inject() {
    var container = document.getElementById('level-ultra');
    if (!container) {
      setTimeout(inject, 80);
      return;
    }

    container.innerHTML = `
<div class="level-pane-header level-pane-header-ultra">
  <div class="level-pane-header-left">
    <span class="level-pane-num" style="-webkit-text-stroke-color:rgba(192,132,252,0.4);">04</span>
    <div>
      <h2 class="level-pane-title" style="background:linear-gradient(135deg,#c084fc,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Ультра (Kernel Ghost)</h2>
      <p class="level-pane-desc">Глубокий анализ оперативной памяти, инжекторов, shellcode, хендлеров и скрытых техник.</p>
    </div>
  </div>
  <span class="level-badge badge-ghost">GHOST</span>
</div>

<div class="level-prog-row">
  <span class="level-prog-label">Используемые программы:</span>
  <div class="level-prog-pills">
    <button class="prog-pill" onclick="openProgram('processhacker')">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      Process Hacker 2
    </button>
  </div>
</div>

<div class="ultra-layout">

  <div class="ultra-sidebar">
    <div class="ultra-sidebar-label">Методы обнаружения</div>

    <button class="ultra-nav-btn active" data-method="um-handles">
      <div class="ultra-nav-num">01</div>
      <div class="ultra-nav-info">
        <span class="ultra-nav-title">Анализ хендлеров</span>
        <span class="ultra-nav-sub">Handles - поиск внешних читов</span>
      </div>
      <svg class="ultra-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </button>

    <button class="ultra-nav-btn" data-method="um-rwx">
      <div class="ultra-nav-num">02</div>
      <div class="ultra-nav-info">
        <span class="ultra-nav-title">Поиск RWX шеллкода</span>
        <span class="ultra-nav-sub">Shellcode в регионах памяти</span>
      </div>
      <svg class="ultra-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </button>

    <button class="ultra-nav-btn" data-method="um-cow">
      <div class="ultra-nav-num">03</div>
      <div class="ultra-nav-info">
        <span class="ultra-nav-title">Copy-on-Write хуки</span>
        <span class="ultra-nav-sub">Private WS - снятые хуки</span>
      </div>
      <svg class="ultra-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </button>

    <button class="ultra-nav-btn" data-method="um-clipboard">
      <div class="ultra-nav-num">04</div>
      <div class="ultra-nav-info">
        <span class="ultra-nav-title">Буфер обмена</span>
        <span class="ultra-nav-sub">cbdhsvc / explorer.exe</span>
      </div>
      <svg class="ultra-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </button>

    <button class="ultra-nav-btn" data-method="um-rx">
      <div class="ultra-nav-num">05</div>
      <div class="ultra-nav-info">
        <span class="ultra-nav-title">Шеллкод под RX</span>
        <span class="ultra-nav-sub">Маскировка без RWX флага</span>
      </div>
      <svg class="ultra-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </button>

    <button class="ultra-nav-btn" data-method="um-threads">
      <div class="ultra-nav-num">06</div>
      <div class="ultra-nav-info">
        <span class="ultra-nav-title">Анализ потоков</span>
        <span class="ultra-nav-sub">Threads - Thread Hijacking</span>
      </div>
      <svg class="ultra-nav-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </button>
  </div>

  <div class="ultra-detail">

    <div id="um-handles" class="ultra-panel active">
      <div class="ultra-panel-header">
        <div class="ultra-panel-num">01</div>
        <div>
          <h3 class="ultra-panel-title">Анализ Хендлеров (Handles) и поиск внешних читов</h3>
          <p class="ultra-panel-sub">Определяем, какие процессы взаимодействуют с памятью игры</p>
        </div>
      </div>

      <div class="alert-purple">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <span>Когда любая программа запускается в Windows, она запрашивает у ОС "разрешение" на открытие файлов, папок и чужих процессов. Это открытое соединение называется <strong>хендлом</strong>. Если Ghost-клиент заинжекчен в <span class="mono">chrome.exe</span> или <span class="mono">discord.exe</span>, ему нужно читать память Minecraft - и он открывает хендл процесса <span class="mono">javaw.exe</span>.</span>
      </div>

      <div class="ultra-section-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        Часть А - Проверка вкладки Handles внутри javaw.exe
      </div>
      <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-body">Запустите <strong>Process Hacker 2</strong> от имени Администратора.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-body">Найдите <span class="mono">javaw.exe</span> (тот, у которого больше потребление памяти), кликните правой кнопкой и выберите <strong>Properties</strong>.</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-body">Перейдите во вкладку <strong>Handles</strong> и включите галочку <strong>Hide unnamed handles</strong>.</div></div>
        <div class="step-item"><div class="step-num">4</div>
          <div class="step-body">
            Ищите в списке процессы <span class="mono">chrome.exe</span>, <span class="mono">Discord.exe</span>, <span class="mono">notepad.exe</span> и похожие.
            <div class="alert-danger mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Если нашли такие процессы внутри хендлов игры - это огромный признак <strong>инжекта чита</strong>.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="ultra-section-title" style="margin-top:20px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        Часть Б - Глобальный поиск через "Find Handles or DLLs"
      </div>
      <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-body">В главном меню нажмите <strong>Hacker - Find Handles or DLLs</strong> или <span class="kbd-inline">Ctrl + F</span>.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-body">Введите <span class="mono">javaw.exe</span> (или его PID) и нажмите <strong>Search</strong>. Программа выдаст список всех процессов, которые взаимодействуют с Minecraft.</div></div>
      </div>
      <div class="ultra-verdict-row" style="margin-top:12px;">
        <div class="alert-success" style="flex:1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span><strong>Нормально:</strong> Антивирус, системные процессы (<span class="mono">csrss.exe</span>, <span class="mono">svchost.exe</span>), <span class="mono">Discord</span>, <span class="mono">OBS</span> - они легитимно захватывают окно для стрима.</span>
        </div>
        <div class="alert-danger" style="flex:1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span><strong>Подозрительно:</strong> Хендл к <span class="mono">javaw.exe</span> открыт неизвестной программой, архиватором (<span class="mono">winrar.exe</span>) или программой из <span class="mono">Temp</span> / <span class="mono">Downloads</span>.</span>
        </div>
      </div>
      <div class="alert-purple" style="margin-top:12px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <span>Если игра была <strong>перезапущена перед проверкой</strong> - хендлы старой сессии полностью стираются.</span>
      </div>
    </div>

    <div id="um-rwx" class="ultra-panel">
      <div class="ultra-panel-header">
        <div class="ultra-panel-num">02</div>
        <div>
          <h3 class="ultra-panel-title">Поиск шеллкода (Shellcode) в регионах RWX</h3>
          <p class="ultra-panel-sub">Находим чит, внедренный напрямую в оперативную память</p>
        </div>
      </div>

      <p class="manual-text">Этот метод позволяет найти чит, который уже внедрен в игру и прячется напрямую в оперативной памяти.</p>

      <div class="ultra-section-title" style="margin-top:16px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Пошаговый алгоритм
      </div>
      <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-body">В Process Hacker 2 откройте <span class="mono">javaw.exe</span> - <strong>Properties</strong> - вкладка <strong>Memory</strong>.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-body">Убедитесь, что галочка <strong>Hide free regions</strong> включена.</div></div>
        <div class="step-item"><div class="step-num">3</div>
          <div class="step-body">
            Нажмите на заголовок столбца <strong>Protection</strong> для сортировки и ищите регионы с правами <span class="mono">RWX</span>.
            <div class="alert-purple mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <span>Для Java несколько регионов <span class="mono">RWX</span> - это нормально (JIT-компилятор). Просто за факт наличия <span class="mono">RWX</span> банить нельзя - их нужно проверить внутри.</span>
            </div>
          </div>
        </div>
        <div class="step-item"><div class="step-num">4</div>
          <div class="step-body">
            <strong>Цель проверки:</strong> Строки с типом <span class="mono">Private: Commit</span>, где поле <span class="mono">Use</span> - пустое (не привязано к файлу на диске), особенно если <span class="mono">Size</span> от 100 KB и выше.
          </div>
        </div>
      </div>

      <div class="ultra-section-title" style="margin-top:20px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Как проверить подозрительный регион внутри
      </div>
      <p class="manual-text">Дважды кликните по подозрительному региону <span class="mono">RWX</span> (или ПКМ - Read/Write Memory):</p>
      <div class="alert-danger" style="margin-top:10px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <span><strong>Признак 1 - Заголовок MZ:</strong> Если в начале окна в текстовом столбце видны буквы <span class="mono">MZ</span> или фраза <span class="mono">This program cannot be run in DOS mode</span> - это <strong>100% инжект скрытой DLL (Manual Map)</strong>.</span>
      </div>
      <div class="ultra-instruction-block" style="margin-top:10px;">
        <div class="ultra-instruction-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          Признак 2 - Строки чита (вкладка Memory - Strings...)
        </div>
        <p class="manual-text">Поставьте <span class="mono">Minimum length: 4</span>, отметьте все галочки. В фильтре ищите:</p>
        <div class="ultra-filter-row">
          <span class="ultra-filter-tag">TriggerBot</span>
          <span class="ultra-filter-tag">AimAssist</span>
          <span class="ultra-filter-tag">KillAura</span>
          <span class="ultra-filter-tag">Scaffold</span>
          <span class="ultra-filter-tag">Velocity</span>
          <span class="ultra-filter-tag">ESP</span>
        </div>
      </div>
    </div>

    <div id="um-cow" class="ultra-panel">
      <div class="ultra-panel-header">
        <div class="ultra-panel-num">03</div>
        <div>
          <h3 class="ultra-panel-title">Поиск снятых хуков по флагу Copy-on-Write</h3>
          <p class="ultra-panel-sub">Private WS - обнаруживаем следы Inline Hook даже после отключения чита</p>
        </div>
      </div>

      <div class="alert-purple">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <span><strong>Принцип работы:</strong> Когда чит внедряется, он патчит функции рендера (<span class="mono">opengl32.dll</span>, <span class="mono">glfw.dll</span>, <span class="mono">jvm.dll</span>), меняя несколько байт кода. При нажатии "Self-Destruct" чит возвращает оригинальные байты. Но ядро Windows навсегда меняет статус этой страницы с "Общей" (<span class="mono">Shared</span>) на "Частную" (<span class="mono">Private</span>) - и это остается как след.</span>
      </div>

      <div class="ultra-section-title" style="margin-top:16px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Пошаговый алгоритм
      </div>
      <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-body">Откройте <span class="mono">javaw.exe</span> - <strong>Properties</strong> - вкладка <strong>Memory</strong>. Разверните окно на весь экран.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-body">Листайте вниз, пока в столбце <strong>Type</strong> не пойдут регионы типа <span class="mono">Image</span>. Найдите модули <span class="mono">opengl32.dll</span>, <span class="mono">glfw.dll</span> и <span class="mono">jvm.dll</span>.</div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-body">Раскройте их ветки (стрелочка слева) и найдите секцию с правами <span class="mono">RX</span> - обычно самая большая по размеру внутри модуля.</div></div>
        <div class="step-item"><div class="step-num">4</div><div class="step-body">Проверьте значение в столбце <strong>Private WS</strong> для этой секции.</div></div>
      </div>

      <div class="ultra-verdict-row" style="margin-top:12px;">
        <div class="alert-success" style="flex:1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span><strong>Норма:</strong> В чистом Minecraft без оверлеев Discord / OBS у секции <span class="mono">RX</span> модуля <span class="mono">opengl32.dll</span> / <span class="mono">glfw.dll</span> столбец <strong>Private WS</strong> равен <span class="mono">0 B</span>.</span>
        </div>
        <div class="alert-danger" style="flex:1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span><strong>Детект хука:</strong> Если оверлеев нет, а в <strong>Private WS</strong> написано <span class="mono">4 kB</span>, <span class="mono">8 kB</span> или больше - библиотеку патчили в памяти (Inline Hook на ESP / ClickGUI) и перед проверкой вернули байты обратно.</span>
        </div>
      </div>
      <div class="alert-purple" style="margin-top:12px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <span>Метод может срабатывать при запущенных оверлеях Discord / OBS - обязательно учитывайте их наличие.</span>
      </div>
    </div>

    <div id="um-clipboard" class="ultra-panel">
      <div class="ultra-panel-header">
        <div class="ultra-panel-num">04</div>
        <div>
          <h3 class="ultra-panel-title">Проверка буфера обмена - cbdhsvc / explorer.exe</h3>
          <p class="ultra-panel-sub">Обнаружение бесфайловых Python-загрузчиков и зашифрованных скриптов</p>
        </div>
      </div>

      <div class="ultra-section-title">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        Шаг 1 - Быстрая проверка Win + V
      </div>
      <p class="manual-text" style="margin-top:8px;">Нажимаем <span class="kbd">Win + V</span> (по умолчанию выключено). Если история буфера включена - ищем там длинную зашифрованную строку.</p>

      <div class="ultra-section-title" style="margin-top:20px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        Шаг 2 - Если Win + V выключен: проверяем память процессов
      </div>
      <div class="step-list" style="margin-top:10px;">
        <div class="step-item"><div class="step-num">1</div><div class="step-body">Открываем Process Hacker 2 от имени Администратора. В поиске вводим <span class="mono">cbdhsvc</span> и выбираем открывшийся <span class="mono">svchost.exe</span>. Также проверяем <span class="mono">explorer.exe</span>.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-body">Дважды кликаем по процессу - вкладка <strong>Memory</strong> - кнопка <strong>Strings...</strong></div></div>
        <div class="step-item"><div class="step-num">3</div><div class="step-body">Ставим <span class="mono">Minimum length: 4</span>, отмечаем все галочки (<span class="mono">Detect Unicode</span>, <span class="mono">Private</span>, <span class="mono">Image</span>, <span class="mono">Mapped</span>).</div></div>
        <div class="step-item"><div class="step-num">4</div>
          <div class="step-body">
            Нажимаем <strong>Filter - Contains (case-insensitive)</strong> и поочередно проверяем:
            <div class="code-block-wrapper mt-8"><pre class="code-block">exec(
eval(
import
__import__
ctypes
windll
pymem
urllib
requests
httpx
base64
b64decode
getattr
'base','64'</pre><button class="copy-btn">Копировать</button></div>
          </div>
        </div>
      </div>

      <div class="ultra-section-title" style="margin-top:20px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
        Пример найденного в памяти шеллкода-лоадера
      </div>
      <p class="manual-text" style="margin-top:8px;">Так выглядит обфусцированный Python-загрузчик, найденный в буфере обмена:</p>
      <div class="code-block-wrapper" style="margin-top:8px;"><pre class="code-block">next(getattr(builtins,chr(101)+chr(120)+chr(101)+chr(99))((getattr(builtins,'imp'+'ort')(('zli','b')[0]+('zli','b')[1])).getattribute('d'+'eco'+chr(109)+chr(112)+'res'+chr(115))(eval('byte'+'s')([aN^lV[XO%4] for XO,aN in zip(range(len(vars(import('operat'+'or'))[chr(97)+chr(116)+'t'+chr(114)+chr(103)+chr(101)+chr(116)+chr(116)+'e'+chr(114)](chr(98)+chr(56)+chr(53)+chr(100)+chr(101)+chr(99)+chr(111)+chr(100)+chr(101))(import('built'+'ins').dict[('impor','t')[0]+('impor','t')[1]](('base','64')[0]+('base','64')[1]))('%S)iG-u~v#qi-Ir4M{U7da')))))</pre><button class="copy-btn">Копировать</button></div>
    </div>

    <div id="um-rx" class="ultra-panel">
      <div class="ultra-panel-header">
        <div class="ultra-panel-num">05</div>
        <div>
          <h3 class="ultra-panel-title">Поиск шеллкода, замаскированного под RX</h3>
          <p class="ultra-panel-sub">Инжектор без флага RWX - скрытая маскировка прав доступа</p>
        </div>
      </div>

      <div class="alert-purple">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <span><strong>Принцип работы:</strong> Продвинутый инжектор выделяет память сначала с правами <span class="mono">RW</span>, записывает туда шеллкод, а затем меняет права на <span class="mono">RX</span> - чтобы не светиться как <span class="mono">RWX</span> при стандартной проверке.</span>
      </div>

      <div class="ultra-section-title" style="margin-top:16px;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Пошаговый алгоритм
      </div>
      <div class="step-list" style="margin-top:10px;">
        <div class="step-item"><div class="step-num">1</div><div class="step-body">Во вкладке <strong>Memory</strong> процесса <span class="mono">javaw.exe</span> отсортируйте таблицу по колонке <strong>Protection</strong>.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-body">Найдите все регионы, где <span class="mono">Type = Private: Commit</span>, а <span class="mono">Protection = RX</span>.</div></div>
        <div class="step-item"><div class="step-num">3</div>
          <div class="step-body">
            Посмотрите на колонку <strong>Use</strong>: если там <strong>пусто</strong> (регион не привязан ни к какому модулю на диске) - это сильный признак скрытого шеллкода.
            <div class="alert-danger mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Проверьте такие регионы двойным кликом на наличие заголовка <span class="mono">MZ</span> и строк чита (аналогично Методу 02).</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="um-threads" class="ultra-panel">
      <div class="ultra-panel-header">
        <div class="ultra-panel-num">06</div>
        <div>
          <h3 class="ultra-panel-title">Анализ потоков процесса (Threads)</h3>
          <p class="ultra-panel-sub">Обнаружение Thread Hijacking и APC Injection по Start Address</p>
        </div>
      </div>

      <div class="step-list">
        <div class="step-item"><div class="step-num">1</div><div class="step-body">В свойствах процесса <span class="mono">javaw.exe</span> перейдите на вкладку <strong>Threads</strong>.</div></div>
        <div class="step-item"><div class="step-num">2</div><div class="step-body">Обратите внимание на столбец <strong>Start Address</strong>.</div></div>
      </div>

      <div class="ultra-verdict-row" style="margin-top:16px;">
        <div class="alert-success" style="flex:1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <strong>Норма - адрес привязан к модулю:</strong>
            <div class="ultra-addr-example ok">jvm.dll!+0x1A4F00</div>
            <div class="ultra-addr-example ok">ntdll.dll!+0x9C20</div>
            <div class="ultra-addr-example ok">lwjgl.dll!+0x4F10</div>
            <span style="font-size:12px;color:var(--text-dim);">Поток официально запущен из известного модуля</span>
          </div>
        </div>
        <div class="alert-danger" style="flex:1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <strong>Активный инжект:</strong>
            <div class="ultra-addr-example bad">0x000001A4F003C0</div>
            <div class="ultra-addr-example bad">ntdll.dll (без смещения)</div>
            <span style="font-size:12px;color:var(--text-dim);">Thread Hijacking / APC Injection - внутри процесса сидит активный инжект</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
    `;

    var btns = container.querySelectorAll('.ultra-nav-btn');
    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var methodId = btn.getAttribute('data-method');
        btns.forEach(function(b) { b.classList.remove('active'); });
        container.querySelectorAll('.ultra-panel').forEach(function(p) { p.classList.remove('active'); });
        btn.classList.add('active');
        var panel = document.getElementById(methodId);
        if (panel) panel.classList.add('active');
      });
    });
  }

  inject();
})();
