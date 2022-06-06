import React, {useMemo} from 'react'
import { Loader } from '../../Loading';
import './tabs.css'

export default function Tabs(props) {
  const items = props.items || [];
  const [selectedIndex, setSelectedIndex] = React.useState(props.selected || 0);
  // const [selectedItem, setSelectedItem] = React.useState({});

  const selectedItem = useMemo(() => items[selectedIndex], [selectedIndex, items]);

return (<>
    {(items && items.length > 0) 
      ? (
        <div className="tabs">
          <ul className="tabLinks">
            {items.map((item, index) => (
              <li 
                key={index} 
                className={`tabLink${index === selectedIndex ? ' active' : ''}`}
                onClick={() => setSelectedIndex(index)}
              >{item.title}
              </li>
            ))}
          </ul>
          <TabContent item={selectedItem} />
        </div>
      )
    : <Loader title="Ждите..." />
  }
    </>
  )
}

function TabContent({item}) {
  const Component = item ? item.component : null;
  return (<div className="tabContent">
    {Component && <Component /> }
    </div>
  );
}
