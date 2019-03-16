import React from 'react';
import ReactDOM from 'react-dom';
import TextOpen from 'text-open';
import 'text-open/assets/index.less';

ReactDOM.render(
  <div>
    <div style={{ margin: '20px 20px 20px' }}>
      <TextOpen showText="鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响，被誉为“二十世纪东亚文化地图上占最大领土的作家”。鲁迅一生在文学创作、文学批评、思想研究、文学史研究、翻译、美术理论引进、基础科学介绍和古籍校勘与研究等多个领域具有重大贡献。他对于五四运动以后的中国社会思想文化发展具有重大影响，蜚声世界文坛，尤其在韩国、日本思想文化领域有极其重要的地位和影响"
        openText="展开"
        collapseText="收起"
        lineMax={35}
        contentStyle={{color: "#000", fontSize: 20}}
        operationStyle={{color: "#7c5dc7"}}/>
    </div>
    <div style={{ margin: '20px 20px 20px' }}>
      <TextOpen showText="Meghan Markle's beautiful baby shower that Serena Williams hosted for her in New York City will not be her only. At the time of the shower, reports came out that Meghan would have a smaller celebration back in the United Kingdom.There is still going to be some sort of private baby-centric event for Meghan’s UK people, and Kate will host,” a royal insider told the outlet. "
        openText="open"
        collapseText="close"
        lineMax={60}
        operationStyle={{color: "#7c5dc7"}}/>
    </div>
  </div>,
  document.getElementById('__react-content'),
);