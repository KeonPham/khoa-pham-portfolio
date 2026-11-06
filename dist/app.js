(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const paragraphs = text => String(text || '').split(/\n\s*\n/).filter(Boolean).map(p => '<p>' + escapeHTML(p).replace(/\n/g, '<br>') + '</p>').join('');
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const projectMap = new Map(projects.map(project => [project.id, project]));
  const themes = {all:'All work',agents:'AI Agents',vision:'Computer Vision',engineering:'Data Engineering',ml:'Machine Learning',analytics:'Analytics'};
  const tabNames = ['profile','stories','projects','cv','credentials'];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const localAsset = src => typeof src === 'string' && /^assets\/[a-zA-Z0-9_./% -]+$/.test(src) && !src.includes('..') ? src : '';
  const sourceURL = value => {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : ''; }
    catch { return ''; }
  };
  const stories = {
  "learning": {
    "title": "What a master’s degree taught me about learning.",
    "label": "Learning & resilience",
    "image": "assets/ait-graduation-linkedin.jpg",
    "alt": "Khoa at his Asian Institute of Technology graduation",
    "lead": "A 3.94 GPA tells only part of the story. The harder lessons came from the work behind it.",
    "engagement": {
      "reactions": 88,
      "comments": 23
    },
    "sections": [
      {
        "title": "Understanding under pressure",
        "body": "At AIT, learning meant weekly assignments, presentations, substantial reports and coding projects. Exams moved between handwritten code, data architecture, live debugging and research proposals. Knowing a definition was not enough; I had to explain and apply it."
      },
      {
        "title": "Choosing the difficult subject",
        "body": "Computer Vision was my B+ subject. I chose it for my thesis because the setback showed me where I wanted to go deeper. The experience reinforced a practical habit: study consistently, start early and connect theory with implementation."
      },
      {
        "title": "What stayed with me",
        "body": "The strongest lessons were perseverance, communication and responsibility for how data is used. I later graduated in December 2025 with a 3.94/4.00 GPA and an Excellent project examination result."
      }
    ],
    "discussion": "Readers responded to the effort behind the grades. Gavin Pathross highlighted perseverance, communication and ethics; other comments recognized consistency and encouraged the next stage of learning.",
    "sources": [
      {
        "label": "Original post & reader comments",
        "url": "https://www.linkedin.com/posts/khoapnt_my-masters-journey-at-asian-institute-of-activity-7389839556889587712-EK7n"
      },
      {
        "label": "Graduation follow-up",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7407202277469483008/"
      }
    ]
  },
  "transition": {
    "title": "From geology to data: the Moneyball moment.",
    "label": "Career transition",
    "image": "assets/khoa-ai-center.webp",
    "alt": "Khoa standing outside the AI Center",
    "lead": "A film about baseball changed how I thought about the data I was already working with.",
    "engagement": {
      "reactions": 32,
      "comments": 2,
      "sourceLabel": "Moneyball article"
    },
    "sections": [
      {
        "title": "Seeing value in a different way",
        "body": "My first career was in petroleum geology and field engineering. Working with drilling data made me curious about what the measurements could reveal. Moneyball gave that curiosity a direction: overlooked evidence could change a decision, even in an established industry."
      },
      {
        "title": "Building a new foundation",
        "body": "I started with SQL, Python, DataCamp and small Power BI and Power Query projects. The transition led to Airbus Skywise work at FPT Software, then predictive models, dashboards and manufacturing analytics at HEINEKEN."
      },
      {
        "title": "Making the insight useful",
        "body": "The work also required explaining pipelines and analytical results to people from other functions. The lesson I carried forward was to connect data with the decision it could improve—and keep learning as the questions changed."
      }
    ],
    "discussion": "In the Moneyball article’s comments, one reader from an oil-field background said the article inspired them. Another asked for more writing—a reminder that sharing the transition can help someone considering their own.",
    "sources": [
      {
        "label": "Career transition — original LinkedIn post",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7375437969115107328/"
      },
      {
        "label": "Original Moneyball article & comments",
        "url": "https://www.linkedin.com/pulse/from-geology-data-analytics-lead-how-moneyball-my-pham-nguyen-thanh-8zqfc"
      }
    ]
  },
  "people": {
    "title": "From industry experience to the MBA classroom.",
    "label": "Communication & community",
    "image": "assets/rmit-speaking-linkedin.jpg",
    "alt": "Khoa sharing experience with an RMIT MBA class",
    "lead": "Guest speaking at RMIT was an opportunity to make data and AI tangible for a business audience.",
    "sections": [
      {
        "title": "Connect the technology to the work",
        "body": "In November 2025, I joined RMIT Vietnam’s MBA Digital Innovation course as a guest speaker. I shared examples from industrial IoT, oil and gas, aviation, brewery analytics and medical-AI research."
      },
      {
        "title": "Make the explanation travel",
        "body": "Those examples cross different industries, but they share a communication challenge: explain the business problem, the role of data and the practical meaning of the result. Bringing hands-on experience into the classroom is part of how I share what I learn."
      }
    ],
    "sources": [
      {
        "label": "Guest Speaker — RMIT MBA Class",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7394708697018454016/"
      }
    ]
  },
  "agents": {
    "title": "Two personal AI agents. Two real frustrations.",
    "label": "Building & product thinking",
    "image": "assets/research-radar-linkedin.jpg",
    "alt": "Research Radar workflow from Khoa’s original LinkedIn post",
    "lead": "I built Research Radar and Finance Brain for my own workflows—starting with problems I could feel.",
    "sections": [
      {
        "title": "Research Radar",
        "body": "A Telegram trigger starts a workflow that discovers and filters research, assesses papers, generates a script and media, renders a short video digest and delivers it back to Telegram. The goal was to make keeping up with research more manageable."
      },
      {
        "title": "Finance Brain",
        "body": "The second prototype extracts and normalizes documents, categorizes transactions and stores structured records in SQLite. A LangGraph ReAct agent supports natural-language questions and charts over that personal dataset."
      },
      {
        "title": "Build from the friction",
        "body": "Both were personal proofs of concept. Building for myself made the requirements concrete: I could see where the workflow helped and where it still needed work. That is a useful starting point for product discovery."
      }
    ],
    "sources": [
      {
        "label": "Original post — Research Radar & Finance Brain",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7459215570140393472/"
      }
    ]
  },
  "growth": {
    "title": "Three years. Many changes.",
    "label": "Leadership & change",
    "image": "assets/heineken-milestone-linkedin.jpg",
    "alt": "Khoa at a HEINEKEN career milestone in August 2022",
    "lead": "A three-year milestone at HEINEKEN became a reflection on adapting, growing and building with a changing team.",
    "sections": [
      {
        "title": "The team changed—and so did I",
        "body": "Looking back at the team photo from my first day, I realized I was the only original member still there after 1,095 days. Colleagues had moved on, the structure had changed and our goals had evolved. Seeing familiar faces leave was initially unsettling."
      },
      {
        "title": "Making room for new perspectives",
        "body": "New people brought different skills and fresh ideas. Restructuring also opened opportunities to grow. Through those changes, I developed capabilities I had not expected to build."
      },
      {
        "title": "What the milestone meant",
        "body": "The lesson was to appreciate the people and experiences that shaped the past while staying open to what comes next. Professional growth also comes from learning to work with new teams, adapting to new expectations and continuing to contribute through uncertainty."
      }
    ],
    "sources": [
      {
        "label": "Three Years, Many Changes! — original LinkedIn post",
        "url": "https://www.linkedin.com/posts/khoapnt_growth-change-professional-ugcPost-7359593508476768258-Qtjk/"
      }
    ]
  }
};
  const programs = [
    {title:'Data Scientist',provider:'Udacity',year:'2024',kind:'Nanodegree'},
    {title:'Introduction to Machine Learning with PyTorch',provider:'Udacity',year:'2024',kind:'Nanodegree'},
    {title:'AWS Machine Learning Engineer',provider:'Udacity',year:'2023',kind:'Nanodegree'},
    {title:'Introduction to Programming',provider:'Udacity',year:'2023',kind:'Nanodegree'},
    {title:'Data Engineering with AWS',provider:'Udacity',year:'2022',kind:'Nanodegree'},
    {title:'Data Analyst',provider:'Udacity',year:'2022',kind:'Nanodegree'},
    {title:'SQL — Basic & Intermediate',provider:'HackerRank',year:'2021',kind:'Skills certificates'},
    {title:'Practical Project Management',provider:'Atoha',year:'2023',kind:'Professional training'},
    {title:'Data Analyst with Python',provider:'DataCamp',year:'2021',kind:'Learning track'},
    {title:'SQL Fundamentals Track',provider:'DataCamp',year:'2021',kind:'Learning track'},
    {title:'Business Intelligence Program',provider:'Mastering Data Analytics',year:'2021',kind:'Learning program'},
    {title:'Customer Analytics',provider:'Wharton / University of Pennsylvania',year:'2021',kind:'Course via Coursera'}
  ];
  let route;
  let renderedProject = '';
  let renderedStory = '';
  const imageDialog = document.createElement('dialog');
  imageDialog.id = 'image-dialog';
  imageDialog.setAttribute('aria-label', 'Image detail');
  imageDialog.innerHTML = '<div class="image-dialog-toolbar"><span>Image detail</span><div><button class="quiet" data-image-size aria-pressed="false">Actual size</button><button class="primary" data-image-close>Close <span aria-hidden="true">×</span></button></div></div><div class="image-dialog-content"><img alt=""></div>';
  document.body.append(imageDialog);
  imageDialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); $('.image-dialog-content img', imageDialog).removeAttribute('src'); });
  imageDialog.addEventListener('click', event => { if (event.target === imageDialog) imageDialog.close(); });
  const projectHash = (id, theme = 'all', query = '') => {
    const params = new URLSearchParams();
    if (theme !== 'all') params.set('theme', theme);
    if (query) params.set('q', query);
    if (id) params.set('project', id);
    return '#projects' + (params.size ? '?' + params : '');
  };
  const makeHash = state => state.tab === 'projects' ? projectHash(state.project, state.theme, state.query)
    : state.tab === 'stories' && state.story ? '#stories/' + state.story
    : state.tab === 'credentials' && state.credential === 'certificates' ? '#credentials/certificates' : '#' + state.tab;
  function readRoute() {
    const hash = location.hash.slice(1);
    const [path, search = ''] = hash.split('?');
    const [first, child] = path.split('/');
    const aliases = {main:'profile',work:'projects',background:'cv',learning:'credentials',notes:'stories',contact:'profile'};
    const tab = tabNames.includes(first) ? first : aliases[first] || 'profile';
    const params = new URLSearchParams(search);
    return {
      tab, theme:Object.hasOwn(themes, params.get('theme')) ? params.get('theme') : 'all',
      query:(params.get('q') || '').slice(0, 160),
      project:projectMap.has(params.get('project')) ? params.get('project') : '',
      story:Object.hasOwn(stories, child) ? child : '',
      credential:child === 'certificates' ? 'certificates' : 'education'
    };
  }
  function navigate(state, options = {}) {
    const hash = makeHash(state);
    if (location.hash !== hash) history[options.replace ? 'replaceState' : 'pushState'](null, '', hash);
    applyRoute({focus:options.focus, scroll:options.scroll});
  }
  function updateMarker() {
    const tab = $('[data-tab][aria-selected="true"]');
    const marker = $('.tab-marker');
    if (!tab || !marker) return;
    marker.style.width = tab.offsetWidth + 'px';
    marker.style.transform = 'translateX(' + (tab.offsetLeft - 6) + 'px)';
  }
  function stopMedia() {
    if (imageDialog.open) imageDialog.close();
    $$('video').forEach(video => video.pause());
    $$('.document-card[open]').forEach(card => { card.open = false; $('.document-viewer', card)?.replaceChildren(); });
  }
  function applyRoute(options = {}) {
    const next = readRoute();
    if (route && (route.tab !== next.tab || route.project !== next.project || route.story !== next.story)) stopMedia();
    route = next;
    $$('[data-tab]').forEach(button => {
      const selected = button.dataset.tab === route.tab;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    $$('.panel').forEach(panel => { panel.hidden = panel.id !== route.tab; });
    const projectOpen = route.tab === 'projects' && Boolean(route.project);
    $('#project-reader').hidden = !projectOpen;
    $('#project-browse').hidden = projectOpen;
    $('#projects > .page-heading').hidden = projectOpen;
    $('#projects > .filters').hidden = projectOpen;
    $$('[data-filter]').forEach(button => {
      const selected = button.dataset.filter === route.theme;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    $('#project-search').value = route.query;
    if (projectOpen && renderedProject !== route.project) {
      $('#project-reader').innerHTML = renderProject(projectMap.get(route.project));
      renderedProject = route.project;
    } else if (!projectOpen) renderProjects();
    const storyOpen = route.tab === 'stories' && Boolean(route.story);
    $('#story-reader').hidden = !storyOpen;
    $('#stories > .story-grid').hidden = storyOpen;
    $('#stories > .page-heading').hidden = storyOpen;
    if (storyOpen && renderedStory !== route.story) {
      $('#story-reader').innerHTML = renderStory(stories[route.story]);
      renderedStory = route.story;
    }
    $$('[data-credential]').forEach(button => {
      const selected = button.dataset.credential === route.credential;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    $('#education').hidden = route.credential !== 'education';
    $('#certificates').hidden = route.credential !== 'certificates';
    document.title = (projectOpen ? projectMap.get(route.project).title : storyOpen ? stories[route.story].title : route.tab[0].toUpperCase() + route.tab.slice(1)) + ' — Khoa Pham';
    requestAnimationFrame(updateMarker);
    if (options.focus) {
      const target = projectOpen ? $('#case-title') : storyOpen ? $('#story-title') : $('#' + route.tab);
      if (target) { if (!target.hasAttribute('tabindex')) target.tabIndex = -1; target.focus({preventScroll:true}); }
    }
    if (options.scroll) {
      // Main tabs are complete views: keep the name and navigation visible.
      // Only detailed readers need to align below the sticky tab bar.
      if (projectOpen || storyOpen) $('#' + route.tab).scrollIntoView({behavior:motion.matches ? 'instant' : 'smooth',block:'start'});
      else window.scrollTo({top:0,left:0,behavior:'instant'});
    }
  }
  function renderProjects() {
    const query = route.query.toLocaleLowerCase();
    const matching = projects.filter(project => (route.theme === 'all' || project.category === route.theme) && (!query || [project.title,project.summary,project.context,themes[project.category],...(project.stack || [])].join(' ').toLocaleLowerCase().includes(query)));
    $('#project-count').textContent = String(projects.length).padStart(2, '0');
    $('#filter-status').textContent = matching.length + ' ' + (matching.length === 1 ? 'project' : 'projects') + (route.theme !== 'all' ? ' in ' + themes[route.theme] : '') + (query ? ' matching “' + route.query + '”' : '');
    $('#project-grid').innerHTML = matching.length ? matching.map(projectCard).join('') : '<div class="empty-state"><h3>No projects match that search.</h3><p>Try a tool such as Python, or browse the full library.</p><button class="quiet" data-clear-search>Clear filters →</button></div>';
  }
  function projectCard(project) {
    const media = (project.media || []).find(item => localAsset(item.src));
    const cover = localAsset(project.thumbnail) || media?.src;
    const tools = (project.stack || []).slice(0, 4);
    const visual = cover
      ? '<img src="' + escapeHTML(cover) + '" alt="' + escapeHTML(project.thumbnailAlt || media?.alt || project.title + ' project preview') + '" loading="lazy" decoding="async">'
      : '<div class="project-diagram" aria-label="Project tools"><span class="diagram-label">' + escapeHTML(themes[project.category] || 'Project') + '</span><div>' + (tools.length ? tools : ['Explore','Build','Learn']).map(tool => '<span>' + escapeHTML(tool) + '</span>').join('<i aria-hidden="true">→</i>') + '</div></div>';
    return '<article class="project-card"><a class="project-art" href="' + escapeHTML(projectHash(project.id, route.theme, route.query)) + '" data-project="' + escapeHTML(project.id) + '" tabindex="-1" aria-hidden="true">' + visual + '</a><div class="project-body"><p class="project-category">' + escapeHTML(themes[project.category] || 'Project') + '</p><h3><a href="' + escapeHTML(projectHash(project.id, route.theme, route.query)) + '" data-project="' + escapeHTML(project.id) + '">' + escapeHTML(project.title) + '</a></h3><p>' + escapeHTML(project.summary) + '</p><div class="stack">' + tools.map(tool => '<span>' + escapeHTML(tool) + '</span>').join('') + '</div><div class="project-foot"><span>' + escapeHTML(project.context) + '</span><a href="' + escapeHTML(projectHash(project.id, route.theme, route.query)) + '" data-project="' + escapeHTML(project.id) + '" aria-label="Read ' + escapeHTML(project.title) + '">Explore <span aria-hidden="true">↗</span></a></div></div></article>';
  }
  function gallery(items = []) {
    const images = items.filter(item => localAsset(item.src));
    return images.length ? '<div class="case-gallery">' + images.map(item => '<figure><button class="image-zoom" data-image="' + escapeHTML(item.src) + '" aria-label="Enlarge image: ' + escapeHTML(item.alt || item.caption || 'Project image') + '"><img src="' + escapeHTML(item.src) + '" alt="' + escapeHTML(item.alt || item.caption || 'Project image') + '" loading="lazy" decoding="async"><span aria-hidden="true">Enlarge ↗</span></button>' + (item.caption ? '<figcaption>' + escapeHTML(item.caption) + '</figcaption>' : '') + '</figure>').join('') + '</div>' : '';
  }
  function documentSource(doc) {
    if (doc.type === 'drive-video' && /^https:\/\/drive\.google\.com\/file\/d\/[A-Za-z0-9_-]+\/preview$/.test(doc.src)) return doc.src;
    const src = localAsset(doc.src);
    const extensions = {pdf:/\.pdf$/i,html:/\.html?$/i,video:/\.(mp4|m4v|webm|mov)$/i};
    return src && extensions[doc.type]?.test(src) ? src : '';
  }
  function documents(items = []) {
    return items.filter(doc => documentSource(doc)).map(doc => {
      const kind = {pdf:'PDF',html:'Report',video:'Video','drive-video':'Video'}[doc.type];
      const note = doc.type === 'html' ? 'Archived report. Scripts are disabled for safe reading.' : doc.type === 'drive-video' ? 'The recording loads from Google Drive only when you open this panel.' : doc.type === 'video' ? 'Play the recording here.' : 'Read the complete document below. You can also open a copy.';
      const extra = doc.type === 'drive-video' ? '' : '<a class="document-copy" href="' + escapeHTML(doc.src) + '"' + (doc.type === 'html' ? ' download' : ' target="_blank" rel="noopener"') + '>' + (doc.type === 'html' ? 'Download report' : 'Open a copy') + ' ↗</a>';
      return '<details class="document-card" data-document-type="' + escapeHTML(doc.type) + '" data-document-src="' + escapeHTML(doc.src) + '"><summary><span class="document-kind">' + kind + '</span><span>' + escapeHTML(doc.title) + '</span><span class="document-toggle" aria-hidden="true">+</span></summary><div class="document-content"><p class="document-note">' + note + '</p><div class="document-viewer"></div>' + extra + '</div></details>';
    }).join('');
  }
  function renderDemo(project) {
    const demo = project.demo;
    if (!demo || !documentSource({type:'video',src:demo.src})) return '';
    const poster = localAsset(demo.poster);
    return '<section class="case-demo" aria-labelledby="demo-title"><div class="demo-heading"><div><p class="eyebrow">PRODUCT WALKTHROUGH</p><h3 id="demo-title">' + escapeHTML(demo.title) + '</h3></div><span class="demo-duration">' + escapeHTML(demo.duration || '') + '</span></div><figure><video controls playsinline preload="none" src="' + escapeHTML(demo.src) + '"' + (poster ? ' poster="' + escapeHTML(poster) + '"' : '') + ' aria-label="' + escapeHTML(demo.title) + '">Your browser does not support embedded video. <a href="' + escapeHTML(demo.src) + '">Download the demo</a>.</video><figcaption>' + escapeHTML(demo.caption) + '</figcaption></figure></section>';
  }
  function renderDashboard(project) {
    const dashboard = project.dashboard;
    const pages = (dashboard?.pages || []).filter(page => localAsset(page.src));
    if (!pages.length) return '';
    const controls = pages.map((page, index) => '<button data-dashboard-project="' + escapeHTML(project.id) + '" data-dashboard-page="' + index + '" aria-pressed="' + (index === 0) + '">' + escapeHTML(page.label) + '</button>').join('');
    return '<section class="dashboard-section" aria-label="Power BI dashboard"><div class="dashboard-heading"><div><p class="eyebrow">POWER BI</p><h3>' + escapeHTML(dashboard.title || 'Power BI dashboard') + '</h3></div><span class="dashboard-format">PDF export</span></div><p class="dashboard-intro">' + escapeHTML(dashboard.description) + '</p><div class="dashboard-pages" role="group" aria-label="Dashboard preview pages">' + controls + '</div><div class="dashboard-stage">' + gallery([pages[0]]) + '</div><p class="dashboard-status sr-only" role="status" aria-live="polite"></p><div class="documents">' + documents(dashboard.document ? [dashboard.document] : []) + '</div></section>';
  }
  function renderProject(project) {
    const media = gallery(project.media);
    const docs = documents(project.documents);
    const sections = (project.sections || []).map(section => '<section><h3>' + escapeHTML(section.title) + '</h3>' + paragraphs(section.body) + '</section>').join('');
    const collection = (project.collection || []).map(item => '<article><h3>' + escapeHTML(item.title) + '</h3>' + paragraphs(item.body) + gallery(item.media) + documents(item.documents) + '</article>').join('');
    const sources = (project.sources || []).filter(item => sourceURL(item.url)).map(item => '<a href="' + escapeHTML(sourceURL(item.url)) + '" target="_blank" rel="noopener">' + escapeHTML(item.label) + ' ↗</a>').join('');
    return '<div class="reader-topline"><button class="quiet" data-back-projects>← Project library</button><span>' + escapeHTML(themes[project.category] || 'Project') + '</span></div><div class="case-heading"><p class="eyebrow">' + escapeHTML(project.context) + '</p><h2 id="case-title" tabindex="-1">' + escapeHTML(project.title) + '</h2><p class="case-lead">' + escapeHTML(project.summary) + '</p><div class="stack">' + (project.stack || []).map(tool => '<span>' + escapeHTML(tool) + '</span>').join('') + '</div></div>' + renderDemo(project) + renderDashboard(project) + (media ? '<section class="case-section"><p class="eyebrow">INSIDE THE PROJECT</p>' + media + '</section>' : '') + '<div class="case-narrative">' + sections + '</div>' + (collection ? '<section class="case-section"><p class="eyebrow">EXPLORE THE COLLECTION</p><div class="collection-grid">' + collection + '</div></section>' : '') + (docs ? '<section class="case-section"><h3>Read & explore</h3><p class="muted">Reports, presentations, and recordings from the work.</p><div class="documents">' + docs + '</div></section>' : '') + (sources ? '<details class="source-notes"><summary>Original sources</summary><div>' + sources + '</div></details>' : '') + '<div class="reader-end"><button class="quiet" data-back-projects>← Back to projects</button><a href="mailto:pntkhoa@gmail.com">Talk about this work ↗</a></div>';
  }
  function renderStory(story) {
    const links = story.sources.map(source => '<a href="' + escapeHTML(sourceURL(source.url)) + '" target="_blank" rel="noopener">' + escapeHTML(source.label) + ' ↗</a>').join('');
    const engagement = story.engagement ? '<p class="story-engagement">' + (story.engagement.sourceLabel ? escapeHTML(story.engagement.sourceLabel) + ' · ' : '') + story.engagement.reactions + ' reactions · ' + story.engagement.comments + ' comments <small>Indexed LinkedIn snapshot; live totals may differ.</small></p>' : '';
    const discussion = story.discussion ? '<section class="story-discussion"><h3>From the conversation</h3><p>' + escapeHTML(story.discussion) + '</p><small>Summary of public reader comments. Read the original discussion via the reference below.</small></section>' : '';
    return '<div class="reader-topline"><a class="quiet" href="#stories" data-go="stories">← All stories</a><span>' + escapeHTML(story.label) + '</span></div><div class="case-heading"><p class="eyebrow">STORIES FROM LINKEDIN</p><h2 id="story-title" tabindex="-1">' + escapeHTML(story.title) + '</h2><p class="case-lead">' + escapeHTML(story.lead) + '</p>' + engagement + '</div><figure class="story-feature"><img src="' + escapeHTML(story.image) + '" alt="' + escapeHTML(story.alt) + '" loading="lazy" decoding="async"></figure><div class="story-prose">' + story.sections.map(section => '<section><h3>' + escapeHTML(section.title) + '</h3>' + paragraphs(section.body) + '</section>').join('') + discussion + '<section class="story-references"><h3>Original posts &amp; references</h3>' + links + '</section></div><div class="reader-end"><a class="quiet" href="#stories" data-go="stories">← All stories</a><a href="#projects" data-go="projects">Explore the work ↗</a></div>';
  }
  function renderCredentials() {
    const extras = window.PORTFOLIO_CREDENTIALS || {};
    const logo = {Udacity:'assets/logos/udacity.svg',HackerRank:'assets/logos/hackerrank.svg',Atoha:'assets/logos/atoha.png'};
    const catalog = extras.programs?.length ? extras.programs : programs;
    const groupOf = item => item.group || (/management|customer analytics|business intelligence|learning how/i.test(item.title) ? 'business' : /engineering|programming|sql/i.test(item.title) ? 'engineering' : 'data-ai');
    const groups = [
      {id:'honors',title:'Honors & Awards',icon:'<circle cx="12" cy="8" r="5"/><path d="m8 12-2 9 6-3 6 3-2-9"/>'},
      {id:'data-ai',title:'Data science & AI',icon:'<circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8 3 3M5 19l3-3M16 8l3-3"/>'},
      {id:'engineering',title:'Engineering & programming',icon:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>'},
      {id:'business',title:'Business & leadership',icon:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12c5 4 13 4 18 0M12 12v5"/>'},
      {id:'language',title:'Language & communication',icon:'<path d="M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 1 1 17-5Z"/><path d="M8 9h8M8 13h5"/>'}
    ];
    $('#learning-count').textContent = String(catalog.length).padStart(2,'0');
    $('#certificate-grid').innerHTML = groups.map(group => {
      const items = catalog.filter(item => groupOf(item) === group.id);
      if (group.id === 'honors') items.sort((a,b) => (b.issuedISO || '').localeCompare(a.issuedISO || ''));
      if (!items.length) return '';
      const cards = items.map(item => {
        const providerLogo = localAsset(item.logo) || logo[item.provider];
        const initials = item.provider.split(/\s+/).map(word => word[0]).slice(0,2).join('');
        const mark = providerLogo ? '<img loading="lazy" decoding="async" src="' + escapeHTML(providerLogo) + '" alt="' + escapeHTML(item.provider) + '">' : '<span class="learning-monogram" aria-label="' + escapeHTML(item.provider) + '">' + escapeHTML(initials) + '</span>';
        const url = sourceURL(item.credentialUrl);
        const recordUrl = sourceURL(item.recordUrl);
        const preview = (item.media || []).find(m => localAsset(m.src));
        const previewButton = preview ? '<button class="learning-preview" data-image="' + escapeHTML(preview.src) + '" aria-label="View ' + (group.id === 'honors' ? 'image: ' : 'certificate: ') + escapeHTML(item.title) + '"><img loading="lazy" decoding="async" src="' + escapeHTML(preview.src) + '" alt="' + escapeHTML(preview.alt || item.title + ' certificate') + '"></button>' : '';
        const link = url ? '<a data-credential-link href="' + escapeHTML(url) + '" target="_blank" rel="noopener">Verify credential ↗</a>' : recordUrl ? '<a href="' + escapeHTML(recordUrl) + '" target="_blank" rel="noopener">' + escapeHTML(item.recordLabel || 'LinkedIn record') + ' ↗</a>' : '';
        const date = item.issued || item.year;
        return '<article class="learning-card"><div class="learning-logo">' + mark + '</div><div class="learning-copy"><h4>' + escapeHTML(item.title) + '</h4><p class="learning-provider">' + escapeHTML(item.provider) + '</p><p class="learning-meta">' + escapeHTML(item.kind) + (date ? ' · ' + escapeHTML(date) : '') + '</p>' + (item.result ? '<p class="learning-meta">' + escapeHTML(item.result) + '</p>' : '') + (item.detail ? '<p class="learning-meta">' + escapeHTML(item.detail) + '</p>' : '') + (link ? '<div class="learning-links">' + link + '</div>' : '') + '</div>' + previewButton + '</article>';
      }).join('');
      return '<section class="learning-group" aria-labelledby="learning-' + group.id + '"><header class="learning-group-heading"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + group.icon + '</svg><h3 id="learning-' + group.id + '">' + escapeHTML(group.title) + '</h3><span>' + items.length + '</span></header><div class="learning-grid">' + cards + '</div></section>';
    }).join('');
  }
  document.addEventListener('click', event => {
    const control = event.target.closest('a,button');
    if (!control || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (control.matches('.skip-link')) {
      event.preventDefault();
      const panel = $('#' + route.tab);
      panel.tabIndex = -1;
      panel.focus({preventScroll:true});
      panel.scrollIntoView({behavior:motion.matches ? 'instant' : 'smooth',block:'start'});
    } else if (control.hasAttribute('data-dashboard-page')) {
      const project = projectMap.get(control.dataset.dashboardProject);
      const pages = (project?.dashboard?.pages || []).filter(page => localAsset(page.src));
      const index = Number(control.dataset.dashboardPage);
      if (!Number.isInteger(index) || !pages[index]) return;
      const section = control.closest('.dashboard-section');
      $$('[data-dashboard-page]', section).forEach(button => button.setAttribute('aria-pressed', String(button === control)));
      $('.dashboard-stage', section).innerHTML = gallery([pages[index]]);
      $('.dashboard-status', section).textContent = pages[index].label + ' preview displayed.';
    } else if (control.dataset.image) {
      const src = localAsset(control.dataset.image);
      if (!src) return;
      const image = $('.image-dialog-content img', imageDialog);
      image.src = src;
      image.alt = $('img', control)?.alt || 'Project image';
      imageDialog.classList.remove('actual-size');
      $('[data-image-size]', imageDialog).setAttribute('aria-pressed', 'false');
      $('[data-image-size]', imageDialog).textContent = 'Actual size';
      document.body.classList.add('modal-open');
      imageDialog.showModal();
    } else if (control.hasAttribute('data-image-close')) imageDialog.close();
    else if (control.hasAttribute('data-image-size')) {
      const actual = imageDialog.classList.toggle('actual-size');
      control.setAttribute('aria-pressed', String(actual));
      control.textContent = actual ? 'Fit image' : 'Actual size';
    } else if (control.dataset.tab || control.dataset.go || control.matches('.brand')) {
      event.preventDefault();
      navigate({...route,tab:control.dataset.tab || control.dataset.go || 'profile',project:'',story:''},{scroll:true});
    } else if (control.dataset.filter) {
      event.preventDefault();
      navigate({...route,tab:'projects',theme:control.dataset.filter,project:''});
    } else if (control.dataset.project) {
      if (!projectMap.has(control.dataset.project)) return;
      event.preventDefault();
      navigate({...route,tab:'projects',project:control.dataset.project},{focus:true,scroll:true});
    } else if (control.hasAttribute('data-back-projects')) {
      event.preventDefault();
      const previous = route.project;
      navigate({...route,project:''},{scroll:true});
      const cardLink = $$('[data-project]', $('#project-grid')).find(link => link.dataset.project === previous && link.tabIndex !== -1);
      cardLink?.focus({preventScroll:true});
    } else if (control.hasAttribute('data-clear-search')) {
      navigate({...route,theme:'all',query:'',project:''});
      $('#project-search').focus();
    } else if (control.dataset.credential) {
      navigate({...route,tab:'credentials',credential:control.dataset.credential});
    } else if (control.id === 'print-cv') window.print();
  });
  document.addEventListener('keydown', event => {
    const tab = event.target.closest('[role="tab"]');
    if (!tab || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const siblings = $$('[role="tab"]', tab.closest('[role="tablist"]'));
    const offset = event.key === 'ArrowRight' ? 1 : -1;
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? siblings.length - 1 : (siblings.indexOf(tab) + offset + siblings.length) % siblings.length;
    const next = siblings[index];
    next.focus();
    next.click();
  });
  document.addEventListener('toggle', event => {
    const card = event.target;
    if (!card.matches?.('.document-card')) return;
    const viewer = $('.document-viewer', card);
    if (!card.open) { viewer.replaceChildren(); return; }
    if (viewer.childElementCount) return;
    const doc = {type:card.dataset.documentType,src:card.dataset.documentSrc};
    if (!documentSource(doc)) return;
    if (doc.type === 'video') {
      const video = document.createElement('video');
      video.src = doc.src;
      video.controls = true;
      video.preload = 'none';
      video.playsInline = true;
      viewer.append(video);
    } else {
      const frame = document.createElement('iframe');
      frame.title = $('summary', card).textContent.replace(/\+\s*$/, '').trim();
      frame.loading = 'lazy';
      frame.referrerPolicy = 'no-referrer';
      if (doc.type === 'html') frame.setAttribute('sandbox', '');
      if (doc.type === 'drive-video') frame.allowFullscreen = true;
      frame.src = doc.src;
      viewer.append(frame);
    }
  }, true);
  $('#project-search').addEventListener('input', event => navigate({...route,query:event.target.value,project:''},{replace:true}));
  $$('[data-story-card]').forEach(card => {
    const link = $('a', card);
    link.href = '#stories/' + card.dataset.storyCard;
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      navigate({...route,tab:'stories',story:card.dataset.storyCard},{focus:true,scroll:true});
    });
  });
  const medseg = projects.find(project => /medseg/i.test(project.id + ' ' + project.title));
  const researchButton = $('[data-project="medseg"]', $('#credentials'));
  if (researchButton) {
    if (medseg) researchButton.dataset.project = medseg.id;
    else { researchButton.removeAttribute('data-project'); researchButton.dataset.go = 'projects'; }
  }
  renderCredentials();
  window.addEventListener('hashchange', () => applyRoute());
  window.addEventListener('popstate', () => applyRoute());
  window.addEventListener('resize', updateMarker);
  applyRoute();
})();
