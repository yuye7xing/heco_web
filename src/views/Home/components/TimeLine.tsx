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
    <h3 className="vertical-timeline-element-title">项目创立</h3>
    <h4 className="vertical-timeline-element-subtitle">2020-12</h4>
    <p>
      项目立项
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'red', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">入场</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-08</h4>
    <p>
      提供公测入口，有白名单的地址可以参与创世挖矿
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">创世纪</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-08</h4>
    <p>
      开始创世挖矿，共分五个纪元，金、木、水、火、土，水纪元开始将取消门票限制
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'red', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">部落</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-09</h4>
    <p>
      聚合成兵，部落争雄，谁才是最后的王者
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">文明</h3>
    <h4 className="vertical-timeline-element-subtitle">2021-12</h4>
    <p>
    聚集人才，发展科技，奋勇争先，软硬实力的相互交量。胜者荣耀称王，败者流浪放逐
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
}
export default TimeLine;