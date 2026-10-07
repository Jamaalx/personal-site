/* zz: de unde vin vizitatorii (seo-ops, /root/seo-ops/beacon/README.md).
   Fără cookie, fără ID de vizitator, fără IP. sessionStorage ține doar sursa primei pagini din tab, cât e deschis.
   1) la încărcare trimite /__zz/v pe același domeniu; jurnalul Traefik îl prinde, colectorul seo-ops îl citește
   2) la trimiterea unui formular trimite /__zz/c și pune în formular câmpul ascuns „sursa”
   3) window.zzSource() dă textul sursei, pentru formularele trimise ca JSON */
(function () {
  try {
    var w = window, d = document, l = location, ss = null;
    if (w.__zz) return; w.__zz = 1;
    try { ss = w.sessionStorage; } catch (e) {}
    var q = new URLSearchParams(l.search), ref = '';
    try { var r = d.referrer ? new URL(d.referrer) : null; if (r && r.hostname !== l.hostname) ref = r.hostname; } catch (e) {}
    var cur = { u: q.get('utm_source') || '', m: q.get('utm_medium') || '', c: q.get('utm_campaign') || '', r: ref, l: l.pathname };
    var first = null;
    try { first = JSON.parse((ss && ss.getItem('zz_src')) || 'null'); } catch (e) {}
    var isNew = !first;
    if (isNew) { first = cur; try { ss && ss.setItem('zz_src', JSON.stringify(cur)); } catch (e) {} }

    function beacon(path, o) {
      var u = path + '?' + new URLSearchParams(o).toString();
      try { if (navigator.sendBeacon && navigator.sendBeacon(u)) return; } catch (e) {}
      try { fetch(u, { method: 'POST', keepalive: true, credentials: 'omit' }); } catch (e) {}
    }
    function label(s) {
      if (s.u) return 'utm: ' + [s.u, s.m, s.c].filter(Boolean).join(' / ');
      return s.r || 'direct';
    }
    w.zzSource = function () { return label(first) + ' · intrat pe ' + first.l; };

    beacon('/__zz/v', { p: l.pathname, u: cur.u, m: cur.m, c: cur.c, r: cur.r, n: isNew ? '1' : '0' });

    d.addEventListener('submit', function (ev) {
      var f = ev.target;
      if (!f || f.tagName !== 'FORM' || f.hasAttribute('data-zz-ignore') || f.querySelector('input[type=password]')) return;
      if (!f.querySelector('input[name="sursa"]')) {
        var h = d.createElement('input'); h.type = 'hidden'; h.name = 'sursa'; h.value = w.zzSource(); f.appendChild(h);
      }
      beacon('/__zz/c', { f: f.getAttribute('data-zz') || f.id || f.getAttribute('name') || 'form', p: l.pathname,
        u: first.u, m: first.m, c: first.c, r: first.r, l: first.l });
    }, true);
    w.zzConversion = function (name) {
      beacon('/__zz/c', { f: name || 'form', p: l.pathname, u: first.u, m: first.m, c: first.c, r: first.r, l: first.l });
    };
  } catch (e) {}
})();
