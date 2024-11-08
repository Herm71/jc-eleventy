---
layout: layouts/base.njk
title: Typography
eleventyNavigation:
  key: Typography
  parent: Demos
tags: demo
---
# Heading One

## Heading Two

### Heading Three

#### Heading Four

##### Heading Five

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget arcu a est congue luctus ac ut felis. Maecenas vitae felis at enim vulputate molestie sed eu diam. Nulla quis nulla imperdiet, luctus odio vitae, elementum metus. Maecenas dapibus justo eget augue lobortis, in ultrices diam feugiat. Quisque neque purus, porttitor et vulputate ac, tempor id leo. Aenean porta, neque quis volutpat molestie, erat mi pellentesque mi, eget rutrum diam neque vitae mauris. Morbi ut dolor fermentum, aliquet est eu, egestas augue. Aliquam molestie nunc nisi, ac dignissim ex gravida et. Nullam placerat pharetra nulla vitae interdum. Maecenas pharetra arcu rutrum ex ornare, vitae rhoncus justo auctor. Nullam purus felis, rutrum sed malesuada vitae, placerat quis ipsum. Sed sed ornare nibh. Praesent ac mi vitae arcu tincidunt pellentesque ac et purus. Aenean viverra, est in semper posuere, nulla erat luctus justo, id dignissim felis ante eget orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

###### Block Quote

> Vivamus quis enim laoreet, interdum lacus nec, lacinia magna. Sed a sagittis felis. In vel lacus quis nibh elementum faucibus. Etiam facilisis, arcu vel ultrices pharetra, lectus sapien congue erat, quis laoreet enim nunc convallis nibh.

Vivamus quis enim laoreet, interdum lacus nec, lacinia magna. Sed a sagittis felis. In vel lacus quis nibh elementum faucibus. Etiam facilisis, arcu vel ultrices pharetra, lectus sapien congue erat, quis laoreet enim nunc convallis nibh. Vivamus ullamcorper, augue sit amet semper pretium, mauris ligula accumsan enim, et porta lorem justo sed quam. Duis massa nibh, interdum in interdum id, ultrices vel ante. Etiam a mi id ipsum porta viverra. Curabitur fringilla ipsum ac est porta vestibulum. Duis tempus, felis volutpat sagittis semper, arcu nisl eleifend sem, ac interdum risus arcu feugiat tortor. Proin viverra faucibus dolor a faucibus. Vivamus augue turpis, pulvinar nec orci vel, porta ultrices massa. Morbi et dignissim ante, id consectetur sem. Proin nec feugiat nisl, eu ullamcorper tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut id libero feugiat, tincidunt nunc vitae, facilisis velit. Sed molestie urna id lorem blandit, in suscipit nibh tristique.

Sed et tincidunt nunc. Proin feugiat mattis sem, nec ultrices mauris. Phasellus vitae dapibus dolor. Etiam lobortis, erat nec elementum dapibus, arcu lacus ultrices lectus, vitae finibus nunc odio et nulla. Donec tempor, ante at hendrerit pharetra, lectus nisl rhoncus erat, eu sodales neque purus sed enim. Praesent semper, diam non convallis egestas, augue nunc accumsan massa, sit amet dignissim massa lorem sit amet turpis. Integer tempor hendrerit lacus tincidunt semper. Nam gravida feugiat tellus at semper. Quisque eget pulvinar lacus,

## Code

### Styled (with Syntax)

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

```js
// this is a command
function myCommand() {
 let counter = 0;
 counter++;
}

// Test with a line break above this line.
console.log('Test');
```

### Unstyled

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

```
// this is a command
function myCommand() {
 let counter = 0;
 counter++;
}

// Test with a line break above this line.
console.log('Test');
```

### Random test

{% for item in random | randomPost %}
 <li>{{item.quote}}</li>
{% endfor %}
