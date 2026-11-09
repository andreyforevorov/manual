(function () {

  var cats = [
    { id: 'pc-reg',  label: 'Пути Regedit',            icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { id: 'pc-cmd',  label: 'Команды CMD / PowerShell', icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' },
    { id: 'pc-eve',  label: 'Фильтры Everything',       icon: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>' },
  ];

  function cb(code) {
    var safe = code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    return `<div class="code-block-wrapper"><pre class="code-block">${safe}</pre><button class="copy-btn">Копировать</button></div>`;
  }

  function regCard(title, desc, codes) {
    var blocks = Array.isArray(codes) ? codes.map(cb).join('') : cb(codes);
    return `<div class="paths-reg-card">
      <div class="paths-card-title">${title}</div>
      <div class="paths-card-desc">${desc}</div>
      ${blocks}
    </div>`;
  }

  function cmdCard(title, desc, code) {
    return `<div class="paths-cmd-card">
      <div class="paths-card-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        ${title}
      </div>
      ${desc ? `<div class="paths-card-desc">${desc}</div>` : ''}
      ${cb(code)}
    </div>`;
  }

  function eveCard(title, desc, code) {
    return `<div class="paths-eve-card">
      <div class="paths-card-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        ${title}
      </div>
      ${desc ? `<div class="paths-card-desc">${desc}</div>` : ''}
      ${cb(code)}
    </div>`;
  }

  var panels = {};

  panels['pc-reg'] = `
    <div class="paths-reg-grid">
      ${regCard('MuiCache', 'Отображаемые имена приложений, извлеченные из их ресурсов',
        'HKEY_CURRENT_USER\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\Shell\\MuiCache')}
      ${regCard('WinRAR History', 'История открытых архивов и путей распаковки в WinRAR', [
        'HKEY_CURRENT_USER\\SOFTWARE\\WinRAR\\ArcHistory',
        'HKEY_CURRENT_USER\\SOFTWARE\\WinRAR\\DialogEditHistory\\ArcName',
        'HKEY_CURRENT_USER\\SOFTWARE\\WinRAR\\DialogEditHistory\\ExtrPath',
      ])}
      ${regCard('ShowJumpView', 'История программ из панели задач (Jump List)',
        'HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FeatureUsage\\ShowJumpView')}
      ${regCard('AppSwitched', 'История переключения активных окон через Alt + Tab',
        'HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FeatureUsage\\AppSwitched')}
      ${regCard('OpenWithList', 'Список программ, использовавшихся для открытия файлов определенного расширения',
        'HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FileExts\\.расширение\\OpenWithList')}
      ${regCard('BAM', 'Активность фоновых процессов и удаленных .exe',
        'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\bam\\State\\UserSettings\\{SID}')}
      ${regCard('DiagnosedApplication', 'Список приложений с зафиксированными проблемами памяти RADAR',
        'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\RADAR\\HeapLeakDetection\\DiagnosedApplication')}
      ${regCard('TypedPaths', 'История путей, введенных вручную в адресной строке Проводника',
        'HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\TypedPaths')}
      ${regCard('RunMRU', 'История команд, введенных в диалоговое окно "Выполнить" (Win + R)',
        'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RunMRU')}
      ${regCard('OpenSavePidlMRU', 'Файлы, открывавшиеся или сохранявшиеся через диалог "Открыть / Сохранить как"',
        'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\ComDlg32\\OpenSavePidlMRU')}
      ${regCard('USBSTOR', 'Информация о подключениях всех USB-устройств и флешек',
        'HKLM\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR')}
      ${regCard('CMD Autorun', 'Команды, автоматически выполняемые при каждом запуске cmd.exe',
        'HKLM\\SOFTWARE\\Microsoft\\Command Processor\\Autorun')}
      ${regCard('StartMenuInternet', 'Список всех установленных браузеров на ПК',
        'HKEY_LOCAL_MACHINE\\SOFTWARE\\Clients\\StartMenuInternet')}
      ${regCard('WordWheelQuery', 'История поисковых запросов в строке поиска Проводника',
        'HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\WordWheelQuery')}
      ${regCard('PropertyStore', 'Список всех приложений, когда-либо воспроизводивших звук в системе',
        'HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Internet Explorer\\LowRegistry\\Audio\\PolicyConfig\\PropertyStore\\1834f0c7_0')}
    </div>
  `;

  panels['pc-cmd'] = `
    <div class="paths-cmd-grid">
      ${cmdCard('Программы, запущенные от имени Администратора',
        'Обычным программам (Telegram, Discord) не нужны права Admin - их наличие указывает на инжект или макрос.',
        `Get-CimInstance Win32_Process | Select-Object ProcessId, Name, @{Name="IsAdmin";Expression={
    $owner = $_.GetOwner()
    "$($owner.Domain)\\$($owner.User)"
}}`)}
      ${cmdCard('Активные сетевые соединения и привязанные процессы', '',
        'netstat -anob')}
      ${cmdCard('Все процессы, скрытые от стандартного диспетчера задач', '',
        'tasklist /v /fo list')}
      ${cmdCard('Исключения и карантин Windows Defender', '',
        'Get-MpPreference | Select-Object ExclusionPath, ExclusionProcess, ExclusionExtension')}
      ${cmdCard('Сторонние .dll библиотеки, загруженные в процесс javaw', '',
        `(Get-Process -Name javaw).Modules | Where-Object {$_.FileName -notlike "C:\\Windows\\*" -and $_.FileName -notlike "*java*"} | Select-Object ModuleName, FileName`)}
      ${cmdCard('Статус и время запуска ключевых системных служб', '',
        `$services = @("PcaSvc", "DPS", "DiagTrack", "SysMain", "EventLog", "Dnscache")
foreach ($s in $services) {
    $procId = (Get-CimInstance Win32_Service -Filter "Name='$s'").ProcessId
    if ($procId -gt 0) {
        $proc = Get-Process -Id $procId
        [PSCustomObject]@{ Service = $s; PID = $procId; StartTime = $proc.StartTime }
    }
}`)}
      ${cmdCard('Скрытые несистемные программы, работающие в фоне без окон', '',
        `Get-Process | Where-Object { $_.MainWindowHandle -eq 0 -and $_.Path -notlike "C:\\Windows\\*" -and $_.Path -notlike "C:\\Program Files*" -and $_.Path -ne $null } | Select-Object Name, Id, StartTime, Path`)}
      ${cmdCard('История команд PowerShell', '',
        `Get-Content (Get-PSReadLineOption).HistorySavePath`)}
      ${cmdCard('Принудительное включение отключенных системных служб', '',
        `powershell Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass && powershell Invoke-Expression (Invoke-RestMethod https://raw.githubusercontent.com/praiselily/lilith-ps/refs/heads/main/Service-Enabler.ps1)`)}
      ${cmdCard('Проверка наличия VPN / Proxy соединений', '',
        `powershell -ExecutionPolicy Bypass -Command "iex (irm 'https://raw.githubusercontent.com/TeslaPros/VPNChecker/main/VPNFinder.ps1')"`)}
      ${cmdCard('MiniSS - поиск подозрительных процессов и скрытых угроз', '',
        `[Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12; & ([scriptblock]::Create((irm https://raw.githubusercontent.com/SeniorHere/MiniSS/main/MiniSS.ps1))) -NoPause`)}
    </div>
  `;

  panels['pc-eve'] = `
    <div class="paths-eve-grid">
      ${eveCard('Популярные читы в модах - поиск по точному весу .jar',
        'Поиск по базе известных точных размеров чит-файлов в байтах.',
        `size:2263|size:5266|size:6515|size:6770|size:6778|size:7016|size:7218|size:7803|size:7891|size:9327|size:10283|size:10605|size:10958|size:11554|size:16541|size:17308|size:17339|size:18180|size:18527|size:18587|size:18734|size:19266|size:20578|size:20583|size:20639|size:20883|size:21161|size:21234|size:21664|size:22036|size:22861|size:26247|size:27546|size:27809|size:28084|size:28439|size:29304|size:29567|size:30279|size:31549|size:31607|size:34449|size:34669|size:35971|size:35993|size:38149|size:39017|size:39321|size:40142|size:42782|size:47159|size:48242|size:50828|size:51212|size:52426|size:54088|size:59381|size:62782|size:65316|size:65486|size:65765|size:66659|size:67491|size:68794|size:69757|size:72334|size:74105|size:80751|size:88896|size:95530|size:98811|size:100523|size:100799|size:101297|size:101571|size:101703|size:102297|size:102733|size:103761|size:104954|size:105623|size:105672|size:112386|size:120640|size:138417|size:143006|size:143597|size:143600|size:147329|size:147873|size:151762|size:153937|size:156722|size:156779|size:166677|size:169718|size:173698|size:183634|size:183651|size:192156|size:202720|size:257482|size:263070|size:267746|size:274865|size:300286|size:334588|size:343169|size:350629|size:409616|size:410358|size:517248|size:519731|size:532826|size:539151|size:556494|size:597406|size:636621|size:640838|size:878781|size:925493|size:1077149|size:1165063|size:1181556|size:1444714|size:1471429|size:1569093|size:1822841|size:3113569|size:3425801|size:3541075|size:3541138|size:3642292|size:3684385|size:4642998|size:5630483|size:7052171|size:7059952|size:22258750|size:25704986|size:26179274|size:26691896 *.jar`)}
      ${eveCard('Поиск по названиям читов и запрещенных клиентов',
        'Поиск файлов по именам известных чит-клиентов и запрещенных модов.',
        `impact | wurst | bleachhack | aristois | huzuni | skillclient | inertia | ares | sigma | meteor | liquidbounce | nurik | nursultan | celestial | calestial | celka | expensive | neverhook | excellent | wexside | wildclient | minced | deadcode | akrien | jigsaw | future | jessica | dreampool | norules | konas | richclient | rusherhack | thunderhack | moonhack | doomsday | nightware | ricardo | extazyy | troxill | antileak | arbuz | .akr | .wex | dauntiblyat | rename_me_please | editme | takker | fuzeclient | wisefolder | flauncher | vec.dll | USBOblivion.exe | Feather | delta | venus | baritone | spambot | CleanCut | spam_bot | inventory_walk | player_highlighter | aimbot | freecam | bedrock_breaker_mode | viaversion | double_hotbar | elytra_swap | armor_hotswap | smart_moving | chest | savesearcher | topkautobuy | topkaautobuy | tweakeroo | mob_hitbox | librarian_trade_finder | sacurachorusfind | autoattack | entity_outliner | invmove | viabackwards | viarewind | viafabric | viaforge | viaproxy | vialoader | viamcp | hitbox | elytrahack | DiamondSim | ForgeHax | clientcommands | Control-Tweaks | SwingThroughGrass | CutThrough | Haruka | NewLauncher | Blade | Hachclient | Inertia | Fluger | cortex | DoomsDay | Cortex`)}
      ${eveCard('Поиск Vec.dll по размеру и содержимому классов',
        'Сигнатурный поиск специфичной DLL по размеру и строкам внутри.',
        `size:30720 utf8content:net/minecraft/client/entity/player/ClientPlayerEntity|net/minecraft/util/math/AxisAlignedBB`)}
      ${eveCard('Поиск конфигов и папок запрещенных модов за последние 14 дней',
        'Ищет конфигурационные файлы и папки с именами запрещенных модов, изменявшихся в течение последних 14 дней.',
        `ext:.txt;.json;.toml;.yml;.cfg;.properties | folder: dm:last14days regex:(bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|crystal|optimizer|viabackwards|viaforge|viaproxy|hitbox|elytra|xaero|through|mob|auto|place|health|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass|shift[\\s_-]?tap|aim[\\s_-]?assistance|grass[\\s_-]?pas|motor[\\s_-]?assistance|player[\\s_-]?highlighter|slippery[\\s_-]?mod|entity-outliner|elytraswapperplusclient|chest[\\s_-]?esp|armor[\\s_-]?hot[\\s_-]?swap|fallen|aurora|wine[\\s_-]?launcher|sh[\\s_-]?project|trigger[\\s_-]?bot|collapse|melonity|blessed|zachot[\\s_-]?po[\\s_-]?angl[\\s_-]?8[\\s_-]?klass|creator1171|Spawner[\\s_-]?Locator)|gByl_B[K]suXhpqbS`)}
      ${eveCard('Поиск DoomsDay Client',
        'Поиск .jar файла DoomsDay по характерному размеру и содержимому.',
        `ext:jar size:6kb-15mb content:"l.png" content:"mcmod.info"`)}
    </div>
  `;

  function renderSwitcher(activeCat) {
    return cats.map(function (c) {
      return `<button class="paths-cat-btn${c.id === activeCat ? ' active' : ''}" data-cat="${c.id}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${c.icon}</svg>
        ${c.label}
      </button>`;
    }).join('');
  }

  function render() {
    var container = document.getElementById('tab-paths');
    if (!container) { setTimeout(render, 80); return; }

    var defaultCat = 'pc-reg';

    container.innerHTML = `
      <div class="paths-wrapper">
        <div class="paths-header">
          <span class="manual-eyebrow">- БЫСТРЫЙ БУФЕР ОБМЕНА -</span>
          <h1 class="manual-title">Пути реестра, скрипты и фильтры</h1>
          <p class="manual-subtitle">Все необходимые ветки Regedit, команды PowerShell и регулярные выражения Everything для мгновенного копирования в один клик.</p>
        </div>
        <div class="paths-switcher" id="paths-switcher">
          ${renderSwitcher(defaultCat)}
        </div>
        <div class="paths-content" id="paths-content">
          ${panels[defaultCat]}
        </div>
      </div>
    `;

    container.querySelectorAll('.paths-cat-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('.paths-cat-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var catId = btn.getAttribute('data-cat');
        var content = document.getElementById('paths-content');
        if (content && panels[catId]) {
          content.innerHTML = panels[catId];
          content.style.animation = 'none';
          content.offsetHeight;
          content.style.animation = '';
        }
      });
    });
  }

  render();
})();