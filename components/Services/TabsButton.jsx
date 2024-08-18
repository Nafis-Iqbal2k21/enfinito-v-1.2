const TabsButton = ({ item, handleTab, currentTab }) => {
    return (
      <div className="p-1">
        <button
          className={`btn  w-100 ${
            item.id === currentTab ? "btn-light" : "btn-outline-light"
          }`}
          onClick={() => handleTab(item.id)}
        >
          {item.title}
        </button>
      </div>
    );
  };
  
  export default TabsButton;