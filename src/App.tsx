import { ReactComponent as PlusIcon } from "assets/images/svg-icons/plus.svg";
import Button from "components/base/Button";
import Modal from "components/base/Modal";
import Room from "components/Room";
import { ROOMS } from "constants/rooms";
import { useState } from "react";
import {
  Ineer,
  Wrapper,
  CloseButtonBox,
  ModalTitleBox,
  ModalHeaderTitle,
} from "styled";
import { roomSerializer } from "utils/room";
import IconButton from "components/base/IconButton";
import { ReactComponent as CloseIcon } from "assets/images/svg-icons/close.svg";
import { ReactComponent as SearchIcon } from "assets/images/svg-icons/search.svg";

function App() {
  const { MAX_ROOMS, MIN_ADULTS } = ROOMS;
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([
    {
      adults: MIN_ADULTS,
      children: [],
    },
  ]);

  const removeRoomHandler = (index: number) => {
    rooms.splice(index, 1);
    setRooms([...rooms]);
  };

  const getAllRoomsAndGuest = () => {
    return rooms.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.adults;
    }, 0);
  };

  const updateRooms = () => {
    const serializedRooms = roomSerializer(rooms);
    sessionStorage.setItem("rooms", serializedRooms);
    alert("Rooms updated.");
  };

  return (
    <Wrapper>
      <Ineer>
        <Modal show={showModal}>
          <Modal.Header>
            <CloseButtonBox>
              <IconButton
                icon={<CloseIcon />}
                onClick={() => setShowModal(false)}
                variant="transparent"
              />
            </CloseButtonBox>
            <ModalTitleBox>
              <ModalHeaderTitle>Rooms & Guests</ModalHeaderTitle>
            </ModalTitleBox>
          </Modal.Header>
          <Modal.Body>
            {rooms.map((i, index) => (
              <Room
                key={JSON.stringify(rooms[index]) + index}
                number={index + 1}
                onChange={(roomInfo: any) => {
                  rooms[index] = roomInfo;
                  setRooms([...rooms]);
                }}
                onRemove={() => removeRoomHandler(index)}
                roomInfo={rooms[index]}
              />
            ))}
            {rooms.length < MAX_ROOMS && (
              <Button
                text="Add Room"
                startIcon={<PlusIcon style={{ marginRight: 5 }} />}
                onClick={() => {
                  rooms.push({
                    adults: 1,
                    children: [],
                  });
                  setRooms([...rooms]);
                }}
                variant="outlined"
              />
            )}
          </Modal.Body>

          <Modal.Action>
            <Button
              text={`Search ${
                rooms.length
              } rooms • ${getAllRoomsAndGuest()} guests`}
              startIcon={<SearchIcon style={{ marginRight: 5 }} />}
              onClick={() => updateRooms()}
            />
          </Modal.Action>
        </Modal>
        <Button
          text="Add Room"
          startIcon={<PlusIcon style={{ marginRight: 5 }} />}
          onClick={() => setShowModal(true)}
          variant="outlined"
        />
      </Ineer>
    </Wrapper>
  );
}

export default App;
