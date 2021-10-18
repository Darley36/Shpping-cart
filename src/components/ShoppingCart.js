import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "./Constants";
import Phone from "./Phone";
import DisplayPhone from "./DisplayPhone"; // Lines of code stay the same here.

// DnD Spec
const ShoppingCartSpec = {
  drop() {
    return { name: "ShoppingCart" };
  },
};

// DnD DropTarget - collect
let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
};

class ShoppingCart extends Component {
  render() {
    <div className="shopping-cart">
      <Phone name="Test_Phone" />
    </div>;

    return connectDropTarget(
      <div className="shopping-cart" style={style}>
        {!inCart_phones.length &&
          (isActive ? "Humm, phone!" : "Drag here to order!")}
        {inCart_phones.length ? (
          <DisplayPhone displayPhones={inCart_phones} />
        ) : null}
      </div>
    );
  }
}
export default DropTarget(
  ItemTypes.PHONE,
  ShoppingCartSpec,
  collect
)(ShoppingCart);
