import React, { FC } from "react";
import List from "@material-ui/core/List";
import { useDispatch, useSelector } from "react-redux";
import ListItemComponent from "./components/ListItem";
import { useStyles } from "./styles";
import { State } from "../../store/types";
import { removeProduct } from "../ProductContainer/actions";

const ListContainer: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { items } = useSelector((state: State) => state.products);
  const { rate, currency } = useSelector((state: State) => state.rates);
  const convertedPrice = (price: number) => +(price / rate).toFixed(2);
  const handleDelete = (date: number) => dispatch(removeProduct(date));
  return (
    <>
      {items.length ? (
        <List className={classes.root}>
          {items.map(({ name, price, date }) => (
            <ListItemComponent
              date={date}
              key={date}
              name={name}
              currency={currency}
              price={convertedPrice(price)}
              onDelete={handleDelete}
            />
          ))}
        </List>
      ) : (
        "Please add products"
      )}
    </>
  );
};

export default ListContainer;
