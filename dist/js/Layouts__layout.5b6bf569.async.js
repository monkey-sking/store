(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '9wEh': function (e, t, n) {
      e.exports = {
        tabBarIcon: 'tabBarIcon___2UzHF',
        homeIcon: 'homeIcon___2Ufcb',
        subscribe: 'subscribe___1hRv8',
        container: 'container___1qV_u',
        'fixed-bottom': 'fixed-bottom___3SOa0',
      };
    },
    t3KT: function (e, t, n) {
      'use strict';
      n.r(t);
      n('v1HX');
      var a = n('yu99'),
        c = n('q1tI'),
        i = n.n(c),
        o = n('9kvl'),
        r = n('9wEh'),
        l = n.n(r),
        s = (e) => {
          var t = e.icon;
          return i.a.createElement('div', {
            className: ''.concat(l.a.tabBarIcon, ' ').concat(l.a[t]),
          });
        },
        m = [
          {
            title: '\u9996\u9875',
            link: '/menu',
            icon: i.a.createElement(s, { icon: 'homeIcon' }),
          },
          {
            title: '\u8ba2\u9605',
            link: '/menu/subscribe',
            icon: i.a.createElement(s, { icon: 'subscribe' }),
          },
        ],
        b = (e) => {
          var t = e.children,
            n = e.location,
            r = n.query,
            s = r.scriptable,
            b = Object(o['d'])('initialiseModel', (e) => e),
            u = b.setScriptable,
            _ = b.isScriptable;
          return (
            Object(c['useEffect'])(() => {
              !!s !== _ && u(!!s);
            }),
            i.a.createElement(
              'div',
              { className: l.a.container },
              i.a.createElement('main', null, t),
              i.a.createElement(
                'footer',
                { className: l.a['fixed-bottom'] },
                i.a.createElement(
                  a['a'],
                  {
                    unselectedTintColor: '#949494',
                    tintColor: '#33A3F4',
                    barTintColor: 'white',
                    noRenderContent: !0,
                  },
                  m.map((e) =>
                    i.a.createElement(a['a'].Item, {
                      title: e.title,
                      key: e.link,
                      icon: e.icon,
                      selectedIcon: e.icon,
                      selected: n.pathname === e.link,
                      onPress: () => {
                        n.pathname !== e.link && o['a'].push(e.link);
                      },
                    }),
                  ),
                ),
              ),
            )
          );
        };
      t['default'] = b;
    },
  },
]);
