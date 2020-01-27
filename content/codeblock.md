---
title: "Syntax Highlighting"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---
import Collapsible from 'react-collapsible';

The following is a code block with JavaScript language syntax highlighting.

```javascript
import React from 'react';

function getName(user) {
  let name = user.name;
  if (name === null) {
  	name = perform 'ask_name';  }
  return name;
}

function makeFriends(user1, user2) {
  user1.friendNames.push(getName(user2));
  user2.friendNames.push(getName(user1));
}

const arya = { name: null, friendNames: [] };
const gendry = { name: 'Gendry', friendNames: [] };
try {
  makeFriends(arya, gendry);
} handle (effect) {
  if (effect === 'ask_name') {  	resume with 'Arya Stark';  }}

```

Supports multiple languages.

The following is a code block with diff. Lines with `+` highlighted in green shade indicating an addition. Lines with `-` highlighted in red shade indicating a deletion.

```javascript
- const data = ['1','2'];
+ const data = [1,2];
```

## Live Editing example

```javascript react-live=true
<button className={'btn btn-default'}>Change my text</button>
```


<Collapsible trigger="😤 Start here" transitionTime="135">
    <p>This is the collapsible content. It can be any element or React component you like.</p>
    <pre>
    var x = 123;
    </pre>
    <p>It can even be another Collapsible component. Check out the next section!</p>
</Collapsible>
