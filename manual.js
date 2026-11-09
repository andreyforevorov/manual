(function () {
  var html = `
<div class="manual-wrapper">

  <div class="manual-header">
    <span class="manual-eyebrow">- ПОШАГОВЫЙ АЛГОРИТМ -</span>
    <h1 class="manual-title">Полный мануал по проверке</h1>
    <p class="manual-subtitle">Последовательный чек-лист проверки игрока: от внутриигровых триггеров и анализа папок .minecraft до сетевой активности и профильных утилит.</p>
  </div>

  <div class="manual-stages">

    <div class="manual-stage">
      <div class="stage-label-row">
        <span class="stage-num">01</span>
        <div class="stage-title-block">
          <h2 class="stage-title">Проверка в самой игре</h2>
          <span class="stage-badge">In-Game</span>
        </div>
      </div>

      <div class="manual-cards-row">

        <div class="manual-card">
          <div class="manual-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 class="manual-card-title">Чат, клавиши и F3</h3>
          </div>
          <div class="manual-card-body">
            <p class="manual-text">Просим игрока написать в чат команды по очереди:</p>
            <div class="key-row">
              <span class="kbd">.help</span>
              <span class="kbd">.bind</span>
              <span class="kbd">.size</span>
            </div>
            <p class="manual-text">Просим нажать клавиши:</p>
            <div class="key-row">
              <span class="kbd">Правый SHIFT</span>
              <span class="kbd">INSERT</span>
            </div>
            <p class="manual-text mt-8">Нажимаем <span class="kbd">F3</span> - смотрим строку версии в левом верхнем углу. Там могут отображаться строки:</p>
            <div class="tag-row">
              <span class="cheat-tag">Impact</span>
              <span class="cheat-tag">Wurst</span>
              <span class="cheat-tag">Akrien</span>
              <span class="cheat-tag">WexSide</span>
              <span class="cheat-tag">Aristois</span>
            </div>
          </div>
        </div>

        <div class="manual-card">
          <div class="manual-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 class="manual-card-title">Настройки управления</h3>
          </div>
          <div class="manual-card-body">
            <p class="manual-text">Переходим по пути:</p>
            <div class="path-chain">
              <span class="path-node">Esc</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              <span class="path-node">Настройки</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              <span class="path-node">Управление</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              <span class="path-node">Назначение клавиш</span>
            </div>
            <p class="manual-text mt-8">Пролистываем весь список сверху вниз, изучаем категории и привязки клавиш.</p>
            <div class="alert-danger mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Если нашли категорию или бинд запрещенного мода / чита - <strong>Баним игрока</strong>.</span>
            </div>
          </div>
        </div>

        <div class="manual-card">
          <div class="manual-card-header">
            <div class="manual-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3 class="manual-card-title">Наборы ресурсов</h3>
          </div>
          <div class="manual-card-body">
            <p class="manual-text">Переходим по пути:</p>
            <div class="path-chain">
              <span class="path-node">Esc</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              <span class="path-node">Настройки</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              <span class="path-node">Наборы ресурсов</span>
            </div>
            <p class="manual-text mt-8">Проверяем установленные и доступные ресурспаки:</p>
            <ul class="manual-list mt-8">
              <li>Наличие <span class="mono">X-Ray</span> текстур</li>
              <li>Прозрачные блоки (сквозное видение)</li>
              <li>Подозрительные названия паков</li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <div class="manual-stage">
      <div class="stage-label-row">
        <span class="stage-num">02</span>
        <div class="stage-title-block">
          <h2 class="stage-title">Папка игры и файлы ПК</h2>
          <span class="stage-badge">File System</span>
        </div>
      </div>

      <div class="steps-container">

        <div class="step-block">
          <div class="step-block-num">1</div>
          <div class="step-block-content">
            <h3 class="step-block-title">Включение показа скрытых и системных файлов</h3>
            <p class="manual-text">Открываем Проводник и переходим к параметрам папок:</p>
            <div class="os-cards">
              <div class="os-card">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                <div>
                  <div class="os-name">Windows 10</div>
                  <div class="os-path">Вид -> Параметры</div>
                </div>
              </div>
              <div class="os-card">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                <div>
                  <div class="os-name">Windows 11</div>
                  <div class="os-path">Три точки (вверху) -> Параметры</div>
                </div>
              </div>
            </div>
            <p class="manual-text mt-8">В открывшемся окне - вкладка <span class="mono">Вид</span>, выставить:</p>
            <ul class="manual-list mt-8">
              <li>Снять галочку: <span class="mono">"Скрывать защищенные системные файлы (рекомендуется)"</span></li>
              <li>Поставить галочку: <span class="mono">"Показывать скрытые файлы, папки и диски"</span></li>
            </ul>
          </div>
        </div>

        <div class="step-block">
          <div class="step-block-num">2</div>
          <div class="step-block-content">
            <h3 class="step-block-title">Корневая папка <span class="mono">.minecraft</span></h3>
            <p class="manual-text">Переходим в папку <span class="mono">.minecraft</span> и осматриваем корневую директорию на наличие папок от читов или запрещенных модов.</p>
            <div class="alert-danger mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Если нашли папку / файл чита и с момента его изменения прошло меньше 30 дней - <strong>Баним игрока</strong>.</span>
            </div>
          </div>
        </div>

        <div class="step-block">
          <div class="step-block-num">3</div>
          <div class="step-block-content">
            <h3 class="step-block-title">Папка <span class="mono">versions</span> и сверка веса .jar файлов</h3>
            <p class="manual-text">Заходим в папку <span class="mono">versions</span>, просматриваем названия всех папок. Заходим внутрь каждой и проверяем имена <span class="mono">.jar</span> и <span class="mono">.json</span> файлов, затем сверяем точный вес <span class="mono">.jar</span> файла со стандартными значениями ниже.</p>
            <div class="versions-grid">
              <div class="version-pill">
                <span class="ver-name">1.16 - 1.16.1</span>
                <span class="ver-size">17 083 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.16.2 - 1.16.3</span>
                <span class="ver-size">17 096 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.16.4 - 1.16.5</span>
                <span class="ver-size">17 136 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.17</span>
                <span class="ver-size">19 079 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.17.1</span>
                <span class="ver-size">19 089 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.18</span>
                <span class="ver-size">19 569 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.18.1</span>
                <span class="ver-size">19 573 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.18.2</span>
                <span class="ver-size">19 785 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.19</span>
                <span class="ver-size">20 960 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.19.1</span>
                <span class="ver-size">21 137 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.19.2</span>
                <span class="ver-size">21 138 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.19.3</span>
                <span class="ver-size">22 173 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.19.4</span>
                <span class="ver-size">22 927 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.20</span>
                <span class="ver-size">22 489 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.20.1</span>
                <span class="ver-size">22 490 КБ</span>
              </div>
              <div class="version-pill">
                <span class="ver-name">1.20.2</span>
                <span class="ver-size">22 643 КБ</span>
              </div>
            </div>
          </div>
        </div>

        <div class="step-block">
          <div class="step-block-num">4</div>
          <div class="step-block-content">
            <h3 class="step-block-title">Папка <span class="mono">mods</span> и проверка через агрегатор</h3>
            <p class="manual-text">Заходим в папку <span class="mono">mods</span> и проверяем список файлов.</p>
            <div class="alert-danger mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Если нашли <span class="mono">.jar</span> файл с прямым названием запрещенного мода - <strong>Баним игрока</strong>.</span>
            </div>
            <div class="alert-purple mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <span>Если обнаружена подозрительная модификация - перейдите на сайт <strong>HOLYCHECK</strong> (<span class="mono">mods.holyworld.me</span>) и перетащите все моды игрока на страницу для автоматической сверки по хешам и сигнатурам.</span>
            </div>
          </div>
        </div>

        <div class="step-block">
          <div class="step-block-num">5</div>
          <div class="step-block-content">
            <h3 class="step-block-title">Папка <span class="mono">libraries</span> - скрытые библиотеки читов</h3>
            <p class="manual-text">Заходим в папку <span class="mono">libraries</span> и проверяем следующие пути:</p>
            <div class="lib-paths">
              <div class="lib-path-item">
                <div class="lib-path-chain">
                  <span class="path-node">libraries</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <span class="path-node path-target">cabaletta</span>
                </div>
                <span class="lib-note">библиотека бота Baritone</span>
              </div>
              <div class="lib-path-item">
                <div class="lib-path-chain">
                  <span class="path-node">libraries</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <span class="path-node">com</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <span class="path-node">github</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <span class="path-node path-target">ImpactDevelopment</span>
                </div>
                <span class="lib-note">клиент Impact</span>
              </div>
              <div class="lib-path-item">
                <div class="lib-path-chain">
                  <span class="path-node">libraries</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <span class="path-node">net</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <span class="path-node path-target">minecraftxray</span>
                </div>
                <span class="lib-note">X-Ray мод</span>
              </div>
              <div class="lib-path-item">
                <div class="lib-path-chain">
                  <span class="path-node">libraries</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <span class="path-node">github</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  <span class="path-node">com</span>
                </div>
                <span class="lib-note">Сторонные читы</span>
              </div>
            </div>
          </div>
        </div>

        <div class="step-block">
          <div class="step-block-num">6</div>
          <div class="step-block-content">
            <h3 class="step-block-title">Проверка <span class="mono">LabyMod</span> / <span class="mono">labymod-neo</span> и папки <span class="mono">config</span></h3>
            <p class="manual-text">Проверяем в корне <span class="mono">.minecraft</span> наличие папок <span class="mono">LabyMod</span> или <span class="mono">labymod-neo</span>. Если они есть - заходим внутрь, переходим в папку <span class="mono">addons-1.16.5</span> (или под текущую версию) и проверяем все файлы так же, как папку <span class="mono">mods</span>.</p>
            <p class="manual-text mt-8">Заходим в папку <span class="mono">config</span> и ищем остаточные конфигурационные файлы или папки от запрещенных модов.</p>
            <div class="alert-danger mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Если в <span class="mono">config</span> найдена папка / файл от запрещенного мода и дате изменения меньше 30 дней - <strong>Баним игрока</strong>.</span>
            </div>
          </div>
        </div>

        <div class="step-block">
          <div class="step-block-num">7</div>
          <div class="step-block-content">
            <h3 class="step-block-title">Пользовательские папки и Корзина</h3>
            <p class="manual-text">Просматриваем стандартные директории компьютера на наличие лоадеров, архивов и остатков читов:</p>
            <div class="dir-row">
              <span class="dir-tag">Загрузки</span>
              <span class="dir-tag">Документы</span>
              <span class="dir-tag">Видео</span>
              <span class="dir-tag">Рабочий стол</span>
            </div>
            <p class="manual-text mt-8">Если найденному остаточному файлу менее 30 дней - Баним игрока.</p>
            <p class="manual-text mt-8">Переходим в <span class="mono">Локальный диск (C:)</span>. Благодаря включенному показу системных файлов в корне диска будет видна системная папка <span class="mono">$Recycle.Bin</span>:</p>
            <div class="code-block-wrapper mt-8"><pre class="code-block">C:\$Recycle.Bin</pre><button class="copy-btn">Копировать</button></div>
            <p class="manual-text mt-8">Заходим внутрь и смотрим на дату изменения папки "Корзина" пользователя.</p>
            <div class="alert-danger mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Если корзина была очищена после вызова на проверку или менее чем за 30 минут до начала проверки - <strong>Бан за чистку</strong>.</span>
            </div>
          </div>
        </div>

        <div class="step-block">
          <div class="step-block-num">8</div>
          <div class="step-block-content">
            <h3 class="step-block-title">Быстрая проверка через <span class="kbd-inline">Win + R</span> - recent и prefetch</h3>
            <p class="manual-text">Нажимаем <span class="kbd">Win + R</span>. В открывшемся окне вводим слэш <span class="mono">/</span> и растягиваем список вниз - смотрим историю последних открытых путей. Если заметили подозрительный путь - пробиваем через <span class="mono">Everything</span>.</p>
            <p class="manual-text mt-8">Далее вводим команды по очереди и нажимаем "ОК":</p>
            <div class="cmd-row mt-4">
              <div class="code-block-wrapper"><pre class="code-block">recent</pre><button class="copy-btn">Копировать</button></div>
              <div class="code-block-wrapper"><pre class="code-block">prefetch</pre><button class="copy-btn">Копировать</button></div>
            </div>
            <div class="alert-danger mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Если нашли название запрещенного мода или чита в списках - <strong>Бан</strong>.</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="manual-stage">
      <div class="stage-label-row">
        <span class="stage-num">03</span>
        <div class="stage-title-block">
          <h2 class="stage-title">Параметры сети и Использование данных</h2>
          <span class="stage-badge">Network</span>
        </div>
      </div>

      <div class="manual-card manual-card-wide">
        <div class="manual-card-header">
          <div class="manual-card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
          </div>
          <h3 class="manual-card-title">Проверка использования данных</h3>
        </div>
        <div class="manual-card-body">
          <div class="step-list">
            <div class="step-item">
              <div class="step-num">1</div>
              <div class="step-body">Нажимаем <strong>правой кнопкой мыши</strong> по иконке "Сети / Wi-Fi / Интернета" в правом нижнем углу панели задач.</div>
            </div>
            <div class="step-item">
              <div class="step-num">2</div>
              <div class="step-body">Выбираем <strong>"Параметры сети и Интернета"</strong>. В открывшемся окне переходим в раздел <span class="mono">Использование данных</span>.</div>
            </div>
            <div class="step-item">
              <div class="step-num">3</div>
              <div class="step-body">
                <p>Внимательно просматриваем список приложений, потреблявших трафик:</p>
                <ul class="manual-list mt-8">
                  <li>Ищем прямые <span class="mono">.exe</span> файлы с названиями читов (например: <span class="mono">Nursultan.exe</span>).</li>
                  <li>Наводим курсор на процессы <span class="mono">javaw</span> - во всплывающей подсказке с полным путем часто виден запуск кастомного клиента (например, <span class="mono">Celestial</span>).</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="alert-danger mt-8">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span>Если обнаружили любой из перечисленных признаков - <strong>Баним игрока</strong>.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="manual-stage">
      <div class="stage-label-row">
        <span class="stage-num">04</span>
        <div class="stage-title-block">
          <h2 class="stage-title">Проверка через программы</h2>
          <span class="stage-badge">Software</span>
        </div>
      </div>

      <div class="manual-card manual-card-wide">
        <div class="manual-card-header">
          <div class="manual-card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          </div>
          <h3 class="manual-card-title">Переход к глубокой проверке софтом</h3>
        </div>
        <div class="manual-card-body">
          <p class="manual-text">После завершения ручного осмотра папок и сети переходите к последовательной проверке компьютера через специализированные утилиты (нажмите на программу, чтобы открыть инструкцию и фильтры к ней):</p>
          <div class="prog-grid mt-16">
            <button class="prog-card" onclick="openProgram('everything')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <span>Everything</span>
              <svg class="prog-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </button>
            <button class="prog-card" onclick="openProgram('shellbag')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              <span>ShellBag</span>
              <svg class="prog-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </button>
            <button class="prog-card" onclick="openProgram('lastactivityview')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>LastActivityView</span>
              <svg class="prog-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </button>
            <button class="prog-card" onclick="openProgram('browserdownloadsview')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>BrowserDownloadsView</span>
              <svg class="prog-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </button>
            <button class="prog-card" onclick="openProgram('processhacker')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <span>Process Hacker 2</span>
              <svg class="prog-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </button>
            <button class="prog-card" onclick="openProgram('bamparser')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <span>BAMParser</span>
              <svg class="prog-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </button>
            <button class="prog-card" onclick="openProgram('journaltrace')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              <span>JournalTrace</span>
              <svg class="prog-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
  `;

  var container = document.getElementById('tab-manual');
  if (container) {
    container.innerHTML = html;
  }
})();
