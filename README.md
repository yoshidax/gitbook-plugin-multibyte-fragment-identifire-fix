# multibyte-fragment-identifire-fix

you can write a fragment identifier as the section title by this plug-in.

**before**

your markdown:

```markdown
## foo bar  -  ふーばー
...
[foo bar  -  ふーばー](#foo bar  -  ふーばー)
```

convert to html:

```html
<h2 id="foo-bar----ふーばー">foo bar  -  ふーばー</h2>
...
<a href="#foo bar  -  ふーばー">foo bar  -  ふーばー</a>
```

of course don't work

**after**

convert to html:

```html
<h2 id="foo-bar----ふーばー">foo bar  -  ふーばー</h2>
...
<a href="#foo-bar----ふーばー">foo bar  -  ふーばー</a>
```

:thumbsup:

**notes**

When you include a close parenthesis(`)`) in the section title, when writing an identifier, please remove that.   
because it depends on regulation of a mark down, and it can't be eliminated mechanically.

## Gitbook version less than 2.5

**before**

your markdown:

```markdown
## foo bar  -  ふーばー
...
[foo bar  -  ふーばー](#foo bar  -  ふーばー)
```

convert to html:

```html
<h2 id="foo-bar-%E3%81%B5%E3%83%BC%E3%81%B0%E3%83%BC">foo bar  -  ふーばー</h2>
...
<a href="#foo bar  -  ふーばー">foo bar  -  ふーばー</a>
```

of course don't work

**after**

convert to html:

```html
<h2 id="foo-bar-%E3%81%B5%E3%83%BC%E3%81%B0%E3%83%BC">foo bar  -  ふーばー</h2>
...
<a href="#foo-bar-%E3%81%B5%E3%83%BC%E3%81%B0%E3%83%BC">foo bar  -  ふーばー</a>
```

### How to use it?

Add it to your `book.json` configuration:

```json
{
    "plugins": ["multibyte-fragment-identifire-fix"]
}
```

Install your plugins using:

```bash
$ gitbook install
```


This software is released under the MIT License, see LICENSE.txt.
