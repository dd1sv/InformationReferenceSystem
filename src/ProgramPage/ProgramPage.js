import React from 'react';
import Tree from 'react-d3-tree';
import { useCenteredTree } from "./helpers";
import orgChartJson from "./data/org-chart.json";
// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.


export default function ProgramPage() {
  const [translate, containerRef] = useCenteredTree();
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '100%', height: '1200px' }}>
      <div style={{fontSize: '20px',fontWeight: 'bold', marginTop: '30px', textAlign: 'center'}}>На данном дереве связей отображены наиболее популярые и функцинальные сервисы и возможности для поиска информации о человеке в социальных сетях, а также его фотографиях. 
        <br></br>
        Под названием каждого сервиса, указан его URL-адресс.
      </div>
      <div style ={{fontSize: '16px', color: 'blue', marginTop: '30px', marginLeft: '25px'}}>
        Дерево связей можно приближать и отдалять, а также исползовать перемещение.
      </div>
      <Tree data={orgChartJson} 
      translate={translate} 
      orientation="vertical"
      zoom = {0.6}/>
    </div>
  );
}
// style={{transform: "translate(573.46875,334.5) scale(1)"}}