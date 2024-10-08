const TabsButton = ({ item, handleTab, currentTab }) => {
    return (
      <div className="p-1">
        <button
          className={`btn  w-100 ${
            item.id === currentTab ? "btn-primary" : "btn-outline-light"
          }`}
          onClick={() => handleTab(item.id)}
        >
          {item.btnText ? item.btnText : item.title}
        </button>
      </div>
    );
  };
  
  export default TabsButton;