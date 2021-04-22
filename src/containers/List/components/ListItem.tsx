import React, { FC } from "react";
import {
  ListItem,
  ListItemText,
  Button,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import { ListItemTypes } from "./types";
import moment from "moment";

const ListItemComponent: FC<ListItemTypes> = ({
  name,
  price,
  date,
  currency,
  onDelete,
}) => {
  const handleDelete = () => onDelete(date);
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <div>
        <ListItemText primary={name} secondary={`${price} ${currency}`} />
        <ListItemText primary={moment(date).format("YYYY-MM-DD HH:mm")} />

        <Button onClick={handleDelete} variant="contained" color="secondary">
          Delete
        </Button>
      </div>
    </ListItem>
  );
};

export default ListItemComponent;
