(function () {

  function switchLevel(levelId) {
    document.querySelectorAll('.level-pane').forEach(function (p) {
      p.classList.remove('active');
    });
    document.querySelectorAll('.level-switcher-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    var pane = document.getElementById(levelId);
    if (pane) pane.classList.add('active');
    var btn = document.querySelector('[data-level="' + levelId + '"]');
    if (btn) btn.classList.add('active');
  }

  window.switchLevel = switchLevel;

  var html = `
<div class="levels-wrapper">

  <div class="levels-header">
    <span class="manual-eyebrow">- УРОВНИ СЛОЖНОСТИ -</span>
    <h1 class="manual-title">Уровни проверки</h1>
    <p class="manual-subtitle">Четыре уровня от быстрого обнаружения до глубокой форензики памяти. Выбери нужный уровень и следуй пошаговым инструкциям.</p>
  </div>

  <div class="level-switcher">
    <button class="level-switcher-btn active" data-level="level-easy" onclick="switchLevel('level-easy')">
      <span class="level-dot level-dot-glow"></span>
      Базовый
      <span class="level-badge-sm badge-easy">EASY</span>
    </button>
    <button class="level-switcher-btn" data-level="level-mid" onclick="switchLevel('level-mid')">
      <span class="level-dot level-dot-glow"></span>
      Средний
      <span class="level-badge-sm badge-mid">MID</span>
    </button>
    <button class="level-switcher-btn" data-level="level-hard" onclick="switchLevel('level-hard')">
      <span class="level-dot level-dot-glow"></span>
      Сложный
      <span class="level-badge-sm badge-hard">HARD</span>
    </button>
    <button class="level-switcher-btn" data-level="level-ultra" onclick="switchLevel('level-ultra')">
      <span class="level-dot level-dot-glow"></span>
      Ультра
      <span class="level-badge-sm badge-ghost">GHOST</span>
    </button>
  </div>

  <div class="level-panes">

    <div id="level-easy" class="level-pane active">

      <div class="level-pane-header level-pane-header-easy">
        <div class="level-pane-header-left">
          <span class="level-pane-num">01</span>
          <div>
            <h2 class="level-pane-title">Базовый уровень</h2>
            <p class="level-pane-desc">Использование данных, корзина, быстрый поиск аномалий</p>
          </div>
        </div>
        <span class="level-badge badge-easy">EASY</span>
      </div>

      <div class="level-prog-row">
        <span class="level-prog-label">Используемые программы:</span>
        <div class="level-prog-pills">
          <button class="prog-pill" onclick="openProgram('everything')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            Everything
          </button>
          <button class="prog-pill" onclick="openProgram('shellbag')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            ShellBag
          </button>
          <button class="prog-pill" onclick="openProgram('lastactivityview')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            LastActivityView
          </button>
          <button class="prog-pill" onclick="openProgram('browserdownloadsview')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            BrowserDownloadsView
          </button>
        </div>
      </div>

      <div class="level-content">

        <div class="lv-card">
          <div class="lv-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
            </div>
            <h3 class="lv-card-title">Использование данных и поиск аномалий</h3>
          </div>
          <div class="lv-card-body">
            <div class="step-list">
              <div class="step-item">
                <div class="step-num">1</div>
                <div class="step-body">
                  Открываем <strong>"Параметры сети и Интернет"</strong> - <strong>"Использование данных"</strong> и проверяем список программ на аномалии.
                </div>
              </div>
              <div class="step-item">
                <div class="step-num">2</div>
                <div class="step-body">
                  <strong>Поиск файлов с читами:</strong> Сначала смотрим на прямые названия читов. Если нашли подозрительный файл - наводим курсор мыши и переходим по его пути.
                </div>
              </div>
              <div class="step-item">
                <div class="step-num">3</div>
                <div class="step-body">
                  <strong>Если файла по пути уже нет (удален):</strong> Переходим в Корзину или системную папку <span class="mono">$Recycle.Bin</span>. Смотрим на дату изменения корзин.
                  <div class="code-block-wrapper mt-8"><pre class="code-block">C:\$Recycle.Bin</pre><button class="copy-btn">Копировать</button></div>
                  <div class="alert-danger mt-8">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    <span>Если на корзине стоит дата и время <strong>после вызова на проверку</strong> - это очистка корзины перед проверкой (<strong>Бан</strong>).</span>
                  </div>
                </div>
              </div>
              <div class="step-item">
                <div class="step-num">4</div>
                <div class="step-body">
                  <strong>Если прямых файлов читов нет - ищем сетевые аномалии:</strong> Внимательно проверяем стандартные системные программы (<span class="mono">WordPad</span>, <span class="mono">Notepad</span>, <span class="mono">Paint</span>, <span class="mono">Калькулятор</span> и прочие). Такие программы не должны использовать интернет. Если любая из них расходует сетевой трафик - это крайне подозрительный признак инжекта чита в системный процесс.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lv-card lv-card-cta">
          <div class="lv-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 class="lv-card-title">Проверка директорий</h3>
          </div>
          <div class="lv-card-body">
            <p class="manual-text">Дальше проводим полную проверку по стандартным папкам игры и системы - загрузки, версии .jar, библиотеки, корзина и история запуска.</p>
            <div style="margin-top:14px;">
              <button class="btn-primary" onclick="switchTab('tab-manual')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                Открыть полный мануал
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div id="level-mid" class="level-pane">

      <div class="level-pane-header level-pane-header-mid">
        <div class="level-pane-header-left">
          <span class="level-pane-num">02</span>
          <div>
            <h2 class="level-pane-title">Средний уровень</h2>
            <p class="level-pane-desc">Системные утилиты, базовый реестр, службы</p>
          </div>
        </div>
        <span class="level-badge badge-mid">MID</span>
      </div>

      <div class="level-prog-row">
        <span class="level-prog-label">Используемые программы:</span>
        <div class="level-prog-pills">
          <button class="prog-pill" onclick="openProgram('journaltrace')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>
            JournalTrace
          </button>
          <button class="prog-pill" onclick="openProgram('usbdrivelog')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="10" rx="1"/><path d="M12 12v8"/><path d="M8 20h8"/><circle cx="12" cy="7" r="1"/></svg>
            USBDriveLog
          </button>
          <button class="prog-pill" onclick="openProgram('winprefetchview')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            WinPrefetchView
          </button>
          <button class="prog-pill" onclick="openProgram('prefetchviewpp')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            PrefetchView++
          </button>
        </div>
      </div>

      <div class="level-content">

        <div class="lv-card">
          <div class="lv-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3 class="lv-card-title">Проверка по путям в Regedit</h3>
          </div>
          <div class="lv-card-body">

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                История архиватора WinRAR
              </div>
              <p class="manual-text">Открытые архивы и пути распаковки читов:</p>
              <div class="code-block-wrapper mt-8"><pre class="code-block">HKEY_CURRENT_USER\SOFTWARE\WinRAR\ArcHistory</pre><button class="copy-btn">Копировать</button></div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">HKEY_CURRENT_USER\SOFTWARE\WinRAR\DialogEditHistory\ArcName</pre><button class="copy-btn">Копировать</button></div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">HKEY_CURRENT_USER\SOFTWARE\WinRAR\DialogEditHistory\ExtrPath</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                История Jump List (программы из панели задач)
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FeatureUsage\ShowJumpView</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
                Переключение окон Alt + Tab (AppSwitched)
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FeatureUsage\AppSwitched</pre><button class="copy-btn">Копировать</button></div>
            </div>

          </div>
        </div>

        <div class="lv-card">
          <div class="lv-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 class="lv-card-title">Команды CMD / PowerShell</h3>
          </div>
          <div class="lv-card-body">

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Принудительное включение отключенных системных служб
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">powershell Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass && powershell Invoke-Expression (Invoke-RestMethod https://raw.githubusercontent.com/praiselily/lilith-ps/refs/heads/main/Service-Enabler.ps1)</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
                Проверка наличия VPN / Proxy соединений
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">powershell -ExecutionPolicy Bypass -Command "iex (irm 'https://raw.githubusercontent.com/TeslaPros/VPNChecker/main/VPNFinder.ps1')"</pre><button class="copy-btn">Копировать</button></div>
            </div>

          </div>
        </div>

        <div class="lv-card">
          <div class="lv-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <h3 class="lv-card-title">Дополнительный контроль</h3>
          </div>
          <div class="lv-card-body">
            <ul class="manual-list">
              <li>Проверяем ПК игрока на наличие программ из черного списка проекта.</li>
              <li>Проверяем программу записи экрана (<span class="mono">OBS</span>, <span class="mono">Nvidia ShadowPlay</span> и др.) на возможное сокрытие оверлеев чита - смотрим исключения захвата и источники сцены.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <div id="level-hard" class="level-pane">

      <div class="level-pane-header level-pane-header-hard">
        <div class="level-pane-header-left">
          <span class="level-pane-num">03</span>
          <div>
            <h2 class="level-pane-title">Сложный уровень</h2>
            <p class="level-pane-desc">Глубокий реестр, консоль, декомпиляция .jar</p>
          </div>
        </div>
        <span class="level-badge badge-hard">HARD</span>
      </div>

      <div class="level-prog-row">
        <span class="level-prog-label">Используемые программы:</span>
        <div class="level-prog-pills">
          <button class="prog-pill" onclick="openProgram('processhacker')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Process Hacker 2
          </button>
          <button class="prog-pill" onclick="openProgram('regscanner')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            RegScanner
          </button>
          <button class="prog-pill" onclick="openProgram('bamparser')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            BAMParser
          </button>
          <button class="prog-pill prog-pill-badge" onclick="openProgram('bytecodeviewer')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            ByteCode Viewer
            <span class="pill-inner-badge">Декомпилятор</span>
          </button>
        </div>
      </div>

      <div class="level-content">

        <div class="lv-card">
          <div class="lv-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3 class="lv-card-title">Глубокая проверка по путям в Regedit</h3>
          </div>
          <div class="lv-card-body">

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v4H4z"/><path d="M4 12h16v4H4z"/></svg>
                История ввода команд Win + R (RunMRU)
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/></svg>
                Файлы через диалог "Открыть / Сохранить как"
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSavePidlMRU</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="10" rx="1"/><path d="M12 12v8"/><path d="M8 20h8"/></svg>
                История подключенных USB-накопителей
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\USBSTOR</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                Все установленные браузеры в системе
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">HKEY_LOCAL_MACHINE\SOFTWARE\Clients\StartMenuInternet</pre><button class="copy-btn">Копировать</button></div>
            </div>

          </div>
        </div>

        <div class="lv-card">
          <div class="lv-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3 class="lv-card-title">Проверка истории браузера</h3>
          </div>
          <div class="lv-card-body">
            <div class="step-list">
              <div class="step-item">
                <div class="step-num">1</div>
                <div class="step-body">Открываем найденные браузеры.</div>
              </div>
              <div class="step-item">
                <div class="step-num">2</div>
                <div class="step-body">Нажимаем три точки в правом верхнем углу и переходим в раздел <strong>"Загрузки"</strong> <span class="kbd-inline">Ctrl + J</span> - проверяем скачанные файлы на наличие читов.</div>
              </div>
              <div class="step-item">
                <div class="step-num">3</div>
                <div class="step-body">Переходим в <strong>"История"</strong> <span class="kbd-inline">Ctrl + H</span> - проверяем посещенные сайты читов.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="lv-card">
          <div class="lv-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 class="lv-card-title">Сложные команды CMD и PowerShell</h3>
          </div>
          <div class="lv-card-body">

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                История запуска .exe через службу BAM (включая удаленные файлы)
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">$sid = (Get-LocalUser -Name $env:USERNAME).SID
reg query "HKLM\SYSTEM\CurrentControlSet\Services\bam\State\UserSettings\$sid"</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Проверка исключений и карантина Windows Defender
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">Get-MpPreference | Select-Object ExclusionPath, ExclusionProcess, ExclusionExtension</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Показ всех процессов, скрытых от диспетчера задач
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">tasklist /v /fo list</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
                Список активных сетевых соединений и привязанных процессов
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">netstat -anob</pre><button class="copy-btn">Копировать</button></div>
            </div>

            <div class="reg-group">
              <div class="reg-group-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Программы, запущенные от имени Администратора
              </div>
              <div class="alert-purple">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <span>Обычным программам (<span class="mono">Telegram.exe</span>, <span class="mono">Discord.exe</span> и похожим) не нужны права администратора. Их запуск с правами Admin часто указывает на работу инжектора или макроса.</span>
              </div>
              <div class="code-block-wrapper mt-8"><pre class="code-block">Get-CimInstance Win32_Process | Select-Object ProcessId, Name, @{Name="IsAdmin";Expression={
    $owner = $_.GetOwner()
    "$($owner.Domain)\$($owner.User)"
}}</pre><button class="copy-btn">Копировать</button></div>
            </div>

          </div>
        </div>

        <div class="lv-card">
          <div class="lv-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h3 class="lv-card-title">Проверка модов через декомпилятор (ByteCode Viewer)</h3>
          </div>
          <div class="lv-card-body">
            <p class="manual-text">Перетаскиваем подозрительный <span class="mono">.jar</span> файл мода в окно ByteCode Viewer. Ниже - пример декомпилированного кода с пометками чит-паттернов.</p>

            <div class="ide-window mt-8">
              <div class="ide-titlebar">
                <div class="ide-dots">
                  <span class="ide-dot ide-dot-red"></span>
                  <span class="ide-dot ide-dot-yellow"></span>
                  <span class="ide-dot ide-dot-green"></span>
                </div>
                <span class="ide-filename">HitboxModule.java - ByteCode Viewer</span>
                <div class="ide-legend">
                  <span class="ide-legend-item">
                    <span class="ide-legend-dot" style="background:#ef4444;"></span>
                    Чит-паттерн
                  </span>
                  <span class="ide-legend-item">
                    <span class="ide-legend-dot" style="background:#10b981;"></span>
                    Норма
                  </span>
                </div>
              </div>
              <div class="ide-body">
                <div class="ide-line ide-line-dim"><span class="ide-ln">1</span><span class="ide-code ide-comment">// пример декомпилированного .jar</span></div>
                <div class="ide-line"><span class="ide-ln">2</span><span class="ide-code"><span class="ide-kw">public class</span> <span class="ide-cls">HitboxModule</span> <span class="ide-kw">extends</span> <span class="ide-cls">Module</span> {</span></div>
                <div class="ide-line ide-line-ok"><span class="ide-ln">3</span><span class="ide-code">  <span class="ide-comment-ok">// НОРМА - стандартный BB игрока</span></span></div>
                <div class="ide-line ide-line-ok"><span class="ide-ln">4</span><span class="ide-code">  <span class="ide-kw">private float</span> defaultExpand = <span class="ide-num">0.0f</span>;</span></div>
                <div class="ide-line ide-line-bad"><span class="ide-ln">5</span><span class="ide-code">  <span class="ide-comment-bad">// ЧИТ - расширение хитбокса</span></span></div>
                <div class="ide-line ide-line-bad"><span class="ide-ln">6</span><span class="ide-code">  <span class="ide-kw">private float</span> hitboxExpand = <span class="ide-num">0.35f</span>;</span></div>
                <div class="ide-line"><span class="ide-ln">7</span><span class="ide-code"></span></div>
                <div class="ide-line"><span class="ide-ln">8</span><span class="ide-code">  <span class="ide-kw">public void</span> <span class="ide-fn">onBoundingBox</span>(<span class="ide-cls">BoundingBoxEvent</span> e) {</span></div>
                <div class="ide-line ide-line-bad"><span class="ide-ln">9</span><span class="ide-code">    <span class="ide-comment-bad">// ЧИТ - увеличение AABB без физики</span></span></div>
                <div class="ide-line ide-line-bad"><span class="ide-ln">10</span><span class="ide-code">    e.<span class="ide-fn">setBoundingBox</span>(e.<span class="ide-fn">getBoundingBox</span>().<span class="ide-fn-bad">expand</span>(hitboxExpand));</span></div>
                <div class="ide-line"><span class="ide-ln">11</span><span class="ide-code">  }</span></div>
                <div class="ide-line"><span class="ide-ln">12</span><span class="ide-code">}</span></div>
                <div class="ide-line"><span class="ide-ln">13</span><span class="ide-code"></span></div>
                <div class="ide-line"><span class="ide-ln">14</span><span class="ide-code"><span class="ide-kw">public class</span> <span class="ide-cls">TriggerBotModule</span> <span class="ide-kw">extends</span> <span class="ide-cls">Module</span> {</span></div>
                <div class="ide-line"><span class="ide-ln">15</span><span class="ide-code">  <span class="ide-kw">public void</span> <span class="ide-fn">onUpdate</span>() {</span></div>
                <div class="ide-line ide-line-bad"><span class="ide-ln">16</span><span class="ide-code">    <span class="ide-comment-bad">// ЧИТ - авто-атака при наведении</span></span></div>
                <div class="ide-line ide-line-bad"><span class="ide-ln">17</span><span class="ide-code">    <span class="ide-kw">if</span> (mc.objectMouseOver != <span class="ide-num">null</span> &&</span></div>
                <div class="ide-line ide-line-bad"><span class="ide-ln">18</span><span class="ide-code">        mc.objectMouseOver.entityHit <span class="ide-kw">instanceof</span> <span class="ide-cls">EntityPlayer</span>) {</span></div>
                <div class="ide-line ide-line-bad"><span class="ide-ln">19</span><span class="ide-code">      mc.playerController.<span class="ide-fn-bad">attackEntity</span>(mc.thePlayer, target);</span></div>
                <div class="ide-line"><span class="ide-ln">20</span><span class="ide-code">    }</span></div>
                <div class="ide-line"><span class="ide-ln">21</span><span class="ide-code">  }</span></div>
                <div class="ide-line"><span class="ide-ln">22</span><span class="ide-code">}</span></div>
              </div>
            </div>

            <div class="alert-purple mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <span><strong>Что искать в коде:</strong> методы <span class="mono">expand()</span>, <span class="mono">attackEntity()</span>, <span class="mono">setSpeed()</span>, <span class="mono">sendChatMessage()</span> с нестандартными аргументами, а также скрытые обращения к <span class="mono">Reflection.invoke()</span>.</span>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div id="level-ultra" class="level-pane">
    </div>

  </div>

</div>
  `;

  var container = document.getElementById('tab-levels');
  if (container) {
    container.innerHTML = html;
  }
})();
