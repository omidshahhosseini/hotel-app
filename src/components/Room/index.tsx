import IconButton from "components/base/IconButton";
import Select from "components/base/Select";
import Counter from "components/Counter";
import { Row, RoomBox, SelectContainer, ChildContainer } from "styled";
import { ReactComponent as DeleteIcon } from "assets/images/svg-icons/delete.svg";
import { ROOMS } from "constants/rooms";
import { RemoveButton, RoomHeader } from "./styled";
import { MouseEventHandler } from "react";

type RoomType = {
  adults: number;
  children: Array<number | undefined>;
};

export type RoomPropTypes = {
  onChange: Function;
  onRemove: MouseEventHandler<HTMLButtonElement>;
  number: number;
  roomInfo: RoomType;
};

export default function Room({
  roomInfo,
  onChange,
  onRemove,
  number,
}: RoomPropTypes) {
  const { MAX_ADULTS, MIN_ADULTS, MAX_PEOPLE } = ROOMS;

  const handleAdultCounts = (value: number) => {
    onChange({ ...roomInfo, adults: value });
  };

  const increaseChildrenCounts = () => {
    onChange({ ...roomInfo, children: [...roomInfo.children, ""] });
  };

  const decreaseChildrenCounts = () => {
    const { children } = roomInfo;
    children.pop();
    onChange({ ...roomInfo, children: [...children] });
  };

  const deleteChild = (index: number) => {
    roomInfo.children.splice(index, 1);
    onChange(roomInfo);
  };

  const childrenItem = (data: any, index: number) => (
    <Row key={index}>
      <span>Child {index + 1} age</span>
      <SelectContainer>
        <Select
          onChange={(e: any) => {
            const { value } = e.target;
            if (value !== "") roomInfo.children[index] = value;
            else roomInfo.children[index] = undefined;
            onChange(roomInfo);
          }}
          defaultValue={roomInfo?.children?.[index]}
        />
        <IconButton
          icon={<DeleteIcon />}
          onClick={() => deleteChild(index)}
          variant="transparent"
        />
      </SelectContainer>
    </Row>
  );

  const roomIsFull = roomInfo.adults + roomInfo.children?.length >= MAX_PEOPLE;

  return (
    <RoomBox>
      <RoomHeader>
        <h4>Room {number}</h4>
        {number > 1 && (
          <RemoveButton onClick={onRemove}>Remove room</RemoveButton>
        )}
      </RoomHeader>
      <Row>
        <span>Adults</span>
        <Counter
          value={roomInfo.adults}
          increase={() => handleAdultCounts(roomInfo.adults + 1)}
          decrease={() => handleAdultCounts(roomInfo.adults - 1)}
          decrease_disabled={roomInfo.adults === MIN_ADULTS ? true : false}
          increase_disabled={
            roomInfo.adults === MAX_ADULTS || roomIsFull ? true : false
          }
        />
      </Row>
      <Row>
        <span>Children</span>
        <Counter
          value={roomInfo.children?.length}
          increase={() => increaseChildrenCounts()}
          decrease={() => decreaseChildrenCounts()}
          increase_disabled={roomIsFull}
        />
      </Row>
      <ChildContainer>
        {roomInfo.children?.length ? roomInfo.children.map(childrenItem) : null}
      </ChildContainer>
    </RoomBox>
  );
}
