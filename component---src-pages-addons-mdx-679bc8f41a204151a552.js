(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    279: function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, '_frontmatter', function() {
          return c;
        }),
        t.d(a, 'default', function() {
          return o;
        });
      t(4), t(5), t(3), t(7), t(10), t(0);
      var n = t(51),
        s = t(183);
      var c = {},
        b = {_frontmatter: c},
        p = s.default;
      function o(e) {
        var a = e.components,
          t = (function(e, a) {
            if (null == e) return {};
            var t,
              n,
              s = {},
              c = Object.keys(e);
            for (n = 0; n < c.length; n++)
              (t = c[n]), a.indexOf(t) >= 0 || (s[t] = e[t]);
            return s;
          })(e, ['components']);
        return Object(n.b)(
          p,
          Object.assign({}, b, t, {components: a, mdxType: 'MDXLayout'}),
          Object(n.b)(
            'p',
            null,
            "Addons are external functionality added to Tippy.js that don't need to belong in\nthe core library. This means users who don't need this functionality aren't\nburdened with extra download size. By default, two useful addons are included.",
          ),
          Object(n.b)('h3', null, 'Event delegation'),
          Object(n.b)(
            'p',
            null,
            'Event delegation allows you to let a common parent element handle the creation\nof tippy instances for child elements.',
          ),
          Object(n.b)('p', null, 'This allows two things:'),
          Object(n.b)(
            'ul',
            null,
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              'It prevents the need to create new instances for new child elements appended\nto the parent.',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              'It improves performance as the creation of the tippy instances is deferred\nuntil they are triggered for the first time.',
            ),
          ),
          Object(n.b)('h4', null, 'Usage'),
          Object(n.b)(
            'p',
            null,
            'Your markup should have a structure like this example:',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(n.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'parent',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'button',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'child',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                'Text',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'button',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'button',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'child',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                'Text',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'button',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'button',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'child',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                'Text',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'button',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
              ),
            ),
          ),
          Object(n.b)(
            'p',
            null,
            'Pass a ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'targets',
            ),
            ' argument to the ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'delegate()',
            ),
            ' addon function (the same type the\n',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tippy()',
            ),
            ' function can accept) which represents the parent element(s) that\nshould act as a delegate, and a ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'target',
            ),
            ' prop representing a CSS selector that\nshould match the child elements which should receive a tippy.',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                'delegate',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'from',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'delegate',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  '#parent',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'target',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  '.child',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(n.b)(
            'p',
            null,
            "In the CDN (IIFE) version, it's available as ",
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tippy.delegate()',
            ),
          ),
          Object(n.b)('h4', null, 'Return type'),
          Object(n.b)(
            'p',
            null,
            'Because ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'delegate()',
            ),
            ' can create many different instances, it returns an opaque\nvalue depending on the type supplied, just like ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tippy()',
            ),
            '.',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'delegateInstances',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'delegate',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  '.parent',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'target',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  '.child',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Instance[]',
                ),
                '\n\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'delegateInstance',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'delegate',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'parentElement',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'target',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  '.child',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Instance',
                ),
              ),
            ),
          ),
          Object(n.b)('h4', null, 'Cleanup'),
          Object(n.b)(
            'p',
            null,
            'By default, when you destroy a delegate instance, it also destroys any child\ninstances that may have been created by it. If you want to prevent this\nbehavior, pass ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'false',
            ),
            ' as an argument:',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'delegateInstance',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'delegate',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'parentElement',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'target',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  '.child',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Prevents further creation and destroys any created child tippy instances',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'delegateInstance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'destroy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Prevents further creation only',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'delegateInstance',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'destroy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'false',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(n.b)('h4', null, 'Polyfill'),
          Object(n.b)(
            'p',
            null,
            'This addon uses ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'Element.prototype.closest()',
            ),
            ', which is not supported in older\nbrowsers. You will need to polyfill this method to get full support.',
          ),
          Object(n.b)('h3', null, 'Singleton'),
          Object(n.b)(
            'p',
            null,
            'A singleton is a single tippy element that takes the place of an array of\nregular tippy instances.',
          ),
          Object(n.b)('p', null, 'This allows two things:'),
          Object(n.b)(
            'ul',
            null,
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              'Smooth transitions of the tippy between many different reference element\ntargets',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              'Instances with a ',
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'delay',
              ),
              ' can be "grouped" such that appear to share a timeout,\nwhich greatly improves the UX for elements near each other when their tooltips\nhave a delay',
            ),
          ),
          Object(n.b)('h4', null, 'Usage'),
          Object(n.b)(
            'p',
            null,
            'Pass an ',
            Object(n.b)('strong', {parentName: 'p'}, 'array'),
            ' of tippy instances to the ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'createSingleton',
            ),
            ' addon function,\nand a ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'delay',
            ),
            ' prop:',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' tippy',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                'createSingleton',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'from',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'tippyInstances',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'singleton',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'createSingleton',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'tippyInstances',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'delay',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '1000',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(n.b)(
            'p',
            null,
            "In the CDN (IIFE) version, it's available as ",
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tippy.createSingleton()',
            ),
          ),
          Object(n.b)('h4', null, 'Smooth transitions'),
          Object(n.b)(
            'p',
            null,
            'Utilize the ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'updateDuration',
            ),
            ' prop, which is the transition duration between\nposition updates of the tippy element:',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'singleton',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'createSingleton',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'tippyInstances',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'delay',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '1000',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'updateDuration',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '500',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(n.b)(
            'p',
            null,
            'The ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'transition-timing-function',
            ),
            ' by default is ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'easeOutQuint',
            ),
            '. Usually this\nlooks nice, but you can change this (to add an inertial slingshot effect for\nexample) like so:',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'singleton',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'createSingleton',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'tippyInstances',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'updateDuration',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '500',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onCreate',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token block'},
                    ),
                    '{',
                  ),
                  'popper',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token block'},
                    ),
                    '}',
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Any easing function you want.',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'popper',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'style',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'transitionTimingFunction',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'cubic-bezier(...)',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
        );
      }
      o.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-addons-mdx-679bc8f41a204151a552.js.map