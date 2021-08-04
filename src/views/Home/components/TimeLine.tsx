import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const TimeLine: React.FC = () => {
  return (
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">认购入场券</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-08-01</h4>
    <p>
      项目开放认购入场卷，预售6000张入场券，heco和OKEX各3000张，每张30USDT，认购期间购入入场券，附赠起源之水（Water）空投。
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'red', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">水纪元</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-08-10</h4>
    <p>
      宇宙初创，开始创世挖矿，持有起源之水和HT可以进行创世挖矿
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">木纪元</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-08-15</h4>
    <p>
      水生土，终于熬过艰难的水纪元，步入木纪元，开放流动性挖矿
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'red', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">土纪元</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-08-20</h4>
    <p>
      宇宙初成，足以迎接挑战，取消门票限制，欢迎广大玩家的到来
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'red', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">部落</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-09(预计)</h4>
    <p>
      五行齐聚，聚合成兵，部落争雄，角逐最后的王者
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">文明</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-12（预计）</h4>
    <p>
      部落争霸，阵营形成，是聚集人才，发展科技，还是以战养战，攻伐天下。不同的选择却总是胜者荣耀称王，败者流浪放逐
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
}
export default TimeLine;