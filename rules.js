(function () {

  var sections = [
    { id: 'rl-kp',       label: 'Правила КП',               icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
    { id: 'rl-check',    label: 'Правила проверки',          icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
    { id: 'rl-duties',   label: 'Обязанности модератора',    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
    { id: 'rl-disputes', label: 'Спорные ситуации',          icon: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>' },
    { id: 'rl-activity', label: 'Норма актива',              icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
  ];

  var forbidIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--red);flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`;
  var checkIcon  = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--green);flex-shrink:0;margin-top:1px;"><polyline points="20 6 9 17 4 12"/></svg>`;
  var dotIcon    = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent);flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="4"/></svg>`;

  function forbidItem(text) {
    return `<div class="rl-list-item">${forbidIcon}<span class="manual-text">${text}</span></div>`;
  }
  function checkItem(text) {
    return `<div class="rl-list-item">${checkIcon}<span class="manual-text">${text}</span></div>`;
  }
  function dotItem(text) {
    return `<div class="rl-list-item">${dotIcon}<span class="manual-text">${text}</span></div>`;
  }

  var panels = {};

  panels['rl-kp'] = `
    <div class="rl-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Правила Команды Проекта</h2>
        <p class="th-panel-sub">Обязательные требования для всех членов персонала</p>
      </div>
    </div>

    <div class="alert-danger">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <span>Нарушение любого из перечисленных пунктов влечет дисциплинарные меры вплоть до снятия с должности.</span>
    </div>

    <div class="rl-section-label">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
      Строгие запреты
    </div>
    <div class="rl-list">
      ${forbidItem('Запрещается мутить д.овнеров и медиа-партнеров проекта.')}
      ${forbidItem('Запрещается неадекватное общение с кем-либо.')}
      ${forbidItem('Запрещается любое оскорбление или унижение в чате. Никаких исключений нет - запрещено даже в шуточной форме.')}
      ${forbidItem('Запрещается продажа аккаунта на FunPay, Playerok и аналогичных площадках.')}
      ${forbidItem('Запрещается передавать свой аккаунт третьему лицу.')}
      ${forbidItem('Запрещается провоцировать, заставлять или просить игрока нарушить правила - карается варном (предупреждением).')}
      ${forbidItem('Запрещается выдавать мут за нарушения в "VoiceChat".')}
      ${forbidItem('Запрещается неадекватное общение, оскорбления или унижения в голосовом чате "VoiceChat".')}
      ${forbidItem('Запрещается выдача любых наказаний без предварительной фиксации доказательств.')}
      ${forbidItem('Запрещено наказывать игроков по причинам, которых нет в официальных правилах проекта, либо завышать или занижать сроки наказания вопреки регламенту.')}
      ${forbidItem('Запрещено размучивать или разбанивать игроков, которые были наказаны другим модератором или администратором.')}
      ${forbidItem('Запрещено закрывать глаза на нарушения своих друзей, соклановцев или знакомых.')}
      ${forbidItem('Запрещено телепортироваться к игрокам без их согласия, если это не связано напрямую с проверкой на читы или разбором жалобы.')}
      ${forbidItem('Модераторам строго запрещено хранить на ПК и использовать любые чит-клиенты.')}
      ${forbidItem('Запрещено вызывать игрока на проверку без явных признаков нечестной игры.')}
    </div>
  `;

  panels['rl-check'] = `
    <div class="rl-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Обязанности и запреты при проведении проверки</h2>
        <p class="th-panel-sub">Безопасность данных игрока и честность процедуры</p>
      </div>
    </div>

    <div class="rl-cards-grid">

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          Конфиденциальность
        </div>
        <p class="manual-text">Строго запрещено открывать у игрока <strong>Telegram, Discord, VK, WhatsApp</strong>, личные сообщения в браузере или электронную почту.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          Границы проверки
        </div>
        <p class="manual-text">Проверке подлежат исключительно игровые файлы, директории и процессы ОС, связанные с Minecraft.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
          Способ связи
        </div>
        <p class="manual-text">Проверка проводится только через демонстрацию экрана в Discord или с использованием официальных программ: <span class="mono">AnyDesk</span>, <span class="mono">RustDesk</span>, <span class="mono">RuDesktop</span>.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          Безопасность софта
        </div>
        <p class="manual-text">Модератор не имеет права передавать игроку <span class="mono">.bat</span>, <span class="mono">.cmd</span>, <span class="mono">.exe</span> файлы, самописные чекеры или архивы. Разрешено использовать только официально одобренные сервером утилиты.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
          Запрет на сторонние источники
        </div>
        <p class="manual-text">Запрещено скачивать программы для проверки с неофициальных или сторонних сайтов.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Защита системы
        </div>
        <p class="manual-text">Запрещается требовать от игрока отключить антивирус или Windows Defender.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Обязательная видеофиксация
        </div>
        <p class="manual-text">Модератор обязан вести непрерывную запись экрана с момента вызова игрока на проверку и до вынесения финального вердикта.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Тайминги
        </div>
        <p class="manual-text">Запрещено банить игрока за "уклонение от проверки", если еще не истекло установленное правилами время на отправку данных или вход в голосовой канал.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Сторонние игры
        </div>
        <p class="manual-text">Запрещено наказывать игрока за софт или читы, предназначенные для других игр, не относящихся к Minecraft.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          Срок давности
        </div>
        <p class="manual-text">Запрещено выдавать бан, если с момента чистки или удаления читов прошло больше <strong>30 дней</strong>.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
          Этика общения
        </div>
        <p class="manual-text">Запрещено троллить, оскорблять, унижать или насмехаться над игроком во время проверки.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          Присутствующие на проверке
        </div>
        <p class="manual-text">В голосовом канале могут находиться только проверяющий модератор, сам игрок и, при необходимости, старший модератор или куратор.</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
          Запрет на давление
        </div>
        <p class="manual-text">Запрещено запугивать игрока. Например: "признайся сам, иначе дам бан по IP навсегда".</p>
      </div>

      <div class="rl-rule-card rl-rule-card-purple">
        <div class="rl-rule-card-head">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Антикоррупция
        </div>
        <p class="manual-text">Категорически запрещено намекать на пропуск проверки или закрытие глаз на найденный софт за игровую валюту, донат, ресурсы или реальные деньги. Немедленное снятие с должности.</p>
      </div>

    </div>
  `;

  panels['rl-duties'] = `
    <div class="rl-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Прямые обязанности модератора на сервере</h2>
        <p class="th-panel-sub">Что обязан делать каждый модератор в процессе работы</p>
      </div>
    </div>

    <div class="rl-list">
      ${checkItem('Регулярно следить за игровым чатом и поступающими репортами (<span class="mono">/report</span>).')}
      ${checkItem('Делать четкие скриншоты или вести видеозапись перед выдачей каждого мута, кика или бана, сохраняя доказательства на установленный правилами срок (обычно от 3 дней и более).')}
      ${checkItem('Строго следовать таблице сроков наказаний - не выдавать за легкий флуд вечный мут или бан без весомой причины.')}
      ${checkItem('При выдаче наказания указывать конкретный пункт правил или понятную, корректную формулировку причины.')}
      ${checkItem('Отвечать игрокам в чате по функционалу сервера, командам и правилам, если вопрос задан адекватно.')}
      ${checkItem('Немедленно сообщать кураторам или техническим администраторам о любых уязвимостях, багах или дюпах сервера, обнаруженных лично или через игроков.')}
      ${checkItem('Запись проверки должна начинаться строго с момента вызова игрока на сервере и длиться до оглашения вердикта.')}
      ${checkItem('Мгновенно перемещаться к игрокам исключительно для рассмотрения жалоб на гриферство, читы или помеху игре.')}
      ${checkItem('Немедленно мутить спам-ботов или банить вредоносные аккаунты, использующие эксплойты и уязвимости сервера.')}
    </div>
  `;

  panels['rl-disputes'] = `
    <div class="rl-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Порядок действий при спорных ситуациях</h2>
        <p class="th-panel-sub">Алгоритмы поведения в нестандартных случаях</p>
      </div>
    </div>

    <div class="rl-dispute-cards">

      <div class="rl-dispute-card">
        <div class="rl-dispute-header">
          <div class="rl-dispute-num">01</div>
          <div class="rl-dispute-title">Игрок утверждает, что модератор неправ</div>
        </div>
        <div class="rl-dispute-body">
          <div class="rl-dispute-section rl-dispute-problem">
            <div class="rl-dispute-section-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              Ситуация
            </div>
            <p class="manual-text">Игрок в чате или голосовом канале открыто заявляет, что наказание выдано несправедливо или без оснований.</p>
          </div>
          <div class="rl-dispute-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>
          <div class="rl-dispute-section rl-dispute-solution">
            <div class="rl-dispute-section-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Решение
            </div>
            <div class="rl-list" style="gap:6px;">
              ${dotItem('Не вступать в споры и конфликты в общем чате.')}
              ${dotItem('Спокойно направить игрока на форум или в тикет-систему проекта для подачи официальной апелляции.')}
            </div>
          </div>
        </div>
      </div>

      <div class="rl-dispute-card">
        <div class="rl-dispute-header">
          <div class="rl-dispute-num">02</div>
          <div class="rl-dispute-title">Подозрение другого члена персонала в нарушениях</div>
        </div>
        <div class="rl-dispute-body">
          <div class="rl-dispute-section rl-dispute-problem">
            <div class="rl-dispute-section-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              Ситуация
            </div>
            <p class="manual-text">Модератор замечает нарушения в действиях коллеги - нечестные наказания, злоупотребление правами, предвзятость.</p>
          </div>
          <div class="rl-dispute-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>
          <div class="rl-dispute-section rl-dispute-solution">
            <div class="rl-dispute-section-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Решение
            </div>
            <div class="rl-list" style="gap:6px;">
              ${dotItem('Полный запрет на открытые конфликты и публичные разборки.')}
              ${dotItem('Зафиксировать доказательства нарушения.')}
              ${dotItem('Напрямую передать их куратору или главному администратору.')}
            </div>
          </div>
        </div>
      </div>

      <div class="rl-dispute-card">
        <div class="rl-dispute-header">
          <div class="rl-dispute-num">03</div>
          <div class="rl-dispute-title">Обнаружение критического дюпа или бага</div>
        </div>
        <div class="rl-dispute-body">
          <div class="rl-dispute-section rl-dispute-problem">
            <div class="rl-dispute-section-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              Ситуация
            </div>
            <p class="manual-text">Модератор лично обнаруживает или получает информацию о серьезном баге, дюпе или уязвимости сервера.</p>
          </div>
          <div class="rl-dispute-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>
          <div class="rl-dispute-section rl-dispute-solution">
            <div class="rl-dispute-section-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Решение
            </div>
            <div class="rl-list" style="gap:6px;">
              ${dotItem('Не тестировать баг ради личного интереса.')}
              ${dotItem('Не рассказывать о нем друзьям или игрокам.')}
              ${dotItem('Немедленно передать информацию разработчику или тех. администратору вместе с видеозаписью воспроизведения бага.')}
            </div>
          </div>
        </div>
      </div>

    </div>
  `;

  panels['rl-activity'] = `
    <div class="rl-panel-header">
      <div class="th-panel-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <div>
        <h2 class="th-panel-title">Норма актива и отчетность</h2>
        <p class="th-panel-sub">Минимальные требования к присутствию и отчетной документации</p>
      </div>
    </div>

    <div class="rl-activity-grid">
      <div class="rl-activity-card">
        <div class="rl-activity-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="rl-activity-value">2+ часа</div>
        <div class="rl-activity-label">Ежедневный онлайн</div>
        <p class="manual-text" style="font-size:12px;margin-top:6px;text-align:center;">Минимальное время присутствия на сервере каждый день. Точный норматив зависит от конкретного сервера.</p>
      </div>
      <div class="rl-activity-card">
        <div class="rl-activity-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <div class="rl-activity-value">5+ отчетов</div>
        <div class="rl-activity-label">Ежедневная отчетность</div>
        <p class="manual-text" style="font-size:12px;margin-top:6px;text-align:center;">Минимальное количество отчетов за день. Зависит от конкретного сервера и должности.</p>
      </div>
      <div class="rl-activity-card">
        <div class="rl-activity-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <div class="rl-activity-value">Заранее</div>
        <div class="rl-activity-label">Уведомление об отпуске</div>
        <p class="manual-text" style="font-size:12px;margin-top:6px;text-align:center;">При уходе в отпуск обязательно предупредить куратора или заместителя о сроках и причине.</p>
      </div>
    </div>


  `;

  function renderSidebar() {
    return sections.map(function (s, i) {
      return `<button class="th-nav-btn${i === 0 ? ' active' : ''}" data-rl="${s.id}">
        <div class="th-nav-dot"></div>
        <span class="th-nav-label">${s.label}</span>
      </button>`;
    }).join('');
  }

  function render() {
    var container = document.getElementById('tab-rules');
    if (!container) { setTimeout(render, 80); return; }

    container.innerHTML = `
      <div class="theory-wrapper">
        <div class="ghost-page-header">
          <span class="manual-eyebrow">- РЕГЛАМЕНТ ПЕРСОНАЛА -</span>
          <h1 class="manual-title">Обязанности и правила модератора</h1>
          <p class="manual-subtitle">Кодекс поведения, правила проведения проверок на читы, работа со спорными ситуациями и нормативы активности.</p>
        </div>
        <div class="theory-layout">
          <div class="theory-sidebar">
            <div class="th-sidebar-label">Разделы</div>
            ${renderSidebar()}
          </div>
          <div class="theory-detail" id="rules-detail-view">
            ${panels['rl-kp']}
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.th-nav-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('.th-nav-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var rlId = btn.getAttribute('data-rl');
        var detail = document.getElementById('rules-detail-view');
        if (detail && panels[rlId]) {
          detail.innerHTML = panels[rlId];
          detail.scrollTop = 0;
        }
      });
    });
  }

  render();
})();
