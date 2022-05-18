import React from 'react';
import './accordeonlist.scss';

export default function InputAccordeon({ items }) {
  return (
    <div {...{ className: 'wrapper' }}>
      <ul {...{ className: 'accordion-list' }}>
        {items.map((item, key) => {
          return (
            <li {...{ className: 'accordion-list__item', key }}>
              <AccordionItem {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AccordionItem(props) {
  const [opened, setOpened] = React.useState(false);
  const { title, text } = props;
  return (
    <div
      {...{
        className: `accordion-item, ${opened && 'accordion-item--opened'}`,
        onClick: () => {
          setOpened((prev) => !prev);
        },
      }}>
      <div {...{ className: 'accordion-item__line' }}>
        <h3 {...{ className: 'accordion-item__title' }}>{title}</h3>
        <span {...{ className: 'accordion-item__icon' }} />
      </div>
      <div {...{ className: 'accordion-item__inner' }}>
        <div {...{ className: 'accordion-item__content' }}>
          <p {...{ className: 'accordion-item__paragraph' }}>{text}</p>
        </div>
      </div>
    </div>
  );
}

// class AccordionItem extends React.Component {
//   state = {
//     opened: false,
//   };

//   render() {
//     const {
//       props: { paragraph, title },
//       state: { opened },
//     } = this;

//     return (
//       <div
//         {...{
//           className: `accordion-item, ${opened && 'accordion-item--opened'}`,
//           onClick: () => {
//             this.setState({ opened: !opened });
//           },
//         }}>
//         <div {...{ className: 'accordion-item__line' }}>
//           <h3 {...{ className: 'accordion-item__title' }}>{title}</h3>
//           <span {...{ className: 'accordion-item__icon' }} />
//         </div>
//         <div {...{ className: 'accordion-item__inner' }}>
//           <div {...{ className: 'accordion-item__content' }}>
//             <p {...{ className: 'accordion-item__paragraph' }}>{paragraph}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Accordion />, document.getElementById('app'));
