import React from 'react';

const MenuItem = (props) => {
  return (
    <div 
      className="Menu-Item"
      onClick={props.onClick}
    >
      {props.children}  
    </div>
  );
};

const Menu = (props) => {
  return (
    <div
      className="Menu-Container"
      style={{
        height: props.open ? '100vh' : 0,
      }}
    >
      {
        props.open ?
          <div className="Menu-List">
            {props.children}
          </div> : null
      }
    </div>
  );
};

const MenuButton = (props) => {
    const styles = {
      line: {
        height: '2px',
        width: '20px',
        background: 'white',
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: props.open ? 'rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: props.open ? 0 : 1,
        transform: props.open ? 'translateX(-16px)' : 'none',
      },
      lineBottom: {
        transform: props.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      },
    };

    return (
      <div
        className="Menu-Button"
        onClick={props.onClick}
      >
        <div style={{...styles.line,...styles.lineTop}} />
        <div style={{...styles.line,...styles.lineMiddle}} />
        <div style={{...styles.line,...styles.lineBottom}} />
      </div>
    );
};

export { MenuButton, Menu, MenuItem };
